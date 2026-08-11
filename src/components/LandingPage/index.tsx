import React from 'react';
import { CardGrid } from '@site/src/components/CardGrid';
import { LinkCard } from '@site/src/components/LinkCard';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';

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

        {/* Two-audience product cards */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="homeChooseYourPath">Choose your path</Translate>
          </h2>
          <div className={styles.productWrapper}>
            <CardGrid>
              <LinkCard
                alignItems="center"
                title="Momento Cache"
                link="/product/cache"
                description="Fully managed, dedicated Valkey in the Momento Cloud. Provision isolated capacity and connect with standard Valkey or Redis clients."
                icon="/img/cache/momento-cache-brand-icon.svg"
              />
              <LinkCard
                alignItems="center"
                title="Valkey Operator"
                link="/self-hosted/valkey-operator"
                description="Run Valkey on your own Kubernetes. A production-grade operator for provisioning, scaling, zone-aware placement, upgrades, and monitoring."
              />
            </CardGrid>
          </div>
        </div>

        {/* Cloud quick links */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="homeCloudTitle">Cloud</Translate>
          </h2>
          <p className={styles.sectionLead}>
            <Translate id="homeCloudLead">
              Managed infrastructure on Momento Cloud — no operations required. Today's flagship
              is Momento Cache, available in Flex and Cluster variants.
            </Translate>
          </p>
          <div className={styles.desktopOnly}>
            <div className={styles.columns}>
              <div>
                <h2 className={styles.subsectionTitle}>Momento Cache</h2>
                <ul className={styles.columnList}>
                  <li><Link to="/product/cache/getting-started">Getting started</Link></li>
                  <li><Link to="/product/cache/concepts/provisioning-and-sizing">Concepts</Link></li>
                  <li><Link to="/product/cache/pricing">Pricing</Link></li>
                  <li><Link to="/product/cache/api-reference/capacity-pool">API reference</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Hosted quick links */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="homeSelfHostedTitle">Self-Hosted</Translate>
          </h2>
          <p className={styles.sectionLead}>
            <Translate id="homeSelfHostedLead">
              The Momento Valkey platform toolkit for teams running Valkey on their own
              infrastructure. Start with the Valkey Operator.
            </Translate>
          </p>
          <div className={styles.desktopOnly}>
            <div className={styles.columns}>
              <div>
                <h2 className={styles.subsectionTitle}>Valkey Operator</h2>
                <ul className={styles.columnList}>
                  <li><Link to="/self-hosted/valkey-operator/getting-started/quickstart">Getting started</Link></li>
                  <li><Link to="/self-hosted/valkey-operator/concepts">Concepts</Link></li>
                  <li><Link to="/self-hosted/valkey-operator/operations">Operations</Link></li>
                  <li><Link to="/self-hosted/valkey-operator/security">Security model</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Platform quick links */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="homePlatformTitle">Platform</Translate>
          </h2>
          <p className={styles.sectionLead}>
            <Translate id="homePlatformLead">
              Cross-product concerns shared across Momento services.
            </Translate>
          </p>
          <div className={styles.desktopOnly}>
            <div className={styles.columns}>
              <div>
                <ul className={styles.columnList}>
                  <li><Link to="/platform/authentication">Authentication</Link></li>
                  <li><Link to="/platform/account-management">Account management</Link></li>
                  <li><Link to="/platform/api">API</Link></li>
                </ul>
              </div>
              <div>
                <ul className={styles.columnList}>
                  <li><Link to="/platform/regions">Available regions</Link></li>
                  <li><Link to="/platform/sdks">Clients and SDKs</Link></li>
                  <li><Link to="/auth/limits">Quotas and limits</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other (legacy) products */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Translate id="homeOtherTitle">Other products</Translate>
          </h2>
          <div className={styles.productWrapper}>
            <CardGrid variant="dense">
              <LinkCard alignItems="center" title="Momento Cache (Serverless)" link="/cache" description="The original serverless cache." />
              <LinkCard alignItems="center" title="Topics" link="/topics" description="Low-latency ephemeral event bus." />
              <LinkCard alignItems="center" title="Leaderboards" link="/leaderboards" description="Massive, durable sorted sets." />
              <LinkCard alignItems="center" title="Functions" link="/functions/overview" description="Run WASM functions to extend routing logic." />
              <LinkCard alignItems="center" title="Media Storage" link="/media-storage/overview" description="Media storage and streaming." />
              <LinkCard alignItems="center" title="Object Store" link="/objectstore/http-api" description="Serverless object storage." />
              <LinkCard alignItems="center" title="Cloud Linter" link="/cloud-linter" description="AWS cost and governance auditing." />
            </CardGrid>
          </div>
        </div>
      </div>
    </main>
  );
}
