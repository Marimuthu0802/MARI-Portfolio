import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      role: 'Full Stack Web Developer Intern',
      company: 'WhyTap (Why Global Services)',
      duration: 'Nov 2024 – Present',
      description:
        'Developed mobile-friendly websites using React. Built RESTful APIs with Node.js and Express, ensuring seamless frontend-backend integration.',
    },
    {
      id: 2,
      type: 'education',
      degree: 'MCA',
      institution: 'SRM Institute of Science and Technology, Chennai',
      duration: '2023 – 2025',
      description:
        'Focused on web development, programming, and database systems with hands-on project experience.',
    },
    {
      id: 3,
      type: 'education',
      degree: 'B.Sc. Computer Science',
      institution: 'PSG College of Arts and Science, Coimbatore',
      duration: '2020 – 2023',
      description:
        'Gained foundational knowledge in programming and software development.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Experience & Education
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-400 mx-auto">
            My journey through work and academics
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500 rounded-full"
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex flex-col md:flex-row items-center w-full relative ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Mobile Icon */}
              <div className="md:hidden flex justify-center mb-4">
                <div className="bg-indigo-800/20 w-12 h-12 rounded-full flex items-center justify-center border border-indigo-400/30">
                  {exp.type === 'work' ? (
                    <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                  ) : (
                    <AcademicCapIcon className="h-6 w-6 text-indigo-400" />
                  )}
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative w-full md:w-5/12 bg-gray-800 rounded-lg border border-gray-700 shadow-lg px-6 py-5 z-10 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <h3 className="font-bold text-white text-lg md:text-xl">
                  {exp.type === 'work' ? exp.role : exp.degree}
                </h3>
                <h4 className="font-semibold text-indigo-400 text-sm md:text-base mt-1">
                  {exp.type === 'work' ? exp.company : exp.institution}
                </h4>
                <p className="text-xs text-gray-500 italic my-1">{exp.duration}</p>
                <p className="text-sm text-gray-300">{exp.description}</p>
              </motion.div>

              {/* Desktop Icon */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                <div className="bg-indigo-800/20 w-14 h-14 rounded-full flex items-center justify-center border border-indigo-400/30 hover:scale-110 transition">
                  {exp.type === 'work' ? (
                    <BriefcaseIcon className="h-7 w-7 text-indigo-400" />
                  ) : (
                    <AcademicCapIcon className="h-7 w-7 text-indigo-400" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
