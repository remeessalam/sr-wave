import React, { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";
import { companyDetails } from "../constant";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="flex flex-col gap-5 py-[5rem]">
      <h2 data-aos="fade-up" className="heading-2 text-center">
        Connect With Us Today!
      </h2>
      <p
        data-aos="fade-up"
        className="desc text-center max-w-[55rem] mx-auto px-4"
      >
        Whether you have questions about our services, want to request a
        consultation, or are ready to get started, we're just a click away. Fill
        out the form, and one of our experts will be in touch with you shortly.
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        className="flex flex-col max-w-xl md:min-w-[30rem] min-w-[20rem] mx-auto gap-4 mt-5 px-4"
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Name"
            className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
            {...register("name", {
              required: "Full name is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Full name is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.name?.message}</small>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email"
            className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Entered email is invalid",
              },
            })}
          />
          <small className="error-message">{errors.email?.message}</small>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="tel"
            placeholder="Phone Number"
            className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/i,
                message: "Entered phone number is invalid",
              },
            })}
          />
          <small className="error-message">{errors.phone?.message}</small>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Subject"
            className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
            {...register("subject", {
              required: "Subject is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Subject is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.subject?.message}</small>
        </div>
        <div className="flex flex-col gap-1">
          <textarea
            rows="3"
            placeholder="Message"
            className="outline-none border-primary border bg-transparent p-2 rounded-sm shadow-large shadow-primary/30"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.message?.message}</small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="primary-btn mt-2 "
        >
          Send Message
        </button>
      </form>
      {/* <form
        onSubmit={handleSubmit(handleFormSubmit)}
        data-aos="fade-up"
        className="flex flex-col gap-4 rounded-xl p-5 bg-secondary max-w-3xl mx-auto mt-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-white">Name</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-secondary"
              placeholder="Name"
              {...register("name", {
                required: "Full name is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Full name is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.name?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-white">Email</label>
            <input
              type="email"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-secondary"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Entered email is invalid",
                },
              })}
            />
            <small className="error-message">{errors.email?.message}</small>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-white">Phone</label>
            <input
              type="tel"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-secondary"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/i,
                  message: "Entered phone number is invalid",
                },
              })}
            />
            <small className="error-message">{errors.phone?.message}</small>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm ml-2 text-white">Subject</label>
            <input
              type="text"
              className="outline-none p-2 rounded-full bg-white/60 text-secondary placeholder-secondary"
              placeholder="Subject"
              {...register("subject", {
                required: "Subject is required",
                validate: (val) => {
                  if (val.trim() !== "") {
                    return true;
                  } else {
                    return "Subject is required";
                  }
                },
              })}
            />
            <small className="error-message">{errors.subject?.message}</small>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm ml-2 text-white">Message</label>
          <textarea
            rows="4"
            className="outline-none p-2 rounded-2xl bg-white/60 text-secondary placeholder-secondary"
            placeholder="Message"
            {...register("message", {
              required: "Message is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Message is required";
                }
              },
            })}
          />
          <small className="error-message">{errors.message?.message}</small>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="primary-btn mt-3 w-fit"
        >
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default LeadForm;
