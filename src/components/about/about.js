import Image from "next/image";

import imgDownload from "../../../public/assets/Img/Icons/download.svg";

const About = ({t}) => {
  return (
    <>
      <p>{t.main.aboutMe}</p>
      <div className="mt-[1rem] flex flex-row gap-[1rem]">
        <a
          className="flex flex-row gap-[0.5rem] items-center p-[0.5rem] border rounded-xl border-[#e2cbd0] hover:bg-[#fbe9f0] text-sm"
          download={true}
          target="_blank"
          href="/assets/resume/Mohammadreza-Firoozabadinejad-CV.pdf"
          rel="noopener noreferrer"
        >
          <Image
            src={imgDownload}
            alt="Resume English Download"
            className="w-[0.8rem] h-[0.8rem]"
          />{" "}
          Resume En
        </a>
        <a
          className="flex flex-row gap-[0.5rem] items-center p-[0.5rem] border rounded-xl border-[#e2cbd0] hover:bg-[#fbe9f0] text-sm"
          download={true}
          target="_blank"
          href="/assets/resume/Lebenslauf_Mohammadreza-Firoozabadinejad.pdf"
          rel="noopener noreferrer"
        >
          <Image
            src={imgDownload}
            alt="Resume Deutsch Download"
            className="w-[0.8rem] h-[0.8rem]"
          />{" "}
          Resume De
        </a>
      </div>
    </>
  );
};

export default About;
