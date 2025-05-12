import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
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
              absolute w-full transition-all duration-500 ease-in-out
              ${
                activeTab === service.id
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }
            `}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                {service.title}
                {/* <ArrowUpRight className="w-6 h-6 text-blue-600" /> */}
              </h2>
              <img
                src={service.img}
                alt=""
                className="aspect-square w-[300px] object-cover h-[300px]"
              />
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="prose max-w-none text-gray-700">
                {service.detailContent}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
