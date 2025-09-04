const Education = ({ t }) => {
  return (
    <div className="bg-[#e2cbd02b] rounded-lg flex flex-col divide-y-1 divide-y divide-gray-200">
      {t.main.education.list.map((item) => (
        <div className="p-[1.5rem] flex flex-row justify-between items-center">
          <div className="flex flex-col text-sm">
            <span className="first:text-base">
              <h5 className="font-bold">{item.field} | {item.degree}</h5>
            </span>
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
          <div>{item.finishedDate}</div>
        </div>
      ))}
    </div>
  );
};

export default Education;
