import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

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
  return (
    <div className="skill-list">
      <Skill name="HTML & CSS" emoji="👍" color="#F8C8DC" />
      <Skill name="MongoDB" emoji="🎉" color="#F89880" />
      <Skill name="NodeJS" emoji="🌟" color="#F33A6A" />
      <Skill name="TailwindCSS" emoji="🌻" color="#FAA0A0" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>{' '}
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
