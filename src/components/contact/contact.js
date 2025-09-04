const Contact = ({t}) => {
  return (
    <div className="rounded-lg p-4">
      <form className="flex flex-col gap-[1rem] w-[50%]">
        <div className="flex flex-col">
          <label>Email</label>
          <input
            type="text"
            className="h-[2rem] border border-[0.5px] border-[#e2cbd0] rounded-lg p-[1rem]"
          />
        </div>
        <div className="flex flex-col">
          <label>{t.main.contact.form.subject}</label>
          <input
            type="text"
            className="h-[2rem] border border-[0.5px] border-[#e2cbd0] rounded-lg p-[1rem]"
          />
        </div>
        <div className="flex flex-col">
          <label>{t.main.contact.form.message}</label>
          <textarea
            type="text"
            rows={4}
            cols={50}
            className="border border-[0.5px] border-[#e2cbd0] rounded-lg p-[1rem]"
          />
        </div>
        <button className="w-full bg-white text-[#e2cbd0] mr-auto  p-2 rounded-xl border border-[0.5px] border-[#e2cbd0] hover:bg-[#e2cbd0] hover:text-white hover:border-white cursor-pointer">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
