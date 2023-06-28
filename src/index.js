import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Avatar() {
  return (
    <div>
      <img
        src="pinkclouds.jpg"
        alt="pink clouds in the sky"
        className="image"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>kyem asa</h1>
      <p>
        Full-stack web developer and Genshin Impact player based in Texas. When
        not coding, I'm playing video games or reading manwha. Feel to reach out
        to me to get in touch!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skillList">
      <p className="skill">HTML & CSS</p>
      <p>UX/UI design</p>
      <p></p>
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
