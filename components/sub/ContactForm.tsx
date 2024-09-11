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
    <div className="mt-24 max-w-lg md:max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-10 shadow-input bg-[linear-gradient(180deg,rgba(38,0,77,0.2),rgba(0,0,0,0.2))] z-40">
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
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-12 text-lg font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>

        {successMessage && (
          <p className="mt-4 text-green-500">{successMessage}</p>
        )}
        {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
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
