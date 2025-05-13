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
  phone: "+9900923994",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=919900923994&text&type=phone_number&app_absent=0",
  address: "1099 Near Adi Parashakti Temple,GOLLAHALLI E-Ciry",
  email: "osewgroups09@gmail.com",
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
// all services
export const allServices = [
  {
    id: "1",
    img: web,
    title: "Web Development – Modern, Optimized, Conversion-Focused:",
    description:
      "Your website is your digital front door—let's make it great. We create responsive, user-friendly websites that not only look stunning but also deliver exceptional performance and drive meaningful conversions. Our web solutions are built to scale with your business and provide an outstanding user experience across all devices.",
    detailContent:
      "We build fast, functional websites that drive results, leveraging the latest frameworks and platforms to ensure your online presence stands out in today's competitive digital landscape. Our comprehensive web development services include sophisticated frontend & backend solutions (React, Angular, Vue.js, Node.js, Django, Laravel), custom e-commerce platforms (Shopify, WooCommerce, Magento, BigCommerce) tailored to your unique business needs, robust CMS solutions (WordPress, Drupal, Contentful, Strapi) for easy content management, and meticulous SEO & performance optimization to ensure maximum visibility and lightning-fast load times. We pride ourselves on creating secure, accessible websites that not only meet but exceed modern web standards while providing seamless integration with your existing business systems.",
  },
  {
    id: "2",
    img: app,
    title: "App Development – Engaging Mobile & Web Apps:",
    description:
      "We design intuitive, high-performance apps that your users will love. Our development team creates seamless experiences across platforms, ensuring your app not only looks great but functions flawlessly. We focus on creating solutions that solve real problems for your customers while supporting your business objectives and growth strategies.",
    detailContent:
      "From concept to launch, we build apps that grow with your business, incorporating the latest technologies and best practices to ensure longevity and adaptability in an ever-changing digital landscape. Our comprehensive app development services include sophisticated native iOS & Android apps (Swift, SwiftUI, Kotlin, Jetpack Compose) with platform-specific optimizations, efficient cross-platform solutions (Flutter, React Native, Xamarin) that reduce development time without compromising quality, progressive web apps (PWAs) that combine the best of web and mobile experiences, and custom enterprise apps designed to streamline operations and boost productivity. We implement rigorous testing protocols, analytics integration, and post-launch support to ensure your app continues to evolve based on real user data and changing market conditions. Our team also handles app store optimization, compliance requirements, and regular updates to keep your app secure and performing at its best.",
  },
  {
    id: "3",
    img: blockchain,
    title: "Blockchain Development – Secure, Scalable, Decentralized:",
    description:
      "Unlock the potential of blockchain with tailored solutions designed for transparency and trust. Our blockchain experts develop custom applications that leverage distributed ledger technology to solve complex business challenges. We create secure, immutable systems that can transform your operations, enhance security, and open new revenue streams across various industries.",
    detailContent:
      "We specialize in blockchain solutions that bridge the gap between cutting-edge technology and practical business applications, ensuring you stay ahead in the rapidly evolving digital economy. Our extensive blockchain development expertise includes developing and auditing Smart Contracts across multiple platforms (Ethereum, Solana, Polkadot, Hyperledger, Cardano) to automate and secure business processes, comprehensive NFT & Token Development services (ERC-20, ERC-721, ERC-1155, BEP-20) with marketplace creation and integration capabilities, sophisticated DeFi Platforms & DApps that reimagine financial services through decentralized protocols, and Enterprise Blockchain Consulting & Integration that helps businesses implement private blockchain networks for supply chain management, identity verification, and secure data sharing. We also provide comprehensive security audits, scalability solutions, and ongoing support to ensure your blockchain implementation remains robust and future-proof as the technology continues to evolve and new use cases emerge.",
  },
  {
    id: "4",
    img: game,
    title: "Game Development – Build Immersive Gaming Experiences:",
    description:
      "From indie games to AAA titles, we bring your ideas to life with creative and technical precision. Our game development team combines artistic vision with programming expertise to create engaging, memorable gaming experiences across platforms. We focus on player engagement, monetization strategies, and technical performance to ensure your game stands out in a competitive market.",
    detailContent:
      "Our game development services encompass every aspect of the game creation process, from initial concept and design to development, testing, and post-launch support in today's diverse gaming ecosystem. We offer comprehensive 2D/3D game development using industry-standard engines (Unity, Unreal Engine, Godot) with custom physics, AI, and gameplay mechanics tailored to your vision, cutting-edge AR/VR experiences that push the boundaries of immersion and interaction in both entertainment and serious gaming applications, robust multiplayer & blockchain games featuring secure server architecture, matchmaking systems, and blockchain integration for NFTs and play-to-earn models, and specialized game porting, optimization & live ops services to extend your game's reach across platforms and maintain player engagement through regular content updates and community management. Our team includes experienced game designers, artists, animators, programmers, and QA specialists who work collaboratively to ensure your game delivers on both technical performance and player satisfaction metrics, with particular attention to retention strategies, monetization balance, and cross-platform consistency.",
  },
  {
    id: "5",
    img: rpa,
    title: "Robotic Process Automation (RPA) – Automate & Optimize:",
    description:
      "Free up your team's time with smart automation solutions that eliminate repetitive tasks and streamline operations. Our RPA implementations reduce human error, cut operational costs, and allow your staff to focus on high-value activities. We create custom automation workflows that integrate seamlessly with your existing systems and can be scaled as your business grows.",
    detailContent:
      "We provide comprehensive RPA solutions that transform business efficiency through intelligent automation, delivering measurable ROI by identifying and optimizing processes across your organization for maximum impact. Our workflow automation services leverage leading platforms (UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate) to create custom bots that handle everything from data entry and document processing to complex multi-step business procedures across departments, AI-Powered RPA solutions that combine traditional automation with machine learning capabilities for intelligent document processing, decision-making support, and adaptive workflows that improve over time, and seamless ERP/CRM system integration to connect disparate systems without expensive API development or manual data transfer processes. Our approach includes thorough process analysis and documentation, attended and unattended bot development, centralized automation management, and comprehensive employee training to ensure successful adoption. We also implement robust monitoring and analytics to continuously measure automation performance, identify optimization opportunities, and calculate actual cost savings and efficiency improvements across your automated processes.",
  },
  {
    id: "6",
    img: ai,
    title: "AI & Machine Learning – Smarter Solutions, Real Results:",
    description:
      "We build intelligent systems that learn, adapt, and deliver value across operations. Our AI solutions transform raw data into actionable insights, automate complex decision-making processes, and create new capabilities that were previously impossible. From predictive analytics to computer vision, we implement practical AI that solves real business problems rather than technology for its own sake.",
    detailContent:
      "Our AI/ML services bridge the gap between advanced theoretical concepts and practical business applications, making artificial intelligence accessible and valuable across industries through tailored implementations that address specific organizational challenges. We develop sophisticated AI Chatbots & Virtual Assistants using natural language processing and machine learning to provide 24/7 customer support, streamline internal communications, and automate routine interactions across multiple channels and languages, comprehensive Predictive Analytics & Insights systems that forecast trends, identify opportunities, and enable proactive decision-making by analyzing historical data patterns across sales, operations, and customer behavior, advanced Computer Vision & Natural Language Processing solutions that can analyze images, video, text, and speech for applications ranging from quality control and security to sentiment analysis and content moderation, and Custom ML Models specifically designed for various industries including healthcare diagnostics, financial risk assessment, manufacturing defect detection, and retail personalization. Our implementation process includes data preparation and enrichment, model selection and training, integration with existing business systems, and continuous monitoring with retraining schedules to ensure your AI solutions remain effective as conditions change.",
  },
  {
    id: "7",
    img: cloud,
    title: "Cloud Computing – Fast, Flexible, Future-Ready:",
    description:
      "Scale with confidence through secure and seamless cloud solutions designed for your specific business needs. Our cloud architecture and implementation services help you leverage the full potential of cloud computing—reducing infrastructure costs, increasing operational flexibility, and enabling rapid innovation. We ensure your cloud environment is not just powerful, but also secure, compliant, and cost-efficient.",
    detailContent:
      "Our cloud services provide end-to-end support for your digital transformation journey, from initial assessment and planning to implementation, optimization, and ongoing management in today's complex multi-cloud environments. We offer strategic Cloud Strategy & Migration services across major providers (AWS, Azure, GCP, IBM Cloud) with detailed assessment, planning, and execution to move your infrastructure, applications, and data to the cloud with minimal disruption, comprehensive DevOps & CI/CD implementation that streamlines your development pipeline with automated testing, deployment, and monitoring tools to accelerate delivery cycles while maintaining quality and reliability, advanced Serverless & Kubernetes solutions that maximize scalability and resource efficiency through container orchestration and event-driven architectures tailored to your workload patterns, and proactive Cloud Security & Cost Optimization practices that protect your data through identity management, encryption, and compliance controls while continuously monitoring resource utilization to eliminate waste and optimize spending. Our cloud experts specialize in designing resilient architectures with disaster recovery capabilities, implementing data lakes and warehouses for analytics workloads, managing hybrid and multi-cloud environments, and providing 24/7 monitoring and support to ensure your cloud infrastructure performs optimally under changing conditions.",
  },
  {
    id: "8",
    img: data,
    title: "Data Science & Analytics – Make Smarter Moves:",
    description:
      "Turn your data into actionable insights that drive business growth and competitive advantage. Our data science team combines statistical analysis, machine learning, and domain expertise to uncover patterns and opportunities hidden in your data. We build comprehensive analytics solutions that make data accessible and useful across your organization, empowering better decision-making at all levels.",
    detailContent:
      "Our data services encompass the complete analytics lifecycle, from collection and storage to processing, analysis, and visualization, ensuring you extract maximum value from both structured and unstructured data assets throughout your organization. We implement sophisticated Big Data & Visualization solutions that process massive datasets using distributed computing frameworks (Hadoop, Spark, Kafka) and transform complex information into intuitive dashboards and reports using modern visualization tools (Tableau, Power BI, D3.js), advanced Predictive Modeling & Business Intelligence systems that forecast trends, segment customers, detect anomalies, and support strategic planning through statistical modeling and machine learning algorithms tailored to your industry challenges, and robust Data Engineering & ETL Pipelines that ensure data quality, consistency, and accessibility by designing efficient data architectures and automated workflows for collecting, cleaning, transforming, and storing data from multiple sources. Our approach emphasizes data governance and compliance throughout the process, establishing clear protocols for data access, privacy protection, and regulatory adherence while building analytics capabilities that scale with your organization. We also provide knowledge transfer and training to build internal data literacy, creating a data-driven culture where employees across departments can effectively interpret and act on analytical insights.",
  },
  {
    id: "9",
    img: nlp,
    title: "NLP – Understand and Connect with Language:",
    description:
      "Build smarter interactions with natural language technology that transforms how users engage with your products and services. Our NLP solutions decode the complexities of human language to enable more intuitive and efficient communication between people and systems. From sentiment analysis to multilingual support, we implement practical NLP applications that enhance customer experiences and streamline operations.",
    detailContent:
      "We develop sophisticated NLP solutions that bridge the communication gap between humans and machines, leveraging advanced linguistic modeling and machine learning techniques to process, analyze, and generate natural language in ways that feel intuitive and valuable to end users. Our Chatbots & Voice Interfaces utilize state-of-the-art language models (BERT, GPT, T5) to create conversational agents that understand context, handle complex queries, maintain conversation history, and continuously improve through interaction data across text and voice channels, comprehensive Sentiment Analysis & Text Mining systems that extract meaning from unstructured text data to identify customer emotions, categorize feedback, track brand perception, and identify emerging issues or opportunities from reviews, social media, and support tickets, and sophisticated Automated Translation & Speech Recognition technology that breaks down language barriers through real-time translation services, multilingual content management, speech-to-text transcription, and voice command systems optimized for industry-specific terminology and acoustic environments. We implement custom entity recognition for domain-specific applications, integrate NLP capabilities with existing business systems, and develop hybrid solutions that combine rule-based approaches with statistical models for optimal performance. Our NLP implementations include thorough testing across languages, dialects, and use cases to ensure accuracy and natural interaction patterns in diverse real-world scenarios.",
  },
  {
    id: "10",
    img: uiux,
    title: "UI/UX Design – Design That Works (and Wows):",
    description:
      "Great design goes beyond looks—it solves problems and creates meaningful connections with users. Our design team combines aesthetic excellence with deep user research to create interfaces that are intuitive, accessible, and delightful to use. We focus on creating cohesive design systems that maintain consistency across touchpoints while delivering exceptional experiences that drive engagement and loyalty.",
    detailContent:
      "Our design services cover the entire product design lifecycle, from discovery and definition to delivery and iteration, ensuring every pixel serves a purpose and every interaction feels natural while supporting your business objectives and brand identity. We conduct thorough Research & Wireframing including user interviews, competitive analysis, journey mapping, information architecture, and low-fidelity prototyping to establish solid foundations based on actual user needs and behaviors rather than assumptions, create User-Centered Interfaces with responsive layouts, accessible design practices, thoughtful micro-interactions, and comprehensive design systems that scale across products and platforms while maintaining visual and functional consistency, and develop interactive Prototyping & Visual Identity elements through high-fidelity prototypes, usability testing, design language development, and brand expression in digital environments that communicate your unique value proposition. Our design process emphasizes collaboration between designers, developers, and stakeholders to ensure feasibility while maintaining creative vision, with particular attention to design-to-development handoff through detailed specifications and assets. We also implement measurement frameworks to evaluate design effectiveness post-launch, gathering quantitative and qualitative feedback to drive continuous improvement and ensure designs evolve with changing user expectations and business requirements.",
  },
  {
    id: "11",
    img: marketing,
    title: "Digital Marketing – Visibility That Converts:",
    description:
      "We help great products get noticed and grow through data-driven marketing strategies tailored to your specific audience and business goals. Our marketing team combines creative storytelling with analytical precision to create campaigns that not only reach your target customers but engage and convert them. We focus on measurable results and continuous optimization across channels to maximize your marketing ROI.",
    detailContent:
      "Our digital marketing services encompass a comprehensive, integrated approach to online promotion, combining technical expertise with creative content development to build brand awareness, drive qualified traffic, and convert prospects into loyal customers. We implement strategic SEO campaigns with thorough keyword research, technical site optimization, content gap analysis, and link building strategies designed to improve organic rankings and visibility for high-intent search terms across competitive markets, develop engaging Social Media Marketing programs including platform-specific content strategies, community management, paid social campaigns, and influencer partnerships that build authentic connections with your audience on their preferred channels, create high-performance PPC Ads across search engines and display networks with careful audience targeting, A/B testing, conversion tracking, and budget optimization to maximize return on ad spend while continuously improving quality scores and click-through rates, and design comprehensive Content & Email Strategy including content calendars, lead magnets, marketing automation sequences, and personalized email campaigns that nurture prospects through each stage of the buyer's journey. Our approach integrates analytics across all channels to provide unified reporting and attribution modeling, helping you understand exactly which marketing efforts are driving results and deserving of additional investment.",
  },
  {
    id: "12",
    img: chatbot,
    title:
      "Advanced Chatbot Solutions – Intelligent Conversational Experiences:",
    description:
      "Transform customer interactions with AI-powered chatbots that understand context, handle complex queries, and provide personalized responses at scale. Our chatbots integrate seamlessly across channels to provide 24/7 support, qualify leads, and gather valuable customer insights. We develop conversational interfaces that balance automation efficiency with the human touch to create meaningful connections with your audience.",
    detailContent:
      "We build sophisticated chatbot solutions that go beyond simple rule-based interactions to deliver truly intelligent conversational experiences that solve real business challenges and enhance customer satisfaction across touchpoints. Our chatbot development services include Customer Service Automation using advanced NLP to handle common inquiries, troubleshooting, and issue resolution with seamless human handoff capabilities when needed, Lead Generation & Qualification bots that engage website visitors, qualify prospects through conversational flows, and integrate with your CRM to nurture sales opportunities, Multi-platform Implementation across websites, messaging apps (WhatsApp, Facebook Messenger, Telegram), voice assistants, and internal communication tools to provide consistent experiences wherever your users prefer to engage, and Industry-Specific Solutions tailored for healthcare (appointment scheduling, symptom checking), e-commerce (product recommendations, order tracking), financial services (account inquiries, transaction processing), and other sectors. We employ hybrid AI approaches that combine the best of rule-based systems with machine learning capabilities to ensure both reliability and adaptability, with built-in analytics dashboards that provide insights into conversation patterns, user satisfaction, and business impact metrics. Our implementation includes comprehensive training on intents and entities, conversation design with natural dialogue flows, integration with backend systems, and continuous improvement processes to ensure your chatbot becomes more effective over time.",
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
