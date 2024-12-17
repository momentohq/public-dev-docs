import React, { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import CodeBlock from '@theme/CodeBlock';

interface SchemaProperty {
  type: string;
  description?: string;
  enum?: string[];
  properties?: { [key: string]: SchemaProperty; };
  example?: any;
  required?: string[];
  items: any;
}

interface PropertyType {
  hasRefs: boolean;
  type?: string,
  types?: Ref[];
}

interface Ref {
  type: string,
  link: string;
}

interface JsonSchema {
  type: string;
  properties: {
    [key: string]: SchemaProperty;
  };
  required?: string[];
  examples?: any[];
}

interface SchemaViewProps {
  title: string;
  schema: JsonSchema;
  jsonObject: Record<string, any>;
}

const renderSchema = (schema: JsonSchema, parentKey = '') => {
  const [expandedProperties, setExpandedProperties] = useState<string[]>([]);

  const toggleExpand = (key: string) => {
    setExpandedProperties(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const renderProperty = (key: string, value: SchemaProperty, isRequired: Boolean, depth = 0) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    const isExpanded = expandedProperties.includes(fullKey);
    const hasChildren = value.type === 'object' || value.properties;
    const propType = getPropertyType(value);

    return (
      <div key={fullKey} {...stylex.props(styles.schemaItem)} style={depth > 0 ? { marginLeft: `${depth}rem` } : undefined}>
        <div>
          <span {...stylex.props(styles.propertyKey)}>{key}</span>
          {isRequired ? <span {...stylex.props(styles.requiredMarker)}>*</span> : null}
          {' '}
          {propType.hasRefs ? (
            <span {...stylex.props(styles.propertyType)}>
              {propType.type}
              {propType.types.map((type, index) => (
                <span key={type.link}>
                  <a href={type.link} {...stylex.props(styles.refType)}>{type.type}</a>
                  {index < propType.types.length - 2 ? ', ' : index === propType.types.length - 2 ? ' and ' : ''}
                </span>
              ))}
            </span>
          ) : (
            <span {...stylex.props(styles.propertyType)}>{propType.type}</span>
          )}

          {value.description && (
            <p {...stylex.props(styles.propertyDescription)}>{value.description}</p>
          )}
          {value.enum && (
            <>
              <span {...stylex.props(styles.propertyDescription)}>Allowed values: </span>
              <span {...stylex.props(styles.enumList)}>{value.enum.join(', ')}</span>
            </>
          )}
          {hasChildren && !isExpanded && (
            <button
              onClick={() => toggleExpand(fullKey)}
              {...stylex.props(styles.showObjectPropertiesButton)}
            >
              Show properties
            </button>
          )}
          {hasChildren && isExpanded && value.properties && (
            <div {...stylex.props(styles.childPropertyTable)}>
              <button onClick={() => toggleExpand(fullKey)}
                {...stylex.props(styles.hideObjectPropertiesButton)}
              >
                Hide properties
              </button>
              <div {...stylex.props(styles.nestedProperties)}>
                {Object.entries(value.properties).map(([childKey, childValue]) => {
                  const isChildRequired = value.required?.includes(childKey);
                  return renderProperty(childKey, childValue, isChildRequired, depth + 1);
                }
                )}
              </div>
            </div>
          )}
        </div>
        <hr />
      </div>
    );
  };

  if (!schema || !schema.properties || typeof schema.properties !== 'object') {
    return <div {...stylex.props(styles.error)}>Invalid schema structure</div>;
  }

  return Object.entries(schema.properties).map(([key, value]) =>
    renderProperty(key, value, schema.required?.includes(key))
  );
};

const getPropertyType: (property: SchemaProperty) => PropertyType = (property) => {
  let propType: PropertyType = { hasRefs: false, type: property.type };
  if (property.enum) {
    propType.type = 'enum';
  } else if (property.properties) {
    propType.type = 'object';
  } else if (property.items) {
    propType.type = 'array';
    if (property.items.type) {
      propType.type = `${propType.type} of ${property.items.type}s`;
    } else if (property.items.anyOf) {
      propType.hasRefs = true;
      propType.type += ' of ';
      propType.types = property.items.anyOf.map(i => { return { type: i.$ref, link: i.link }; });
    }
  }

  return propType;
};

const SchemaView: React.FC<SchemaViewProps> = ({ title, schema }) => {
  const exampleJson = generateExampleJson(schema);

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.leftColumn)}>
        <div>
          <h3>Attributes</h3>
          <hr {...stylex.props(styles.titleRule)} />
          {renderSchema(schema)}
        </div>
      </div>

      <div {...stylex.props(styles.rightColumn)}>
        <div {...stylex.props(styles.jsonBox)}>
          <CodeBlock
            title={title}
            language="json"
          >
            {JSON.stringify(exampleJson, null, 2)}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
};

const generateExampleJson = (schema: JsonSchema): Record<string, any> => {
  const result: Record<string, any> = {};
  if (schema.examples?.length > 0) {
    return schema.examples[0];
  }

  Object.entries(schema.properties).forEach(([key, value]) => {
    if (value.example !== undefined) {
      result[key] = value.example;
    } else if (value.enum && value.enum.length > 0) {
      result[key] = value.enum[0];
    } else {
      switch (value.type) {
        case 'string':
          result[key] = 'string';
          break;
        case 'number':
        case 'integer':
          result[key] = 0;
          break;
        case 'boolean':
          result[key] = false;
          break;
        case 'array':
          result[key] = [];
          break;
        case 'object':
          if (value.properties) {
            result[key] = generateExampleJson({ type: 'object', properties: value.properties });
          } else {
            result[key] = {};
          }
          break;
        default:
          result[key] = null;
      }
    }
  });

  return result;
};

export default SchemaView;

const styles = stylex.create({
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '.75rem',
  },
  titleRule: {
    marginBottom: '.75em'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping
  },
  leftColumn: {
    width: '60%',
    paddingRight: '2rem',
    '@media (max-width: 768px)': { // For mobile screens
      width: '100%',
      paddingRight: '0',
    },
  },
  rightColumn: {
    width: '40%',
    '@media (max-width: 768px)': { // For mobile screens
      width: '100%',
      marginTop: '1rem',
    },
  },
  requiredMarker: {
    color: 'var(--ifm-color-danger)',
  },
  jsonBox: {
    position: 'sticky',
    top: '1.5rem',
    paddingLeft: '1.5rem',
    borderRadius: '8px',
    '@media (max-width: 768px)': { // For mobile screens
      position: 'static', // Remove sticky positioning on mobile
      paddingLeft: '0',
    },
  },
  schemaItem: {
    marginBottom: '1rem',
  },
  propertyKey: {
    fontFamily: '"Fira Code", monospace',
    fontWeight: 'bold',
    fontSize: '1rem'
  },
  propertyType: {
    fontSize: '.8rem',
    marginLeft: '.1em',
    color: 'var(--ifm-color-primary-lightest)'
  },
  refType: {
    fontSize: '.8rem',
    marginLeft: '.1em',
    color: 'var(--ifm-color-primary-lightest)',
    textDecoration: 'underline'
  },
  propertyDescription: {
    fontSize: '0.9rem'
  },
  enumList: {
    fontSize: '0.9rem',
    fontStyle: 'italic'
  },
  nestedProperties: {
    marginTop: '.5rem',
    padding: '1rem 1rem 0 1rem',
    borderTop: '1px solid #333',
  },
  enumItem: {
    marginBottom: '0.25rem',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  showObjectPropertiesButton: {
    backgroundColor: 'transparent',
    border: '1px solid #444',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    padding: '1rem',
  },
  hideObjectPropertiesButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '.5em',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  childPropertyTable: {
    border: '1px solid #333',
    borderRadius: '8px',
    paddingTop: '.5rem',
    marginTop: '.5rem',
  }
});

