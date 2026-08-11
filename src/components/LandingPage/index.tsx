import React from 'react';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';

/**
 * The docs landing page content, rendered from the `/` doc (docs/index.mdx) so the
 * home page gets the left sidebar nav. Redesigned (T-0061) to align with the
 * four-category site IA (decision 0013): a Cloud / Self-Hosted audience fork with
 * quick links into each category's primary products. See readme/tasks/0061-notes.md.
 *
 * Layout is implemented with this component's own CSS module (not the shared
 * CardGrid/LinkCard, whose Stylex styles require a separate build-time pass).
 */
export default function LandingPage(): JSX.Element {
  return (
    <main className={styles.content}>
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
          <div className={styles.topCards}>
            <div className={`${styles.categoryCard} ${styles.categoryCardCloud}`}>
              <h2 className={styles.categoryCardTitle}>Cloud</h2>
              <p className={styles.categoryCardBlurb}>
                <Translate id="homeCloudBlurb">
                  Managed infrastructure on Momento Cloud, with no operations required.
                </Translate>
              </p>
              <Link className={styles.productCard} to="/product/cache">
                <span className={styles.productCardTitle}>Momento Cache</span>
                <span className={styles.productCardDesc}>
                  Fully managed, dedicated Valkey in the Momento Cloud. Provision isolated
                  capacity and connect with standard Valkey or Redis clients.
                </span>
              </Link>
            </div>
            <div className={`${styles.categoryCard} ${styles.categoryCardSelfHosted}`}>
              <h2 className={styles.categoryCardTitle}>Self-Hosted</h2>
              <p className={styles.categoryCardBlurb}>
                <Translate id="homeSelfHostedBlurb">
                  The Momento Valkey platform toolkit for teams running Valkey on their own
                  infrastructure.
                </Translate>
              </p>
              <Link className={styles.productCard} to="/self-hosted/valkey-operator">
                <span className={styles.productCardTitle}>Valkey Operator</span>
                <span className={styles.productCardDesc}>
                  Run Valkey on your own Kubernetes. A production-grade operator for
                  provisioning, scaling, zone-aware placement, upgrades, and monitoring.
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Other (legacy) products — full-width labeled container, 3-column inner grid */}
        <div className={styles.section}>
          <div className={`${styles.categoryCard} ${styles.categoryCardOther}`}>
            <h2 className={styles.categoryCardTitle}>Other Products</h2>
            <div className={styles.categoryCardGrid}>
              <Link className={styles.productCard} to="/cache">
                <span className={styles.productCardTitle}>Momento Cache (Serverless)</span>
                <span className={styles.productCardDesc}>The original serverless cache.</span>
              </Link>
              <Link className={styles.productCard} to="/topics">
                <span className={styles.productCardTitle}>Topics</span>
                <span className={styles.productCardDesc}>Low-latency ephemeral event bus.</span>
              </Link>
              <Link className={styles.productCard} to="/leaderboards">
                <span className={styles.productCardTitle}>Leaderboards</span>
                <span className={styles.productCardDesc}>Massive, durable sorted sets.</span>
              </Link>
              <Link className={styles.productCard} to="/functions/overview">
                <span className={styles.productCardTitle}>Functions</span>
                <span className={styles.productCardDesc}>Run WASM functions to extend routing logic.</span>
              </Link>
              <Link className={styles.productCard} to="/media-storage/overview">
                <span className={styles.productCardTitle}>Media Storage</span>
                <span className={styles.productCardDesc}>Media storage and streaming.</span>
              </Link>
              <Link className={styles.productCard} to="/objectstore/http-api">
                <span className={styles.productCardTitle}>Object Store</span>
                <span className={styles.productCardDesc}>Serverless object storage.</span>
              </Link>
              <Link className={styles.productCard} to="/cloud-linter">
                <span className={styles.productCardTitle}>Cloud Linter</span>
                <span className={styles.productCardDesc}>AWS cost and governance auditing.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
