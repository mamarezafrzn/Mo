import Image from "next/image";

import imgHtml from "../../../public/assets/Img/Icons/HTML5.svg";
import imgCss from "../../../public/assets/Img/Icons/css.svg";
import imgJavaScript from "../../../public/assets/Img/Icons/javascript.svg";
import imgTypeScript from "../../../public/assets/Img/Icons/typescript.svg";
import imgReactJS from "../../../public/assets/Img/Icons/ReactJS.svg";
import imgNextJS from "../../../public/assets/Img/Icons/nextjs.svg";
import imgGit from "../../../public/assets/Img/Icons/Git.svg";
import imgTailwindCSS from "../../../public/assets/Img/Icons/tailwind-css.svg";
import imgRedux from "../../../public/assets/Img/Icons/redux.svg";

const Skills = () => {
  const skills_list = [
    {
      name: "HTML5",
      icon: imgHtml,
    },
    {
      name: "CSS/SCSS",
      icon: imgCss,
    },
    {
      name: "JavaScript",
      icon: imgJavaScript,
    },
    {
      name: "TypeScript",
      icon: imgTypeScript,
    },
    {
      name: "ReactJS",
      icon: imgReactJS,
    },
    {
      name: "NextJS",
      icon: imgNextJS,
    },
    {
      name: "Git",
      icon: imgGit,
    },
    {
      name: "Tailwind CSS",
      icon: imgTailwindCSS,
    },
    {
      name: "Redux",
      icon: imgRedux,
    },
  ];

  return (
    <>
      <ul className="flex flex-row justify-between flex-wrap justify-center md:p-[1rem] gap-[1rem] lg:gap-[2rem] ">
        {skills_list.map((item) => (
          <li
            key={item.name}
            className="flex flex-col items-center justify-center gap-[0.5rem] w-[6rem] p-[1rem] border-[2px] border-[#fbe9f0] rounded-xl text-center "
          >
            <Image src={item.icon} alt={item.name} className="w-[2rem]" />
            <span className="text-xs font-bold">{item.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
