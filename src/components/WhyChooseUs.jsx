import React from "react";
import bgImg from "../assets/images/bg-img.webp";
import bannerImg from "../assets/images/banner.webp";
import { ReactComponent as icon1 } from "../assets/svgs/Proven Expertise.svg";
import { ReactComponent as icon2 } from "../assets/svgs/Affordable & Time Efficient.svg";
import { ReactComponent as icon3 } from "../assets/svgs/Client-Centric Approach.svg";
import { ReactComponent as icon4 } from "../assets/svgs/Commitment to Quality.svg";
import { ReactComponent as icon5 } from "../assets/svgs/End-to-End Solutions.svg";
import { ReactComponent as icon6 } from "../assets/svgs/Dedicated Support.svg";
import { ReactComponent as icon7 } from "../assets/svgs/Transparent and Reliable.svg";
import { ReactComponent as icon8 } from "../assets/svgs/Innovative Problem Solvers.svg";

const content = [
  {
    icon: icon1,
    title: "Proven Expertise",
    // desc: "Seasoned professionals with proven track record in delivering successful projects",
  },
  {
    icon: icon2,
    title: "Scalable Solutions",
    // desc: "Future-proof solutions designed to grow with your business needs",
  },
  {
    icon: icon3,
    title: "Client-Centric Approach",
    // desc: "Your success is our priority - tailored solutions for your unique requirements",
  },
  {
    icon: icon4,
    title: "Commitment to Quality",
    // desc: "Rigorous quality assurance processes for flawless deliverables",
  },
  {
    icon: icon5,
    title: "End-to-End Solutions",
    // desc: "Comprehensive services from concept to deployment and beyond",
  },
  {
    icon: icon6,
    title: "Reliable Support",
    // desc: "24/7 dedicated support to ensure your operations run smoothly",
  },
  {
    icon: icon7,
    title: "Transparency & Integrity",
    // desc: "Honest communication and clear processes at every stage",
  },
  {
    icon: icon8,
    title: "Innovative Problem Solvers",
    // desc: "Creative solutions to complex challenges in the digital landscape",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="py-[5rem] relative bg-center bg-cover min-h-[50vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), url(${bgImg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div data-aos="fade-up" className="max-w-7xl mx-auto px-4">
        <div
          className="rounded-xl bg-center bg-cover relative overflow-hidden border border-[#ffffff15]"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          <div className="py-[4rem] px-5 sm:px-8 rounded-xl relative z-10">
            <div className="text-center mb-12">
              <h1
                data-aos="fade-up"
                className="heading-2 max-w-[60rem] mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#179CC4] to-[#f5f5f5f1]"
              >
                Why Choose SR Wave?
              </h1>
              <p
                className="desc max-w-[50rem] mx-auto text-[#D3D3D3] text-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We transform ideas into realities with innovative, reliable
                digital solutions. Our focus on transparency, scalability, and
                client satisfaction sets us apart.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col group items-center gap-4 bg-[#111010d9] rounded-xl p-6 transition-all duration-500 hover:bg-[#179CC4]/20 hover:shadow-lg hover:-translate-y-2 border border-[#ffffff10] hover:border-[#179CC4]/40 relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#179CC4] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                  {/* Icon container with pulse effect */}
                  <div className="p-4 rounded-full bg-gradient-to-br from-[#179CC4] to-[#0f4a5d] group-hover:from-[#f5f5f5f1] group-hover:to-[#179CC4] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(23,156,196,0.5)]">
                    <item.icon className="w-[2.5rem] h-[2.5rem] fill-white group-hover:fill-[#111010] transition-all duration-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-center text-[#f5f5f5f1] group-hover:text-white transition-all">
                    {item.title}
                  </h3>

                  <p className="text-sm text-center text-[#D3D3D3] opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                    {item.desc}
                  </p>

                  {/* Animated underline */}
                  <div className="w-0 h-[2px] bg-[#179CC4] group-hover:w-12 transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* CTA at bottom */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
