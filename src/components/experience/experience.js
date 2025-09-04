const Experience = ({ t }) => {
  return (
    <div className="bg-[#e2cbd02b] rounded-xl p-[1rem]">
      {t.main.experience.list.map((item) => (
        <div key={item.title} className="hover:outline hover:outline-[#e2cbd0] mb-[0.5rem] p-[1rem] rounded-xl flex flex-col gap-[1rem]">
          <div className="flex flex-row justify-between">
            {" "}
            <span className="text-md font-bold">{item.title}</span>
            <span>{item.duration}</span>
          </div>
          <p className="italic">{item.about}</p>
          <ul className="pl-[1.5rem] list-disc">
            {item.achievements.map((achievement) => (
              <li className="mb-[0.25rem]">{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
