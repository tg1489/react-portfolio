import React from 'react';
import jabberwocky from '../images/jabberwocky.png';
import blogapp from '../images/blogapp.png';
import weather from '../images/weather.png';
import backend from '../images/backend.jpg';
import ecommerce from '../images/ecommerce.jpg';
import nodesqlconnector from '../images/nodesqlconnector.jpg';
import notetaker from '../images/notes.png';
import svgmaker from '../images/svgmaker.jpg';
import readme from '../images/readme.png';
import work from '../images/work.png';
import quiz from '../images/quiz.png';
import pwgen from '../images/pwgen.png';
import watchparty from '../images/Watchparty.png';
import regexgist from '../images/regex-gist.png';

export default function PortfolioCard() {
  const projects = [
    {
      id: 1,
      src: blogapp,
      href: 'https://ru-course-blog-app-440464be75af.herokuapp.com/home',
      alt: 'blog app',
      github: 'https://github.com/tg1489/blog-app',
      name: 'Blog App',
    },
    {
      id: 2,
      src: weather,
      href: 'https://tg1489.github.io/weather-dashboard/',
      alt: 'weather dashboard',
      github: 'https://github.com/tg1489/weather-dashboard',
      name: 'Weather Dashboard',
    },
    {
      id: 3,
      src: backend,
      href: 'https://github.com/tg1489/social-media-backend',
      alt: 'social media backend',
      github: 'https://github.com/tg1489/social-media-backend',
      name: 'Social Media Backend',
    },
    {
      id: 4,
      src: ecommerce,
      href: 'https://github.com/tg1489/ecommerce-backend',
      alt: 'ecommerce backend',
      github: 'https://github.com/tg1489/ecommerce-backend',
      name: 'E-Commerce Backend',
    },
    {
      id: 5,
      src: nodesqlconnector,
      href: 'https://github.com/tg1489/node-sql-connector',
      alt: 'Node SQL Connector',
      github: 'https://github.com/tg1489/node-sql-connector',
      name: 'Node SQL Connector',
    },
    {
      id: 6,
      src: notetaker,
      href: 'https://note-taker-for-ru-course.herokuapp.com/',
      alt: 'note taker',
      github: 'https://github.com/tg1489/note-taker',
      name: 'Note Taker',
    },
    {
      id: 7,
      src: svgmaker,
      href: 'https://github.com/tg1489/svg-maker',
      alt: 'svg maker',
      github: 'https://github.com/tg1489/svg-maker',
      name: 'SVG Maker',
    },
    {
      id: 8,
      src: readme,
      href: 'https://github.com/tg1489/readme-generator',
      alt: 'readme gen',
      github: 'https://github.com/tg1489/readme-generator',
      name: 'README Generator',
    },
    {
      id: 9,
      src: work,
      href: 'https://tg1489.github.io/work-day-scheduler/',
      alt: 'workday scheduler',
      github: 'https://github.com/tg1489/work-day-scheduler',
      name: 'Workday Scheduler',
    },
    {
      id: 10,
      src: quiz,
      href: 'https://tg1489.github.io/timed-coding-quiz/',
      alt: 'timed quiz',
      github: 'https://github.com/tg1489/timed-coding-quiz',
      name: 'Timed Coding Quiz',
    },
    {
      id: 11,
      src: pwgen,
      href: 'https://tg1489.github.io/password-generator/',
      alt: 'password gen',
      github: 'https://github.com/tg1489/password-generator',
      name: 'Password Generator',
    },
    {
      id: 12,
      src: jabberwocky,
      href: 'https://boiling-mountain-88128.herokuapp.com/',
      alt: 'jabberwocky',
      github: 'https://github.com/mmoghal/jabberwocky',
      name: 'Jabberwocky',
    },
    {
      id: 13,
      src: watchparty,
      href: 'https://santos-al.github.io/Watch-Party/',
      alt: 'watchparty',
      github: 'https://github.com/santos-al/Watch-Party',
      name: 'Watch Party',
    },
    {
      id: 14,
      src: regexgist,
      href: 'https://gist.github.com/tg1489/050c31dc77777786b9dcabd68cd9e49c',
      alt: 'regex-gist',
      github: 'https://gist.github.com/tg1489/050c31dc77777786b9dcabd68cd9e49c',
      name: 'Regular Expressions Gist',
    },
  ];
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <h3>Portfolio</h3>
          {projects.map((app) => (
            <div className='col portfolio-images' key={app.id}>
              <a href={app.href} target='_blank'>
                <img src={app.src} alt={app.alt} />
                <p>{app.name}</p>
              </a>
              <a href={app.github} target='_blank'>
                <p>GitHub</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
