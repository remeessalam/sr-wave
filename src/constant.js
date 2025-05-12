import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
//service images
import web from "./assets/images/services/web.png";
import app from "./assets/images/services/app.png";
import chat from "./assets/images/services/chat.png";
import game from "./assets/images/services/game.png";
import vrar from "./assets/images/services/vrar.png";
import mvp from "./assets/images/services/mvp.png";
import ai from "./assets/images/services/ai.png";
import data from "./assets/images/services/data.png";

export { logoImg };

export const companyDetails = {
  phone: "+919000000",
  whatsapp: "+9190000000",
  address: "[your-company-address]",
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
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Partnering with [your-company-name] has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The exceptional team at [your-company-name] took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: require("./assets/images/testimonial3.png"),
    desc: "“[your-company-name] stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”",
  },
];

// all services
export const allServices = [
  {
    id: "1",
    img: web,
    title: "Web Development (Full Stack):",
    description:
      "Crafting seamless and scalable websites and web applications tailored to your business needs, ensuring a dynamic online presence.",
    detailContent:
      "In today's digital age, having a robust online presence is vital for businesses. Full-stack web development encompasses everything from the client-side interface to server-side logic, ensuring a seamless user experience. By leveraging the latest technologies and frameworks, our team creates websites that are not only visually appealing but also scalable and secure. Whether it's an e-commerce platform, a corporate website, or a custom web application, we tailor every project to meet your unique business requirements. From initial design to deployment, we ensure your online platform is built to last. Partner with us to transform your vision into a dynamic, user-friendly website that stands out in the digital world.",
  },
  {
    id: "2",
    img: app,
    title: "Mobile App Development:",
    description:
      "Building innovative mobile applications that enhance customer engagement and provide users with exceptional on-the-go experiences.",
    detailContent:
      "Mobile applications have become an integral part of everyday life, offering unparalleled convenience and accessibility. Our mobile app development services focus on creating user-centric applications that work seamlessly on both iOS and Android platforms. We specialize in developing apps that prioritize performance, intuitive design, and scalability. Whether it's a consumer-facing app or an enterprise solution, our team ensures it aligns with your business goals and engages your audience effectively. By integrating cutting-edge technologies and ensuring a smooth user experience, we help you connect with customers on-the-go and drive business growth. Let us bring your app idea to life with innovation and precision.",
  },
  {
    id: "3",
    img: chat,
    title: "Chatbot Development:",
    description:
      "Creating AI-powered chatbots to automate interactions, enhance customer support, and deliver personalized assistance 24/7.",
    detailContent:
      "As businesses grow, managing customer interactions efficiently becomes critical. AI-powered chatbots are a game-changer, enabling businesses to provide real-time assistance, automate repetitive tasks, and offer personalized solutions. Our chatbot development services focus on creating intelligent bots that understand user intent and deliver accurate responses. Whether it's for customer support, lead generation, or e-commerce assistance, our chatbots enhance user experience while reducing operational costs. With advanced natural language processing capabilities, our bots can seamlessly integrate with your existing platforms. Unlock the potential of 24/7 automated customer interaction with our cutting-edge chatbot solutions.",
  },
  {
    id: "4",
    img: game,
    title: "Game Development:",
    description:
      "Designing interactive and engaging games across platforms, blending creativity and technology to captivate audiences.",
    detailContent:
      "Gaming is not just entertainment—it's an art form that combines storytelling, design, and technology. Our game development services bring your ideas to life by creating immersive and interactive experiences. From concept creation and character design to coding and deployment, we handle every aspect of game development with precision. Whether you're targeting mobile gamers, console players, or PC enthusiasts, our games are designed to captivate and engage. Using state-of-the-art engines and tools, we ensure stunning graphics, smooth performance, and compelling gameplay. Collaborate with us to create games that resonate with audiences and stand out in the competitive gaming industry.",
  },
  {
    id: "5",
    img: vrar,
    title: "Virtual Reality (VR) and Augmented Reality (AR):",
    description:
      "Developing immersive experiences that merge virtual and real-world elements, revolutionizing industries like gaming, education, and retail.",
    detailContent:
      "Virtual and Augmented Reality are transforming how we interact with technology. By blending digital elements with the physical world, VR and AR create engaging, immersive experiences that captivate users. Our expertise in VR and AR development spans various industries, including gaming, education, healthcare, and retail. We design custom solutions that meet your business needs, from VR simulations for training to AR apps for enhanced shopping experiences. By leveraging the latest advancements in technology, we craft experiences that not only impress but also add value to your brand. Explore the future of technology with our VR and AR solutions.",
  },
  {
    id: "6",
    img: mvp,
    title: "MVP Development:",
    description:
      "Turning ideas into impactful products quickly with scalable Minimum Viable Products tailored to market needs.",
    detailContent:
      "Launching a new product can be a daunting task, but MVP development simplifies the process by focusing on core functionalities. Our MVP development services help businesses validate their ideas quickly while minimizing risks and costs. We collaborate closely with you to understand your vision and develop a product that addresses the needs of your target audience. By leveraging agile methodologies, we ensure quick iterations and continuous improvement. Whether you're a startup or an established enterprise, our MVP solutions are designed to provide a strong foundation for future growth. Bring your idea to market faster and smarter with our expert MVP development services.",
  },
  {
    id: "7",
    img: ai,
    title: "Artificial Intelligence Development:",
    description:
      "Building intelligent systems that automate processes, personalize experiences, and enable smarter decision-making.",
    detailContent:
      "Artificial Intelligence is revolutionizing industries by enabling smarter and more efficient systems. Our AI development services focus on creating intelligent solutions tailored to your business needs. From predictive analytics and natural language processing to computer vision and machine learning models, we deliver AI systems that solve complex problems and drive innovation. By automating processes and personalizing user experiences, our AI solutions help businesses achieve greater efficiency and customer satisfaction. Embrace the power of AI to stay ahead in the competitive landscape with our expertise and dedication to delivering cutting-edge technologies.",
  },
  {
    id: "8",
    img: data,
    title: "Data Analytics and Business Intelligence:",
    description:
      "Transforming raw data into actionable insights, empowering businesses to make informed, data-driven decisions.",
    detailContent:
      "Data is the new currency, and harnessing its power can give businesses a significant competitive edge. Our data analytics and business intelligence services help you uncover valuable insights hidden within your data. By leveraging advanced analytics tools and techniques, we transform raw data into meaningful dashboards and reports. Our solutions empower you to identify trends, predict outcomes, and make data-driven decisions with confidence. From descriptive analytics to predictive modeling, we cover the entire spectrum of data analysis. Take control of your data and turn it into a strategic asset with our tailored analytics solutions.",
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
