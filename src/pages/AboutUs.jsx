import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.jpeg";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  // const [selectedImg, setSelectedImg] = React.useState(0);
  // const images = [teamImg1, teamImg2, teamImg3];

  // const imgChangeInterval = setInterval(() => {
  //   setSelectedImg(selectedImg === 2 ? 0 : selectedImg + 1);
  // }, 1000);

  // useEffect(() => {
  //   return () => clearInterval(imgChangeInterval);
  // }, [imgChangeInterval]);
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt="About SR Wave"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt="About SR Wave"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Driving Innovation, Building Trust
              </h2>
              <p className="desc">
                At <b>SR Wave</b>, we are more than just a tech company—we are
                your partners in crafting smart, scalable solutions that fuel
                business growth and digital transformation. From blockchain to
                AI, our expertise is rooted in transparency, integrity, and a
                passion for innovation.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-[2rem]">
          <h2 className="text-xl font-medium">
            Empowering Businesses Through Technology
          </h2>
          <p className="desc mt-2">
            At SR Wave, our mission is to bridge the gap between emerging
            technologies and real-world business challenges. Our goal is to
            design solutions that are not only innovative but also ethically
            driven and sustainable.
            <br /> <br />
            We believe in creating long-lasting partnerships built on trust,
            transparency, and the pursuit of excellence. Together, let's
            redefine what technology can do for your business.
          </p>
        </div>
        <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Vision and Mission
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                At SR Wave, our mission is to empower businesses with tailored
                digital solutions that accelerate growth, drive innovation, and
                foster sustainable success. From end-to-end software development
                to AI-powered insights, we deliver results that matter.
                <br /> <br />
                Our vision is to be the go-to tech partner for companies seeking
                to innovate, scale, and succeed in a rapidly evolving digital
                landscape.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt="Our Vision and Mission"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustWorthySection />
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-sky-300 rounded-full filter blur-3xl"></div>
        </div>

        {/* Grid container */}
        <div className="wrapper relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image section with cool border effect */}
            <div data-aos="fade-right" className="relative group">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary to-sky-700 opacity-70 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
              <div className="relative h-full overflow-hidden rounded-lg border border-gray-800">
                <img
                  loading="lazy"
                  src={aboutImg3}
                  className="object-cover h-full w-full max-h-[20rem] md:max-h-none transition-transform duration-700 group-hover:scale-105"
                  alt="Our Mission"
                />
              </div>
            </div>

            {/* Text content with animated elements */}
            <div data-aos="fade-left" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-secondary">
                  Mission
                </span>
              </h2>

              <div className="space-y-5 text-gray-300">
                <p className="text-lg leading-relaxed">
                  At <span className="font-bold text-white">SR Wave</span>, our
                  mission is to craft digital solutions that drive innovation,
                  streamline operations, and deliver tangible results. Our
                  approach blends{" "}
                  <span className="text-sky-300">technical excellence</span>{" "}
                  with a commitment to integrity.
                </p>

                <div className="relative pl-5 border-l-2 border-gray-800">
                  <div className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-primary"></div>
                  <p className="text-lg leading-relaxed">
                    From blockchain development to AI-driven insights, we
                    transform complex challenges into{" "}
                    <span className="text-sky-300">impactful solutions</span>{" "}
                    that empower businesses to stay ahead of the curve.
                  </p>
                </div>

                <div className="relative p-5 bg-gray-800/50 rounded-lg border border-gray-800 backdrop-blur-sm">
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-sky-300"></div>
                  <p className="text-lg leading-relaxed">
                    At <span className="font-bold text-white">SR Wave</span>,
                    innovation is more than a buzzword—it's our core value. Join
                    us as we shape the future of business with smart,
                    data-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      {/* <section className="text-white wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Expert Team" />
              <h2 className="heading-2">Meet Our Team</h2>
              <p className="desc">
                At <b>SR Wave</b>, our team is at the heart of every
                solution we provide. Combining expertise, innovation, and a deep
                commitment to client success, our professionals are dedicated to
                transforming complex challenges into seamless experiences. From
                developers and designers to strategists and support specialists,
                each team member brings unique skills that drive our mission
                forward. Get to know the people powering the next generation of
                digital solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-tertiary text-center text-white">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
