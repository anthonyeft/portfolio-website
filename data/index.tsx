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

export const publications = [
  {
    description: "Rapid screening of skin cancers with robust deep learning pipeline",
    title: "M-SCAHN",
    src: "project_icon.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: `Skin cancer is the most prevalent cancer worldwide with 8 million incidences and 120,000 annual deaths. 
      Visual inspection has a 40% misdiagnosis rate, causing treatment delays leading to increased mortality.
      Millions are referred for unnecessary, expensive, and invasive biopsies. This project introduces a 
      point-of-care software application for accurate, immediate, and non-invasive skin cancer screening through 
      innovative computational analysis of lesion images: Multimodal Skin Cancer Analysis with Hybrid Networks (M-SCAHN). 
      Using 13,500 images, this research proposes novel hierarchical CNN-transformer hybrid deep-learning models. 
      The multimodal classification model considers patient-specific factors such as age and anatomical location 
      in its decisions. M-SCAHN provides interpretable diagnostic reasoning through GradCAM, improves screening 
      in diverse populations with color constancy algorithms, and instantly identifies cancerous lesion traits. 
      Physicians can upload an image, and in 18 seconds, M-SCAHN performs end-to-end analysis, detecting cancer 
      with state-of-the-art accuracy: 98.9% sensitivity (99% CI: 97.6% - 100%) and 97.7% specificity (99% CI: 96.2% - 99.1%). 
      The segmentation model detects lesion borders with 95.5% Dice score, a critical step for various dermatology 
      applications. With zero localization failures, it is the only reliable skin lesion segmentation model, 
      facilitating a novel lesion border evolution tracking algorithm. M-SCAHN is the first of its kind to 
      detect all major skin cancers and pre-cancer with significant accuracy, interpretability, and a solution 
      to aid clinician diagnosis of diverse skin. This research can revolutionize skin diagnostics by reducing 
      mortality through early detection while minimizing unnecessary biopsies and costs.`,
  },
];

export const newsNetworks = [
  { src: "/network1.png", alt: "Network 1" },
  { src: "/network2.png", alt: "Network 2" },
  { src: "/network3.png", alt: "Network 3" },
  { src: "/network4.png", alt: "Network 4" },
  { src: "/network5.png", alt: "Network 5" },
  { src: "/network6.png", alt: "Network 6" },
  { src: "/network7.png", alt: "Network 7" },
  { src: "/network8.png", alt: "Network 8" },
];

export const newsArticles = [
  {
    id: 1,
    title: "Title of News Article",
    subheading: "Subtitle or short description of the article.",
    img: "/article-image1.png",
    link: "https://link-to-article.com",
  },
  {
    id: 2,
    title: "Another News Article",
    subheading: "Another subtitle or short description.",
    img: "/article-image2.png",
    link: "https://link-to-article.com",
  },
  {
    id: 3,
    title: "Another News Article",
    subheading: "Another subtitle or short description.",
    img: "/article-image3.png",
    link: "https://link-to-article.com",
  },
  {
    id: 4,
    title: "Another News Article",
    subheading: "Another subtitle or short description.",
    img: "/article-image4.png",
    link: "https://link-to-article.com",
  },
  {
    id: 5,
    title: "Another News Article",
    subheading: "Another subtitle or short description.",
    img: "/article-image5.png",
    link: "https://link-to-article.com",
  },
];