import React from 'react';
import Layout from '@theme/Layout';
import styles from './media-events.module.css';

export default function MediaEventSupportPlan(): JSX.Element {
  return (
    <Layout
      title="Momento Media Event Support Plan"
      description="Support plan for mission-critical media events with low latency and high reliability"
    >
      <div className={styles.container}>
        <h1 className={styles.h1}>Momento Media Event Support Plan</h1>
        <section className={styles.section}>
          <p>
            <strong>Purpose:</strong> The Momento Media Event Support Plan is a high-value support tier tailored for mission-critical media workflows—such as live sports, global entertainment broadcasts, and major product launches—where low latency, high availability, and expert operational excellence are non-negotiable. This plan ensures your most important events run smoothly with proven reliability and expert guidance at every stage.
          </p>
        </section>

        <h2 className={styles.h2}>Plan Overview</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Feature</th>
              <th className={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>SLA</td>
              <td className={styles.td}>99.99%+ service availability for core components, with detailed SLA documents tailored per architecture</td>
            </tr>
            <tr>
              <td className={styles.td}>Event Support Engagements</td>
              <td className={styles.td}>Up to 1 proactive media event engagement per month</td>
            </tr>
            <tr>
              <td className={styles.td}>Monthly Fee</td>
              <td className={styles.td}>Starting at $50,000/month, with pricing adjusted based on usage scale, number of components involved, and complexity of the event</td>
            </tr>
            <tr>
              <td className={styles.td}>Availability</td>
              <td className={styles.td}>Global, across all Momento-supported AWS regions</td>
            </tr>
            <tr>
              <td className={styles.td}>Target Customers</td>
              <td className={styles.td}>Broadcasters, streaming platforms, sports leagues, live shopping platforms, or any high-profile event-driven media customer</td>
            </tr>
          </tbody>
        </table>

        <h2 className={styles.h2}>What's Included</h2>
        <section className={styles.section}>
          <h3 className={styles.h3}>Pre-Event Architecture Review</h3>
          <ul className={styles.ul}>
            <li>Deep-dive review of your architecture 1-3 weeks prior to your event</li>
            <li>Focus on performance, resilience, throughput, and low-latency data flows</li>
            <li>Recommendations on Momento SDK integration patterns, failover strategies, observability instrumentation</li>
          </ul>

          <h3 className={styles.h3}>Custom Runbook Creation</h3>
          <ul className={styles.ul}>
            <li>
              Collaboratively built runbook with your team including:
              <ul className={styles.ul}>
                <li>Traffic estimates and thresholds</li>
                <li>Alarm thresholds and contact escalation paths</li>
                <li>Backup and fallback plans (e.g., pre-warming caches, failover to secondary streams)</li>
              </ul>
            </li>
          </ul>

          <h3 className={styles.h3}>Dry Run and Load Testing Support</h3>
          <ul className={styles.ul}>
            <li>Guidance and hands-on assistance with chaos testing, load testing, and circuit breaker validation</li>
            <li>Optionally includes simulation of high-throughput scenarios using Momento performance tools</li>
          </ul>

          <h3 className={styles.h3}>Dedicated Event Monitoring</h3>
          <ul className={styles.ul}>
            <li>Real-time monitoring during the event window by Momento Support Engineers</li>
            <li>Slack/Zoom bridge available upon request</li>
            <li>Fast-path response SLAs (1 minute or less for critical issues during the event)</li>
          </ul>

          <h3 className={styles.h3}>Post-Event Review</h3>
          <ul className={styles.ul}>
            <li>Detailed report with metrics snapshot (latency, throughput, availability, cache hit rate)</li>
            <li>Observed issues and anomalies</li>
            <li>Lessons learned and optimization opportunities</li>
          </ul>
        </section>

        <h2 className={styles.h2}>Optional Add-ons</h2>
        <ul className={styles.ul}>
          <li><strong>24/7 White Glove Support:</strong> For multi-region or rolling events</li>
          <li><strong>Custom Tooling Integration:</strong> Custom dashboards and telemetry pipelines</li>
          <li><strong>Multi-Event Bundling:</strong> Discounted packages for customers with a regular media calendar</li>
        </ul>

        <h2 className={styles.h2}>Customer Commitment</h2>
        <ul className={styles.ul}>
          <li>Provide at least 1 week's notice before the event date</li>
          <li>Participate in pre-event planning sessions</li>
          <li>Grant access to relevant observability tools or logs if needed</li>
        </ul>
      </div>
    </Layout>
  );
}
