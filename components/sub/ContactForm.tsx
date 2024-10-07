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
    setLoading(true); // Enable loading

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
      setLoading(false); // Disable loading
    }
  };

  return (
    <div className="mt-24 max-w-lg md:max-w-xl w-full  rounded-lg p-8 shadow-xl bg-[#1f293772] z-40">
      <form className="my-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelInputContainer>
            <Label
              className="text-lg md:text-base text-gray-300"
              htmlFor="firstname"
            >
              First name
            </Label>
            <Input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              id="firstname"
              placeholder="John"
              type="text"
              className="h-12 p-3 rounded-lg text-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-purple-500"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label
              className="text-lg md:text-base text-gray-300"
              htmlFor="lastname"
            >
              Last name
            </Label>
            <Input
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              id="lastname"
              placeholder="Cena"
              type="text"
              className="h-12 p-3 rounded-lg text-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-purple-500"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label className="text-lg md:text-base text-gray-300" htmlFor="email">
            Email Address
          </Label>
          <Input
            name="email"
            value={formData.email}
            id="email"
            placeholder="john.cena@gmail.com"
            type="email"
            className="h-12 p-3 rounded-lg text-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label
            className="text-lg md:text-base text-gray-300"
            htmlFor="message"
          >
            Message
          </Label>
          <Textarea
            className="h-24 p-3 rounded-lg text-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-purple-500"
            name="message"
            value={formData.message}
            id="message"
            placeholder="Let's work together!"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className={`bg-[#9233eaa4] hover:bg-[#9333ea] w-full py-3 text-white rounded-lg shadow-md transition-all duration-300 ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
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

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-2">{children}</div>;
};
