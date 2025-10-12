import { PROJECT_LIST_DE } from "@/components/projects/PROJECTS-INFO";

const de = {
  title: "Willkommen",
  categories: {
    label: "Bereiche",
    items: [
      { name: "Über mich", icon: "🤷‍♂️", id: "about" },
      { name: "Fähigkeiten", icon: "🤹‍♂️", id: "skills" },
      { name: "Erfahrung", icon: "👨‍💻", id: "experience" },
      { name: "Projekte", icon: "💼", id: "projects" },
      { name: "Ausbildung", icon: "📚", id: "education" },
      { name: "Kontakt", icon: "✉️", id: "contact" },
    ],
  },
  socials: { label: "Socials" },
  main: {
    aboutMe: (
      <>
        {/* Ein Entwickler, der es wirklich liebt, Dinge zu bauen, die Menschen
        gerne benutzen. <br />
        Mir liegt viel an flüssigen Erlebnissen, durchdachten Details und daran,
        Ideen mit Code zum Leben zu erwecken. */}
        Front-End-Entwickler mit zwei Masterabschlüssen in Computertechnik und
        Projektmanagement. Spezialisiert auf die Entwicklung responsiver und
        skalierbarer Webanwendungen mit ReactJS, Next.js, TypeScript und
        modernen Front-End- Frameworks. Versiert in der Erstellung effizienter
        UI-Komponenten, komponentenbasierter Architekturen und der Optimierung
        der Anwendungsleistung. Engagiert sich für sauberen, wartbaren Code und
        bleibt stets auf dem neuesten Stand der Webtechnologien. Bereit,
        technisches Fachwissen zur Lösung komplexer
        Entwicklungsherausforderungen einzubringen.
      </>
    ),
    // "Front-End-Entwickler mit zwei Masterabschlüssen in Computertechnik und Projektmanagement. Spezialisiert auf die Entwicklung responsiver und skalierbarer Webanwendungen mit ReactJS, Next.js, TypeScript und modernen Front-End- Frameworks. Versiert in der Erstellung effizienter UI-Komponenten, komponentenbasierter Architekturen und der Optimierung der Anwendungsleistung. Engagiert sich für sauberen, wartbaren Code und bleibt stets auf dem neuesten Stand der Webtechnologien. Bereit, technisches Fachwissen zur Lösung komplexer Entwicklungsherausforderungen einzubringen.",
    skills: { title: "Fähigkeiten" },
    experience: {
      title: "Erfahrung",
      list: [
        {
          title: "Operate Ease",
          Role: "React Entwickler",
          duration: "Nov 2024 - Mai 2025",
          about:
            "OperateEase ist ein Start-up, das sich auf die Entwicklung von Automatisierungslösungen für die Hotel- und Gastgewerbebranche spezialisiert hat, um Abläufe in Hotels, Restaurants und bei Dienstleistern zu optimieren.",
          achievements: [
            "Entwicklung von über 10 modularen UI-Komponenten für eine Automatisierungsplattform im Gastgewerbe mit ReactJS und Tailwind CSS, wodurch die Reaktionsgeschwindigkeit der Seiten um 20 % verbessert wurde",
            "Optimierung der Front-End-Workflows durch Umstrukturierung wiederverwendbarer Komponenten, was die Entwicklungszeit um 15 % verkürzte",
            "Behebung von über 15 UI/UX-Problemen durch enge Zusammenarbeit mit Designern und die Durchführung von Usability-Tests, was die Stabilität der Anwendung und die Benutzerfreundlichkeit signifikant verbesserte",
            "Enge Zusammenarbeit mit funktionsübergreifenden Teams zur Sicherstellung eines konsistenten Designs und Integration der Barrierefreiheitsstandards gemäß WCAG 2.1 in das responsive Framework der Plattform",
          ],
        },
        {
          title: "Apadana Data Cloud",
          Role: "Front-end Entwickler",
          duration: "Jul 2022 - Sep 2023",
          about:
            "Apadana Data Cloud ist ein Technologieunternehmen, das sich auf Softwareentwicklung spezialisiert hat und maßgeschneiderte Weblösungen für Kunden aus verschiedenen Branchen anbietet.",
          achievements: [
            "Aufbau einer skalierbaren Kreditmanagementplattform (YekToman) mit ReactJS, Axios und Styled Components",
            "Entwicklung von über 20 benutzerdefinierten UI-Komponenten für ein LMS mit ReactJS und Ant Design",
            "Umsetzung und Optimierung einer Finanzdienstleistungswebsite (Ansar Brokerage) mit HTML & CSS, mit Fokus auf Browserkompatibilität, responsivem Design und Barrierefreiheit",
            "Zusammenarbeit mit einem Team von über 5 Entwicklern zur Verbesserung der UI-Leistung",
          ],
        },
        {
          title: "Arman Tadbir Naghsh Jahan Brokerage Co.",
          Role: "Front-end Entwickler",
          duration: "Feb 2021 - Jun 2022",
          about:
            "Arman Tadbir Naghsh Jahan ist ein etabliertes Maklerunternehmen mit über 15 Niederlassungen im ganzen Iran, das Finanzdienstleistungen und Online-Handelslösungen anbietet.",
          achievements: [
            "Entwicklung von über 5 responsiven Login-Seiten für Silver.Armabroker mit HTML und CSS, wodurch die durchschnittliche Authentifizierungszeit der Nutzer um 15 % reduziert und die mobile Benutzerfreundlichkeit erhöht wurde",
            "Verbesserung der UI-Reaktionsfähigkeit der Ansar-Website, was zu einem Anstieg des mobilen Traffics um 10 % führte",
            "Unterstützung bei der Entwicklung von über 10 wiederverwendbaren ReactJS-Komponenten für die ArmanBroker-Plattform, wodurch die Wiederverwendbarkeit des Codes verbessert und die Front-End- Entwicklungszeit um 20 % verkürzt wurde",
            "Unterstützung bei Debugging und Code-Reviews, Lösung von über 15 UI-bezogenen Problemen",
            "Optimierung des Front-End-Workflows zur Steigerung der Teamproduktivität um 10 %",
          ],
        },
      ],
    },
    projects: { title: "Projects", projectList: PROJECT_LIST_DE },
    education: {
      title: "Education",
      list: [
        {
          university: "Arden University",
          field: "Projektmanagement",
          degree: "M.Sc.",
          finishedDate: "09/2024",
          location: "Berlin-Deutschland",
          thesis: {
            title: "Abschlussarbeit",
            description:
              "Untersuchung des transformativen Potenzials von Barrierefreiheit im E-Commerce für Menschen mit Behinderungen",
          },
        },
        {
          university: "Guilan Universität",
          field: "Softwaretechnik",
          degree: "M.Sc.",
          finishedDate: "03/2023",
          location: "Rasht-Iran",
          thesis: "",
        },
        {
          university:
            "Shamsipour Technical and Vocational College (Technisches und Berufskolleg Shamsipour)",
          field: "Softwaretechnik",
          degree: "B.Sc.",
          finishedDate: "08/2019",
          location: "Tehran-Iran",
          thesis: "",
        },
      ],
    },
    contact: {
      title: "Kontact",
      form: { subject: "Betreff", message: "Nachricht" },
    },
  },
};
export default de;
