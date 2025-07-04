"use client";
import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import CalendlyEmbed from "../CalendlyEmbed/CalendlyEmbed";

function Footer() {
  return (
    <div className="w-full min-h-screen bg-[#242734] px-4 md:px-[105px] pt-12 flex flex-col shadow-[0_3px_15px_rgba(0,0,0,0.24)] gap-10">
      <div className="flex items-center justify-center flex-col md:flex-row gap-2">
        <div className="md:w-[50%]">
          <div
            id="contact"
            className="flex flex-col w-full h-full justify-center md:items-start items-center px-[30px] py-[20px] gap-[25px] tracking-[1px] text-center md:text-left"
          >
            <h2 className="text-white text-[5vw] md:text-[2vw] font-semibold leading-snug">
              Vous avez un projet ?<br />
              Parlons-en.
            </h2>
            <p className="text-[14px] font-extralight text-[#b6b6b6]">
              Contactez-moi par email en expliquant votre projet, je reviendrais
              vers vous rapidement.
            </p>
            <Link
              href="mailto:tom.foltier@icloud.com"
              className="paragraph__link"
            >
              <p className="text-[14px] font-extralight text-[#b6b6b6]">
                Tom.Foltier@icloud.com
              </p>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
            <h2 className="text-white text-[5vw] md:text-[2vw] font-semibold leading-snug">
              Ou bien réservez directement un appel téléphonique avec moi :
            </h2>
          </div>
        </div>
        <div className="w-[90%] md:w-[50%]">
          <CalendlyEmbed />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-5 mb-10">
        <Image src="/logo.png" alt="TF Logo" width={80} height={30} priority />
        <p>
          <span>Merci de votre visite</span>, à bientôt !
        </p>
        <div className="flex items-center gap-10 pt-8">
          <Link href={""}>
            <FontAwesomeIcon icon={faInstagram} className=" text-[25px]" />
          </Link>
          <Link href={""}>
            <FontAwesomeIcon icon={faLinkedinIn} className="text-[25px]" />
          </Link>
          <Link href={""}>
            <FontAwesomeIcon icon={faWhatsapp} className="text-[25px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
