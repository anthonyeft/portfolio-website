import { SiNumpy, SiTensorflow, SiTailwindcss, SiPytorch, SiScikitlearn, SiNextdotjs, SiFramer, SiPython, SiReact} from "react-icons/si";


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Awards", link: "#awards" },
  { name: "Talks", link: "#talks" },
  { name: "News", link: "#news" },
  { name: "Contact", link: "#contact" },
];

export const tools = [
  { name: "Python", icon: <SiPython className="text-[#fee05a] w-5 h-5" />, inProgress: false },
  { name: "NumPy", icon: <SiNumpy className="text-blue-400 w-5 h-5" />, inProgress: false },
  { name: "PyTorch", icon: <SiPytorch className="text-orange-600 w-5 h-5" />, inProgress: false },
  { name: "Tensorflow", icon: <SiTensorflow className="text-orange-400 w-5 h-5" />, inProgress: false },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-blue-400 w-5 h-5" />, inProgress: false },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#17bab9] w-5 h-5" />, inProgress: false },
  { name: "React", icon: <SiReact className="text-blue-400 w-5 h-5" />, inProgress: true },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-5 h-5" />, inProgress: true },
  { name: "Framer Motion", icon: <SiFramer className="text-white w-5 h-5" />, inProgress: true },
];


export const projects = [
  {
    id: 1,
    title: "Rapid Screening of Skin Cancers with M-SCAHN",
    des: "My award winning science fair project that uses deep learning to screen for skin cancers in dermoscopy images.",
    img: "/project_icon.png",
    iconLists: [
      <SiNumpy className="text-blue-400"/>,
      <SiPytorch className="text-orange-600"/>,
      <SiScikitlearn className="text-blue-400"/>,
      <SiPython className="text-[#fee05a]"/>,
    ],
    link: "https://partner.projectboard.world/isef/project/robo062-rapid-screening-of-skin-cancers-with-m-scahn",
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
          <li>Inducted into Sigma Xi - The Scientific Research Honor Society</li>
          <li>Invited to Present at the 2024 International Symposium on High School Research by the American Chemical Society - Southern California Section (SCALACS)</li>
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
        <p>Awards in Grade 9:</p>
        <ul className="list-disc pl-5">
          <li>International Science & Engineering Fair (ISEF 2024) - First Place Grand Award</li>
          <li>BASEF 2024 - Primary Fluid Systems Pinnacle Best in Fair Award</li>
          <li>U.S. Agency for International Development (USAID) Award</li>
          <li>ArcelorMittal Dofasco Information Systems Award</li>
          <li>Hamilton Academy of Dentistry Award - First Place</li>
          <li>McMaster Farncombe Family Digestive Health Research Institute Grand Award</li>
          <li>Ola Lunyk-Child Memorial Health Science Award - First Place</li>
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
          <li>Western University Entrance Scholarship</li>
          <li>University of Alberta Entrance Scholarship</li>
          <li>Canada-Wide Science Fair - Silver</li>
          <li>Elementary Teachers’ Federation of Ontario (ETFO) Top Student in Math & Science</li>
          <li>BASEF 2023 Best Junior Project</li>
          <li>Primary Fluid Systems Pinnacle 3rd Best in Fair Award</li>
          <li>McMaster Farncombe Family Digestive Health Research Award</li>
          <li>Hamilton Academy of Dentistry Award</li>
          <li>Hillfield Strathallan College Entrance Scholarship</li>
          <li>Ola Lunyk-Child Memorial Health Science Award – First</li>
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
          <li>BASEF - Bronze</li>
          <li>ArcelorMittal Dofasco Process Automation Award</li>
          <li>Sheridan College Entrance Scholarship</li>
          <li>Talkit.ca Computer Engineering Award </li>
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
  { src: "/cbc-listen-logo.png", alt: "Network 1" },
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
    title: "Here and Now Toronto",
    img: "/cbc_interview_room.jpg",
    subheading: "CBC Radio Canada",
    link: "https://www.cbc.ca/listen/live-radio/1-82-here-and-now-toronto/clip/16083836-here-now-hands-show-kids.-meet-two-aspiring",
  },
  {
    id: 2,
    title: "Greek Canadian Student Wins at Regeneron International Science Fair",
    subheading: "Greek Reporter",
    img: "/national-herald.jpg",
    link: "https://greekreporter.com/2024/05/21/greek-canadian-student-wins-regeneron-international-science-fair/",
  },
  {
    id: 3,
    title: "Project on detecting skin cancer earns Oakville student top international science prize",
    img: "/award3.jpg",
    subheading: "INhalton",
    link: "https://halton.insauga.com/project-on-detecting-skin-cancer-earns-oakville-student-top-international-science-prize",
  },
  {
    id: 4,
    title: "Young local scientists win big at international science fair",
    img: "/scientists.jpg",
    subheading: "Oakville News",
    link: "https://www.oakvillenews.org/local-news/young-ontario-scientists-on-top-of-the-world-8766018",
  },
  {
    id: 5,
    title: "Anthony Efthimiadis Wins 1st in World Grand Award at Regeneron Int’l Science Fair",
    img: "/national-herald.jpg",
    subheading: "The National Herald",
    link: "https://www.thenationalherald.com/anthony-efthimiadis-wins-1st-in-world-grand-award-at-regeneron-intl-science-fair/",
  },
];