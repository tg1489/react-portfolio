import React from 'react';

export default function Resume() {
  return (
    <div className='container'>
      <h3>Resume</h3>
      <p>
        Download my{' '}
        <a
          href='https://docs.google.com/document/d/1UIBEt2GOw10aTy1I1kXhlkOCiz-OalSK/edit?usp=sharing&ouid=115209332736509351247&rtpof=true&sd=true'
          className='resume-link'
          target='_blank'
        >
          resume
        </a>
      </p>

      <ul className='browser-default resume-list'>
        <label className='resume-label'>Front-End Proficiencies:</label>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <label className='resume-label'>Back-End Proficiencies:</label>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>T-SQL</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
