import React, { lazy } from "react";
import {
  FaRobot,
  FaGlobe,
  FaClock,
  FaPlug,
  FaLanguage,
  FaHeadset,
  FaShoppingCart,
  FaUserTie,
  FaChartLine,
  FaHospital,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket,
} from "react-icons/fa";
import bannerImg from "../assets/images/banner.webp";
import SubHeading from "../components/SubHeading";
import ablutchatbot from "../assets/images/mvp/ablutchatbot.jpg";
const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const features = [
  {
    icon: FaRobot,
    title: "Custom Solutions for Every Business",
    description:
      "We develop chatbots tailored to your specific industry and customer requirements.",
  },
  {
    icon: FaGlobe,
    title: "AI-Driven Conversational Intelligence",
    description:
      "Our chatbots leverage advanced AI and Natural Language Processing (NLP) to ensure seamless, human-like conversations.",
  },
  {
    icon: FaPlug,
    title: "Omnichannel Presence",
    description:
      "Our chatbots integrate effortlessly with multiple platforms, including websites, mobile apps, and social media platforms.",
  },
  {
    icon: FaClock,
    title: "Automation That Saves Time",
    description:
      "Automate repetitive tasks such as answering FAQs, booking appointments, or processing orders.",
  },
  {
    icon: FaClock,
    title: "24/7 Availability",
    description: "With our chatbot solutions, your business is never offline.",
  },
  {
    icon: FaPlug,
    title: "Seamless Integration",
    description:
      "Our chatbots can be integrated with your existing CRM, ERP, or other tools.",
  },
  {
    icon: FaLanguage,
    title: "Multilingual Support",
    description:
      "Expand your reach by offering services in multiple languages, ensuring inclusivity and global accessibility.",
  },
];

const useCases = [
  {
    icon: FaHeadset,
    text: "Customer Support: Automate responses to FAQs, troubleshoot issues, and escalate to human agents when needed.",
  },
  {
    icon: FaShoppingCart,
    text: "E-Commerce: Assist customers in browsing products, tracking orders, and making purchases.",
  },
  {
    icon: FaUserTie,
    text: "HR Services: Help employees with leave requests, policy inquiries, and internal updates.",
  },
  {
    icon: FaChartLine,
    text: "Lead Generation: Qualify leads by collecting key details and routing them to the sales team.",
  },
  {
    icon: FaHospital,
    text: "Healthcare: Schedule appointments, send reminders, and provide basic health advice.",
  },
];

const processSteps = [
  {
    icon: FaClipboardList,
    text: "Requirement Gathering: Understand your business goals and user needs.",
  },
  {
    icon: FaPencilRuler,
    text: "Design and Prototyping: Create user-friendly conversation flows and prototypes.",
  },
  {
    icon: FaCode,
    text: "Development: Build the chatbot using the latest AI frameworks and technologies.",
  },
  {
    icon: FaVial,
    text: "Testing and Iteration: Rigorously test the chatbot for accuracy, performance, and reliability.",
  },
  {
    icon: FaRocket,
    text: "Deployment and Support: Deploy the chatbot and provide ongoing support to ensure optimal performance.",
  },
];

function ChatBotLandingPage() {
  return (
    <div className="">
      <LandingHeader />
      <section id="banner" className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/90"></div>
        <img
          loading="lazy"
          src={bannerImg}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-center"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="text-xl">
            Welcome to{" "}
            <span className="text-primary font-semibold">SR Wave</span>
          </p>
          <h1 className="heading-1 text-stroke">Chatbot Development Service</h1>
          <p className="sub-heading">
            At SR Wave, we specialize in creating intelligent, scalable, and
            customizable chatbot solutions that revolutionize the way businesses
            interact with their customers.
          </p>
        </div>
      </section>
      <section id="about" className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={ablutchatbot}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading={"MVP Development"} />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={ablutchatbot}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Bring Your AI Chatbot Ideas to Life with Our Expert Development
                Service
              </h2>
              <p className="desc">
                At SR Wave, we specialize in creating intelligent chatbots that
                empower businesses and entrepreneurs to engage their audiences
                effectively. From conceptualization to deployment, our chatbot
                development service ensures your vision is transformed into a
                functional, AI-powered solution with minimal risk and maximum
                efficiency. Start innovating without the need for a hefty
                upfront investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="services" className="font-sans bg-black min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-black rounded-lg shadow-lg overflow-hidden">
            {/* Banner */}

            {/* Content */}
            <div className="p-8">
              {/* Features */}
              <section className="mb-12">
                <h2
                  data-aos="fade-up"
                  className="text-3xl font-bold mb-8 text-center"
                >
                  Why Choose SR Wave for Chatbot Development?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div
                      data-aos="fade-up"
                      key={index}
                      className="bg-secondary p-6 rounded-lg shadow-md flex  flex-col items-center sm:items-start"
                    >
                      <feature.icon className="text-4xl text-blue-500 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Use Cases */}
              <section className="mb-12">
                <h2
                  data-aos="fade-up"
                  className="text-3xl font-bold mb-8 text-center"
                >
                  Use Cases for Our Chatbots
                </h2>
                <ul className="grid md:grid-cols-2 gap-5">
                  {useCases.map((useCase, index) => (
                    <li
                      data-aos="fade-up"
                      key={index}
                      className="flex sm:flex-row flex-col  group items-center sm:items-start border border-primary rounded-lg h-full p-5"
                    >
                      <useCase.icon className="w-10 h-10 text-2xl sm:mb-0 mb-4 group-hover:scale-150 transition-all duration-500 text-blue-500 mr-4 mt-1" />
                      <span className="text-lg">{useCase.text}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Process */}
              <section className="mb-12">
                <h2
                  data-aos="fade-up"
                  className="text-3xl font-bold mb-8 text-center"
                >
                  Our Development Process
                </h2>
                <ol className="space-y-4 flex flex-col items-center">
                  {processSteps.map((step, index) => (
                    <li
                      data-aos="fade-up"
                      key={index}
                      className="flex  flex-col sm:flex-row items-start p-3 rounded-lg hover:scale-105 cursor-default transition-all duration-500 hover:border-primary border border-transparent"
                    >
                      <step.icon className="text-2xl text-blue-500 mr-4 mt-1 sm:mb-0 mb-4" />
                      <span className="text-lg">{step.text}</span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Call to Action */}
              <div className="text-center">
                <p data-aos="fade-up" className="text-xl mb-4">
                  Transform your customer experience with SR Wave's chatbot
                  solutions.
                </p>
                <p data-aos="fade-up" className="text-2xl font-bold">
                  Let's build a smarter future, one conversation at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <LandingFooter />
    </div>
  );
}

export default ChatBotLandingPage;
