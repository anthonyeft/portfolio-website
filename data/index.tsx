export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Awards", link: "#awards" },
  { name: "Publications", link: "#publications" },
  { name: "Talks", link: "#talks" },
  { name: "News", link: "#news" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "md:col-span-2 md:row-span-1 md:min-h-[30vh] lg:col-span-3 lg:row-span-4 lg:min-h-[50vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My tech stack",
    description: "I constantly improve",
    className: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "ML enthusiast with a passion for research",
    description: "",
    className: "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2",
    imgClassName: "h-full",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-3 lg:max-h-[35vh]",
    imgClassName: "absolute right-0 bottom-0 w-1/2 md:w-96",
    titleClassName: "justify-center md:justify-start lg:justify-center pr-20",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-3 lg:max-h-[35vh]",
    imgClassName: "",
    titleClassName: "justify-center items-center text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const awards = [
  {
    title: "Grade 10",
    description: "ISEF & BASEF",
    img: "/award4.jpg",
    content: () => (
      <>
        <p>Achievements in Grade 10:</p>
        <ul className="list-disc pl-5">
          <li>First Place Grand Award at ISEF 2024</li>
          <li>Pinnacle Best in Fair Award at BASEF 2024</li>
          <li>Developed "Rapid Screening of Skin Cancers with M-SCAHN"</li>
        </ul>
      </>
    ),
  },
  {
    title: "Grade 9",
    description: "BASEF & ISEF",
    img: "/award3.jpg",
    content: () => (
      <>
        <p>Achievements in Grade 9:</p>
        <ul className="list-disc pl-5">
          <li>Participated in BASEF and ISEF</li>
          <li>Won multiple category awards</li>
          <li>Continued research in AI-based diagnostics</li>
        </ul>
      </>
    ),
  },
  {
    title: "Grade 8",
    description: "BASEF, CWSF, ETFO",
    img: "/award2.jpg",
    content: () => (
      <>
        <p>Achievements in Grade 8:</p>
        <ul className="list-disc pl-5">
          <li>Best Junior Project at BASEF 2023</li>
          <li>Silver Merit Award at CWSF 2023</li>
          <li>ETFO Math & Science Award: Top Student (Grade 8)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Grade 7",
    description: "BASEF",
    img: "/award1.jpg",
    content: () => (
      <>
        <p>Achievements in Grade 7:</p>
        <ul className="list-disc pl-5">
          <li>Participated in BASEF</li>
          <li>Gained foundational experience in science fairs</li>
        </ul>
      </>
    ),
  },
];
