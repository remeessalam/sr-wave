import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { testimonials } from "../constant";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import SubHeading from "./SubHeading";

const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 3,
        spacing: 30,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
        "(max-width: 768px)": {
          slides: {
            perView: 1,
            spacing: 15,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const handleNextClick = () => instanceRef.current?.next();
  const handlePrevClick = () => instanceRef.current?.prev();

  return (
    <div className="py-[5rem] bg-[#111010d9] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiNmNWY1ZjUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTAgMEg0MFY0MCIvPjwvc3ZnPg==')]"></div>

      <div className="wrapper flex flex-col items-center gap-8 relative z-10">
        <SubHeading heading="Client Testimonials" textColor="secondary" />

        <h2
          className="heading-2 max-w-[60rem] mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#f5f5f5f1] to-[#179CC4] text-center"
          data-aos="fade-up"
        >
          Voices of Success
        </h2>

        <p
          className="desc max-w-[50rem] text-center text-[#D3D3D3]"
          data-aos="fade-up"
        >
          Don't just take our word for it - hear what our clients have to say
          about their experience working with us.
        </p>

        <div className="flex items-center gap-4 w-full">
          <button
            className="hidden md:flex items-center justify-center rounded-full p-3 bg-[#f5f5f5f1] hover:bg-[#179CC4] text-[#111010] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(23,156,196,0.5)]"
            onClick={handlePrevClick}
            aria-label="Previous slide"
            data-aos="fade-right"
          >
            <ArrowLeft size={28} strokeWidth={2.5} />
          </button>

          <div ref={sliderRef} className="keen-slider py-6" data-aos="fade-up">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide flex flex-col group"
              >
                <div className="h-full bg-secondary/10 backdrop-blur-md border border-[#ffffff10] rounded-xl p-8 flex flex-col gap-6 transition-all duration-500 hover:border-[#179CC4]/40 hover:shadow-[0_10px_30px_rgba(23,156,196,0.15)] ">
                  <Quote className="text-[#179CC4] opacity-70 w-8 h-8" />

                  <p className="text-lg text-[#D3D3D3] italic group-hover:text-[#f5f5f5f1] transition-all">
                    "{item.desc}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#ffffff10] group-hover:border-[#179CC4]/30 transition-all flex items-center gap-4">
                    <div className="relative">
                      <img
                        loading="lazy"
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#179CC4]"
                      />
                      <div className="absolute group-hover:scale-125 transition-all duration-300 -bottom-1 -right-1 w-5 h-5 bg-[#179CC4] rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-[#f5f5f5f1]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#D3D3D3]">{item.position}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="hidden md:flex items-center justify-center rounded-full p-3 bg-[#f5f5f5f1] hover:bg-[#179CC4] text-[#111010] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(23,156,196,0.5)]"
            onClick={handleNextClick}
            aria-label="Next slide"
            data-aos="fade-left"
          >
            <ArrowRight size={28} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex items-center gap-5 md:hidden" data-aos="fade-up">
          <button
            className="flex items-center justify-center rounded-full p-3 bg-[#f5f5f5f1] hover:bg-[#179CC4] text-[#111010] hover:text-white transition-all duration-300 shadow-lg"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <ArrowLeft size={24} strokeWidth={2.5} />
          </button>
          <button
            className="flex items-center justify-center rounded-full p-3 bg-[#f5f5f5f1] hover:bg-[#179CC4] text-[#111010] hover:text-white transition-all duration-300 shadow-lg"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <ArrowRight size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
