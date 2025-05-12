import { Minus } from "lucide-react";
import React from "react";

const SubHeading = ({ heading, textColor }) => {
  return (
    <div
      data-aos="fade-up"
      className={`section-heading flex items-center gap-1 ${
        textColor && `!text-${textColor}`
      }`}
    >
      <Minus size={30} /> {heading}
    </div>
  );
};

export default SubHeading;
