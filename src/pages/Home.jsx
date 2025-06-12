import React from "react";
import icon1 from "../assets/images/Vector.png";
import icon2 from "../assets/images/Vector(1).png";
import icon3 from "../assets/images/Vector(2).png";
import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import ServiceTabs from "../components/website/ServiceTab";
import { RiBitCoinLine, RiSmartphoneLine } from "react-icons/ri";
import { MdSportsEsports } from "react-icons/md";
import ServiceCards from "../components/website/ServiceCards";
import bannervideo from "../assets/videos/bannervideo.mp4";
import ReactPlayer from "react-player";
const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  const serviceCards = [
    {
      id: 1,
      icon: <RiBitCoinLine size={50} className="text-white" />,
      title: "Blockchain Development",
      description:
        "Drive innovation with secure, decentralized blockchain solutions tailored to your business.",
    },
    {
      id: 2,
      icon: <MdSportsEsports size={50} className="text-white" />,
      title: "Game Development",
      description:
        "Engage audiences with immersive game development solutions, from concept to launch.",
    },
    {
      id: 3,
      icon: <RiSmartphoneLine size={50} className="text-white" />,
      title: "App Development",
      description:
        "Empower your business with intuitive and high-performance mobile applications.",
    },
  ];
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/40"></div>
        {/* <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-center"
          alt=""
        /> */}
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/30 via-black/10 to-black">
          <div
            data-aos="fade-up"
            className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
          >
            <p className="sub-heading">
              Welcome to
              {/* <span className="text-primary font-semibold">
              SR Wave
            </span> */}
            </p>
            <h1 className="heading text-stroke">SR Wave</h1>
            <p className="sub-heading">
              Your Trusted Partner for Cutting-Edge Technology Solutions
            </p>
          </div>
        </div>
        <ReactPlayer
          url={bannervideo}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                },
              },
            },
          }}
        />
      </section>
      <ServiceCards services={serviceCards} />
      {/* <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary rounded-lg p-5">
          <div className="flex items-center gap-3 mb-4">
            <RiBitCoinLine size={50} className="text-white" />
            <p className="text-lg  font-medium h-fit  ">
              Blockchain Development
            </p>
          </div>
          <p className="desc">
            Drive innovation with secure, decentralized blockchain solutions
            tailored to your business.
          </p>
        </div>

        <div className="bg-primary rounded-lg p-5">
          <div className="flex  items-center gap-3 mb-4">
            <MdSportsEsports size={50} className="text-white" />
            <h3 className="text-lg h-fit   font-medium ">Game Development</h3>
          </div>
          <p className="desc">
            Engage audiences with immersive game development solutions, from
            concept to launch.
          </p>
        </div>

        <div className="bg-primary rounded-lg p-5">
          <div className="flex gap-3 mb-4 items-center">
            <RiSmartphoneLine size={50} className="text-white" />
            <p className="text-lg h-fit   font-medium">App Development</p>
          </div>
          <p className="desc">
            Empower your business with intuitive and high-performance mobile
            applications.
          </p>
        </div>
      </div> */}
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Turning Ideas into Powerful Digital Experiences{" "}
              </h2>
              <p className="desc">
                At SR Wave, we don’t just build technology—we craft solutions
                that drive growth, efficiency, and innovation. Whether you're
                launching a startup, scaling an enterprise, or optimizing
                operations, our expertise in blockchain, AI, cloud computing,
                and software development ensures you stay ahead in today’s
                fast-evolving digital landscape.
              </p>
            </div>
            <div className="w-fit mt-4 justify-center lg:justify-start">
              <Link to="/about-us" className="primary-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ServiceTabs />
      {/* <AllServices /> */}
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
