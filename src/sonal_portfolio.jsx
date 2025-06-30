import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Sonal Singh</h1>
        <p className="text-lg text-gray-600">Cloud Native Developer</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://linkedin.com/in/Sonal_Singh" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="mailto:sonalsingh3498@gmail.com">
            <FaEnvelope className="text-2xl" />
          </a>
          <a href="tel:+917667063062">
            <FaPhone className="text-2xl" />
          </a>
        </div>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="mb-6">
          Dedicated Developer skilled in JavaScript. Proficient in React.js, I create responsive websites with exceptional user experiences.
          Committed to staying updated with emerging technologies, I excel in collaborative environments, driving projects forward with
          creativity and precision. Eager to contribute with enthusiasm and expertise.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
          {['JavaScript', 'React.js', 'Node.js', 'React Native', 'Redux', 'TypeScript', 'Azure', 'Agile', 'GIT', 'Android Studio', 'XCode', 'Web Design'].map(skill => (
            <li key={skill} className="bg-white p-2 rounded shadow">{skill}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4 mb-6">
          <li>
            <strong>Away Resort & Community (Fiverr)</strong><br />
            Implemented Yext search Functionality using Jambo and React.js.
          </li>
          <li>
            <strong>Coach and Central England</strong><br />
            Developed location, locator, and DM pages in 5 locales using React.js.
          </li>
          <li>
            <strong>Kate Spade</strong><br />
            Created multi-locale support pages using React.js.
          </li>
          <li>
            <strong>Ephrata National Bank</strong><br />
            Implemented internal Yext search functionality using React.js.
          </li>
          <li>
            <strong>EG Website & CMS</strong><br />
            Built EG website using WordPress and a CMS portal using Node.js.
          </li>
          <li>
            <strong>EG Club App</strong><br />
            Developed location screen and rewards tab using React Native and Azure.
          </li>
          <li>
            <strong>Book Reuse App</strong><br />
            Built barcode scanning screens for book price lookup using React Native.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="mb-6">
          <strong>Horizon X (July 2024 - Present)</strong><br />
          - Collaborated with designers for technically sound UIs<br />
          - Transitioned team to agile methodology<br />
          - Participated in code reviews, debugging, and improving tech stack understanding
        </p>

        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p>Bachelor of Computer Application – Sandip University (2018 - 2021)</p>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sonal Singh
      </footer>
    </div>
  );
}
