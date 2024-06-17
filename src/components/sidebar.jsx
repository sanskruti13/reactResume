import React from 'react';
import './Sidebar.css';

const skills= [
  { title: 'HTML', id: 1 },
  { title: 'CSS', id: 2 },
  { title: 'JavaScript', id: 3 },
]

const skillList = skills.map(skill =>
  <li key={skill.id}>
    {skill.title}
  </li>
);

const languages= [
  { title: 'English', id: 1, slug: 'Full Professional Proficiency' },
  { title: 'Hindi', id: 2, slug: 'Full Professional Proficiency' },
  { title: 'Marathi', id: 3, slug: 'Native or Bilingual Proficiency' },
]

const languageList = languages.map(language =>
  <li key={language.id}>
    {language.title}
    <br/>
    <em>{language.slug}</em>
  </li>
);

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className='myProfileContainer'>
        <img className='profileImage' src='/assets/profileImage.jpg' alt="profileImage" />
        <h2 className='Name'>Sanskruti Kale</h2>
        <p><strong>Frontend Developer</strong></p>
      </div>
      <div className='contactList'>
      <h3>CONTACT INFO :</h3>
       <ul>
          <li><strong>Email:</strong> sanskrutikale1312@gmail.com</li>
          <li><strong>Phone:</strong> 7666519648</li>
          <li><strong>LinkedIn:</strong> https://www.linkedin.com/in/sanskruti-kale-b45b311a1</li>
        </ul>
      </div>
      <section className='skillSection'>
        <h3>SKILLS :</h3>
        <ul>{skillList}</ul>

      </section>
      <section className='languageSection'>
        <h3>LANGUAGES :</h3>
        <ul>{languageList}</ul>
      </section>
   </div>
  );
}

export default Sidebar;
