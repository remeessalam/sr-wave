import React, { useState } from "react";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const cardVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
const drawerVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.4,
      duration: 0.5,
    },
  }),
  hover: {
    x: 5,
    transition: { duration: 0.2 },
  },
};

const AllServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <section className="wrapper py-[5rem] flex flex-col gap-5 items-center">
      <SubHeading heading="Our Services" />
      <h2 className="heading-2 max-w-[60rem] mx-auto text-center text-secondary">
        From Concept to Reality: Building Tomorrow's Solutions Today
      </h2>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover="hover"
            variants={cardVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-header rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 bg-header/30 backdrop-blur-md rounded-xl p-6 h-full flex flex-col border border-tertiary/20 group-hover:border-secondary transition-all duration-500 overflow-hidden">
              <div className="mb-6 relative">
                {/* <div className="w-16 h-16 rounded-lg bg-secondary/10 absolute -top-2 -left-2 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div> */}
                <img
                  src={service.img}
                  className="h-32 mx-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  alt={service.title}
                />
              </div>

              <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-tertiary transition-colors">
                {service.title}
              </h3>

              <p className="text-tertiary mb-6 line-clamp-3 flex-grow">
                {service.description}
              </p>

              <button
                onClick={() => handleSelectServiceToShowDetail(service)}
                className="relative overflow-hidden px-6 py-2 bg-secondary text-header font-medium rounded-lg 
                  before:absolute before:inset-0 before:bg-tertiary before:opacity-0 before:transition-opacity 
                  hover:before:opacity-100 group-hover:text-header transition-all duration-300"
              >
                <span className="relative z-10">Learn More</span>
              </button>

              <div className="absolute bottom-0 left-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            direction="top"
            className="p-4 z-50 w-screen overflow-y-scroll h-screen bg-primary"
            lockBackgroundScroll={true}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              className="h-full"
            >
              <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-secondary hover:text-tertiary transition-colors p-2 rounded-full bg-primary/50"
                >
                  <X size={30} />
                </motion.button>
              </div>

              <motion.div
                variants={contentVariants}
                className="wrapper flex flex-col gap-8 text-secondary pb-[2rem] px-4"
              >
                <motion.h1
                  className="heading-2 text-tertiary border-b border-tertiary/30 pb-4"
                  whileInView={{ x: [-20, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.4 }}
                >
                  {selectedService.title}
                </motion.h1>

                <motion.div
                  className="relative w-fit mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={selectedService.img}
                    alt={selectedService.title}
                    className="aspect-square w-full max-w-[300px] object-cover h-[300px] rounded-xl 
              border-2 border-tertiary hover:border-secondary transition-all duration-300
              shadow-lg shadow-primary/50"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-primary/0 rounded-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.p
                  className="desc !text-tertiary whitespace-pre-line bg-primary/50 p-6 rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {selectedService.description}
                </motion.p>

                <motion.ul className="list-none pb-[5rem] space-y-4 pl-0">
                  {selectedService.detailContent.map((obj, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      whileHover="hover"
                      className="!text-tertiary whitespace-pre-line pl-4 py-2
                border-l-4 border-tertiary hover:border-secondary
                transition-colors duration-200 bg-primary/20 rounded-r-lg"
                    >
                      {obj}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </Drawer>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AllServices;
