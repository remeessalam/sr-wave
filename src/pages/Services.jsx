import React from "react";
const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);

const Services = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner
        title="Our Services"
        desc="At SR Wave, we go beyond delivering digital solutions. Our team is driven by a passion for innovation and a commitment to excellence. From blockchain to AI and cloud computing, we bring expertise, creativity, and integrity to every project, empowering businesses to thrive in a digital-first world."
      />
      <AllServices />
      <OurValue />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <WebsiteFooter />
    </>
  );
};

export default Services;
