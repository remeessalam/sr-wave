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
import chatbot from "./assets/images/services/chatbot.png";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.webp";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold-creekcap.webp";
import ThinkRealityImg from "./assets/web-development-portfolio/think-reality.webp";
import AkashMegaMart from "./assets/web-development-portfolio/Akash-Mega-Mart.webp";
import MidwamImmersive from "./assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.webp";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "./assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.webp";
import AkashMegaMartApp from "./assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.webp";
import FeelItMobileApp from "./assets/app-development-portfolio/FeelIt-Mobile-App.webp";
import KlikomicsMobileApp from "./assets/app-development-portfolio/Klikomics-Mobile-App.webp";
import AutoSnapMobileApp from "./assets/app-development-portfolio/AutoSnap-Mobile-App.webp";
// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export { logoImg };

export const companyDetails = {
  name: "SR Wave",
  phone: "+9900923994",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=919900923994&text&type=phone_number&app_absent=0",
  address: "1099 Near Adi Parashakti Temple,GOLLAHALLI E-Ciry",
  email: "info@sr-wave.com",
  linkedin: "https://www.linkedin.com/company/sr-wave",
  facebook: "https://www.facebook.com/share/18k7xvt9pn/",
  twitter: "https://x.com/sr_9Wave",
  instagram:
    "https://www.instagram.com/srw_ve/profilecard/?igsh=MWtkdHgyemRwc25oaw==",
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
// all services
export const allServices = [
  {
    id: "1",
    img: web,
    title: "Web Development – Modern, Optimized, Conversion-Focused:",
    description:
      "Your website is your digital front door—let's make it great. We create responsive, user-friendly websites that not only look stunning but also deliver exceptional performance and drive meaningful conversions. Our web solutions are built to scale with your business and provide an outstanding user experience across all devices.",
    detailContent: [
      "Fast, functional websites that drive results using latest frameworks and platforms",
      "Sophisticated frontend & backend solutions (React, Angular, Vue.js, Node.js, Django, Laravel)",
      "Custom e-commerce platforms (Shopify, WooCommerce, Magento, BigCommerce)",
      "Robust CMS solutions (WordPress, Drupal, Contentful, Strapi)",
      "Meticulous SEO & performance optimization for maximum visibility",
      "Secure, accessible websites exceeding modern web standards",
      "Seamless integration with existing business systems",
    ],
  },
  {
    id: "2",
    img: app,
    title: "App Development – Engaging Mobile & Web Apps:",
    description:
      "We design intuitive, high-performance apps that your users will love. Our development team creates seamless experiences across platforms, ensuring your app not only looks great but functions flawlessly. We focus on creating solutions that solve real problems for your customers while supporting your business objectives and growth strategies.",
    detailContent: [
      "End-to-end app development from concept to launch with latest technologies",
      "Native iOS & Android apps (Swift, SwiftUI, Kotlin, Jetpack Compose)",
      "Efficient cross-platform solutions (Flutter, React Native, Xamarin)",
      "Progressive web apps (PWAs) combining web and mobile experiences",
      "Custom enterprise apps to streamline operations",
      "Rigorous testing protocols and analytics integration",
      "App store optimization, compliance management, and regular updates",
      "Post-launch support and evolution based on user data",
    ],
  },
  {
    id: "3",
    img: blockchain,
    title: "Blockchain Development – Secure, Scalable, Decentralized:",
    description:
      "Unlock the potential of blockchain with tailored solutions designed for transparency and trust. Our blockchain experts develop custom applications that leverage distributed ledger technology to solve complex business challenges. We create secure, immutable systems that can transform your operations, enhance security, and open new revenue streams across various industries.",
    detailContent: [
      "Smart Contract development and auditing across multiple platforms (Ethereum, Solana, Polkadot, Hyperledger, Cardano)",
      "NFT & Token Development services (ERC-20, ERC-721, ERC-1155, BEP-20) with marketplace creation",
      "Sophisticated DeFi Platforms & DApps reimagining financial services",
      "Enterprise Blockchain Consulting & Integration for supply chain, identity verification, and secure data sharing",
      "Comprehensive security audits and vulnerability testing",
      "Scalability solutions for blockchain networks",
      "Ongoing support and future-proofing as technology evolves",
    ],
  },
  {
    id: "4",
    img: game,
    title: "Game Development – Build Immersive Gaming Experiences:",
    description:
      "From indie games to AAA titles, we bring your ideas to life with creative and technical precision. Our game development team combines artistic vision with programming expertise to create engaging, memorable gaming experiences across platforms. We focus on player engagement, monetization strategies, and technical performance to ensure your game stands out in a competitive market.",
    detailContent: [
      "2D/3D game development using industry-standard engines (Unity, Unreal Engine, Godot)",
      "Custom physics, AI, and gameplay mechanics tailored to your vision",
      "Cutting-edge AR/VR experiences for entertainment and serious gaming",
      "Robust multiplayer & blockchain games with secure server architecture",
      "NFT and play-to-earn model integration",
      "Game porting and optimization across platforms",
      "Live ops services and community management",
      "Balanced monetization strategies and player retention mechanics",
    ],
  },
  {
    id: "5",
    img: rpa,
    title: "Robotic Process Automation (RPA) – Automate & Optimize:",
    description:
      "Free up your team's time with smart automation solutions that eliminate repetitive tasks and streamline operations. Our RPA implementations reduce human error, cut operational costs, and allow your staff to focus on high-value activities. We create custom automation workflows that integrate seamlessly with your existing systems and can be scaled as your business grows.",
    detailContent: [
      "Workflow automation using leading platforms (UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate)",
      "Custom bots for data entry, document processing, and complex business procedures",
      "AI-Powered RPA solutions combining automation with machine learning",
      "Intelligent document processing and adaptive workflows",
      "Seamless ERP/CRM system integration without expensive API development",
      "Thorough process analysis and documentation",
      "Attended and unattended bot development",
      "Employee training for successful adoption",
      "Robust monitoring and performance analytics",
    ],
  },
  {
    id: "6",
    img: ai,
    title: "AI & Machine Learning – Smarter Solutions, Real Results:",
    description:
      "We build intelligent systems that learn, adapt, and deliver value across operations. Our AI solutions transform raw data into actionable insights, automate complex decision-making processes, and create new capabilities that were previously impossible. From predictive analytics to computer vision, we implement practical AI that solves real business problems rather than technology for its own sake.",
    detailContent: [
      "AI Chatbots & Virtual Assistants with natural language processing",
      "24/7 customer support and automated internal communications",
      "Predictive Analytics & Insights systems for proactive decision-making",
      "Advanced Computer Vision & Natural Language Processing solutions",
      "Image, video, text, and speech analysis capabilities",
      "Custom ML Models for healthcare, finance, manufacturing, and retail",
      "Data preparation and enrichment services",
      "Model selection, training, and integration with business systems",
      "Continuous monitoring and retraining schedules",
    ],
  },
  {
    id: "7",
    img: cloud,
    title: "Cloud Computing – Fast, Flexible, Future-Ready:",
    description:
      "Scale with confidence through secure and seamless cloud solutions designed for your specific business needs. Our cloud architecture and implementation services help you leverage the full potential of cloud computing—reducing infrastructure costs, increasing operational flexibility, and enabling rapid innovation. We ensure your cloud environment is not just powerful, but also secure, compliant, and cost-efficient.",
    detailContent: [
      "Cloud Strategy & Migration across major providers (AWS, Azure, GCP, IBM Cloud)",
      "Minimal-disruption infrastructure and application transitions",
      "DevOps & CI/CD implementation with automated testing and deployment",
      "Serverless & Kubernetes solutions for maximum scalability",
      "Container orchestration and event-driven architectures",
      "Cloud Security through identity management and encryption",
      "Cost Optimization and resource utilization monitoring",
      "Resilient architectures with disaster recovery capabilities",
      "Data lakes and warehouses for analytics workloads",
      "24/7 monitoring and support services",
    ],
  },
  {
    id: "8",
    img: data,
    title: "Data Science & Analytics – Make Smarter Moves:",
    description:
      "Turn your data into actionable insights that drive business growth and competitive advantage. Our data science team combines statistical analysis, machine learning, and domain expertise to uncover patterns and opportunities hidden in your data. We build comprehensive analytics solutions that make data accessible and useful across your organization, empowering better decision-making at all levels.",
    detailContent: [
      "Big Data & Visualization solutions using distributed computing frameworks (Hadoop, Spark, Kafka)",
      "Intuitive dashboards and reports with modern visualization tools (Tableau, Power BI, D3.js)",
      "Predictive Modeling & Business Intelligence for trend forecasting",
      "Customer segmentation and anomaly detection capabilities",
      "Data Engineering & ETL Pipelines ensuring data quality and consistency",
      "Automated workflows for collecting, cleaning, and transforming data",
      "Data governance and compliance protocols",
      "Clear data access and privacy protection frameworks",
      "Knowledge transfer and training for building data literacy",
      "Scalable analytics capabilities that grow with your organization",
    ],
  },
  {
    id: "9",
    img: nlp,
    title: "NLP – Understand and Connect with Language:",
    description:
      "Build smarter interactions with natural language technology that transforms how users engage with your products and services. Our NLP solutions decode the complexities of human language to enable more intuitive and efficient communication between people and systems. From sentiment analysis to multilingual support, we implement practical NLP applications that enhance customer experiences and streamline operations.",
    detailContent: [
      "Chatbots & Voice Interfaces using advanced language models (BERT, GPT, T5)",
      "Conversational agents that understand context and handle complex queries",
      "Sentiment Analysis & Text Mining from unstructured data sources",
      "Brand perception tracking and customer feedback categorization",
      "Automated Translation & Speech Recognition in multiple languages",
      "Real-time translation and multilingual content management",
      "Speech-to-text transcription and voice command systems",
      "Custom entity recognition for domain-specific applications",
      "Hybrid solutions combining rule-based approaches with statistical models",
      "Thorough testing across languages, dialects, and use cases",
    ],
  },
  {
    id: "10",
    img: uiux,
    title: "UI/UX Design – Design That Works (and Wows):",
    description:
      "Great design goes beyond looks—it solves problems and creates meaningful connections with users. Our design team combines aesthetic excellence with deep user research to create interfaces that are intuitive, accessible, and delightful to use. We focus on creating cohesive design systems that maintain consistency across touchpoints while delivering exceptional experiences that drive engagement and loyalty.",
    detailContent: [
      "Research & Wireframing with user interviews and journey mapping",
      "Information architecture and low-fidelity prototyping",
      "User-Centered Interfaces with responsive layouts",
      "Accessible design practices and thoughtful micro-interactions",
      "Comprehensive design systems that scale across products",
      "Interactive Prototyping & usability testing",
      "Visual Identity and brand expression in digital environments",
      "Designer-developer collaboration for feasibility and vision",
      "Detailed specifications and asset preparation",
      "Measurement frameworks to evaluate design effectiveness",
    ],
  },
  {
    id: "11",
    img: marketing,
    title: "Digital Marketing – Visibility That Converts:",
    description:
      "We help great products get noticed and grow through data-driven marketing strategies tailored to your specific audience and business goals. Our marketing team combines creative storytelling with analytical precision to create campaigns that not only reach your target customers but engage and convert them. We focus on measurable results and continuous optimization across channels to maximize your marketing ROI.",
    detailContent: [
      "Strategic SEO campaigns with thorough keyword research",
      "Technical site optimization and content gap analysis",
      "Social Media Marketing with platform-specific content strategies",
      "Community management and influencer partnerships",
      "High-performance PPC Ads with careful audience targeting",
      "A/B testing and conversion tracking for maximum ROI",
      "Comprehensive Content & Email Strategy development",
      "Lead magnets and marketing automation sequences",
      "Personalized email campaigns for each buyer journey stage",
      "Integrated analytics and attribution modeling across channels",
    ],
  },
  {
    id: "12",
    img: chatbot,
    title:
      "Advanced Chatbot Solutions – Intelligent Conversational Experiences:",
    description:
      "Transform customer interactions with AI-powered chatbots that understand context, handle complex queries, and provide personalized responses at scale. Our chatbots integrate seamlessly across channels to provide 24/7 support, qualify leads, and gather valuable customer insights. We develop conversational interfaces that balance automation efficiency with the human touch to create meaningful connections with your audience.",
    detailContent: [
      "Customer Service Automation with advanced NLP capabilities",
      "Seamless human handoff for complex inquiries",
      "Lead Generation & Qualification bots integrated with CRM systems",
      "Multi-platform Implementation (websites, messaging apps, voice assistants)",
      "Industry-Specific Solutions for healthcare, e-commerce, and financial services",
      "Hybrid AI approaches combining rule-based systems with machine learning",
      "Built-in analytics dashboards for conversation insights",
      "Comprehensive training on intents and entities",
      "Natural dialogue flows through thoughtful conversation design",
      "Continuous improvement processes based on user interactions",
    ],
  },
];

// // portfolio images (web development)
// export const webPortfolio = [
//   {
//     id: 1,
//     img: require("./assets/images/web_projects/1.webp"),
//     title: "FE-Finance",
//   },
//   {
//     id: 2,
//     img: require("./assets/images/web_projects/2.webp"),
//     title: "Ocxee",
//   },
//   {
//     id: 3,
//     img: require("./assets/images/web_projects/3.webp"),
//     title: "Leaderbridge",
//   },
//   {
//     id: 4,
//     img: require("./assets/images/web_projects/4.webp"),
//     title: "Gigzio",
//   },
//   {
//     id: 5,
//     img: require("./assets/images/web_projects/5.webp"),
//     title: "FE Group",
//   },
//   {
//     id: 6,
//     img: require("./assets/images/web_projects/6.webp"),
//     title: "V Talkz",
//   },
// ];

// // portfolio images (app development)
// export const appPortfolio = [
//   {
//     id: 1,
//     img: require("./assets/images/app_projects/1.webp"),
//     title: "PartEx",
//   },
//   {
//     id: 2,
//     img: require("./assets/images/app_projects/2.webp"),
//     title: "Find A Driver",
//   },
//   // {
//   //   id: 3,
//   //   img: require("./assets/images/app_projects/3.webp"),
//   //   title: "Glowsy",
//   // },
//   {
//     id: 4,
//     img: require("./assets/images/app_projects/4.webp"),
//     title: "Artisan Express",
//   },
//   {
//     id: 5,
//     img: require("./assets/images/app_projects/5.webp"),
//     title: "House of Deliverance",
//   },
// ];
