import { PROJECT_LIST_EN } from "@/components/projects/PROJECTS-INFO";

const en = {
  title: "Welcome",
  categories: {
    label: "Areas",
    items: [
      { name: "About", icon: "🤷‍♂️", id: "about" },
      { name: "Skills", icon: "🤹‍♂️", id: "skills" },
      { name: "Experience", icon: "👨‍💻", id: "experience" },
      { name: "Projects", icon: "💼", id: "projects" },
      { name: "Education", icon: "📚", id: "education" },
      { name: "Contact", icon: "✉️", id: "contact" },
    ],
  },
  socials: { label: "Socials" },
  main: {
    aboutMe: (
      <>
        {/* A developer who genuinely loves building things that people enjoy using. <br />
        I care about smooth experiences, thoughtful details, and bringing ideas to life through code. */}
        Front-End Developer with dual Master’s degrees in Computer Engineering
        and Project Management. Specializes in building responsive, scalable web
        applications using ReactJS, Next.js, TypeScript, and modern front-end
        frameworks. Skilled in creating efficient UI components, implementing
        component-based architecture, and improving application performance.
        Focused on writing clean, maintainable code while staying up-to-date
        with the latest web technologies. Ready to contribute technical
        expertise to solve complex development challenges.
      </>
    ),
    // "Front-End Developer with dual Master’s degrees in Computer Engineering and Project Management. Specializes in building responsive, scalable web applications using ReactJS, Next.js, TypeScript, and modern front-end frameworks. Skilled in creating efficient UI components, implementing component-based architecture, and improving application performance. Focused on writing clean, maintainable code while staying up-to-date with the latest web technologies. Ready to contribute technical expertise to solve complex development challenges.",
    skills: { title: "Skills" },
    experience: {
      title: "Experience",
      list: [
        {
          title: "Operate Ease",
          Role: "React Developer",
          duration: "Nov 2024 - May 2025",
          about:
            "OperateEase is a startup focused on developing automation solutions for the hospitality industry, streamlining operations for hotels, restaurants, and service providers.",
          achievements: [
            "Developed 10+ modular UI components for a hospitality automation platform using ReactJS and Tailwind CSS, improving page responsiveness by 20%",
            "Streamlined front-end workflows by restructuring reusable components, cutting development time by 15% and helping the team meet tight project deadlines",
            "Resolved 15+ UI/UX issues by collaborating with designers and conducting user testing sessions, resulting in improved application stability and a more intuitive user interface",
            "Worked closely with cross-functional teams to ensure design consistency while integrating WCAG 2.1 accessibility standards into the platform’s responsive framework",
          ],
        },
        {
          title: "Apadana Data Cloud",
          Role: "Front-end Developer",
          duration: "Jul 2022 - Sep 2023",
          about:
            "Apadana Data Cloud is a technology company specializing in software development, delivering custom web solutions for clients across various industries.",
          achievements: [
            "Built a scalable Loan Management Platform (YekToman) using ReactJS, Axios, and Styled Components, enhancing state management to improve performance",
            "Developed 20+ custom UI components for an LMS using ReactJS and Ant Design, enhancing user engagement through clear navigation flows and interactive dashboards",
            "Built and optimized a Financial Services Website (Ansar Brokerage) with HTML & CSS, ensuring cross- browser compatibility, responsive design, and accessibility compliance",
            "Partnered with a team of 5+ developers to refine UI performance, reducing rendering issues and improving component reusability",
          ],
        },
        {
          title: "Arman Tadbir Naghsh Jahan Brokerage Co.",
          Role: "Front-end Developer",
          duration: "Feb 2021 - Jun 2022",
          about:
            "Arman Tadbir Naghsh Jahan is a well-established brokerage firm in Iran, providing financial services and online trading solutions, with a network of over 15 branches across the country.",
          achievements: [
            "Developed 5+ responsive login pages for Silver.Armabroker using HTML & CSS, reducing the average user authentication time by 15% and improving mobile accessibility",
            "Enhanced UI responsiveness for the Ansar Brokerage website, ensuring 100% cross-browser compatibility and improving accessibility, contributing to a 10% increase in mobile traffic",
            "Supported the development of 10+ reusable ReactJS components for the ArmanBroker platform, improving code reusability and reducing front-end development time by 20%",
            "Assisted senior developers in debugging sessions and code reviews, resolving 15+ UI-related issues and increasing platform stability",
            "Contributed to optimizing front-end workflows, streamlining the development process and enhancing team productivity by 10%",
          ],
        },
      ],
    },
    projects: { title: "Projects", projectList: PROJECT_LIST_EN },
    education: {
      title: "Education",
      list: [
        {
          university: "Arden University",
          field: "Project Management",
          degree: "M.Sc.",
          finishedDate: "09/2024",
          location: "Berlin-Germany",
          thesis: {
            title: "Thesis",
            description:
              "Investigating the Transformative Potential of Web Accessibility for People with Disabilities on E-commerce Websites",
          },
        },
        {
          university: "University of Guilan",
          field: "Software Engineering",
          degree: "M.Sc.",
          finishedDate: "03/2023",
          location: "Rasht-Iran",
          thesis: "",
        },
        {
          university: "Shamsipour Technical and Vocational College",
          field: "Software Engineering",
          degree: "B.Sc.",
          finishedDate: "08/2019",
          location: "Tehran-Iran",
          thesis: "",
        },
      ],
    },
    contact: {
      title: "Contact",
      form: { subject: "Subject", message: "Message" },
    },
  },
};
export default en;
