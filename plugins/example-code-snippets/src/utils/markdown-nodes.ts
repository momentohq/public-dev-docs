/**
 * The typescript definitions for remark/unist are really useless (at least with the current dependency versions of
 * docusaurus).  So here we just create some overlapping interfaces that make it easier to write the code before
 * we cast back to unist Nodes at the end.
 */
export interface Text {
  type: 'text';
  value: string;
}

export interface TableCell {
  type: 'tableCell';
  children: [Text];
}

export interface TableRow {
  type: 'tableRow';
  children: Array<TableCell>;
}
export interface Table {
  type: 'table';
  children: Array<TableRow>;
}

export interface Paragraph {
  type: 'paragraph';
  children: [Text];
}

export interface Heading {
  type: 'heading';
  depth: number;
  children: [Text];
}

export function heading(value: string, depth: number): Heading {
  return {
    type: 'heading',
    depth: depth,
    children: [
      {
        type: 'text',
        value: value,
      },
    ],
  };
}

export function table(rows: Array<Array<string>>): Table {
  return {
    type: 'table',
    children: rows.map(r => tableRow(r)),
  };
}

export function tableRow(values: Array<string>): TableRow {
  return {
    type: 'tableRow',
    children: values.map(v => tableCell(v)),
  };
}

export function tableCell(value: string): TableCell {
  return {
    type: 'tableCell',
    children: [
      {
        type: 'text',
        value: value,
      },
    ],
  };
}
