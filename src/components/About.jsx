import React from 'react';
import { motion } from 'framer-motion';
import resume from '../assets/Mari_Resume.pdf'; // ✅ Make sure the path is correct

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="relative rounded-2xl w-64 h-64 object-cover shadow-xl border-2 border-gray-800"
              />
            </div>
          </motion.div>
        
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Full Stack Developer | MCA Student
            </h3>
           <p className="text-gray-400 mb-6 leading-relaxed">
            Enthusiastic MCA student graduating in 2025 with strong skills in software development and a passion for building impactful, user-friendly web applications. Proficient in the <span className="text-indigo-400 font-medium">MERN stack</span> with hands-on experience in <span className="text-indigo-400 font-medium">Reactjs</span> and <span className="text-indigo-400 font-medium">problem-solving</span>. Developed full-stack projects including a Crowdfunding Management System and a Fire Safety Awareness Platform, implementing responsive design, authentication, and real-time features. Eager to keep learning, collaborate effectively, and create meaningful tech solutions.
          </p>


            {/* Download Resume Button */}
            <motion.a
              href={resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

