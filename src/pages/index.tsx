import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { IoOpenOutline } from "react-icons/io5";
import ReferenceCard from '@site/src/components/ReferenceCard';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function RotatingHeader() {
  const { siteConfig } = useDocusaurusContext();
  const actions = ['Build faster with', 'Integrate easier on', 'Cache data with', 'Publish messages using'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % actions.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.headerSection}>
      <h1 className={`${styles.rotatingHeader} ${fade ? styles.fadeIn : styles.fadeOut} ${styles.header}`}>
        {actions[index]}
      </h1>
      <h1 className={styles.header}>the Momento Platform</h1>
      <p className={styles.headerDescription}>Welcome to the Momento developer docs. Discover all the resources you need to help you get the most out of our products.</p>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <main className={styles.content}>
        <img className={styles.headerBackground} src="/img/acorn-grid-background.svg"  alt={"acorn-grid"}/>
        <div className={styles.contentContainer}>
          <RotatingHeader />
          <div className={styles.desktopOnly}>
            <div className={styles.columns}>
              <div>
                <h2>Cache</h2>
                <ul className={styles.columnList}>
                  <li><a href="/cache/getting-started"><Translate id="gettingStarted">Getting started</Translate></a></li>
                  <li><a href="/cache/develop/api-reference">API reference</a></li>
                  <li><a href="/cache/develop/integrations/redis-client-compatibility">Drop-in replacements for Redis</a></li>
                  <li><a href="/cache/develop/guides/working-with-files-cache">How to cache files</a></li>
                </ul>
              </div>
              <div>
                <h2>Topics</h2>
                <ul className={styles.columnList}>
                  <li><a href="/topics">About our serverless event bus</a></li>
                  <li><a href="/cache/develop/guides/working-with-files-cache">Integrate with Amazon EventBridge</a></li>
                  <li><a href="/topics/webhooks">Webhooks overview</a></li>
                  <li>
                    <a href="https://www.gomomento.com/blog/how-to-create-a-slack-workflow-with-webhooks-in-momento-topics" target='_blank'>
                      <div className={styles.openInNew}>
                        <span>Publish messages to Slack</span>
                        <IoOpenOutline />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2>For developers</h2>
                <ul className={styles.columnList}>
                  <li><a href="/sdks">Available SDKs</a></li>
                  <li><a href="/cache/develop/authentication">Authentication and access control</a></li>
                  <li><a href="/cache/develop/basics/error-handling-production-readiness">Properly handling errors in Momento</a></li>
                  <li>
                    <a href="https://aws.amazon.com/marketplace/pp/prodview-ndqotnrhhjyvo" target="_blank">
                      <div className={styles.openInNew}>
                        <span>Momento on AWS Marketplace</span>
                        <IoOpenOutline />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p>
              Momento simplifies cloud architecture and automates resource management so developers can build from zero to global scale without distractions.
              With our flagship <b>Cache</b> and <b>Topics</b> services, Momento provides developers the building blocks they need to focus on the thing that matters
              most: <i>your business problem</i>.
            </p>
            <div className={styles.columns}>
              <div className={styles.subsectionDetail}>
                <h2 className={styles.subsectionTitle}>It's about <i>developer productivity</i></h2>
                <p>
                  We want you to move as fast as possible. Whether your database is pushing millions of transactions per second or you're publishing messages to tens of
                  thousands of subscribers, Momento is with you managing the infrastructure, tackling scaling events, and providing you with simple API calls.
                </p>

                <h2 className={styles.subsectionTitle}>We go where you go</h2>
                <p>
                  Momento works hard to provide developers with SDKs in as many programming languages possible. We have clients for all types of projects: browsers, Android
                  development, iOS apps, and 10+ server-side languages. Looking for tuned clients for your production environment or Lambda function? Our SDKs have
                  <a href="/cache/develop/basics/client-configuration-objects#pre-built-configurations"> optimized configurations</a> for anywhere development takes you.
                </p>
              </div>
              <div className={styles.subsectionGraphic}>
                <img src="/img/landing-page-detail-graphic.png" width={300} />
              </div>
            </div>
            <h2 className={styles.subsectionTitle}>Simplify your cloud architecture</h2>
            <p>
              Building robust, fault-tolerant systems at scale in the cloud is tough. We know. Lean on Momento's expertise to handle the infrastructure for you. Say
              goodbye to advanced networking, aggressive load balancing and scaling configurations, and complex WebSocket architectures. With Momento Cache and Topics,
              it's all managed for you - and getting better every day.
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Browse our products</h2>
            <div className={styles.productWrapper}>
              <div className={styles.products}>
                <ReferenceCard
                  title="Cache"
                  link="./cache"
                  description="Serverless caching made simple"
                  icon="/img/cache/momento-cache-brand-icon.svg"
                  variation="dense"
                />
                <ReferenceCard
                  title="Topics"
                  link="./topics"
                  description="Event bus with webhook support"
                  icon="/img/topics/momento-topics-brand-icons.svg"
                  variation="dense"
                />
                <ReferenceCard
                  title="Leaderboards"
                  link="./leaderboards"
                  description="Durable and ready for massive scale"
                  icon="/img/leaderboards/momento-leaderboards-2d.svg"
                  variation="dense"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
