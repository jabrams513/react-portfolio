import JAProfPic from '../assets/images/JAProfPic.png';

export default function About() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className="pb-2 mx-5">About</h1>

      <div className="img-container">
        <img className="prof-img" src={JAProfPic} />
      </div>

      <p className="about-text pb-2 mx-5">

        <p>
          Greetings! I'm Jonathan Abrams, a passionate web developer dedicated to crafting seamless and innovative digital experiences.
        </p>

        <p>
          My journey in web development began with a solid educational foundation, earning a Certificate in Web Development from the University of Pennsylvania. Complementing this, I hold a BA from The University of Chicago in Comparative Human Development, a field that blends Biology, Psychology, Anthropology, and Sociology to offer a unique perspective on human behavior.
        </p>

        <p>
          Throughout my career, I've collaborated with business executives and subject matter experts across diverse projects in finance and technology. This experience has honed not just my technical skills, but also my leadership, project management, and stakeholder engagement abilities. My commitment to delivering solutions that exceed both client and user expectations remains unwavering.
        </p>

        <p>
          Proficient in a range of technologies, I specialize in the MERN stack while actively seeking opportunities to expand my skill set. Driven by an insatiable passion for web development, I thrive on continuous learning, collaboration, and problem-solving. I adhere to AGILE methodologies, prioritize clean code practices, and champion user-centric design principles.
        </p>

        <p>
          Some of my notable projects include Round on Me and Reader's Reference, with more on the horizon. These experiences have not only refined my technical prowess but also allowed me to contribute to meaningful solutions.
        </p>

        <p>
          In acknowledgment of my willingness to share personal experiences, I'm proud to have received the Dale Carnegie Breakthrough Award.
        </p>

        <p>
          Colleagues and clients have praised my attention to detail, innovative thinking, and dedication to customer satisfaction.
        </p>

        <p>
          Beyond coding, I find joy in playing squash and tennis, engaging in home improvement projects, volunteering, working on cars, creating art, and exploring new destinations. These interests enrich my perspective and creativity in my work.
        </p>

        <p>
          Feel free to connect with me via this site's contact page or through LinkedIn, phone, or email (details available on my resume). I'm always open to connecting with fellow enthusiasts, potential collaborators, or anyone keen on discussing web development.
        </p>

        <p>
          For a comprehensive overview of my background and projects, please refer to my resume and portfolio.
        </p>

        <p>
          Whether you're interested in collaborating on exciting projects, exploring job opportunities, or simply discussing web development trends, I'd be delighted to hear from you. Let's connect and create something extraordinary together!
        </p>

        <p style={{ textAlign: 'center' }}>
          <div>“On your way to greatness, you will fall, but like a Phoenix rising from the ashes, you too shall rise again.”</div>
          <div>― Michael Bassey Johnson , Night of a Thousand Thoughts</div>
        </p>

      </p>
    </div>
  );
}
