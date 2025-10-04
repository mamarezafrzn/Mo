"use client";
import Image from "next/image";
import img_samChamp from "../../../public/assets/Img/projects/SamChamp.png";
import img_OE from "../../../public/assets/Img/projects/OE.png";
import img_yektoman from "../../../public/assets/Img/projects/Yektoman.png";
import img_LMS from "../../../public/assets/Img/projects/LMS.png";
import img_ansar from "../../../public/assets/Img/projects/ansar.png";

const Projects = ({ t }) => {
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
    },
    {
      title: "Ansar",
      technologies: ["Html", "Css"],
      description:
        "A brokerage platform offering market insights, trading tools, and account services through a secure, scalable, and user-friendly interface.",
      image: img_ansar,
    },
  ];

  return (
    <div className="flex flex-col gap-[2rem]">
      {t.main.projects?.projectList.map((project, index) => (
        <a
          href={project.link}
          target="_blank"
          key={index}
          className={`outline outline-[#e2cbd0] rounded-lg w-[90%] flex relative group cursor-pointer shadow-sm hover:shadow-md transition ${
            index % 2 == 0
              ? "justify-start"
              : "justify-end ml-auto flex-row-reverse"
          }`}
        >
          <div className="relative w-[40%] h-50">
            {" "}
            {/* <-- give it a height (h-48) or use aspect-ratio */}
            <Image
              src={project.image}
              alt={`${project.title} Image`}
              fill
              className={`${
                index % 2 === 0 ? "rounded-l-lg" : "rounded-r-lg"
              } object-cover`}
            />
            {/* OVERLAY — placed inside image wrapper so text sits on the image.
            group-hover uses the parent `.group` so hovering anywhere on parent triggers it */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
              <p className="bg-black/60 text-white px-4 py-2 rounded-lg underline underline-offset-4">
                Github
              </p>
            </div>
          </div>
          <div className="p-[1rem] flex flex-col">
            <h4 className="text-lg font-semibold">{project.title}</h4>
            <p>{project.description}</p>
            <div className="flex flex-row content-center items-center mt-auto gap-[0.1rem]">
              Tech:
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-xl bg-gray-100 p-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
