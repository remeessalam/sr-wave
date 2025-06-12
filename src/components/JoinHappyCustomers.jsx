import React from "react";
import bgImg from "../assets/images/bg-img.webp";
import { useKeenSlider } from "keen-slider/react";
import img1 from "../assets/images/client-logos/1.png";
import img2 from "../assets/images/client-logos/2.png";
import img3 from "../assets/images/client-logos/3.png";
import img4 from "../assets/images/client-logos/4.png";
import img5 from "../assets/images/client-logos/5.png";
import img6 from "../assets/images/client-logos/6.png";
import img7 from "../assets/images/client-logos/7.png";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 25000, easing: (t) => t };

const JoinHappyCustomers = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 25,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 6,
          spacing: 40,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="py-16 bg-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: Math.random() * 300 + 50 + "px",
              height: Math.random() * 300 + 50 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              filter: "blur(40px)",
              opacity: 0.3,
              transform: `scale(${Math.random() * 2 + 1})`,
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/60 mb-4">
            Trusted By <span className="text-secondary">100+</span> Happy
            Clients
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join our growing community of satisfied customers who trust our
            services
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider py-8 relative">
          {/* Glow effect on hover for each logo */}
          {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center px-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  width="200"
                  height="100"
                  loading="lazy"
                  src={img}
                  alt="featured in"
                  className="object-contain h-16 md:h-20 filter brightness-0 invert opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Animated border */}
        <div className="mt-8 relative">
          <div className="absolute inset-0 border-t border-gray-800 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full border-t-2 border-primary rounded-full animate-border-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHappyCustomers;
