import { FaReact, FaPython, FaNodeJs, FaDatabase} from "react-icons/fa";


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Awards", link: "#awards" },
  { name: "Publications", link: "#publications" },
  { name: "Talks", link: "#talks" },
  { name: "News", link: "#news" },
  { name: "Contact", link: "#contact" },
];

export const tools = [
  { name: "React", icon: <FaReact className="text-blue-400 w-5 h-5" />, inProgress: false },
  { name: "Python", icon: <FaPython className="text-green-400 w-5 h-5" />, inProgress: false },
  { name: "Node.js", icon: <FaNodeJs className="text-lime-400 w-5 h-5" />, inProgress: false },
  { name: "SQL/Databases", icon: <FaDatabase className="text-orange-400 w-5 h-5" />, inProgress: false },
  { name: "Next.js", icon: <FaReact className="text-white w-5 h-5" />, inProgress: true },
  { name: "TensorFlow", icon: <FaPython className="text-white w-5 h-5" />, inProgress: true },
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
    description: "",
    img: "/award3.jpg",
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
    description: "",
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
    description: "",
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
    description: "",
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
