import trapholtImg from '@/assets/trapholt.png';
import fantasyfestivalImg from '@/assets/fantasyfestival.png';
import dicegameImg from '@/assets/dicegame.png';
import projectmanagementImg from '@/assets/projectmanagement.png';
// My dynmaic projects
const projects = [
    {
        id: 1,
        title: "Trapholt",
        description: "This is our first semester project at Trapholt.",
        image: trapholtImg,
        techstack: "HTML, CSS and Bootstrap",
        link: "https://github.com/Sinyedu/Trapholt-Eksamen",
    },
    {
        id: 2,
        title: "Fantasy Festival",
        description: "This is our second semester project at Fantasy Festival.",
        image: fantasyfestivalImg,
        techstack: "Vue, JavaScript, Tailwind, Firebase, HTML, CSS",
        link: "https://github.com/Sinyedu/Fantasy-Festival",
        website: "https://fantasyfesitval.web.app/"
    },
    {
        id: 3,
        title: "Dice Game",
        description: "A minor game, that I made in my spare time. It is a simple dice game where you can play against the computer.",
        image: dicegameImg,
        techstack: "JavaScript, HTML, CSS",
        link: "https://github.com/Sinyedu/Dice-Game"
    },
    {
        id: 4,
        title: "Project Management System",
        description: "Benjamin and I's project management system. That we made in our ADV JS elective",
        image: projectmanagementImg,
        techstack: "Vue, JavaScript, Tailwind, Firebase, HTML, CSS",
        link: "https://github.com/NimNim20/Project-Management-System",
        website: "https://projektmanagement-b5376.web.app/"
    },
    {
        id: 5,
        title: "Green Marine",
        description: "A simple Simon game that I made in my spare time. It is a simple game where you have to repeat the sequence of colors.",
        image: "path/to/image5.jpg",
        techstack: "PHP, WordPress, HTML, CSS, JavaScript",
        link: "https://github.com/NimNim20/GreenMarine",
    },
    {
        id: 6,
        title: "RetroTroppen",
        description: "A webshop built for a school project. It is a simple webshop where you can buy retro interior.",
        image: "path/to/image6.jpg",
        techstack: "PHP, WordPress, HTML, CSS, JavaScript",
        link: "https://github.com/NimNim20/RetroTroppen"
    }
];

export default function getSimonProjects() {
    return projects;
}
