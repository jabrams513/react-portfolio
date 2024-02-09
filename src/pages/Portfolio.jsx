import Project from '../components/Project'

export default function Portfolio() {
  const projects = [
    { title: "Round on Me", description: "Golfers look for games can connect with one another", github: "https://github.com/jabrams513/round-on-me", deployed: "https://round-on-me-d919eb5aa07c.herokuapp.com/", image: "pic1", stack: "Stack" },
    { title: "Food Truck Depot", description: "At the truck depot eaters meet feeders", github: "https://github.com/jabrams513/food-truck-depot", deployed: "Link", image: "pic2", stack: "Stack" },
    { title: "Weather Forecast", description: "Punxsutawney Phil's worst nightmare", github: "https://github.com/jabrams513/five-day-weather-forecast", deployed: "https://jabrams513.github.io/five-day-weather-forecast/", image: "pic3", stack: "Stack" },
    { title: "Reader's Reference", description: "For the curious reader", github: "https://github.com/jabrams513/readers-reference", deployed: "https://jabrams513.github.io/readers-reference/", image: "pic4", stack: "Stack" },
    { title: "Global Access", description: "Your partner in exceptional opportunities", github: "Link", deployed: "https://www.globalaccesscsg.com/", image: "pic5", stack: "Stack" },
  ]
  return (
    <div>
      <h1 style={{ textAlign: 'center' }} className="pb-2 mx-5">Portfolio</h1>
      <p className="pb-2 mx-5">
        <p>Welcome to my portfolio, where pixels meet purpose and innovation transforms into code. Below are some selected projects that showcase my skills, creativity, and commitment to delivering exceptional web solutions.</p>

        {projects.map(project => (
          <Project project={project} key={`project-${project.title}`} />
        ))}


        <strong>Project Name 1: [Provide a brief project name]</strong>
        <p>Description: [Briefly describe the project, its goals, and your role. Highlight any unique challenges or solutions.]</p>
        <p>Technologies Used: [List key technologies or tools used.]</p>

        <strong>Project Name 2: [Provide a brief project name]</strong>
        <p>Description: [Briefly describe the project, its goals, and your role. Highlight any unique challenges or solutions.]</p>
        <p>Technologies Used: [List key technologies or tools used.]</p>

        <strong>Project Name 3: [Provide a brief project name]</strong>
        <p>Description: [Briefly describe the project, its goals, and your role. Highlight any unique challenges or solutions.]</p>
        <p>Technologies Used: [List key technologies or tools used.]</p>

        <p>These are just a few examples of my work, each representing a unique challenge and an opportunity to push the boundaries of web development. Click on each project to explore further details and see the results firsthand.</p>
        <p>Interested in learning more about my skills and approach? Visit my resume for a comprehensive overview of my professional background.</p>
        <p>If you have a project in mind or would like to discuss potential collaborations, I'm just an email away at [your.email@example.com]. Let's bring your ideas to life!</p>
      </p>
    </div>
  );
}