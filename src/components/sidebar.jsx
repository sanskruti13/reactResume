import React from 'react';
import './Sidebar.css'; 

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
      <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Sanity.io</li>
          </ul>
        </div>
      </section>
      <section className='languageSection'>
        <h3>LANGUAGES :</h3>
      <div>
          <ul>
            <li>English</li>
            <p>Full Professional Proficiency</p>
            <li>Hindi</li>
            <p>Full Professional Proficiency </p>
            <li>Marathi</li>
            <p>Native or Bilingual Proficiency</p>
          </ul>
        </div>
      </section>
   </div>
  );
}

export default Sidebar;
