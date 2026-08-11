import React from 'react';
import { CardGrid } from '@site/src/components/CardGrid';
import { LinkCard } from '@site/src/components/LinkCard';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

/**
 * The docs landing page content, rendered from the `/` doc (docs/index.mdx) so the
 * home page gets the left sidebar nav. Redesigned (T-0061) to align with the
 * four-category site IA (decision 0013): a Cloud / Self-Hosted audience fork with
 * quick links into each category's primary products. See readme/tasks/0061-notes.md.
 */
export default function LandingPage(): JSX.Element {
  return (
    <main className={styles.content}>
      <img className={styles.headerBackground} src="/img/acorn-grid-background.svg" alt={'acorn-grid'} />
      <div className={styles.contentContainer}>
        {/* Hero */}
        <div className={styles.headerSection}>
          <h1 className={styles.header}>
            <Translate id="homeHeroGoFaster">Go faster with Momento</Translate>
          </h1>
          <p className={styles.headerDescription}>
            <Translate id="homeHeroSubtitle">
              Momento gives you fast, simple data infrastructure — fully managed in the Momento
              Cloud, or self-hosted on your own Kubernetes with the Momento Valkey platform
              toolkit. Pick the path that fits your team and get building.
            </Translate>
          </p>
        </div>

        {/* Cloud / Self-Hosted — two labeled container cards, side by side */}
        <div className={styles.section}>
          <CardGrid>
            <div className={styles.categoryCard}>
              <h2 className={styles.categoryCardTitle}>Cloud</h2>
              <div className={styles.categoryCardInner}>
                <LinkCard
                  alignItems="center"
                  title="Momento Cache"
                  link="/product/cache"
                  description="Fully managed, dedicated Valkey in the Momento Cloud. Provision isolated capacity and connect with standard Valkey or Redis clients."
                  icon="/img/cache/momento-cache-brand-icon.svg"
                />
              </div>
            </div>
            <div className={styles.categoryCard}>
              <h2 className={styles.categoryCardTitle}>Self-Hosted</h2>
              <div className={styles.categoryCardInner}>
                <LinkCard
                  alignItems="center"
                  title="Valkey Operator"
                  link="/self-hosted/valkey-operator"
                  description="Run Valkey on your own Kubernetes. A production-grade operator for provisioning, scaling, zone-aware placement, upgrades, and monitoring."
                />
              </div>
            </div>
          </CardGrid>
        </div>

        {/* Other (legacy) products — full-width labeled container, 3-column inner grid */}
        <div className={styles.section}>
          <div className={styles.categoryCard}>
            <h2 className={styles.categoryCardTitle}>Other</h2>
            <div className={styles.categoryCardGrid}>
              <LinkCard alignItems="center" title="Momento Cache (Serverless)" link="/cache" description="The original serverless cache." />
              <LinkCard alignItems="center" title="Topics" link="/topics" description="Low-latency ephemeral event bus." />
              <LinkCard alignItems="center" title="Leaderboards" link="/leaderboards" description="Massive, durable sorted sets." />
              <LinkCard alignItems="center" title="Functions" link="/functions/overview" description="Run WASM functions to extend routing logic." />
              <LinkCard alignItems="center" title="Media Storage" link="/media-storage/overview" description="Media storage and streaming." />
              <LinkCard alignItems="center" title="Object Store" link="/objectstore/http-api" description="Serverless object storage." />
              <LinkCard alignItems="center" title="Cloud Linter" link="/cloud-linter" description="AWS cost and governance auditing." />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
