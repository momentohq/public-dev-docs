import React from 'react';
import { RotatingHeader } from '@site/src/components/RotatingHeader';
import Layout from '@theme/Layout';
import { IoOpenOutline } from "react-icons/io5";
import { CardGrid } from '@site/src/components/CardGrid';
import { LinkCard } from '@site/src/components/LinkCard';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';


export default function Home(): JSX.Element {
  return (
    <Layout
      description="Discover the next-gen origin for world-class streaming experiences.">
      <main className={styles.content}>
        <img className={styles.headerBackground} src="/img/acorn-grid-background.svg"  alt={"acorn-grid"}/>
        <div className={styles.contentContainer}>
          <RotatingHeader
            headerText="Momento MediaStore is the perfect origin for"
            rotatingText={['zero-buffer rates', 'highest rung streaming', 'lowest possible error rates']}
            description="Get started with the next-gen streaming from Momento for the ultimate viewer experience"
          />
          <div className={styles.desktopOnly}>
            <div className={styles.columns}>
              <div>
                <h2>Learn</h2>
                <ul className={styles.columnList}>
                  <li><a href="/cache/getting-started"><Translate id="gettingStarted">Why Momento MediaStore?</Translate></a>
                  </li>
                  <li><a href="/cache/develop/api-reference"><Translate id="apiReference">About live streaming</Translate></a>
                  </li>
                  <li><a href="/cache/integrations/redis-client-compatibility"><Translate
                      id="dropInReplacementsForRedis">Reducing glass to glass latency</Translate></a></li>
                  <li><a href="/cache/develop/guides/working-with-files-cache"><Translate id="howToCacheFiles">How bitrates affect performance</Translate></a></li>
                </ul>
              </div>
              <div>
                <h2>Build</h2>
                <ul className={styles.columnList}>
                  <li><a href="/topics"><Translate id="aboutOurServerlessEventBus">Using Momento as a live origin</Translate></a></li>
                  <li><a href="/topics/integrations/lambda-handler"><Translate id="integrateWithAmazonEventBridge">Track viewer metrics</Translate></a></li>
                  <li><a href="/topics/webhooks"><Translate id="webhooksOverview">Adding live reactions to streams</Translate></a></li>
                  <li><a href="/topics/faq"><Translate id="faq">Adaptive bitrate streaming</Translate></a></li>
                </ul>
              </div>
              <div>
                <h2><Translate id="forDevelopers">For developers</Translate></h2>
                <ul className={styles.columnList}>
                  <li><a href="/platform/sdks"><Translate id="availableSDKs">Available SDKs</Translate></a></li>
                  <li><a href="/cache/develop/authentication"><Translate id="authenticationAndAccessControl">Authentication
                    and access control</Translate></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><Translate id="Overview">What is Momento MediaStore?</Translate></h2>

              <div className={styles.subsectionDetail}>
                <h2 className={styles.subsectionTitle}><Translate id="ItsAbout">A purpose-built media origin</Translate></h2>
                <p>
                <Translate id="momentoSimplifiesCloudArchitecture">Traditional media origins can introduce latency and inefficiencies that degrade the viewer experience. At Momento, we believe the media origin should empower seamless, high-quality delivery. That's why Momento MediaStore is built on top of our cutting-edge caching and storage solutions, ensuring extremely low latency access to media content. With Momento Cache and Momento Storage, you get:</Translate>
                </p>
                <ul>
                  <li><div><b><Translate id="instantAccess">Instant access to media</Translate></b><span> - Our lightning-fast caching layer makes sure your content is always ready to be served, eliminating delays.</span></div></li>
                  <li><div><b><Translate id="reliability">Reliability under pressure</Translate></b><span> - Handle peak traffic with ease, ensuring uninterrupted content delivery, even under high demand.</span></div></li>
                  <li><div><b><Translate id="optimizedForCDN">Optimized for CDN delivery</Translate></b><span> - Momento MediaStore powers CDNs with near-instant retrieval, ensuring your viewers experience smooth, buffer-free streaming.</span></div></li>
                </ul>
                <p>
                By rethinking the media origin, we're pushing the boundaries of what's possible in content delivery. Whether you're streaming at the highest quality or serving millions of requests simultaneously, Momento MediaStore ensures the fastest path from origin to CDN, and from CDN to viewer.
              </p>
              </div>
            <div className={styles.columns}>
              <div className={styles.subsectionDetail}>
                <h2 className={styles.subsectionTitle}><Translate id="ItsAbout">It's about </Translate><i>flexibility</i></h2>
                <p>
                  <Translate id="weWantYouToMoveAsFastAsPossible">Momento MediaStore isn't just about speed—it's about giving you the flexibility to scale, adapt, and optimize your content delivery strategy. Whether you're working with high-demand live streams, on-demand video, or complex workflows, MediaStore's seamless integration with CDNs ensures you can serve content reliably without being locked into rigid infrastructure.</Translate>
                </p>
                <p>
                  With <b>real-time metrics tracking</b> and the ability to <b>add interactive features</b> like reactions or comments to live streams, Momento MediaStore gives you the tools to enhance viewer engagement. You can dynamically manage caching and storage while tracking audience behavior, ensuring you stay in control of how, when, and where your media is delivered.
                </p>

                <h2 className={styles.subsectionTitle}><Translate id="weGoWhereYouGo">We go where you go</Translate>
                </h2>
                <p>
                  <Translate id="momentoWorksHardToProvideDevelopers">Momento works hard to provide developers with SDKs
                    in as many programming languages possible. We have clients for all types of projects: browsers,
                    Android
                    development, iOS apps, and 10+ server-side languages. Looking for tuned clients for your production
                    environment or Lambda function? Our SDKs have</Translate>
                  <a href="/cache/develop/basics/client-configuration-objects#pre-built-configurations"><Translate
                      id="optimizedConfigurations">optimized configurations</Translate></a> <Translate
                    id="forAnywhereDevelopmentTakesYou">for anywhere development takes you.</Translate>
                </p>
              </div>
              <div className={styles.subsectionGraphic}>
                <img src="/img/landing-page-detail-graphic.png" width={300}/>
              </div>
            </div>
            <h2 className={styles.subsectionTitle}><Translate id="simplifyYourCloudArchitecture">Simplify your cloud
              architecture</Translate></h2>
            <p>
              <Translate id="buildingRobust">Building robust, fault-tolerant systems at scale in the cloud is tough. We
                know. Lean on Momento's expertise to handle the infrastructure for you. Say
                goodbye to advanced networking, aggressive load balancing and scaling configurations, and complex
                WebSocket architectures. With Momento Cache and Topics,
                it's all managed for you - and getting better every day.</Translate>
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><Translate id="browseOurProducts">Browse our products</Translate></h2>
            <div className={styles.productWrapper}>
              <CardGrid variant='dense'>
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
                <LinkCard
                    alignItems='center'
                    title="Leaderboards"
                    link="/leaderboards"
                    description="massive, durable sorted sets"
                    icon="/img/leaderboards/momento-leaderboards-2d.svg"
                />
              </CardGrid>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
