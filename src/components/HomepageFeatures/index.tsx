import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Momento Cache',
    url: '/cache',
    Svg: require('@site/static/img/cache/momento-cache-brand-icon.svg').default,
    description: (
      <>
          Accelerate your app, reduce costs, and free your developers.
      </>
    ),
  },
  {
    title: 'Momento Topics',
    url: '/topics',
    Svg: require('@site/static/img/topics/momento-topics-brand-icons.svg').default,
    description: (
      <>
        Enable real-time communication between different parts of a distributed system.
      </>
    ),
  },
  {
    title: 'Momento Vector Index',
    url: '/vector-index',
    Svg: require('@site/static/img/vector-index/momento-vector-index-brand-icon.svg').default,
    description: (
      <>
        A serverless vector index for your AI-enabled applications.
      </>
    ),
  },
  {
    title: 'Momento Leaderboards',
    url: '/leaderboards',
    Svg: require('@site/static/img/leaderboards/momento-leaderboards-2d.svg').default,
    description: (
      <>
        A serverless leaderboard service
      </>
    ),
  },
];

function Feature({title, Svg, description, url}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>

      <div className="text--center">
          <a href={url}>
            <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h2><a href={url}>{title}</a></h2>
        <p>{description}</p>
      </div>

    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
