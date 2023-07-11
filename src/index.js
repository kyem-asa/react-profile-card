import { StrictMode, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skillsData = [
  {
    name: 'HTML & CSS',
    color: '#F8C8DC',
    level: 'advanced',
  },
  {
    name: 'React',
    color: '#F89880',
    level: 'basic',
  },
  {
    name: 'MongoDB',
    color: '#F33A6A',
    level: 'intermediate',
  },
  {
    name: 'NodeJS',
    color: '#FAA0A0',
    level: 'intermediate',
  },
];
function Avatar() {
  return (
    <img
      src="pinkclouds.jpg"
      alt="pink clouds in the sky"
      className="avatar image"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Hi, I'm Grey</h1>
      <p>
        I'm a full-stack web developer based in Texas. 🤠 When not coding, I
        like to play gacha games, hang out with my cats, and read manhwa. Thanks
        for reading!
      </p>
    </div>
  );
}

function SkillList() {
  let skills = skillsData;
  const numSkills = skills.length;

  return (
    <ul className="skill-list">
      {skillsData.map((skills) => (
        <Skill skillObject={skills} key={skills.name} />
      ))}
    </ul>
  );
}

function Skill({ skillObject }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObject.color }}>
      <span>{skillObject.name}</span>
      <span>
        {skillObject.level === 'basic' && '🐤'}
        {skillObject.level === 'intermediate' && '🌟'}
        {skillObject.level === 'advanced' && '💪'}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
