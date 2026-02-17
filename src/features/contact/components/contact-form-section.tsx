"use client";

import React, { useState, useCallback } from "react";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { Input, Select, Button, Card } from "../../../components/ui";
import contactData from "../../../data/contact.json";

interface FormField {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

interface ContactData {
  contact: {
    subtitle: string;
    title: string;
    description: string;
  };
  form: {
    fields: FormField[];
    locationOptions: string[];
    submitText: string;
  };
}

const ContactFormSection: React.FC = () => {
  const { contact, form } = contactData as ContactData;
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    submissionData.append("access_key", "85d463f5-8f65-4696-a48a-9b1dae51cc3e");

    // ADD THIS LINE FOR REDIRECT:
    submissionData.append(
      "redirect",
      "https://tinaconlimited.com.ng/thank-you",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const data = await response.json();
      if (data.success) {
        // If redirect is set, Web3Forms usually handles the navigation,
        // but we can also trigger it manually for a faster feel:
        window.location.href = "https://tinaconlimited.com.ng/thank-you";
      } else {
        setResult("error");
      }

      // To this:
    } catch {
      setResult("error");
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-wrap items-center -m-8">
          {/* Text Content Area */}
          <div className="w-full lg:w-1/2 p-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-blue-500"></span>
                <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                  {contact.subtitle}
                </span>
              </div>

              <h1 className="font-heading mb-8 text-5xl md:text-7xl text-white font-bold leading-tight tracking-tighter">
                {contact.title.split(" ").map((word, i) =>
                  word.toLowerCase() === "touch" ? (
                    <span key={i} className="text-blue-500">
                      {" "}
                      {word}
                    </span>
                  ) : (
                    ` ${word}`
                  ),
                )}
              </h1>

              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                {contact.description}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone
                      size={20}
                      className="text-blue-400 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                      Call Us
                    </p>
                    <p className="font-semibold">+234 (0) 803 000 0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail
                      size={20}
                      className="text-blue-400 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                      Email Support
                    </p>
                    <p className="font-semibold">info@tinaconlimited.com.ng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Area */}
          <div className="w-full lg:w-1/2 p-8">
            <Card className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-transform hover:scale-[1.01]">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {form.fields.map((field, index) => (
                    <div
                      key={index}
                      className={
                        field.name === "message" || field.type === "textarea"
                          ? "col-span-full"
                          : ""
                      }
                    >
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">
                        {field.placeholder}
                      </label>
                      <Input
                        className="bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all py-6 rounded-xl"
                        type={field.type}
                        name={field.name}
                        placeholder={`Enter your ${field.name}...`}
                        required={field.required}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">
                    Project Location
                  </label>
                  <Select
                    className="bg-slate-50 border-slate-200 py-3 rounded-xl"
                    name="location"
                    onChange={handleInputChange}
                    placeholder="Select State / Location"
                    options={form.locationOptions}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        {form.submitText}
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </Button>
                </div>

                {/* Result Feedback */}
                {result === "success" && (
                  <p className="text-center text-green-600 font-bold text-sm bg-green-50 py-3 rounded-lg animate-pulse">
                    Message sent successfully! We will get back to you soon.
                  </p>
                )}
                {result === "error" && (
                  <p className="text-center text-red-600 font-bold text-sm bg-red-50 py-3 rounded-lg">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>

              <p className="mt-6 text-center text-sm text-slate-400">
                We typically respond within 24 business hours.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
