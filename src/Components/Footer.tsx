import Image from "next/image";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-gradient text-white py-8">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-wrap justify-evenly space-y-8 md:space-y-0">
        {/* Logo and Description Section */}
        <div className="w-full md:w-1/2 lg:flex-1 px-4">
          <div className="flex items-center space-x-2">
            <Image
              unoptimized={true}
              quality={100}
              width={50}
              height={50}
              src="/Logo.png"
              alt="logo"
            />
            <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              <Image
                src="/Swasthi.png"
                alt="Swasthi Logo"
                width={96}
                height={24}
              />
            </h1>
          </div>
          <p className="mt-2 text-sm text-neutral-200">
            Swasthi is your all-in-one health app for personalized wellness
            insights, progress tracking, and daily motivation. Available on
            Android and iOS. Join our community today!
          </p>
          <p className="mt-4 text-sm">
            <a href="mailto:help-support@fitnearn.com">
              <Image
                src="/email.png"
                alt="Email Icon"
                width={16}
                height={16}
                className="inline mr-2"
              />
              help-support@fitnearn.com
            </a>
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://x.com/fitnearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/fitnearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-gray-700 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/fitearn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-700 p-2 rounded-full"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/fit-n-earn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="bg-gray-700 p-2 rounded-full"
            >
              <TiSocialLinkedin />
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-4 text-sm text-justify">
            {["Home", "Features", "How it works", "Pricing"].map(
              (link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-orange-500 text-gray-200">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Help & Support Section */}
        <div className="w-1/2 md:w-1/4 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
          <ul className="space-y-4 text-sm text-justify">
            {[
              { label: "About us", href: "/Aboutus" },
              { label: "Terms & Conditions", href: "/TermsAndConditions" },
              { label: "Privacy Policy", href: "/PrivacyPolicy" },
              { label: "Data Deletion Policy", href: "/DataDeletionPolicy" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-orange-500 text-gray-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App Section */}
        <div className="w-full md:w-1/2 lg:flex-1 px-4">
          <h4 className="font-semibold text-lg mb-4">Download App</h4>
          <div className="flex flex-wrap gap-2">
            {[
              {
                platform: "App Store",
                src: "/apple.png",
                label: "Download on the",
              },
              {
                platform: "Google Play",
                src: "/playstore.png",
                label: "Get it on",
              },
            ].map((app, index) => (
              <a
                href="#"
                key={index}
                className="inline-flex items-center justify-center gap-2 border-2 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={app.src}
                  alt={app.platform}
                  width={24}
                  height={24}
                />
                <div className="text-left">
                  <span className="block text-xs font-bold leading-tight">
                    {app.label}
                  </span>
                  <span className="block text-lg font-semibold leading-tight">
                    {app.platform}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <br />
      <hr className="m-auto w-[85%] pt-10" />
      <div className="flex flex-col md:flex-row justify-between text-center text-sm px-28 space-y-4 md:space-y-0">
        <p>© Copyright 2024, All Rights Reserved.</p>
        <p>Made with ❤️ in India</p>
        <p>Design and Developed by FitnEarn</p>
      </div>
    </footer>
  );
};

export default Footer;
