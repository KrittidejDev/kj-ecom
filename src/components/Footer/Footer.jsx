import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGitAlt, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              This website as part of my portfolio. It was built using React and
              Tailwind CSS to ensure modern design and efficient development.
            </p>
            <p className="text-gray-500 mt-4 font-bold">
              Made by Krittidej JangAiem
            </p>
            {/* Link to my portfolio */}
            <a
              href=""
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full hover:bg-primary duration-300 "
            >
              Visit To My Portfolio
            </a>
          </div>
          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second col Links  */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLink.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300 "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                </div>
                <div>
                  <p>Srisamran, Songphinong</p>
                </div>
                <div>
                  <p>Suphanburi, Thailand</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+66-864569999</p>
                </div>
                {/* Socaial Link */}
                <div className="flex items-center gap-3 mt-4">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaGitAlt className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
