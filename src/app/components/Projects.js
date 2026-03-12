"use client";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise AI Solution (Client project)",
      company: "Ernst & Young",
      description:
        "Integrated GenAI features via Azure AI Foundry with REST endpoints. Implemented request tracing, error handling, and guarded prompts for reliability. Enhanced accessibility compliance and performance optimization.",
      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Redux Thunk",
        "Azure AI",
      ],
      achievements: [
        "GenAI integration with Azure AI Foundry",
        "Enhanced accessibility compliance",
        "Performance optimization with critical CSS",
        "Improved reliability with error handling",
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
