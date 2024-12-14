"use client"

import { motion } from "motion/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};


export default function Contact() {
  return (
    <main className="w-full px-5">
      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="text-center mt-5">
        <motion.h1 variants={childVariants} className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand">
          CONTACT
        </motion.h1>
        <motion.p variants={childVariants} className="font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">
          <span className="opacity-50 ">I'd love to hear from you! <br />
          Whether it's a project, job opportunity, or just a chat.</span>
        </motion.p>
      </motion.div>

      <motion.div variants={containerVariants} initial='hidden' animate='visible' className="flex flex-col sm:flex-row justify-center items-start gap-10 mt-16">
        <motion.div variants={childVariants} className="bg-primary p-6 w-full sm:w-[36rem] rounded-xl shadow-black-sb">
          <h4 className="text-h6 md:text-h5 lg:text-h4 font-quicksand font-bold text-black-1 text-center">
            CONTACT FORM
          </h4>
          <p className="font-latoRegular text-body-normal text-center mt-2">
            <span className="opacity-60">Send me a message!</span>
          </p>

          <form method="POST" className="mt-10">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2"
              >
                Your Name
              </label>
              <input
                placeholder="Full Name"
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2"
              >
                Your Email
              </label>
              <input
                placeholder="Email address"
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2"
              >
                Subject
              </label>
              <input
                placeholder="Subject here..."
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                placeholder="Message here..."
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 h-32"
              ></textarea>
            </div>
            <div className="mb-4 text-center">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-info py-2 px-6 text-white font-bold text-lg rounded-lg hover:bg-blue-400 transition duration-300 ease-in-out">
                Submit
              </motion.button>
            </div>
          </form>
        </motion.div>

        <motion.div variants={containerVariants} initial='hidden' animate='visible' className="w-full sm:w-[36rem] flex flex-col gap-6">
          <motion.div variants={childVariants}>
            <h5 className="text-h5 md:text-h4 lg:text-h3 font-quicksand font-bold">
              Contact Information
            </h5>
            <p className="font-latoRegular text-body-small md:text-body-normal lg:text-body-medium opacity-60">
              Feel free to get in touch with me via email or phone.
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="space-y-4">
            <p className="flex gap-x-2 font-latoRegular items-center">
              <FaLocationDot color="#FF0000" className="flex-shrink-0" />
              <span className="block">
                <span className="text-blue-500 font-latoBold font-bold">
                  Address:
                </span>{" "}
                Jln. Berangas Barat RT. 7 RW. 3, Kecamatan Barito Kuala,
                Kalimantan Selatan
              </span>
            </p>
            <p className="flex gap-x-2 font-latoRegular items-center">
              <FaEnvelope color="#6C757D" className="flex-shrink-0" />
              <span className="block">
                <span className="text-blue-500 font-latoBold font-bold">
                  Email:
                </span>{" "}
                janadevofficial@gmail.com
              </span>
            </p>
            <p className="flex gap-x-2 font-latoRegular items-center">
              <FaPhone color="#4CAF50" className="flex-shrink-0" />
              <span className="block">
                <span className="text-blue-500 font-latoBold font-bold">
                  Phone:
                </span>{" "}
                (+62) 887 - 0527 - 9826
              </span>
            </p>
          </motion.div>

          <motion.div variants={childVariants}>
            <h5 className="font-quicksand text-h6 md:text-h5 lg:text-h4 font-bold">
              Follow Me
            </h5>
            <ul className="flex flex-wrap gap-4">
              <li className="bg-white-1 p-3 rounded-full hover:bg-white-4 transition duration-300 ease-in-out shadow-black-sb">
                <a href="#">
                  <FaInstagram color="#E1306C" className="text-3xl" />
                </a>
              </li>
              <li className="bg-white-1 p-3 rounded-full hover:bg-white-4 transition duration-300 ease-in-out shadow-black-sb">
                <a href="#">
                  <FaFacebook color="#1877F2" className="text-3xl" />
                </a>
              </li>
              <li className="bg-white-1 p-3 rounded-full hover:bg-white-4 transition duration-300 ease-in-out shadow-black-sb">
                <a href="#">
                  <FaTwitter color="#1DA1F2" className="text-3xl" />
                </a>
              </li>
              <li className="bg-black-1 p-3 rounded-full hover:bg-black-4 transition duration-300 ease-in-out shadow-black-sb">
                <a href="#">
                  <FaTiktok color="#FFFFFF" className="text-3xl" />
                </a>
              </li>
              <li className="bg-white-1 p-3 rounded-full hover:bg-white-4 transition duration-300 ease-in-out shadow-black-sb">
                <a href="#">
                  <FaYoutube color="#FF0000" className="text-3xl" />
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={childVariants}>
            <h5 className="font-quicksand text-h6 md:text-h5 lg:text-h4 font-bold">
              My Location
            </h5>
            <iframe
              className="mt-5 rounded-xl shadow-black-sb"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.9615518325915!2d114.56781463470155!3d-3.2541891633074256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1733839188022!5m2!1sen!2sid"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
