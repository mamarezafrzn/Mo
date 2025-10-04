const Education = ({ t }) => {
  return (
    <div className="bg-[#e2cbd02b] rounded-lg flex flex-col divide-y-1 divide-y divide-gray-200">
      {t.main.education.list.map((item, key) => (
        <div
          key={key}
          className="p-[1.5rem] flex flex-row justify-between items-center"
        >
          <div className="flex flex-col text-sm w-full">
            <div className="first:text-base flex flex-row flex-wrap justify-between">
              <div>
                <h5 className="font-bold">
                  {item.field} | {item.degree}
                </h5>
              </div>
              <div>{item.finishedDate}</div>
            </div>
            <span>{item.university}</span>
            <span>{item.location}</span>
            {item.thesis && (
              <span>
                <p className="italic">
                  {item.thesis.title} : {item.thesis.description}
                </p>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
