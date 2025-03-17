
import React from "react";
import {  FaChalkboardTeacher, FaCode } from "react-icons/fa";
import gamesApp from "@/public/gamesApp.png";
import Yummy from "@/public/Yummy.png";
import FreshCart from "@/public/FreshCart.png";
import FilmVoyag from "@/public/FilmVoyag.png";

export const links= [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


interface experience {
  title: string,
  location: string,
  description: string,
  icon: React.ReactElement,
  date: string
}

const experiencesData:experience[] = [
    {
      title: "Instructor at Smart Family",
      location: "Sohag",
      description:
        `Conducted hands-on training sessions focused on HTML and CSS, helping students build foundational web development skills. 
        Assisted in developing and delivering course materials, ensuring students gained practical experience through real-world projects.`,
      icon: React.createElement(FaChalkboardTeacher),
      date: "2024 - Present",
  }
 ] as const;

 export { experiencesData }

interface project{
  title: string,
  description: string,
  tags: string[],
  imageUrl: any,
  url: string, 

}

export const projectsData:project[] = [
  {
    title: "Games-App",
    description:
      "Developed a desktop gaming application that allows users to play, manage, and track various games. Integrated features for multiplayer support, leaderboards, and game statistics.",
    tags: ["HTML", "CSS", "BootStrap", "JavaScript"],
    imageUrl: gamesApp,
    url: "https://aboelwafa2936.github.io/games-app/",
  },
  {
    title: "Yummy",
    description:
      "Built a responsive food recipe website allowing users to browse, search, and filter through a wide variety of recipes. Implemented interactive features such as recipe saving and step-by-step cooking instructions.",
    tags: ["HTML", "CSS", "Tailwind Css", "Tailwind", "jQuery" , "JavaScript"],
    imageUrl: Yummy,
    url: "https://aboelwafa2936.github.io/yummy/",
  },
  {
    title: "FreshCart",
    description:
      " Developed an e-commerce platform allowing users to browse products, manage their cart, and checkout. Integrated a product categorization system with filtering options and a testimonials section for customer reviews.",
    tags: ["React", "Tailwind CSS", "React Query", "Framer"],
    imageUrl: FreshCart,
    url: "https://aboelwafa2936.github.io/FreshCart/",
  },
  {
    title: "FilmVoyag",
    description:
      "Created a movie exploration platform that displays trending, top-rated, and upcoming movies. Users can view detailed movie information, track popular actors, and manage personal watchlists.",
    tags: ["React", "Tailwind CSS", "TypeScript" , "React Query", "Framer"],
    imageUrl: FilmVoyag,
    url: "https://aboelwafa2936.github.io/FilmVoyag/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "Sass",
  "React",
  "Next.js",
  "Git & Github",
  "Redux",
  "Framer Motion",
] as const;