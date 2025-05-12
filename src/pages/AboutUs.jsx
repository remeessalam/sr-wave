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
      <section className="wrapper py-[3rem] bg-tertiary">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[20rem] rounded-lg"
              alt="Our Mission"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <p className="desc !text-black">
              At <b>SR Wave</b>, our mission is to craft digital solutions that
              drive innovation, streamline operations, and deliver tangible
              results. Our approach blends technical excellence with a
              commitment to integrity, ensuring that every project not only
              meets business goals but also aligns with ethical principles.
              <br /> <br />
              From blockchain development to AI-driven insights, we transform
              complex challenges into impactful solutions that empower
              businesses to stay ahead of the curve. Our team of experts
              leverages cutting-edge technologies to build solutions that are
              robust, scalable, and future-ready.
              <br /> <br />
              At <b>SR Wave</b>, innovation is more than a buzzword—it’s our
              core value. Join us as we shape the future of business with smart,
              data-driven solutions that inspire trust and fuel sustainable
              growth.
            </p>
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
                At <b>[your-company-name]</b>, our team is at the heart of every
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
