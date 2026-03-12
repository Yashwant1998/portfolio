"use client";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "PSIT College of Engineering",
      period: "2016 - 2020",
      description:
        "Comprehensive computer science education covering programming fundamentals, software engineering principles, and modern development practices.",
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Management Systems",
        "Web Technologies",
        "Object-Oriented Programming",
      ],
      achievements: [
        "Strong foundation in CS fundamentals",
        "Focus on web development technologies",
        "Hands-on project experience",
      ],
    },
  ];

  const certifications = [
    {
      name: "GitHub Copilot Fundamentals",
      issuer: "Microsoft Learn",
      date: "2026",
      url: "https://learn.microsoft.com/en-us/users/yashwantkumar-0219/credentials/80e1d1c2bd549e82?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      name: "AI-102: Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft Learn",
      date: "2025",
      url: "https://learn.microsoft.com/en-us/users/yashwantkumar-0219/credentials/e65cef801eff8e9b?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      name: "AI-900: Microsoft Azure AI Fundamentals",
      issuer: "Microsoft Learn",
      date: "2025",
      url: "https://learn.microsoft.com/en-us/users/yashwantkumar-0219/credentials/683b0023f882659?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <h5 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                      {edu.school}
                    </h5>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <div className="text-green-600 dark:text-green-400 font-semibold mt-2">
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Courses:
                    </h6>
                    <ul className="space-y-2">
                      {edu.courses.map((course, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {course}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h6 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Achievements:
                    </h6>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                >
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2 block"
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h4>
                  )}
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 dark:text-gray-400">
                      Issued: {cert.date}
                    </p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View Credential
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Goals */}
            <div className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Key Projects</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Enterprise AI Solution (Client project)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>TestMate - Test Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>MovieMate - AI Movie Discovery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
