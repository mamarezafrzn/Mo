"use client";
import Image from "next/image";
import img_samChamp from "../../../public/assets/Img/projects/SamChamp.png";
import img_OE from "../../../public/assets/Img/projects/OE.png";
import img_yektoman from "../../../public/assets/Img/projects/Yektoman.png";
import img_LMS from "../../../public/assets/Img/projects/LMS.png";
import img_ansar from "../../../public/assets/Img/projects/ansar.png";
const Projects = () => {
  const PROJECT_LIST = [
    {
      title: "SamChamp",
      technologies: ["NextJs", "TypeScript", "Tailwind", "Redux"],
      description:
        "Platform for FIFA players to find opponents, join matches, and create custom tournaments.",
      image: img_samChamp,
    },
    {
      title: "Operate Ease",
      technologies: ["ReactJs", "TypeScript", "TailwindCss"],
      description:
        "Automation platform streamlining operations for hotels, restaurants, and service providers in the hospitality industry.",
      image: img_OE,
    },
    {
      title: "Yektoman",
      technologies: [
        "ReactJs",
        "Context API",
        "Styled Components",
        "Material UI",
      ],
      description:
        "Local loan management platform for tracking, organizing, and managing informal or family-based credits.",
      image: img_yektoman,
    },
    {
      title: "LMS (Learning Management System)",
      technologies: ["ReactJs", "Ant Design"],
      description:
        "Learning management system for organizing courses, assignments, and user roles in academic environments.",
      image: img_LMS,
    },    {
        title: "Ansar",
        technologies: ["Html", "Css"],
        description:
          "A brokerage platform offering market insights, trading tools, and account services through a secure, scalable, and user-friendly interface.",
        image: img_ansar,
      },
  ];

  return (
    <div className="flex flex-col gap-[2rem]">
      {PROJECT_LIST.map((project, index) => (
        <div
          key={index}
          className={`outline outline-[#e2cbd0] rounded-lg w-[80%] flex ${
            index % 2 == 0
              ? "justify-start"
              : "justify-end ml-auto flex-row-reverse"
          }`}
        >
          <Image
            src={project.image}
            className={` w-[30%] ${
              index % 2 == 0 ? "rounded-l-lg" : "rounded-r-lg"
            }`}
          />
          <div className="p-[1rem] flex flex-col">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="flex flex-row content-center items-center mt-auto gap-[0.1rem]">
              Tech:
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-xl bg-white p-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
