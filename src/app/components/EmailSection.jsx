"use client";
import React, { useState,  useRef  } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

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
          setEmailSubmitted(true);
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
          <Link href="https://github.com/TheOverDeN">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/jakub-górecki-807248277/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
      <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
      <div className="mb-6">
        <label className="text-white block mb-2 text-sm font-medium">Your Email</label>
        <input  id="email" type="email" name="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" 
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required/>
        </div>
        <div className="mb-6">
        <label>Subject</label>
        <input className="className= bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..." type="test" name="subject"  minLength={5} required />
        </div>
        <div className="mb-6">
        <label>Message</label>
        <textarea className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi" name="message" />
        </div>
        <input className="bg-gradient-to-r from-[#fc7e77]  to-[#EFAC11] cursor-pointer  text-black font-medium py-2.5 px-5 rounded-lg w-full " minLength={10} required type="submit" value="Send" />
      </form>
     )}
  </div>
</section>
  );
};

export default Contact;


