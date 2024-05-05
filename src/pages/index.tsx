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
      <p className={styles.headerDescription}><Translate id="welcomeToTheMomentoDeveloperDocs">Welcome to the Momento developer docs. Discover all the resources you need to help you get the most out of our products.</Translate></p>
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
                  <li><a href="/cache/develop/api-reference"><Translate id="apiReference">API reference</Translate></a></li>
                  <li><a href="/cache/develop/integrations/redis-client-compatibility"><Translate id="dropInReplacementsForRedis">Drop-in replacements for Redis</Translate></a></li>
                  <li><a href="/cache/develop/guides/working-with-files-cache"><Translate id="howToCacheFiles">How to cache files</Translate></a></li>
                </ul>
              </div>
              <div>
                <h2>Topics</h2>
                <ul className={styles.columnList}>
                  <li><a href="/topics"><Translate id="aboutOurServerlessEventBus">About our serverless event bus</Translate></a></li>
                  <li><a href="/cache/develop/guides/working-with-files-cache"><Translate id="integrateWithAmazonEventBridge">Integrate with Amazon EventBridge</Translate></a></li>
                  <li><a href="/topics/webhooks"><Translate id="webhooksOverview">Webhooks overview</Translate></a></li>
                  <li>
                  
                    <a href="https://www.gomomento.com/blog/how-to-create-a-slack-workflow-with-webhooks-in-momento-topics" target='_blank'>
                      <div className={styles.openInNew}>
                      <span><Translate id="publishMessagesToSlack">Publish messages to Slack</Translate></span>
                        <IoOpenOutline />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
              <h2><Translate id="forDevelopers">For developers</Translate></h2>
                <ul className={styles.columnList}>
                  <li><a href="/sdks"><Translate id="availableSDKs">Available SDKs</Translate></a></li>
                  <li><a href="/cache/develop/authentication"><Translate id="authenticationAndAccessControl">Authentication and access control</Translate></a></li>
                  <li><a href="/cache/develop/basics/error-handling-production-readiness"><Translate id="properlyHandlingErrorsInMomento">Properly handling errors in Momento</Translate></a></li>
                  <li>
                    <a href="https://aws.amazon.com/marketplace/pp/prodview-ndqotnrhhjyvo" target="_blank">
                      <div className={styles.openInNew}>
                        <span><Translate id="momentoOnAWSMarketplace">Momento on AWS Marketplace</Translate></span>
                        <IoOpenOutline />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><Translate id="Overview">Overview</Translate></h2>
            <p>
            <Translate id="momentoSimplifiesCloudArchitecture">Momento simplifies cloud architecture and automates resource management so developers can build from zero to global scale without distractions.
              With our flagship </Translate><b>Cache</b> <Translate id="and">and</Translate> <b>Topics</b> <Translate id="servicesMomentoProvidesDevelopers">services, Momento provides developers the building blocks they need to focus on the thing that matters
              most: </Translate><i><Translate id="yourBusinessProblem">your business problem</Translate></i>.
            </p>
            <div className={styles.columns}>
              <div className={styles.subsectionDetail}>
                <h2 className={styles.subsectionTitle}><Translate id="ItsAbout">It's about </Translate><i><Translate id="developerProductivity">developer productivity</Translate></i></h2>
                <p>
                <Translate id="weWantYouToMoveAsFastAsPossible">We want you to move as fast as possible. Whether your database is pushing millions of transactions per second or you're publishing messages to tens of
                  thousands of subscribers, Momento is with you managing the infrastructure, tackling scaling events, and providing you with simple API calls.</Translate>
                </p>

                <h2 className={styles.subsectionTitle}><Translate id="weGoWhereYouGo">We go where you go</Translate></h2>
                <p>
                <Translate id="momentoWorksHardToProvideDevelopers">Momento works hard to provide developers with SDKs in as many programming languages possible. We have clients for all types of projects: browsers, Android
                  development, iOS apps, and 10+ server-side languages. Looking for tuned clients for your production environment or Lambda function? Our SDKs have</Translate>
                  <a href="/cache/develop/basics/client-configuration-objects#pre-built-configurations"><Translate id="optimizedConfigurations">optimized configurations</Translate></a> <Translate id="forAnywhereDevelopmentTakesYou">for anywhere development takes you.</Translate>
                </p>
              </div>
              <div className={styles.subsectionGraphic}>
                <img src="/img/landing-page-detail-graphic.png" width={300} />
              </div>
            </div>
            <h2 className={styles.subsectionTitle}><Translate id="simplifyYourCloudArchitecture">Simplify your cloud architecture</Translate></h2>
            <p>
            <Translate id="buildingRobust">Building robust, fault-tolerant systems at scale in the cloud is tough. We know. Lean on Momento's expertise to handle the infrastructure for you. Say
              goodbye to advanced networking, aggressive load balancing and scaling configurations, and complex WebSocket architectures. With Momento Cache and Topics,
              it's all managed for you - and getting better every day.</Translate>
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><Translate id="browseOurProducts">Browse our products</Translate></h2>
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
