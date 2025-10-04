const Experience = ({ t }) => {
  return (
    <div className="bg-[#e2cbd02b] rounded-xl lg-p-[1rem]">
      {t.main.experience.list.map((item) => (
        <div key={item.title} className="hover:outline hover:outline-[#e2cbd0] mb-[0.5rem] p-[1rem] rounded-xl flex flex-col gap-[1rem]">
          <div className="flex flex-row flex-wrap justify-between">
            {" "}
            <span className="text-md font-bold">{item.title}</span>
            <span>{item.duration}</span>
          </div>
          <p className="italic">{item.about}</p>
          <ul className="pl-[0.7rem] lg:pl-[1.5rem] list-disc">
            {item.achievements.map((achievement,key) => (
              <li key={key} className="mb-[0.25rem]">{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
