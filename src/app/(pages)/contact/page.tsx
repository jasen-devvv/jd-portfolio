import { FaEnvelope, FaFacebook, FaInstagram, FaLocationDot, FaPhone, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="w-full px-10">
      <div className="text-center mt-5">
        <h1>CONTACT</h1>
        <p className="lato-regular opacity-70">
          I'd love to hear from you! <br />
          Whetever it's a project, job oppurtunity or just a chat.
        </p>
      </div>

      <div className="flex justify-center gap-x-5 mt-16">
        <div className="bg-green-400 p-3 w-[36rem] rounded-xl shadow-black-sb text-center">
          <h4>FORM CONTACT</h4>
          <p className="lato-regular text-lato-normal opacity-70">
            Send me a message!
          </p>

          <form method="POST" className="mt-10">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2">Your Name</label>
              <input placeholder="Full Name" type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2">Your Email</label>
              <input placeholder="Email address" type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2">Subject</label>
              <input placeholder="Subject here..." type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-left font-medium lato-bold text-lato-medium mb-2">Your Message</label>
              <textarea placeholder="Message here..." id="message" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 h-32"></textarea>
            </div>
            <div className="mb-4">
                <button className="bg-red-500 py-2 px-4 text-white lato-bold text-lato-large rounded-lg">Submit</button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h5>Contact Information</h5>
            <p className="lato-regular text-lato-normal opacity-70">
              Feel free to get in touch with me via email or phone.
            </p>
          </div>

          <div className="mt-5">
            <p className="flex gap-x-1"><FaLocationDot /><span className="text-blue-500 lato-bold">Address</span>: Jln. Berangas Barat RT. 7 RW. 3, Kecamatan Barito Kuala, Kalimantan Selatan</p>
            <p className="flex gap-x-1"><FaEnvelope /><span className="text-blue-500 lato-bold">Email</span>: janadevofficial@gmail.com</p>
            <p className="flex gap-x-1"><FaPhone /><span className="text-blue-500 lato-bold">Telphone</span>: (+62) 887 - 0527 - 9826</p>
          </div>

          <div className="mt-5">
            <h5>Follow Me</h5>
            <ul className="flex flex-wrap my-2 gap-x-2">
              <li className="bg-red-500 p-2 rounded-full text-white-1"><a href="#"><FaInstagram className="text-4xl" /></a></li>
              <li className="bg-red-500 p-2 rounded-full text-white-1"><a href="#"><FaFacebook className="text-4xl" /></a></li>
              <li className="bg-red-500 p-2 rounded-full text-white-1"><a href="#"><FaTwitter className="text-4xl" /></a></li>
              <li className="bg-red-500 p-2 rounded-full text-white-1"><a href="#"><FaTiktok className="text-4xl" /></a></li>
              <li className="bg-red-500 p-2 rounded-full text-white-1"><a href="#"><FaYoutube className="text-4xl" /></a></li>
            </ul>
          </div>
          <div>
            <h5>My Location</h5>
            <iframe className="mt-5 rounded-xl shadow-black-sb" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.9615518325915!2d114.56781463470155!3d-3.2541891633074256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1733839188022!5m2!1sen!2sid" width="600" height="350" style={{'border': '0px'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
