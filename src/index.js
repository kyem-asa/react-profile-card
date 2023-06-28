import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Avatar() {
  return (
    <img
      src='pinkclouds.jpg'
      alt='pink clouds in the sky'
      className='avatar image'
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Kyem Asa</h1>
      <p>
        Hi! I'm a full-stack web developer based in Texas 🤠. When not coding,
        I'm playing Genshin Impact or reading manwha. Feel to reach out to me if
        you'd like to collaborate!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill name='Frontend Development' emoji='👍' color='#F8C8DC' />
      <Skill name='UX/UI Design' emoji='🎉' color='#F89880' />
      <Skill name='Backend Development' emoji='🌟' color='#F33A6A' />
      <Skill name='Technical Writing' emoji='🌻' color='#FAA0A0' />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>{' '}
    </div>
  );
}
function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
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
