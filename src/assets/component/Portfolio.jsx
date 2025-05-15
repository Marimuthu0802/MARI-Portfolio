import React from 'react';
import { FaLinkedin, FaGithub, FaBehance, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed w-full border-b-2 border-teal-500 bg-gray-900 text-teal-400 py-4 px-8 flex justify-between items-center shadow-md z-50">
      <a href="#" className="text-2xl font-bold uppercase">My Portfolio</a>
      <nav className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#skills" className="hover:text-gray-300">Skills</a>
        <a href="#experience" className="hover:text-gray-300">Experience</a>
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#services" className="hover:text-gray-300">Services</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left bg-black">
      <div className="md:w-1/3 flex justify-center">
        <img src="./src/assets/mari photo.JPG" alt="Profile" className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-teal-400" />
      </div>
      <div className="md:w-2/3 p-6">
        <h2 className="text-4xl font-semibold">Hello, I'm <span className="text-teal-400">Marimuthu S</span></h2>
        <h3 className="text-3xl font-bold text-gray-200 mt-2">Web Developer</h3>
        <div className="mt-5 flex justify-center md:justify-start space-x-4">
          <a href="#contact" className="bg-teal-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md shadow-md">Hire Me</a>
          <a href="/resume.pdf" download className="bg-gray-700 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-md shadow-md">Download Resume</a>
        </div>
        <div className="mt-6 flex justify-center md:justify-start space-x-6">
          <a href="https://www.linkedin.com/in/s-marimuthu-0b6269300" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-2xl hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-2xl hover:text-gray-300">
            <FaBehance />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-2xl hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};
const About = () => {
  return (
    <section id="about" className="py-20 px-10 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center text-center md:text-left">
      <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
        <img src="./src/assets/mari photo.JPG" alt="About Me" className="w-60 h-60 md:w-80 md:h-80 rounded-lg shadow-lg border-4 border-teal-500" />
      </div>
      <div className="md:w-2/3 p-6 mb-24">
        <h2 className="text-3xl font-bold text-teal-500">About Me</h2>
        <p className="text-white mt-4 max-w-3xl">I'm a passionate web developer with experience in modern technologies like React, Tailwind CSS, and Node.js. I specialize in creating responsive, dynamic, and visually appealing web applications. My goal is to provide scalable and efficient solutions for businesses and individuals.</p>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillData = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "70%",  },
    { name: "Node.js", level: "45%",  },
    { name: "Figma", level: "50%",  },
  ];
  return (
    <section id="skills" className="py-20 px-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-teal-500 text-center">Skills</h2>
      <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillData.map((skill, index) => (
          <div key={index} className="text-left">
            <h3 className="font-bold text-lg">{skill.name}</h3>
            <div className="w-full h-4 bg-gray-300 mt-2 rounded-md">
              <div className="bg-teal-500 h-4 rounded-md" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experienceData = [
    {
      company: "Tech Solutions Inc.",
      role: "Frontend Developer",
      duration: "2021 - Present",
      description: "Developing and maintaining the company's web applications using React and Tailwind CSS."
    },
    {
      company: "Creative Web Agency",
      role: "UI/UX Designer",
      duration: "2019 - 2021",
      description: "Designed interactive and responsive web interfaces to enhance user engagement."
    },
    {
      company: "Startup Innovators",
      role: "Full Stack Developer",
      duration: "2017 - 2019",
      description: "Built and managed end-to-end web applications using MERN stack."
    }
  ];
  return (
    <section id="experience" className="py-20 px-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-teal-500 text-center">Experience</h2>
      <div className="mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((job, index) => (
          <div key={index} className="bg-teal-500 p-6 shadow-md rounded-md">
            <h3 className="font-bold text-xl">{job.role} - {job.company}</h3>
            <p className="text-gray-900 mt-2">{job.duration}</p>
            <p className="text-gray-100 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projectData = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS to showcase my work and skills.",
      image: "./src/assets/portfolio.jpeg",
      link: "#"
    },
    {
      name: "E-Commerce Store",
      description: "A fully functional online store using the MERN stack with authentication and payment integration.",
      image: "./src/assets/ecommerce.jpg",
      link: "#"
    },
    {
      name: "Blog Platform",
      description: "A blog system with user authentication, CRUD operations, and a rich text editor.",
      image: "./src/assets/portfolio.jpeg",
      link: "#"
    },
    {
      name: "Task Manager",
      description: "A to-do list application with drag-and-drop functionality and local storage support.",
      image: "./src/assets/task.png",
      link: "#"
    },
    {
      name: "Weather App",
      description: "A weather forecasting app using the OpenWeather API to display real-time weather data.",
      image: "./src/assets/todolist.jpeg",
      link: "#"
    }
  ];
  return (
    <section id="projects" className="py-20 px-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-teal-500 text-center">Projects</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="bg-teal-500 p-6 shadow-md rounded-md text-center">
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="font-bold text-xl mt-4 text-black">{project.name}</h3>
            <p className="text-gray-900 mt-2">{project.description}</p>
            <a href={project.link} className="text-black mt-3 inline-block font-bold">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
};


const Services = () => {
  return (
    <section id="services" className="py-20 px-10 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-teal-500">Services</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {["Web Development", "UI/UX Design"].map((service, index) => (
          <div key={index} className="bg-teal-500 p-6 shadow-md rounded-md w-1/4 text-center">
            <h3 className="font-bold text-xl text-black">{service}</h3>
            <p className="text-gray-900 mt-2">Professional {service} services tailored to your needs.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 text-center bg-black">
      <h2 className="text-3xl font-bold text-teal-500">Contact Me</h2>
      <form className="mt-6 max-w-lg mx-auto bg-gray-900 p-6 shadow-md rounded-md">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-teal-500 bg-gray-800 text-white rounded-md mb-4" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-teal-500 bg-gray-800 text-white rounded-md mb-4" />
        <textarea placeholder="Your Message" className="w-full p-2 border border-teal-500 bg-gray-800 text-white rounded-md mb-4"></textarea>
        <button className="bg-teal-500 text-black px-6 py-2 rounded-md hover:bg-teal-400">Send Message</button>
      </form>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-teal-500 text-center py-6 mt-10">
      <p>© 2025 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans  bg-black text-gray-300">
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Experience/>
      <Projects/>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
