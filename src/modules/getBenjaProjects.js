import trapholtImg from '@/assets/BenjaTrapholt.png';
import fantasyfestivalImg from '@/assets/fantasyfestival.png';
import projectmanagementImg from '@/assets/projectmanagement.png';

const projects = [
    {
        id: 1,
        title: "Trapholt",
        description: "This is my first semester project for Trapholt Art Museum.",
        image: trapholtImg,
        techstack: "HTML, CSS and Bootstrap",
        link: "https://github.com/Sinyedu/Trapholt-Eksamen",
    },
    {
        id: 2,
        title: "Fantasy Festival",
        description: "This is my second semester project for Fantasy Festival. Made together with Simon, Helena and Ida",
        image: fantasyfestivalImg,
        techstack: "Vue, JavaScript, Tailwind, Firebase, HTML, CSS",
        link: "https://github.com/Sinyedu/Fantasy-Festival",
    },
    {
        id: 3,
        title: "Project Management System",
        description: "Simon and I's project management system. That we made in our ADV JS elective. Which we are also trying to remake in React.",
        image: projectmanagementImg,
        techstack: "Vue, JavaScript, Tailwind, Firebase, HTML, CSS",
        link: "https://github.com/NimNim20/Project-Management-System"
    },
    {
        id: 4,
        title: "Green Marine",
        description: "A website portfolio for a company based on the farore islands. They specialize in marine work and boat repair.",
        image: "path/to/image5.jpg",
        techstack: "PHP, WordPress, HTML, CSS, JavaScript",
        link: "https://github.com/NimNim20/GreenMarine",
    },
    {
        id: 5,
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
