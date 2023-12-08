"use client";
import React, { useState,  useRef  } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_otvfqit",
        "template_id351x1",
        form.current,
        "tpVuSlUZgZiHYbyAK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
    id="contact"
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
  >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
      <div className="mb-6">
        <label className="text-white block mb-2 text-sm font-medium">Your Email</label>
        <input  id="email" type="email" name="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
        </div>
        <div className="mb-6">
        <label>Subject</label>
        <input className="className= bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..." type="test" name="subject" />
        </div>
        <div className="mb-6">
        <label>Message</label>
        <textarea className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi" name="message" />
        </div>
        <input className="bg-gradient-to-r from-[#fc7e77]  to-[#EFAC11] hover:bg-orange-400 text-black font-medium py-2.5 px-5 rounded-lg w-full" type="submit" value="Send" />
      </form>

</section>
  );
};

export default Contact;


