// src/components/Footer.jsx
import React from "react";
import { SOCIAL_PROFILES } from "../constants/SocialProfilesConstants";
import { IMAGE_ASSETS } from "../constants/ImageContants";
import { ROUTES } from "../constants/RoutesContants";
import { Icon } from "@iconify/react/dist/iconify.js";

// Social items config
const SOCIAL_ITEMS = [
  {
    key: "linkedin",
    href: SOCIAL_PROFILES.LINKEDIN,
    icon: "ri:linkedin-fill",
    aria: "LinkedIn",
  },
  {
    key: "upwork",
    href: SOCIAL_PROFILES.UPWORK,
    icon: "cib:upwork",
    aria: "Upwork",
  },
  {
    key: "instagram",
    href: SOCIAL_PROFILES.INSTAGRAM,
    icon: "simple-icons:instagram",
    aria: "Instagram",
  },
  {
    key: "email",
    href: `mailto:${SOCIAL_PROFILES.EMAIL}`,
    icon: "material-symbols:mail-outline-rounded",
    aria: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="pt-10 mt-10 font-primary border-t border-white/20 section-space-sm-bottom relative text-white">
      <div className="section-space-md-bottom">
        <div className="container">
          <div
            className="grid gap-x-8 gap-y-6
                          grid-cols-2
                          md:grid-cols-2 md:grid-rows-2
                          lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:grid-rows-1"
          >
            {/* Company Info: mobile full width, md left-top, lg first column */}
            <div className="text-center md:text-left lg:text-left  pb-6 md:pb-0 col-span-2 md:col-span-1 lg:col-span-1">
              <a
                className="flex mb-5 justify-center md:justify-start lg:justify-start "
                href={ROUTES.HOME}
              >
                <img
                  src={IMAGE_ASSETS.LOGO}
                  alt="CodeGrin Logo"
                  className="w-1/2 lg:w-44"
                />
              </a>

              <p className="mb-5 text-sm text-white/75 lg:pr-6">
                CodeGrin Technologies empowering the next generation of
                developers with hands-on courses in Web Development, UI/UX
                Design, Blockchain, Full Stack Development, and more.
              </p>

              <ul className="flex gap-3 justify-center md:justify-start lg:justify-start">
                {SOCIAL_ITEMS.map((item) => (
                  <li key={item.key}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={item.href}
                      aria-label={item.aria}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full text-black bg-white hover:bg-white/10 hover:text-white transition"
                    >
                      <Icon icon={item.icon} width={20} height={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links: mobile left col, md top-right, lg 2nd column */}
            <div className="text-left pl-5 lg:pl-0 col-span-1 md:col-span-1 lg:col-span-1">
              <h6 className="text-lg font-semibold mb-3">Quick Links</h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="index.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="service.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="courses.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="blog.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="about.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Support: mobile right col, md bottom-left, lg 3rd column */}
            <div className="text-left col-span-1 md:col-span-1 lg:col-span-1">
              <h6 className="text-lg font-semibold mb-3">Quick Support</h6>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="faq.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    FAQ’s
                  </a>
                </li>
                <li>
                  <a
                    href="terms-condition.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="privacy-policy.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    Support Center
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacts: mobile full width, md bottom-right, lg 4th column */}
            <div className="mt-5 lg:mt-0 px-5 lg:px-0 text-left col-span-2 md:col-span-1 lg:col-span-1">
              <h6 className="text-lg font-semibold mb-3">Contacts</h6>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Icon
                    icon="f7:location"
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <a
                    href="https://www.google.com/maps?ll=22.275119,70.778775&z=16"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 hover:text-primary"
                  >
                    309 - R K Prime, Nana Mava Circle, 150 Feet Ring Rd, Rajkot,
                    Gujarat , 360005
                  </a>
                </li>

                <li className="flex gap-3 items-center">
                  <Icon
                    icon="mage:phone-call"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <a
                    href="tel:+918238813001"
                    className="text-sm text-white/70 hover:text-primary"
                  >
                    +91 8238813001
                  </a>
                </li>

                <li className="flex gap-3 items-center">
                  <Icon
                    icon="material-symbols:mail-outline-rounded"
                    width={20}
                    height={20}
                    className="flex-shrink-0"
                  />
                  <a
                    href="mailto:info@codegrin.com"
                    className="text-sm text-white/70 hover:text-primary"
                  >
                    info@codegrin.com
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* end outer grid */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-3 mt-5 border-t border-white/20">
        <div className="container">
          <p className="mb-0 text-sm text-white/70">
            {new Date().getFullYear()} &copy;{" "}
            <span className="text-primary">Codegrin Technologies</span> | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
