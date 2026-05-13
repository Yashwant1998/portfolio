"use client";

export default function Projects() {
  const projects = [
    {
      title: "Digital Twin Executive Platform — ADNOC",
      company: "Ernst & Young",
      description:
        "Helped define the frontend architecture for an executive digital-twin platform — folder structure, routing across Exec/BLD/GC/Asset views, state-management split (global / local / URL), and RBAC enforcement at the UI layer. Built the React ↔ Unity WebGL ↔ NVIDIA Omniverse integration layer with typed message-passing, scene-ready/error/retry handling, and bidirectional selection sync between the UI and 3D scenes.",
      technologies: [
        "React 18",
        "TypeScript",
        "Module Federation",
        "Unity WebGL",
        "NVIDIA Omniverse",
      ],
      achievements: [
        "Defined frontend architecture across Exec/BLD/GC/Asset views with RBAC at the UI layer",
        "Built React ↔ Unity WebGL ↔ NVIDIA Omniverse integration with typed message-passing and bidirectional selection sync",
        "Designed multi-level dashboard hierarchy (Exec KPI → BLD → GC drill-downs) with reusable KPI cards and preserved context",
        "Implemented secure session/access layer — SSO, role-based protected routes, and RBAC-gated chatbot & Kognitwin Surface iframe",
        "Integrated Data Hub APIs with mapped response models, loading/empty/error/retry states, and global fallback-UI strategy",
      ],
      type: "Enterprise",
    },
    {
      title: "AIRSS Gen AI — ExxonMobil",
      company: "Ernst & Young",
      description:
        "Led frontend delivery of a large-scale enterprise SPA — metric dashboards, document management, user administration, and GenAI-powered workflows on Azure AI — driving code reviews and team coding standards. Built the application's state and data layer with Redux Toolkit slices, Redux-Saga for async side effects, and an Axios-based service layer reused by the wider team.",
      technologies: [
        "React 18",
        "TypeScript",
        "Redux Toolkit",
        "Redux-Saga",
        "Azure AI",
        "Vite",
        "MUI",
      ],
      achievements: [
        "Led frontend delivery of a large-scale enterprise SPA with GenAI-powered workflows on Azure AI",
        "Built state/data layer with Redux Toolkit, Redux-Saga, and Axios service layer reused across teams",
        "Developed reusable component library (PageContainer, SectionHeader, MetricGrid, ProgressBar, StatusBadge, DataTable) removing 30–40% UI duplication",
        "Implemented secure access with Microsoft MSAL SSO, token-based APIs, protected routes, and idle-session timeout",
        "Migrated from CRA to Vite for faster dev startup + HMR; set up Jest/RTL, ESLint (Airbnb + TS), Prettier, and Husky hooks",
        "Shipped rich data experiences with AG Grid, MUI X DataGrid, Recharts, react-dnd, and i18next (English/Spanish)",
      ],
      type: "Enterprise",
    },
    {
      title: "TestMate - Test Case Management",
      company: "Professional Project",
      description:
        "Dynamic test-case management solution ensuring seamless end-to-end tracking, execution and reporting. Significantly reduced manual workload and enhanced testing efficiency.",
      technologies: ["ReactJS", "Redux Toolkit", "Material-UI", "TypeScript"],
      achievements: [
        "Reduced manual testing workload",
        "End-to-end test case tracking",
        "Seamless execution and reporting",
        "Enhanced overall testing efficiency",
      ],
      type: "Internal Tool",
    },
    {
      title: "Conference Attendance System (CAS)",
      company: "Professional Project",
      description:
        "Streamlined conference attendance management system reducing manual intervention. Significantly improved system efficiency in managing conference attendance processes.",
      technologies: ["ReactJS", "React-Redux", "Material-UI", "TypeScript"],
      achievements: [
        "Streamlined attendance management",
        "Reduced manual intervention",
        "Enhanced system efficiency",
        "Improved conference workflow",
      ],
      type: "Management System",
    },
    {
      title: "Document Intelligence Page",
      company: "Client Project",
      description:
        "Responsive interface aligned with client branding and usability best practices. Conducted UX structuring and information hierarchy design to communicate application features and business value.",
      technologies: ["ReactJS", "Material-UI", "TypeScript", "Design Thinking"],
      achievements: [
        "Responsive, visually consistent interface",
        "Client branding alignment",
        "UX structuring and information hierarchy",
        "Clear business value communication",
      ],
      type: "Client Work",
    },
    {
      title: "MovieMate - AI Movie Discovery",
      company: "Personal Project",
      description:
        "AI-powered movie discovery app with secure authentication, protected routes, and state management patterns. Includes comprehensive testing and CI/CD pipeline.",
      technologies: ["React", "Tailwind CSS", "Firebase", "OpenAI", "Jest"],
      achievements: [
        "AI-powered movie recommendations",
        "Secure authentication system",
        "Test coverage with Jest/RTL",
        "CI/CD with preview builds",
      ],
      type: "Personal",
      link: "https://moviemate-98c1b.web.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of impactful projects demonstrating technical expertise
            and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.type === "Enterprise"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : project.type === "Personal"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : project.type === "Client Work"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                  }`}
                >
                  {project.type}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Visit Here
                  </a>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              <h4 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {project.company}
              </h4>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
