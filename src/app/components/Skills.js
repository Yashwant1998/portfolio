"use client";

export default function Skills() {
  const skills = [
    {
      category: "Frontend Core",
      items: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "State & APIs",
      items: [
        { name: "Redux Toolkit", level: 90 },
        { name: "Redux Thunk", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Material-UI", level: 85 },
        { name: "Firebase", level: 75 },
        { name: "Azure AI", level: 70 },
      ],
    },
    {
      category: "Tools & Testing",
      items: [
        { name: "Jest", level: 85 },
        { name: "Git", level: 90 },
        { name: "NPM", level: 90 },
        { name: "Chrome DevTools", level: 95 },
        { name: "Performance Optimization", level: 85 },
        { name: "Responsive Design", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
