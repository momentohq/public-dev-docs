import React, { type ReactNode } from 'react';
import { RotatingHeader } from '@site/src/components/RotatingHeader';
import { CardGrid } from '@site/src/components/CardGrid';
import { LinkCard } from '@site/src/components/LinkCard';
import styles from '@site/src/components/LandingPage/styles.module.css';

/**
 * The Momento Object Store landing page content. This used to be a standalone
 * `src/pages/objectstore.tsx` with its own <Layout>; it is now rendered from the
 * `/objectstore/overview` doc so that the page gets the left sidebar nav. The surrounding Layout is
 * supplied by the docs route.
 */
export default function ObjectStoreLandingPage(): ReactNode {
  return (
    <main className={styles.content}>
      <img className={styles.headerBackground} src="/img/acorn-grid-background.svg" alt={'acorn-grid'} />
      <div className={styles.contentContainer}>
        <RotatingHeader
          headerText="Momento Object Store is the perfect origin for"
          rotatingText={['zero-buffer rates', 'highest rung streaming', 'lowest possible error rates']}
          description="Get started with the next-gen streaming from Momento for the ultimate viewer experience"
        />
        <div className={styles.desktopOnly}>
          <div className={styles.columns}>
            <div>
              <h2>Learn</h2>
              <ul className={styles.columnList}>
                <li><a href="/objectstore/capabilities">Why Momento Object Store?</a></li>
                <li><a href="/objectstore/streaming/overview">About video streaming</a></li>
                <li><a href="/objectstore/streaming/live-streaming/glass-to-glass-latency">Reducing glass to glass latency</a></li>
                <li><a href="/objectstore/core-concepts/abr-ladder">How bitrates affect performance</a></li>
              </ul>
            </div>
            <div>
              <h2>Discover</h2>
              <ul className={styles.columnList}>
                <li><a href="/objectstore/use-cases">Popular use cases</a></li>
                <li><a href="/objectstore/performance/adaptive-bitrates/how-it-works">What is adaptive bitrate streaming?</a></li>
                <li><a href="/objectstore/performance/optimizing-delivery">Optimizing delivery performance</a></li>
              </ul>
            </div>
            <div>
              <h2>Build</h2>
              <ul className={styles.columnList}>
                <li><a href="/objectstore/streaming/live-streaming/encoding-a-live-feed">Using Momento as a live origin</a></li>
                <li><a href="/objectstore/enhancements/viewer-metrics">Track viewer metrics</a></li>
                <li><a href="/objectstore/enhancements/live-reactions">Adding live reactions to streams</a></li>
                <li><a href="/objectstore/performance/adaptive-bitrates/hls">Creating an HLS manifest</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Momento Object Store?</h2>
          <div className={styles.subsectionDetail}>
            <h2 className={styles.subsectionTitle}>A purpose-built media origin</h2>
            <p>Traditional media origins can introduce latency and inefficiencies that degrade the viewer experience. At Momento, we believe the media origin should empower seamless, high-quality delivery. That's why Momento Object Store is built on top of our cutting-edge caching and storage solutions, ensuring extremely low latency access to media content. With Momento Cache and Object Store, you get:
            </p>
            <ul>
              <li><b>Instant access to media</b> - Our lightning-fast caching layer makes sure your content is always ready to be served, eliminating delays.</li>
              <li><b>Reliability under pressure</b> - Handle peak traffic with ease, ensuring uninterrupted content delivery, even under high demand.</li>
              <li><b>Optimized for CDN delivery</b> - Momento Object Store powers CDNs with near-instant retrieval, ensuring your viewers experience smooth, buffer-free streaming.</li>
            </ul>
            <p>
              By rethinking the media origin, we're pushing the boundaries of what's possible in content delivery. Whether you're streaming at the highest quality or serving millions of requests simultaneously, Momento Object Store ensures the fastest path from origin to CDN, and from CDN to viewer.
            </p>
          </div>
          <div className={styles.columns}>
            <div className={styles.subsectionDetail}>
              <h2 className={styles.subsectionTitle}>Zero buffer rates</h2>
              <p>
                At Momento, we believe that buffering should be a thing of the past. That's why we've engineered Momento Object Store to deliver content with a zero buffer rate—the gold standard in streaming performance. By leveraging the ultra-low latency system that powers our platform, we ensure your viewers experience seamless, uninterrupted streaming, no matter the demand.
                <br /><br />
                With Momento, you can confidently deliver content at scale without compromising on quality. Zero buffer rate isn't just a feature — it's our promise to deliver the smoothest, most reliable streaming experience possible.
              </p>
            </div>
            <div className={styles.subsectionGraphic}>
              <img src="/img/landing-page-detail-graphic.png" width={300} />
            </div>
          </div>
          <h2 className={styles.subsectionTitle}>Stream with <i>flexibility</i></h2>
          <p>
            Momento Object Store isn't just about speed—it's about giving you the flexibility to scale, adapt, and optimize your content delivery strategy. Whether you're working with high-demand live streams, on-demand video, or complex workflows, Object Store's seamless integration with CDNs ensures you can serve content reliably without being locked into rigid infrastructure.
          </p>
          <p>
            With <b>real-time metrics tracking</b> and the ability to <b>add interactive features</b> like reactions or comments to live streams, Momento Object Store gives you the tools to enhance viewer engagement. You can dynamically manage caching and storage while tracking audience behavior, ensuring you stay in control of how, when, and where your media is delivered.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Browse our products</h2>
          <div className={styles.productWrapper}>
            <CardGrid variant='dense'>
              <LinkCard
                alignItems='center'
                title="Object Store"
                link="/objectstore/overview"
                description="high-speed purpose-built media origin"
                icon="/img/leaderboards/momento-leaderboards-2d.svg"
              />
              <LinkCard
                alignItems='center'
                title="Cache"
                link="/cache"
                description="low-latency ephemeral storage"
                icon="/img/cache/momento-cache-brand-icon.svg"
              />
              <LinkCard
                alignItems='center'
                title="Topics"
                link="/topics"
                description="low-latency ephemeral event bus"
                icon="/img/topics/momento-topics-brand-icons.svg"
              />
            </CardGrid>
          </div>
        </div>
      </div>
    </main>
  );
}
