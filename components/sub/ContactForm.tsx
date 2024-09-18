"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true); // Activează loading

    try {
      const response = await fetch("/api/emailSender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("There was an error sending the email.");
    } finally {
      setLoading(false); // Dezactivează loading
    }
  };

  return (
    <div className="mt-24 max-w-lg md:max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-10 shadow-input bg-[rgba(38,0,77,0.2)] z-40">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <LabelInputContainer>
            <Label className="text-lg md:text-base" htmlFor="firstname">
              First name
            </Label>
            <Input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              id="firstname"
              placeholder="John"
              type="text"
              className="h-12 text-lg"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-lg md:text-base" htmlFor="lastname">
              Last name
            </Label>
            <Input
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              id="lastname"
              placeholder="Cena"
              type="text"
              className="h-12 text-lg"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-6">
          <Label className="text-lg md:text-base" htmlFor="email">
            Email Address
          </Label>
          <Input
            name="email"
            value={formData.email}
            id="email"
            placeholder="youremailaddress@gmail.com"
            type="email"
            className="h-12 text-lg"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-6">
          <Label className="text-lg md:text-base" htmlFor="message">
            Message
          </Label>
          <Textarea
            className="h-24 text-lg"
            name="message"
            value={formData.message}
            id="message"
            placeholder="Let's work together!"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-12 text-lg font-medium shadow-md"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <span className="ml-2">Sending...</span>
            </div>
          ) : (
            "Send"
          )}
          <BottomGradient />
        </button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};
