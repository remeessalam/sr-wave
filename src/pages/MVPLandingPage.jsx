import React, { lazy } from "react";
import {
  FaLightbulb,
  FaPiggyBank,
  FaRobot,
  FaRocket,
  FaSync,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import SubHeading from "../components/SubHeading";
import aboutmbp from "../assets/images/mvp/aboutmvp.jpg";
import bannerImg from "../assets/images/banner.webp";
import { Link } from "react-scroll";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const MVPLandingPage = () => {
  const whyChooseReasons = [
    {
      icon: <FaLightbulb />,
      title: "From Concept to Reality",
      description:
        "Have a groundbreaking idea but unsure where to start? We specialize in turning your vision into a functional MVP that allows you to test your concept in the real world before committing significant resources.",
    },
    {
      icon: <FaPiggyBank />,
      title: "Cost-Effective Solutions",
      description:
        "Save time and money by focusing on the core features that define your idea. Our streamlined development process ensures that you get a high-quality product within your budget.",
    },
    {
      icon: <FaRobot />,
      title: "Harnessing AI, ML, and Generative AI",
      description:
        "With AI, Machine Learning, and Generative AI being at the forefront of technological innovation, we provide cutting-edge solutions that help bring your ideas to life. Whether it’s integrating AI-driven features or leveraging data for smarter decision-making, we’re here to make your product future-ready.",
    },
    {
      icon: <FaRocket />,
      title: "Rapid Time-to-Market",
      description:
        "Time is of the essence for startups and entrepreneurs. With SR Wave, you can launch your MVP quickly to gather user feedback, validate your idea, and adapt as needed.",
    },
    {
      icon: <FaSync />,
      title: "Iterative and Agile Approach",
      description:
        "We work collaboratively with you, adapting your MVP based on user insights and market needs, ensuring the final product aligns perfectly with your goals.",
    },
    {
      icon: <FaTools />,
      title: "End-to-End Expertise",
      description:
        "From ideation and design to development and deployment, we provide comprehensive support at every stage of the MVP journey. Our team ensures your product is technically robust, user-friendly, and scalable for future growth.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Validation Without Risk",
      description:
        "Test your idea in the market with minimal financial commitment. Use your MVP to gain feedback, attract investors, or fine-tune your vision before a full-scale launch.",
    },
  ];

  const mvpProcess = [
    {
      title: "Idea Validation",
      description:
        "Understand your concept, target audience, and market requirements to define the MVP’s scope and goals.",
    },
    {
      title: "Design and Prototyping",
      description:
        "Create wireframes and mockups that focus on the essential features, ensuring a seamless user experience.",
    },
    {
      title: "Development",
      description:
        "Build a functional MVP with the latest technologies, focusing on the key functionalities needed to showcase your idea.",
    },
    {
      title: "Testing and Deployment",
      description:
        "Rigorous testing ensures your MVP is reliable, secure, and market-ready. We then deploy the product to your desired platform.",
    },
    {
      title: "Feedback and Iteration",
      description:
        "Gather real-world user feedback to refine and enhance the product, ensuring it aligns with your audience's expectations.",
    },
  ];

  const targetAudiences = [
    {
      title: "Entrepreneurs",
      description:
        "Test your innovative ideas without the need for a massive initial investment.",
    },
    {
      title: "Startups",
      description:
        "Validate your product-market fit and attract investors with a working MVP.",
    },
    {
      title: "Businesses",
      description:
        "Explore new markets or concepts with minimal risk and effort.",
    },
    {
      title: "Investors",
      description:
        "Assess the potential of a business idea through a cost-effective MVP.",
    },
  ];

  return (
    <div>
      {" "}
      <LandingHeader />
      <div className="font-sans">
        {/* Banner Section */}
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
            <h1 className="heading-1 text-stroke">
              MVP Development: Turning Ideas into Impactful Products.
            </h1>
            <p className="sub-heading">
              Validate, Innovate, and Accelerate - Building Smarter Solutions
              with Minimal Investment.
            </p>
          </div>
        </section>
        {/* <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="MVP Development"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              MVP Development Service
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Turning Ideas into Reality with SR Wave
            </p>
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
              Get Started
            </button>
          </div>
        </div> */}

        {/**About section */}
        <section id="about" className="text-white wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:block h-full">
              <img
                loading="lazy"
                src={aboutmbp}
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
                    src={aboutmbp}
                    className="object-cover h-full rounded-lg w-full"
                    alt="about"
                    width="200"
                    height="200"
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem] mx-auto">
                  Transform Your Ideas into Reality with Our MVP Development
                  Service
                </h2>
                <p className="desc">
                  At SR Wave, we empower innovators and entrepreneurs by
                  transforming their ideas into reality through our Minimum
                  Viable Product (MVP) Development Service. Our goal is to help
                  you test the waters, validate your vision, and refine your
                  product with minimal risk and maximum efficiency, all without
                  requiring a hefty upfront investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SR Wave Section */}
        <section id="services" className="py-16 px-4 bg-black">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Choose SR Wave
          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl text-blue-500 mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-200">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 px-4 bg-black">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Who Can Benefit from Our MVP Service?
          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudiences.map((reason, index) => (
              <div
                data-aos="fade-up"
                s
                key={index}
                className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-200">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MVP Development Process Section */}
        <section className="py-16 px-4">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our MVP Development Process
          </h2>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              {mvpProcess.map((step, index) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="flex flex-col items-center text-center mb-8 md:mb-0"
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-secondary text-white py-16 px-4 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Bring Your Ideas to Life?
          </h2>
          <p data-aos="fade-up" className="text-xl mb-8">
            Partner with SR Wave to develop your MVP and turn your dreams into
            reality.
          </p>
          <button
            data-aos="fade-up"
            className="bg-white text-secondary font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
          >
            <Link
              to={`contact`}
              key={"contact"}
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us Today
            </Link>
          </button>
        </section>
      </div>
      <ContactForm />
      <LandingFooter />
    </div>
  );
};

export default MVPLandingPage;
