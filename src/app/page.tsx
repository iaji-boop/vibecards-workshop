import styles from "./page.module.css";

const focusBlocks = [
  {
    time: "09:00",
    title: "Launch pad",
    description: "Quick start ritual + top 3 priorities.",
    tag: "Warm-up",
  },
  {
    time: "10:00",
    title: "Deep work sprint",
    description: "45-min timer + stretch break reminder.",
    tag: "Focus",
  },
  {
    time: "12:00",
    title: "Refuel + reset",
    description: "Lunch, hydration, 5-minute walk.",
    tag: "Reset",
  },
  {
    time: "14:00",
    title: "Admin sweep",
    description: "Short tasks + inbox clean-up.",
    tag: "Light",
  },
  {
    time: "16:00",
    title: "Wind down",
    description: "Plan tomorrow + celebrate wins.",
    tag: "Close",
  },
];

const features = [
  {
    title: "Gentle structure",
    description:
      "Flexible scheduling with visual blocks instead of rigid hours so plans feel doable.",
  },
  {
    title: "Motivation cues",
    description:
      "Celebrate streaks, show progress, and nudge with micro-rewards that keep momentum.",
  },
  {
    title: "Low-friction planning",
    description:
      "One-tap templates, auto-suggestions, and quick add to avoid blank-page overwhelm.",
  },
  {
    title: "Energy-aware",
    description:
      "Adjust intensity based on focus level, sleep, or medication reminders.",
  },
];

const buildSteps = [
  {
    title: "1. Discovery sprint (week 1)",
    details: [
      "Interview 5-8 ADHD users about daily planning friction.",
      "Define top 3 success metrics (ex: sessions completed, streaks, task completion).",
      "Map out MVP journey: onboarding → daily plan → focus sprint → review.",
    ],
  },
  {
    title: "2. MVP build (weeks 2-3)",
    details: [
      "Daily schedule builder with blocks + timers.",
      "Template library for common routines (workday, study, errands).",
      "Reminders and focus mode with a calming interface.",
    ],
  },
  {
    title: "3. Beta + iteration (week 4)",
    details: [
      "Ship to 10-20 early users and track completion + drop-offs.",
      "Add smart nudges: break prompts, quick reschedule, dopamine boosts.",
      "Prioritize accessibility: color contrast, font size, reduced distraction.",
    ],
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>FocusFlow</span>
          <span className={styles.brandBadge}>ADHD scheduling</span>
        </div>
        <div className={styles.navActions}>
          <button className={styles.ghostButton} type="button">
            View roadmap
          </button>
          <button className={styles.primaryButton} type="button">
            Start planning
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Build a scheduling app that feels supportive.</p>
            <h1>
              A calmer daily plan for people with ADHD, built around energy,
              focus, and motivation.
            </h1>
            <p className={styles.subhead}>
              Let&apos;s map the product and ship the first version. Below is a
              clear plan, feature set, and a visual prototype of what the daily
              schedule view can feel like.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton} type="button">
                Build MVP
              </button>
              <button className={styles.secondaryButton} type="button">
                User interview guide
              </button>
            </div>
            <div className={styles.heroHighlights}>
              <div>
                <strong>Target users</strong>
                <span>Adults + students who want gentle structure.</span>
              </div>
              <div>
                <strong>Outcome</strong>
                <span>Finish more tasks without burnout.</span>
              </div>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <div>
                <p>Today</p>
                <h2>Friday Focus Plan</h2>
              </div>
              <span className={styles.pill}>Low pressure</span>
            </div>
            <div className={styles.timeline}>
              {focusBlocks.map((block) => (
                <div key={block.time} className={styles.timelineItem}>
                  <div className={styles.timelineTime}>{block.time}</div>
                  <div className={styles.timelineCard}>
                    <div>
                      <h3>{block.title}</h3>
                      <p>{block.description}</p>
                    </div>
                    <span className={styles.timelineTag}>{block.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Product pillars</h2>
            <p>Designed to lower friction and build confidence every day.</p>
          </div>
          <div className={styles.grid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.card}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.sectionHeader}>
            <h2>Build plan</h2>
            <p>A four-week path from research to beta-ready MVP.</p>
          </div>
          <div className={styles.steps}>
            {buildSteps.map((step) => (
              <div key={step.title} className={styles.stepCard}>
                <h3>{step.title}</h3>
                <ul>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Core MVP screens</h2>
            <p>Start with three flows that solve daily planning pain fast.</p>
          </div>
          <div className={styles.flowRow}>
            <div className={styles.flowCard}>
              <h3>Onboarding</h3>
              <p>Collect focus times, energy curve, and preferred reminders.</p>
              <span>1–2 minutes</span>
            </div>
            <div className={styles.flowCard}>
              <h3>Daily schedule</h3>
              <p>Build a plan in blocks with timers, breaks, and buffers.</p>
              <span>Focus + calm mode</span>
            </div>
            <div className={styles.flowCard}>
              <h3>Reflection</h3>
              <p>Capture wins, reschedule what slipped, reinforce routines.</p>
              <span>End-of-day check-in</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <h2>Ready to build the ADHD-friendly scheduler?</h2>
          <p>
            Share your preferred stack and timeline, and we can move from plan to
            prototype right away.
          </p>
        </div>
        <button className={styles.primaryButton} type="button">
          Start the build
        </button>
      </footer>
    </div>
  );
}
