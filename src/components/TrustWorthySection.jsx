import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const TrustWorthySection = React.memo(() => {
  const totalYrs = 2;
  const projectsDone = 110;
  const totalExperts = 15;
  const happlyClients = 100;

  const [yrs, setYrs] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, happlyClients));
      }, 10);

      // Animate Projects Completed
      const completionInterval = setInterval(() => {
        setCompletedProjects((prev) => Math.min(prev + 1, projectsDone));
      }, 10);

      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <div className="pt-[3rem]">
      <div
        ref={ref}
        className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 bg-[#111010d9] p-[2rem] border-t border-b border-[#D3D3D3]/20"
      >
        {/* Years of Experience */}
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-500 hover:bg-[#111010] hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:-translate-y-2 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#f5f5f5f1] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <h1 className="heading-1 text-5xl font-bold text-[#f5f5f5f1] group-hover:text-white group-hover:scale-110 transition-all duration-300">
            {yrs}+
          </h1>
          <p className="font-medium mt-3 text-xl text-[#D3D3D3] group-hover:text-[#f5f5f5f1] group-hover:font-semibold transition-all duration-300">
            Years of Experience
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f5f5f5f1] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        </div>

        {/* Expert Team */}
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-500 hover:bg-[#111010] hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:-translate-y-2 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#f5f5f5f1] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <h1 className="heading-1 text-5xl font-bold text-[#f5f5f5f1] group-hover:text-white group-hover:scale-110 transition-all duration-300">
            {experts}+
          </h1>
          <p className="font-medium mt-3 text-xl text-[#D3D3D3] group-hover:text-[#f5f5f5f1] group-hover:font-semibold transition-all duration-300">
            Expert Team
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f5f5f5f1] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        </div>

        {/* Happy Clients */}
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-500 hover:bg-[#111010] hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:-translate-y-2 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#f5f5f5f1] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <h1 className="heading-1 text-5xl font-bold text-[#f5f5f5f1] group-hover:text-white group-hover:scale-110 transition-all duration-300">
            {clients}+
          </h1>
          <p className="font-medium mt-3 text-xl text-[#D3D3D3] group-hover:text-[#f5f5f5f1] group-hover:font-semibold transition-all duration-300">
            Happy Clients
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f5f5f5f1] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        </div>

        {/* Projects Completed */}
        <div
          data-aos="fade-up"
          className="w-full flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-500 hover:bg-[#111010] hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:-translate-y-2 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#f5f5f5f1] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <h1 className="heading-1 text-5xl font-bold text-[#f5f5f5f1] group-hover:text-white group-hover:scale-110 transition-all duration-300">
            {completedProjects}+
          </h1>
          <p className="font-medium mt-3 text-xl text-[#D3D3D3] group-hover:text-[#f5f5f5f1] group-hover:font-semibold transition-all duration-300">
            Projects Completed
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f5f5f5f1] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
});

export default TrustWorthySection;
