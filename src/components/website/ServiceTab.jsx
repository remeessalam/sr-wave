import React, { useState, useRef, useEffect } from "react";
import { allServices } from "../../constant";
export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState("1");
  const tabsRef = useRef(null);

  useEffect(() => {
    const activeTabElement = document.getElementById(`tab-${activeTab}`);
    if (activeTabElement && tabsRef.current) {
      const scrollPosition =
        activeTabElement.offsetLeft -
        tabsRef.current.offsetWidth / 2 +
        activeTabElement.offsetWidth / 2;
      tabsRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tabs Navigation */}
      <div
        ref={tabsRef}
        className="flex overflow-x-auto no-scrollbar pb-4 mb-8 -mx-4 px-4 sm:px-0"
      >
        <div className="flex space-x-4 min-w-max">
          {allServices.map((service) => (
            <button
              id={`tab-${service.id}`}
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`
                whitespace-nowrap px-6 py-3 text-sm font-medium transition-all duration-300 ease-in-out
                ${
                  activeTab === service.id
                    ? "text-white border-b-2 border-secondary"
                    : "text-tertiary/70 hover:text-secondary"
                }
              `}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative lg:min-h-[600px] md:min-h-[650px] sm:min-h-[700px] min-h-[1180px]">
        {allServices.map((service) => (
          <div
            key={service.id}
            className={`
        absolute w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          activeTab === service.id
            ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
            : "opacity-0 translate-y-10 pointer-events-none scale-95"
        }
      `}
          >
            <div className="relative bg-gradient-to-br from-primary/20 to-blue-950/30 rounded-3xl p-8 mb-8 backdrop-blur-lg border border-white/10 shadow-2xl shadow-blue-900/20 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full filter blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full filter blur-3xl -z-10"></div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                    {service.title}
                    <span className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                      {/* <ArrowUpRight className="w-6 h-6 text-blue-300" /> */}
                    </span>
                  </h2>

                  <p className="text-white/80 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="prose max-w-none text-white/80 prose-headings:text-white prose-a:text-blue-300 prose-strong:text-white">
                    {service.detailContent}
                  </div>
                </div>

                <div className="flex-1 flex justify-center">
                  <div className="relative group h-fit">
                    <img
                      src={service.img}
                      alt=""
                      className="aspect-square w-full  object-cover max-w-[350px]  h-[350px] rounded-xl border border-white/10 shadow-lg transition-all duration-500 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-xl pointer-events-none"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
