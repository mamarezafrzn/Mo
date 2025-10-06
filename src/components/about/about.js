import Image from "next/image";

import imgDownload from "../../../public/assets/Img/Icons/download.svg";

const About = ({ t }) => {
  return (
    <>
      <p>{t.main.aboutMe}</p>
      <div className="mt-[1rem] flex flex-row gap-[1rem]">
        {/* <a
          className="flex flex-row gap-[0.5rem] items-center p-[0.5rem] border rounded-xl border-[#e2cbd0] hover:bg-[#fbe9f0] text-sm"
          download={true}
          target="_blank"
          href="/assets/resume/Mohammadreza-Firoozabadinejad-CV.pdf"
          rel="noopener noreferrer"
        > */}
        <a
          href="https://drive.google.com/file/d/1m6Vvx49MzhmlXl-WKYOYQTpHTXw98l1F/view?usp=drive_link"
          target="_blank"
          className="flex flex-row gap-[0.5rem] items-center p-[0.5rem] border rounded-xl border-[#e2cbd0] hover:bg-[#fbe9f0] text-sm"
        >
          <Image
            src={imgDownload}
            alt="Resume English Download"
            className="w-[0.8rem] h-[0.8rem]"
          />{" "}
          Resume En
        </a>
        {/* <a
          className="flex flex-row gap-[0.5rem] items-center p-[0.5rem] border rounded-xl border-[#e2cbd0] hover:bg-[#fbe9f0] text-sm"
          download={true}
          target="_blank"
          href="/assets/resume/Lebenslauf_Mohammadreza-Firoozabadinejad.pdf"
          rel="noopener noreferrer"
        > */}
        <a
          className="flex flex-row gap-[0.5rem] items-center p-[0.5rem] border rounded-xl border-[#e2cbd0] hover:bg-[#fbe9f0] text-sm"
          target="_blank"
          href="https://drive.google.com/file/d/1IX6OcDfXnq6Ob75OgEOWve4LNb4yxDyu/view?usp=drive_link"
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
