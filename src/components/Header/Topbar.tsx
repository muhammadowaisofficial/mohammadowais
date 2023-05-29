import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelopeOpenText } from "react-icons/fa";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
// import Topbarlinks from "@/data/topbar";

const Topbar = () => {
  return (
    <div className="flex justify-between bg-[#201949] px-7 py-2 text-white">
      {/* Left Side Social Icon */}
      <div className="social_icon flex items-center">
        <Link
          href={"#"}
          className="hover:text-caribbeangreen border-r border-white px-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={18} />
        </Link>
        <Link
          href={"#"}
          className="hover:text-caribbeangreen border-r border-white px-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={18} />
        </Link>
        <Link
          href={"#"}
          className="hover:text-caribbeangreen border-white px-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram size={18} />
        </Link>
      </div>
      {/* Right Side Contact Information */}
      <div className='contact_info flex items-center'>
            <Link href={'#'} className='flex items-center px-1 hover:text-caribbeangreen' target='_blank' rel='noopener noreferrer'>
                <FaEnvelopeOpenText size={18} className="mr-3" />
                <span className="">info@ecommerceinside.co</span>
            </Link>
            <Link href={'#'} className='flex items-center px-1 hover:text-caribbeangreen' target='_blank' rel='noopener noreferrer'>
                <BsFillTelephoneFill size={18} className="mr-3" />
                <span className="">+1 (734) 361 4340</span>
            </Link>
        </div>

      {/* <div className="contact_info flex items-center">
      {
        Topbarlinks?.map((item,index) => (
            <Link key={index} href={item.link} className='flex items-center px-1 hover:text-caribbeangreen' target='_blank' rel='noopener noreferrer'>
                <FaEnvelopeOpenText size={18} className="mr-3" />
                <span className="">{item.title}</span>
            </Link>
        ))
    }
      </div> */}
    </div>
  );
};

export default Topbar;
