"use client"

import { FaPaperPlane } from "react-icons/fa";
import HeadingSection from "./HeadingSection";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/sendEmail";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  

// Clear the form inputs
function clearForm() {
  const inputs = Array.from(document.getElementsByTagName('input'));
  const textareas = Array.from(document.getElementsByTagName('textarea'));

  inputs.forEach(input => {
    input.value = '';
  });

  textareas.forEach(textarea => {
    textarea.value = '';
  });
}


 // Notify the user after form submission
 const notifySuccess = () => {
  toast.success("Your message was successfully sent!", {
    position: "top-right", // Specify the position like this
    autoClose: 3000,       // Auto close after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

  return (
    <>
    <motion.section
    initial={{
      opacity:0,
    }} 
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1
    }}
    id="contact" className="mb-28 max-w-[50rem] text-center w-[min(100%,38rem)] sm:mb-0 px-4
    ">
    <HeadingSection title={'Contact Me'} />
    <p>Please contact me directly at <a href="mailto:aboelwafaa213@gmail.com" className="underline">aboelwafaa213@gmail.com</a> or through this form.</p>
    <form className="mt-10 flex flex-col gap-y-4" action={ async formData => {
      await sendEmail(formData);
      clearForm();
      notifySuccess(); // Display success toast after submission
    }}>
      <input name="senderEmail" required maxLength={500} type="email" placeholder="Your email" className="h-12 p-2 border border-black/10 rounded-lg dark:text-black"/>
      <textarea name="message" required maxLength={500} id="" placeholder="Your message" className="h-52 p-2 rounded-lg border border-black/10 dark:text-black"></textarea>
      <button onSubmit={() => {
        clearForm();

      }} type="submit" className="foucs:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 group w-[8rem] text-white bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-950 dark:hover:text-white h-[3rem] rounded-full outline-none transition-all flex self-center items-center justify-center gap-x-1">Submit <FaPaperPlane className="group-hover:transalte-x-1 group-hover:translate-y-1 transition-all text-xs "/></button>
    </form>
    </motion.section>
    <ToastContainer />
    </> 
  )
}
