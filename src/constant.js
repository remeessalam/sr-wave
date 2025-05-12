import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
//service images
import web from "./assets/images/services/web.png";
import app from "./assets/images/services/app.png";
import blockchain from "./assets/images/services/blockchain.png";
import game from "./assets/images/services/game.png";
import rpa from "./assets/images/services/rpa.png";
import nlp from "./assets/images/services/nlp.png";
import ai from "./assets/images/services/ai.png";
import data from "./assets/images/services/data.png";
import cloud from "./assets/images/services/cloud.png";
import uiux from "./assets/images/services/uiux.png";
import marketing from "./assets/images/services/marketing.png";

export { logoImg };

export const companyDetails = {
  phone: "+9900923994",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=919900923994&text&type=phone_number&app_absent=0",
  address: "1099 Near Adi Parashakti Temple,GOLLAHALLI E-Ciry",
  email: "example@gmail.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    // path: "/contact-us",
    name: "Blog",
    // element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Robert Chen",
    position: "CEO of Organic Foods Collective",
    img: require("./assets/images/testimonial1.webp"),
    desc: "They built a blockchain system that tracks organic certification from farm to shelf. It's simple enough that even our farmers use it daily—without needing tech support.",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    position: "Founder of Tiny Giant Games",
    img: require("./assets/images/testimonial2.webp"),
    desc: "As first-time game creators, we leaned on their team from concept to launch. Our mobile RPG is now outperforming industry retention rates.",
  },
  {
    id: 3,
    name: "Sarah Williamson",
    position: "CTO of First Regional Bank",
    img: require("./assets/images/testimonial3.webp"),
    desc: "They turned our outdated system into a sleek, secure app. Complaints dropped by 60%, and mobile use tripled.",
  },
  {
    id: 4,
    name: "Michael Johnson",
    position: "Operations Head at Summit Insurance",
    img: require("./assets/images/testimonial4.webp"),
    desc: "We automated 300% more claims with near-perfect accuracy. Their RPA solution changed how we work—completely.",
  },
  {
    id: 5,
    name: "David Park",
    position: "Customer Experience Director, Telco Solutions",
    img: require("./assets/images/testimonial5.webp"),
    desc: "Their AI actually understands our customers, not just answers questions. Handle times dropped 40%, and satisfaction shot up.",
  },
];

// all services
export const allServices = [
  {
    id: "1",
    img: web,
    title: "Web Development – Modern, Optimized, Conversion-Focused:",
    description: "Your website is your digital front door—let’s make it great.",
    detailContent:
      "We build fast, functional websites that drive results, leveraging the latest frameworks and platforms. Our services include frontend & backend (React, Angular, Node.js, Django), e-commerce solutions (Shopify, WooCommerce, Magento), CMS solutions (WordPress, Drupal), and SEO & performance optimization.",
  },
  {
    id: "2",
    img: app,
    title: "App Development – Engaging Mobile & Web Apps:",
    description:
      "We design intuitive, high-performance apps that your users will love.",
    detailContent:
      "From concept to launch, we build apps that grow with your business. Our app development services include native iOS & Android apps (Swift, Kotlin), cross-platform solutions (Flutter, React Native), PWAs, and custom enterprise apps.",
  },
  {
    id: "3",
    img: blockchain,
    title: "Blockchain Development – Secure, Scalable, Decentralized:",
    description:
      "Unlock the potential of blockchain with tailored solutions designed for transparency and trust.",
    detailContent:
      "We specialize in blockchain solutions including Smart Contracts (Ethereum, Solana, Hyperledger), NFT & Token Development (ERC-20, ERC-721, BEP-20), DeFi Platforms & DApps, and Enterprise Blockchain Consulting & Integration.",
  },
  {
    id: "4",
    img: game,
    title: "Game Development – Build Immersive Gaming Experiences:",
    description:
      "From indie games to AAA titles, we bring your ideas to life with creative and technical precision.",
    detailContent:
      "Our game development services include 2D/3D game development (Unity, Unreal Engine), AR/VR experiences, multiplayer & blockchain games, and game porting, optimization & live ops.",
  },
  {
    id: "5",
    img: rpa,
    title: "Robotic Process Automation (RPA) – Automate & Optimize:",
    description: "Free up your team’s time with smart automation solutions.",
    detailContent:
      "We provide workflow automation (UiPath, Blue Prism), AI-Powered RPA, and ERP/CRM system integration to streamline your operations and optimize business processes.",
  },
  {
    id: "6",
    img: ai,
    title: "AI & Machine Learning – Smarter Solutions, Real Results:",
    description:
      "We build intelligent systems that learn, adapt, and deliver value.",
    detailContent:
      "Our AI/ML services include AI Chatbots & Virtual Assistants, Predictive Analytics & Insights, Computer Vision & NLP, and Custom ML Models tailored for various industries.",
  },
  {
    id: "7",
    img: cloud,
    title: "Cloud Computing – Fast, Flexible, Future-Ready:",
    description:
      "Scale with confidence through secure and seamless cloud solutions.",
    detailContent:
      "Our cloud services include Cloud Strategy & Migration (AWS, Azure, GCP), DevOps & CI/CD, Serverless & Kubernetes, and Cloud Security & Cost Optimization.",
  },
  {
    id: "8",
    img: data,
    title: "Data Science & Analytics – Make Smarter Moves:",
    description: "Turn your data into actionable insights.",
    detailContent:
      "Our data services encompass Big Data & Visualization, Predictive Modeling & BI, and Data Engineering & ETL Pipelines to help you unlock valuable business insights.",
  },
  {
    id: "9",
    img: nlp,
    title: "NLP – Understand and Connect with Language:",
    description: "Build smarter interactions with natural language tech.",
    detailContent:
      "We develop NLP solutions including Chatbots & Voice Interfaces, Sentiment Analysis & Text Mining, and Automated Translation & Speech Recognition.",
  },
  {
    id: "10",
    img: uiux,
    title: "UI/UX Design – Design That Works (and Wows):",
    description: "Great design goes beyond looks—it solves problems.",
    detailContent:
      "Our design services cover Research & Wireframing, User-Centered Interfaces, Prototyping & Visual Identity to create intuitive, elegant experiences for your users.",
  },
  {
    id: "11",
    img: marketing,
    title: "Digital Marketing – Visibility That Converts:",
    description: "We help great products get noticed and grow.",
    detailContent:
      "Our digital marketing services include SEO, Social Media Marketing, PPC Ads, and Content & Email Strategy to ensure your business reaches the right audience at the right time.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  // {
  //   id: 3,
  //   img: require("./assets/images/app_projects/3.webp"),
  //   title: "Glowsy",
  // },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];
