"use client";

export default function Experience() {
  const experiences = [
    {
      title: "Technical Lead — Frontend",
      company: "Ernst & Young (EY) GDS",
      period: "Jul 2024 - Present",
      description:
        "Leading frontend architecture and delivery for enterprise React/TypeScript platforms — micro-frontends on Nx, Next.js App Router with RSC, performance and Core Web Vitals workstreams, secure auth, and team-wide quality standards.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js (App Router + RSC)",
        "Module Federation",
        "Nx",
        "RTK Query",
        "Vitest",
        "Playwright",
      ],
      achievements: [
        "Contributed to migration of a monolithic React/TS app to a Module Federation micro-frontend platform on Nx, enabling 4 teams to deploy independently and cutting lead time from 11 to 4 days",
        "Shaped architecture via ADRs (Next.js App Router + RSC, RTK Query, design-system patterns) — several adopted across sibling programs",
        "Drove Core Web Vitals: LCP 4.1s → 1.6s, INP 480ms → 140ms, bundle 2.3MB → 1.1MB via code-splitting, RSC streaming, route prefetching, and grid virtualization",
        "Integrated Power BI and Tableau dashboards securely into core product workflows",
        "Built a typed BFF + OpenAPI codegen layer, eliminating ~6k lines of hand-written API glue and a full class of runtime type errors",
        "Set up frontend quality & release pipeline — Vitest + Playwright + Chromatic in CI, Sentry RUM with error-budget SLOs, LaunchDarkly canary releases",
        "Improved security & accessibility — CSP, OIDC via MSAL, Snyk scanning, and WCAG 2.2 AA remediation across the flagship app",
        "Mentored 3–4 engineers, ran code reviews, and helped define internal coding standards adopted by the team",
      ],
    },
    {
      title: "Front-End Developer",
      company: "QBurst",
      period: "Dec 2022 - Jul 2024",
      description:
        "Built responsive, cross-browser compatible React interfaces and optimized pages for web performance. Integrated REST APIs with async flows and collaborated in Agile/Scrum teams.",
      technologies: ["React", "JavaScript", "REST APIs", "CSS3", "Agile/Scrum"],
      achievements: [
        "Delivered responsive interfaces across multiple browsers",
        "Integrated REST APIs with async workflows",
        "Collaborated with designers and product managers",
        "Maintained clean, scalable code architecture",
      ],
    },
    {
      title: "Systems Engineer",
      company: "Tata Consultancy Services (TCS)",
      period: "Nov 2020 - Nov 2022",
      description:
        "Developed UI screens with React, Redux Toolkit, and ensured multi-device support. Resolved production defects with structured debugging and integrated Material UI components.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Material-UI",
        "NPM",
        "JavaScript",
      ],
      achievements: [
        "Developed multi-device compatible UI screens",
        "Resolved production defects with systematic debugging",
        "Integrated Material UI for consistent design",
        "Managed package dependencies effectively",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the impact I've made at various
            organizations
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium bg-white dark:bg-gray-600 px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
