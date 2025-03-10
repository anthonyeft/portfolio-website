'use client';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa6';
import MagicButton from './ui/MagicButton';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { pending } = useFormStatus();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (data: { name: string; email: string; message: string }) => {
    setIsLoading(true);

    // Convert to FormData
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      setIsLoading(false);
      return;
    }

    toast.success('Message sent successfully');
    setIsLoading(false);
    setIsSubmitted(true);

    // Reset the submitted state after 10 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 10000);
  };

  return (
    <motion.section
      id="contact"
      className="w-full flex justify-center items-center lg:min-h-screen py-16 px-4 sm:px-6"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="flex flex-col w-full items-center">
        <h1 className="heading text-3xl sm:text-4xl mb-8 sm:mb-14">
          Contact
        </h1>

        <div className="w-full max-w-4xl p-5 sm:p-6 md:p-8 bg-black-200 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-lg relative">
          <div
            className="absolute inset-0 border border-card_border_color rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] pointer-events-none"
            style={{ maskImage: 'linear-gradient(to bottom, black 10%, rgba(0, 0, 0, 0.2) 90%)' }}
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">Feel free to reach out</h2>

          <form
            className="space-y-4 sm:space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(formData);
            }}
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                maxLength={500}
                className="w-full px-4 py-3 sm:py-4 bg-black-300 text-white text-base sm:text-lg rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
                maxLength={500}
                className="w-full px-4 py-3 sm:py-4 bg-black-300 text-white text-base sm:text-lg rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                onChange={handleChange}
                maxLength={5000}
                className="w-full px-4 py-3 sm:py-4 bg-black-300 text-white text-base sm:text-lg rounded-xl sm:rounded-2xl h-32 sm:h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              <MagicButton
                title="Send Message"
                icon={<FaPaperPlane className="text-sm sm:text-base" />}
                position="right"
                otherClasses="h-11 sm:h-12 md:h-13 w-full sm:w-auto px-5 sm:px-7 md:px-10 text-base sm:text-lg"
                isLoading={isLoading || pending}
                isSubmitted={isSubmitted}
              />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;