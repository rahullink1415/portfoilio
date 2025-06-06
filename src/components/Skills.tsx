import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Core Android',
      skills: [
        { name: 'Kotlin', level: 95 },
        { name: 'Jetpack Compose', level: 90 },
        { name: 'MVVM Architecture', level: 95 },
        { name: 'Android SDK', level: 90 },
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'REST APIs', level: 90 },
        { name: 'Retrofit', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'Room Database', level: 85 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Hilt/Dagger', level: 80 },
        { name: 'BLE Integration', level: 75 },
        { name: 'Agile/Scrum', level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              My{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`p-8 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 text-center ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`font-medium ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full ${
                          darkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-green-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
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
      </div>
    </section>
  );
};

export default Skills;