import React from 'react';
import './Content.css'; 

const Content = () => {
  return (
    <div className="content">
      <section className='profileSection'>
        <h2><strong>Profile</strong></h2>
        <div>
            Passionate frontend developer with a strong foundation in JavaScript and expertise in frameworks like
            Next.js and React.js. Proficient in crafting dynamic and responsive web applications with a keen eye for
            detail. Experienced in utilizing Sanity.io for efficient content management solutions. Eager to contribute
            innovative ideas and collaborate in dynamic teams to drive impactful projects forward. 
          </div>      
      </section>
      <section className='workExperienceSection'>
        <h2><strong>Work Experience</strong></h2>
      <div>
          <h3>Intern </h3>
          <p>DocXel Pvt Ltd, Pune, India </p>
          <p>01/2024 - Present,</p>
          <p>Worked on developing and maintaining web applications.</p>
        </div>
      </section>
      <section className='educationalSection'>
        <h2><strong>Educational Qualification</strong></h2>
        <div>
          <h3>Master of Computer Application (Pursuing)</h3>
          <p>From Modern Institute of Business Studies affiliated to Savitribai Phule Pune University, Pune.</p>
          <p>2022- 2024</p>
        </div>
        <div>
          <h3>Bachelor of Science with 86.11%</h3>
          <p>From Shivaji Science College affiliated to Sant Gadge Baba Amravati University, Amravati</p>
          <p>2019-2022</p>
        </div>
        <div>
          <h3>12th with 67.85%</h3>
          <p>From Municipal Junior College, Paratwada, dist:Amravati</p>
          <p>2018-2019</p>
        </div>
        <div>
          <h3>10th with 81.40%</h3>
          <p>From Subodh High School, Paratwada, dist:Amravati</p>
          <p>2016-2017</p>
        </div>
      </section>
    </div>
  );
}

export default Content;
