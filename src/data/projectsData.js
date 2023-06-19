import portfolio from "../assets/svg/projects/portfolio.png";
import library from "../assets/svg/projects/library.png";
import money from "../assets/svg/projects/money.png";
import calculator from "../assets/svg/projects/calculator.png";
import markdown from "../assets/svg/projects/markdown.svg";

export const projectsData = [
  {
    id: 6,
    projectName: "Bowtie - Schema   Implementation Validator",
    projectDesc:
      " Tool that aids in validating various implementations against Official Test Suites and provides an intuitive visualization of the results.",
    tags: ["React", "Bootstrap", "JSON Schema"],
    code: "https://github.com/bowtie-json-schema/bowtie/pull/241",
    demo: "https://bowtie-json-schema.github.io/bowtie/",
    image:
      "https://bowtie-json-schema.readthedocs.io/en/latest/_static/dreamed.png",
  },
  {
    id: 5,
    projectName: "Full-Stack Portfolio Manager",
    projectDesc:
      "Create a dynamic portfolio and keep its information updated with a secure dashboard.",
    tags: ["React", "Context APIs", "Express.js", "JWT"],
    code: "https://github.com/AgniveshChaubey/portfolio-june2023",
    demo: "https://agnivesh.netlify.app/",
    image: portfolio,
  },
  {
    id: 4,
    projectName: "Library Management API",
    projectDesc:
      "This API allows open access to list and read books, but requires user authentication for specific purposes.",
    tags: ["Express","JWT", "Espress-session"],
    code: "https://github.com/AgniveshChaubey/book-management-api/tree/master/final_project",
    demo: "https://library-api-8k0s.onrender.com",
    image: library,
  },
  {
    id: 3,
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
    id: 1,
    projectName: "Markdown Previewer",
    projectDesc:
      "App that converts Markdown input to HTML optputs with the help of Marked library.",
    tags: ["JavaScript", "Bootstrap"],
    code: "https://github.com/AgniveshChaubey/fcc-markdown-previewer",
    demo: "https://agniveshchaubey.github.io/fcc-markdown-previewer/",
    image: markdown,
  },
];
