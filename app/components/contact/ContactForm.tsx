"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_91ssn8g",
        "template_jjegxdr",
        {
          from_name: form.name,
          to_name: "Hasan",
          from_email: form.email,
          to_email: "omunite21@gmail.com",
          message: form.message,
        },
        "VeFeVdEHL9F9_i6xp"
      )
      .then(() => {
        setLoading(false);

        alert(
          "Thanks for reaching out! I'll get back to you as soon as possible."
        );

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);

        alert("Something went wrong.");
      });
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="space-y-6">

        <Input
          label="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
        />

        <Input
          label="Your Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@email.com"
        />

        <TextArea
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
        />

        <motion.button
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-4 font-semibold text-white shadow-lg"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

      </div>
    </motion.form>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  type?: string;
};

function Input({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <label className="block">

      <p className="mb-2 text-sm font-medium text-slate-300">
        {label}
      </p>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:bg-white/10"
      />

    </label>
  );
}

type TextAreaProps = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

function TextArea({
  label,
  name,
  value,
  placeholder,
  onChange,
}: TextAreaProps) {
  return (
    <label className="block">

      <p className="mb-2 text-sm font-medium text-slate-300">
        {label}
      </p>

      <textarea
        rows={6}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:bg-white/10"
      />

    </label>
  );
}