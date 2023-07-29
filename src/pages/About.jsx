import React from 'react';
import '../App.css';
import me from '../images/me.png';

export default function About() {
  return (
    <div>
      <section className='container about-me m3'>
        {/* className='m3' is a margin of 1rem; */}
        <h3 className='about-me-h3'>About me</h3>
        <img
          id='profile-pic'
          className='about-me-img'
          src={me}
          alt='profile pic'
        />

        <p className='about-me'>
          Hi, I'm Tony Guarino, a full-stack web developer with a passion for
          creating robust and scalable applications. I specialize in the MERN
          stack, which encompasses MongoDB, Express.js, React, and Node.js. I'm
          also proficient in other advanced web development technologies such as
          GraphQL and TypeScript.
        </p>
        <p className='about-me'>
          My journey in web development began with learning the fundamentals of
          HTML and CSS, but I quickly delved into more complex technologies.
          During my studies, I gained experience in building RESTful APIs using
          Node.js and Express.js, leveraging the power of JavaScript on both the
          server and client sides.
        </p>
        <p className='about-me'>
          One of my areas of expertise is working with databases. I have
          hands-on experience with MongoDB, a flexible and scalable NoSQL
          database. Additionally, I have utilized Sequelize, an
          Object-Relational Mapping (ORM) tool, to work with relational
          databases such as MySQL.
        </p>

        <p className='about-me'>
          Another technology I'm proficient in is React, a powerful JavaScript
          library for building user interfaces. I have developed single-page
          applications using React, incorporating features like state management
          and component reusability.
        </p>
        <p className='about-me'>
          When it comes to version control and collaboration, I rely on Git to
          manage my projects. Git's branching and merging capabilities have been
          crucial in maintaining codebase integrity and facilitating seamless
          teamwork.
        </p>
        <p className='about-me'>
          Overall, I'm passionate about leveraging cutting-edge technologies to
          create innovative web solutions. I'm constantly expanding my knowledge
          by staying up-to-date with the latest trends and exploring new
          frameworks and tools.
        </p>
        <p className='about-me'>
          Thank you for visiting my portfolio! Feel free to explore my projects
          and get in touch if you have any inquiries or collaboration
          opportunities.
        </p>
      </section>
    </div>
  );
}
