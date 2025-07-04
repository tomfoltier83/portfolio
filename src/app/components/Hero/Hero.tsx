"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

const contentArray = [
  {
    title: "Introduction",
    subTitle:
      "Web Developer &<br /> Product Designer, basé<br /> dans le Sud de la France.",
    text: "Depuis toujours passionné par l’informatique, j’ai orienté mon parcours vers le développement logiciel. Diplômé de l'école d’ingénieur ISEN, je propose aujourd’hui mes services dans la création de solutions web sur mesure, alliant technique, design et modernité. En parallèle, j’apporte également mon expertise en dépannage et assistance informatique et réseau aux particuliers et professionnels.",
  },
  {
    title: "Web",
    subTitle: "Ingénieur en production logiciel.",
    text: "Spécialisé dans la création et la refonte d'interfaces web, je conçois des applications performantes et sur mesure, de l’idée au déploiement. Fort de 7 ans d'expérience, je maîtrise l’écosystème JavaScript, du frontend (HTML, CSS React, Next.js) au backend(NestJS, Express, MongoDB) ainsi que des services comme OAuth,Firebase, Microsoft Graph API, ...",
  },
  {
    title: "Informatique",
    subTitle:
      "Support, dépannage<br /> périphériques informatique &<br /> réseau.",
    text: "J’offre également des services de dépannage informatique et d’assistance réseau. Installation, configuration de périphériques et logiciels (imprimantes, ), résolution de problèmes réseau (Wi-Fi, box, routeurs), sauvegarde de données et maintenance logicielle font partie de mon quotidien.",
  },
];

const Hero = () => {
  const [contentSelection, setContentSelection] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleContentChange = (index: number) => {
    if (index === contentSelection) return;

    setIsFading(true);

    setTimeout(() => {
      setIsFading(false);
      setContentSelection(index);
    }, 150);
  };
  return (
    <div className="relative w-full min-h-[75vh] bg-[#333646] md:p-12 p-3 flex flex-col md:flex-row shadow-lg overflow-hidden z-[999]">
      <div className="absolute bottom-0 left-[15%] w-[45%] h-full bg-[url('/portrait.png')] bg-no-repeat bg-contain bg-left-bottom drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)] -z-10 hidden md:block"></div>
      <div className="w-full md:w-1/2 px-0 md:px-12 flex flex-col items-center md:block">
        <Image
          src="/logo.png"
          alt="TF Logo"
          width={120}
          height={40}
          priority
          className="md:mb-12"
        />
        <div className="relative md:pl-9">
          <h1 className="text-[70px] leading-[75px] font-semibold font-poppins tracking-wide text-white text-shadow-md text-center md:text-left">
            Tom
          </h1>
          <h1 className="text-[70px] leading-[75px] font-semibold font-poppins tracking-wide text-white text-shadow-md text-center md:text-left">
            Foltier.
          </h1>
          <div className="md:w-10 h-[5px] bg-[#32aeff] relative bottom-[-20px]" />
        </div>
        <div className="flex items-center gap-8 md:mt-8 mt-15 md:pl-9 h-[30%]">
          {[faInstagram, faLinkedinIn, faWhatsapp].map((icon, i) => (
            <FontAwesomeIcon
              key={i}
              icon={icon}
              className="text-[#b6b6b6] hover:text-white transition-transform duration-300 cursor-pointer text-[20px] hover:scale-120"
            />
          ))}
        </div>
      </div>
      {/* Right Content */}
      <div className="w-full md:w-1/2 px-0 md:pr-24 pt-8 md:pt-0">
        <div className="pt-3">
          <ul className="relative flex justify-center md:w-[80%] w-[100%] mx-auto mb-6">
            {["Introduction", "Web", "Informatique"].map((label, index) => (
              <li
                key={label}
                onClick={() => handleContentChange(index)}
                className="w-1/3 text-center cursor-pointer"
              >
                <h2
                  className={`text-[20px] transition-colors duration-300 ${
                    contentSelection === index ? "text-white" : "text-[#565968]"
                  }`}
                >
                  {label}
                </h2>
              </li>
            ))}
            <div
              className="absolute bottom-[-10px] w-[10px] h-[10px] bg-[#32aeff] rounded-full transition-all duration-500"
              style={{
                left: `${16.5 * (2 * contentSelection + 1)}%`,
              }}
            ></div>
          </ul>
        </div>
        <div
          className={`px-[30px] py-[20px] h-[90%] flex flex-col justify-center gap-[25px] tracking-[1px] md:text-left text-center transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="font-extralight text-[18px] text-white font-(family-name:--font-inconsolata)">
            - {contentArray[contentSelection].title}
          </h3>
          <h2 className="text-white text-[5vw] md:text-[2vw] font-semibold leading-snug">
            <p
              dangerouslySetInnerHTML={{
                __html: contentArray[contentSelection].subTitle,
              }}
            />
          </h2>
          <p className="text-[#b6b6b6] text-[16px] font-medium leading-relaxed font-(family-name:--font-inconsolata)">
            {contentArray[contentSelection].text}
          </p>
          <Link
            href="#contact"
            className="flex items-center text-[#32aeff] group font-medium justify-center md:justify-start"
          >
            <p className="underline underline-offset-[5px] pr-[10px] transition-all duration-300 group-hover:pr-[20px] group-hover:underline-offset-[1px]">
              Prendre rendez-vous
            </p>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
