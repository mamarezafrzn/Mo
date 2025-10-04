"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import en from "@/locales/en/en";
import de from "@/locales/de/de";

import Skills from "./skills/skills";

import imgGithub from "../../public/assets/Img/Icons/github.svg";
import imgLinkedin from "../../public/assets/Img/Icons/linkedin.svg";
import imgDeutschland from "../../public/assets/Img/Icons/germany-flag-icon.svg";
import imgEngland from "../../public/assets/Img/Icons/united-kingdom-flag-icon.svg";
import Logo from "../../public/assets/Img/Icons/Mo.svg";

import About from "./about/about";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Education from "./educations/Education";
import Contact from "./contact/contact";

const MainContainer = () => {
  const router = useRouter();

  const pathname = usePathname(); // e.g. "/de/about"
  const currentLocale = pathname.split("/")[1] || "en";
  const t = currentLocale === "en" ? en : de;
  const [Lang, setLang] = useState({
    name: currentLocale,
    icon: currentLocale === "de" ? imgDeutschland : imgEngland,
  });
  const flag = [
    {
      name: "en",
      icon: imgEngland,
    },
    { name: "de", icon: imgDeutschland },
  ];

  const changeLang = (lang) => {
    setLang({
      name: lang,
      icon: lang === "de" ? imgDeutschland : imgEngland,
    });
    router.push(`/${lang}`);
  };

  const socials = [
    {
      name: "Linkedin",
      icon: imgLinkedin,
      link: "https://www.linkedin.com/in/mo-firouzabadi-nejad/",
    },
    {
      name: "Github",
      icon: imgGithub,
      link: "https://github.com/mamarezafrzn",
    },
  ];

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    education: educationRef,
    contact: contactRef,
  };

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-auto">
      <div
        className="w-[80%] h-[90%] bg-[#ffffff]/50 backdrop-blur-lg border border-[#e2cbd0] text-[#3a2d2f]
    rounded-xl flex font-sans overflow-hidden"
      >
        <div className="w-[4rem] lg:w-[20%] h-full">
          <div className="h-[4rem] border-b border-[#e2cbd0] px-[0.5rem] sm:px-[1rem] py-[0.1rem] sm:py-[0.5rem] overflow-hidden">
            <Image
              src={Logo}
              className=""
              style={{ height: "-webkit-fill-available", width: "auto" }}
            />
          </div>
          <div className="lg:p-[1rem] ">
            <div className="">
              <h3 className="hidden lg:block">{t.categories.label}</h3>
              <ul className="pb-[0.5rem] pt-[0.5rem] flex flex-col items-center">
                {t.categories.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center w-fit lg:w-full cursor-pointer hover:bg-black/30 rounded-md p-[0.5rem] pl-[0.5rem] gap-[1rem] "
                  >
                    <p className="text-xl">{item.icon}</p>
                    <li className="hidden lg:block">
                      <span>{item.name}</span>
                    </li>
                  </div>
                ))}
              </ul>
              <h3 className="hidden lg:block">{t.socials.label}</h3>
              <ul className="pb-[0.5rem] pt-[0.5rem] flex flex-col items-center">
                {socials.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    key={item.name}
                    className="flex items-center w-fit lg:w-full cursor-pointer hover:bg-black/30 rounded-md p-[0.5rem] pl-[0.5rem] gap-[1rem] "
                  >
                    <Image
                      src={item.icon}
                      className="w-[1.1rem] h-[1.1rem] md:w-[1.5rem] md:h-[1.5rem]"
                      alt={item.name}
                    />
                    <li className="hidden lg:block">{item.name}</li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-l border-[#e2cbd0] flex flex-col overflow-auto">
          <div className="bg-[#fdf4f7] h-[4rem] border-b border-[#e2cbd0] px-[1rem] flex items-center justify-end gap-[1rem] sticky top-0 z-10">
            <div className="relative  inline-block group text-center">
              <div className="flex flex-row items-center gap-[0.5rem] w-[3.5rem] justify-center bg-white/20 rounded-md p-1 border-b border-transparent group-hover:bg-white/25 group-hover:border-white group-hover:rounded-b-none cursor-pointer">
                {Lang.name}
                <Image src={Lang.icon} alt={Lang.name} className="w-[1rem]" />
              </div>
              <div className="bg-white hidden absolute z-1 rounded-b-xl group-hover:block">
                {flag.map((btnLang) => (
                  <button
                    key={btnLang.name}
                    onClick={() => changeLang(btnLang.name)}
                    className={` w-[3.5rem] justify-center text-center cursor-pointer hover:white/20 flex flex-row items-center gap-[0.5rem] p-1 ${
                      btnLang.name == Lang && "bg-white/20"
                    }`}
                  >
                    {btnLang.name}
                    <Image
                      src={btnLang.icon}
                      className="w-[1rem]"
                      alt={btnLang.name}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-[2rem] h-[2rem] bg-transparent border border-[#e2cbd0] rounded-full"></div>
          </div>
          <div className="flex-1 overflow-y-auto scroll-pt-12 p-[1rem] flex flex-col gap-[2rem]">
            <div ref={aboutRef}>
              {/* <h1 className="text-2xl font-bold">Mo</h1> */}
              <About t={t} />
            </div>
            <div ref={skillsRef}>
              <h3 className="text-base font-semibold">{t.main.skills.title}</h3>
              <Skills />
            </div>
            <div ref={experienceRef}>
              <h3 className="text-base font-semibold mb-[1rem] mb-[1rem]">
                {t.main.experience.title}
              </h3>
              <Experience t={t} />
            </div>
            <div ref={projectsRef}>
              <h3 className="text-base font-semibold mb-[1rem]">
                {t.main.projects.title}
              </h3>
              <Projects t={t} />
            </div>
            <div ref={educationRef}>
              <h3 className="text-base font-semibold mb-[1rem]">
                {t.main.education.title}
              </h3>
              <Education t={t} />
            </div>
            <div ref={contactRef}>
              <h3 className="text-base font-semibold mb-[1rem]">
                {t.main.contact.title}
              </h3>
              <Contact t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
