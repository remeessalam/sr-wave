import React from "react";
import ourValuesIcon1 from "../../assets/images/icons/innovation&excellence.png";
import ourValuesIcon2 from "../../assets/images/icons/integrity&transparency.png";
import SubHeading from "../SubHeading";

const OurValue = () => {
  return (
    <section className="bg-tertiary/95 py-[5rem]">
      <div className="wrapper grid md:grid-cols-2 items-center gap-7">
        <div className="flex flex-col items-start gap-5">
          <SubHeading heading="Our Values" textColor="black" />
          <h2 data-aos="fade-up" className="heading-2 mx-0 text-black">
            Innovation That Drives Growth,
            <br /> Integrity That Builds Trust
          </h2>
          <p data-aos="fade-up" className="desc !text-black">
            At SR Wave, we believe in pushing boundaries through innovation
            while maintaining transparency and integrity in all our endeavors.
            Our solutions are designed to empower businesses to thrive in a
            fast-paced digital landscape.
          </p>
          <div data-aos="fade-up" className="flex gap-5 mt-2">
            <div className="min-w-[4rem] h-[4rem] bg-secondary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon1}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium text-black">
                Innovation & Excellence
              </h6>
              <p className="desc !text-black">
                Crafting smart, scalable solutions that drive business growth
                and operational efficiency.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-secondary rounded-full flex items-center justify-center">
              <img
                loading="lazy"
                src={ourValuesIcon2}
                className="w-[2rem] object-contain"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium text-black">
                Integrity & Transparency
              </h6>
              <p className="desc !text-black">
                Building trust through open communication, reliable service, and
                a commitment to quality.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bg-primary flex flex-col gap-6 h-full justify-center rounded-xl p-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Blockchain Development</p>
              <p className="font-medium">95%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary/50 h-full w-[95%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Game Development</p>
              <p className="font-medium">98%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary/50 h-full w-[98%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">AI & ML Solutions</p>
              <p className="font-medium">92%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary/50 h-full w-[92%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="font-medium">Cloud Migration</p>
              <p className="font-medium">90%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-primary/50 h-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
