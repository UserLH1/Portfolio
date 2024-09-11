"use client";
import { cn } from "@/utils/utils";
import React, { useState } from "react";
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
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("form data: " + formData);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/emailSender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: { message: string; error: string } = await response.json();

      if (response.status === 200) {
        setSuccessMessage(data.message);
        setErrorMessage("");
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      } else {
        setErrorMessage(data.error);
      }
    } catch (error) {
      setErrorMessage("There was an error sending the email.");
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[linear-gradient(180deg,rgba(38,0,77,0.2),rgba(0,0,0,0.2))]   z-40">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact me
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Get in touch with me for any queries or project ideas.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              id="firstname"
              placeholder="John"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              id="lastname"
              placeholder="Cena"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            value={formData.email}
            id="email"
            placeholder="youremailadress@gmail.com"
            type="email"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className=""
            name="message"
            value={formData.message}
            id="message"
            placeholder="Let's work together!"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>
        {successMessage && (
          <p className="mt-4 text-green-500">{successMessage}</p>
        )}
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4"></div>
      </form>
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
