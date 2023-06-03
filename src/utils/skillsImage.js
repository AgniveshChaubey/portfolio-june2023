import gcp from "../assets/svg/skills/gcp.svg";
import html from "../assets/svg/skills/html.svg";
import docker from "../assets/svg/skills/docker.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import react from "../assets/svg/skills/react.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import git from "../assets/svg/skills/git.svg";
import go from "../assets/svg/skills/go.svg";
import php from "../assets/svg/skills/php.svg";
import nginx from "../assets/svg/skills/nginx.svg";
import figma from "../assets/svg/skills/figma.svg";
import markdown from "../assets/svg/skills/markdown.svg";
import canva from "../assets/svg/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "docker":
      return docker;

    case "css":
      return css;

    case "javascript":
      return javascript;

    case "react":
      return react;

    case "bootstrap":
      return bootstrap;

    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;

    case "go":
      return go;
    case "java":

    case "php":
      return php;

    case "git":
      return git;

    case "nginx":
      return nginx;

    case "figma":
      return figma;

    case "markdown":
      return markdown;
    case "canva":
      return canva;
    default:
      break;
  }
};
