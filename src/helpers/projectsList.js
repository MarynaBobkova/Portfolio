import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";
import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

const projects = [
  {
    title: "Statistic table",
    skills: "JS, HTML, CSS, IIS",
    description: "I developed the frontend for internal monitoring tools utilized by community managers of the mobile FPS game 'SFG3' by ForgeGames",
    link:"https://www.youtube.com/watch?v=C45yHylfWP4.",
    description2: "These tools present a list of game servers along with crucial information such as the map, game mode, and player count. They serve the purpose of swiftly identifying issues and adjusting dedicated server settings to meet player demands. Community managers have the option to select a region and subsequently sort the table by any of its columns. Additionally, it is possible to locate a server based on specific parameters, such as the server name or map name.",
    img: project01,
    imgBig: project01Big,
    gitHubLink: "https://github.com/MarynaBobkova/Statistic_table",
    webLink: "http://sfg3ru1.planetcommander.ru/",
  },
  {
    title: "Online shop",
    skills: "TypeScript, HTML, CSS, Bootstrap",
    description:'Developed a frontend part for an online shop, allowing to add and remove cakes from the basket, user registration and authentication, and a section for feedback.',
    img: project02,
    imgBig: project02Big,
    gitHubLink: "https://github.com/MarynaBobkova/cake_shop",
  },
];

export { projects };
