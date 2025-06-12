import React from "react";
import ourValuesIcon1 from "../../assets/images/icons/innovation&excellence.png";
import ourValuesIcon2 from "../../assets/images/icons/integrity&transparency.png";
import SubHeading from "../SubHeading";

const OurValue = () => {
  return (
    <section className="bg-[#111010d9] py-[5rem] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiNmNWY1ZjUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuNSI+PHBhdGggZD0iTTAgMEg0MFY0MCIvPjwvc3ZnPg==')]"></div>

      <div className="wrapper grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-7">
          <SubHeading heading="Our Values" textColor="secondary" />

          <h2 data-aos="fade-up" className="heading-2 mx-0 text-[#f5f5f5f1]">
            Innovation That Drives Growth,
            <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f5f5f1] to-[#D3D3D3]">
              Integrity That Builds Trust
            </span>
          </h2>

          <p data-aos="fade-up" className="desc !text-[#D3D3D3]">
            At SR Wave, we believe in pushing boundaries through innovation
            while maintaining transparency and integrity in all our endeavors.
            Our solutions are designed to empower businesses to thrive in a
            fast-paced digital landscape.
          </p>

          {/* Value Item 1 */}
          <div
            data-aos="fade-up"
            className="flex gap-5 p-5 rounded-xl transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-lg hover:-translate-y-1 group w-full"
          >
            <div className="min-w-[4rem] h-[4rem] bg-[#f5f5f5f1] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <img
                loading="lazy"
                src={ourValuesIcon1}
                className="w-[2rem] object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                alt="Innovation & Excellence"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl font-semibold text-[#f5f5f5f1] group-hover:text-white transition-all">
                Innovation & Excellence
              </h6>
              <p className="desc !text-[#D3D3D3] group-hover:!text-[#f5f5f5f1] transition-all">
                Crafting smart, scalable solutions that drive business growth
                and operational efficiency.
              </p>
            </div>
          </div>

          {/* Value Item 2 */}
          <div
            data-aos="fade-up"
            className="flex gap-5 p-5 rounded-xl transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-lg hover:-translate-y-1 group w-full"
          >
            <div className="min-w-[4rem] h-[4rem] bg-[#f5f5f5f1] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
              <img
                loading="lazy"
                src={ourValuesIcon2}
                className="w-[2rem] object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                alt="Integrity & Transparency"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl font-semibold text-[#f5f5f5f1] group-hover:text-white transition-all">
                Integrity & Transparency
              </h6>
              <p className="desc !text-[#D3D3D3] group-hover:!text-[#f5f5f5f1] transition-all">
                Building trust through open communication, reliable service, and
                a commitment to quality.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Skills */}
        <div
          data-aos="fade-up"
          className="bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-7 h-full justify-center rounded-2xl p-10 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-[#f5f5f5f1] mb-2">
            Our Expertise
          </h3>

          {[
            { skill: "Blockchain Development", percentage: 95 },
            { skill: "Game Development", percentage: 98 },
            { skill: "AI & ML Solutions", percentage: 92 },
            { skill: "Cloud Migration", percentage: 90 },
          ].map((item, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-[#f5f5f5f1] group-hover:text-white transition-all">
                  {item.skill}
                </p>
                <p className="font-medium text-[#D3D3D3] group-hover:text-[#f5f5f5f1] transition-all">
                  {item.percentage}%
                </p>
              </div>
              <div className="w-full bg-[#ffffff15] h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-[#f5f5f5f1] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}

          <div className="mt-4 pt-4 border-t border-[#ffffff10]">
            <p className="text-[#D3D3D3] italic">
              "We measure our success by the growth and satisfaction of our
              clients."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
