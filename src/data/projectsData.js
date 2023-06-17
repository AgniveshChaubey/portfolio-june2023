import money from "../assets/svg/projects/money.png";
import calculator from "../assets/svg/projects/calculator.png";
import markdown from "../assets/svg/projects/markdown.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Budget Tracker App",
    projectDesc:
      "Track and manage your expenses with ease using our intuitive budget tracker app.",
    tags: ["React", " Bootstrap"],
    code: "https://github.com/AgniveshChaubey",
    demo: "https://lets-track-it.netlify.app/",
    image: money,
  },
  {
    id: 2,
    projectName: "Calculator",
    projectDesc:
      "Calculator app that performs basic mathematical calculations.",
    tags: ["HTML", "JavaScript", "CSS"],
    code: "https://github.com/AgniveshChaubey/fcc-calculator",
    demo: "https://agniveshchaubey.github.io/fcc-calculator/",
    image: calculator,
  },
  {
    id: 3,
    projectName: "Markdown Previewer",
    projectDesc:
      "App that converts Markdown input to HTML optputs with the help of Marked library.",
    tags: ["JavaScript", "Bootstrap"],
    code: "https://github.com/AgniveshChaubey/fcc-markdown-previewer",
    demo: "https://agniveshchaubey.github.io/fcc-markdown-previewer/",
    image: markdown,
  },
];
