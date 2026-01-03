import trapholtImg from "@/assets/trapholt.png";
import fantasyfestivalImg from "@/assets/fantasyfestival.png";
import dicegameImg from "@/assets/dicegame.png";
import projectmanagementImg from "@/assets/projectmanagement.png";
import dwpcinemaImg from "@/assets/dwpcinema.png";
// My dynmaic projects
const projects = [
  {
    id: 1,
    title: "Trapholt",
    description:
      "This is our first semester project at Trapholt. It is a museum that offers a wide range of exhibitions, events, and activities. The website is designed to be user-friendly and easy to navigate, with a clean and modern layout.",
    image: trapholtImg,
    techstack: "HTML, CSS and Bootstrap",
    link: "https://github.com/Sinyedu/Trapholt-Eksamen",
  },
  {
    id: 2,
    title: "Fantasy Festival",
    description:
      "This is our second semester project at Fantasy Festival. It is a festival that takes place in september. The website is designed to be user-friendly and easy to navigate, with a clean and modern layout.",
    image: fantasyfestivalImg,
    techstack: "Vue, JavaScript, Tailwind, Firebase, HTML, CSS",
    link: "https://github.com/Sinyedu/Fantasy-Festival",
    website: "https://fantasyfesitval.web.app/",
  },
  {
    id: 3,
    title: "Dice Game",
    description:
      "A minor game, that I made in my spare time. It is a simple dice game where you can play against the computer. The game is designed to be user-friendly and easy to navigate, with a clean and modern layout.",
    image: dicegameImg,
    techstack: "JavaScript, HTML, CSS",
    link: "https://github.com/Sinyedu/Dice-Game",
  },
  {
    id: 4,
    title: "Project Management System",
    description:
      "Benjamin and I's project management system. That we made in our ADV JS elective class. It is a simple project management system where you can create projects, add tasks, and assign them to team members.",
    image: projectmanagementImg,
    techstack: "Vue, JavaScript, Tailwind, Firebase, HTML, CSS",
    link: "https://github.com/NimNim20/Project-Management-System",
    website: "https://projektmanagement-b5376.web.app/",
  },
  {
    id: 5,
    title: "DWP - Dynamic Watch Parties",
    description:
      "A Website built for a school project. It is a simple website where you can book tickets/seats for Esport events! It is built with Vanilla PHP and vanilla JS. The website is designed to be user-friendly and easy to navigate, with a clean and modern layout.",
    image: dwpcinemaImg,
    techstack: "PHP, WordPress, HTML, TailwindCSS, JavaScript",
    link: "https://github.com/sinyedu/dwpcinema-2025",
  },
  {
    id: 6,
    title: "Project Management - Passion Project",
    description:
      "A project Benjamin and I are working on in our spare time. It is a simple project management system where you can create projects, add tasks, and assign them to team members. Built with React, TypeScript, NextJS, MongoDB and RedisDB.",
    image: "path/to/image6.jpg",
    techstack: "TypeScript, React, NextJS, MongoDB, RedisDB, TailwindCSS",
    link: "https://github.com/Sinyedu/passionista-project",
  },
];

export default function getSimonProjects() {
  return projects;
}
