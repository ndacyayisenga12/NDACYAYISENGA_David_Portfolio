import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications, mentoring junior developers, and implementing modern architecture patterns.',
      achievements: [
        'Reduced page load time by 40% through optimization',
        'Led team of 5 developers on major product launch',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations LLC',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing applications using React, Node.js, and cloud services.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Improved code quality through implementing testing practices',
        'Collaborated with UX team to enhance user experience',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Created interactive user interfaces and integrated RESTful APIs for various client projects.',
      achievements: [
        'Developed reusable component library used across 10+ projects',
        'Increased website performance scores to 95+',
        'Worked closely with designers to implement pixel-perfect designs',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and web technologies. Graduated with honors.',
    },
    {
      degree: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      period: '2021',
      description: 'Professional certification demonstrating expertise in cloud architecture and AWS services.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and qualifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Work Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-teal-600">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-3 top-2 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-50"></div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                      <span className="text-sm font-medium text-blue-600 mt-1 sm:mt-0">{job.period}</span>
                    </div>
                    <p className="text-teal-600 font-medium mb-3">{job.company}</p>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education & Certifications</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-teal-600">
              {education.map((item, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-3 top-2 w-6 h-6 bg-teal-600 rounded-full border-4 border-slate-50"></div>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{item.degree}</h4>
                      <span className="text-sm font-medium text-teal-600 mt-1 sm:mt-0">{item.period}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{item.institution}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
