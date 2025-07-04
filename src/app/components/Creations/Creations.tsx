"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faCode,
  faCube,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faDribbble,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const creations = [
  {
    name: "Travel Agent",
    description: "Générateur de voyages I.A.",
    img: "/TravelAgent3.0.png",
  },
  {
    name: "A.G.N Detailing",
    description: "Entreprise de nettoyage automobile.",
    img: "/AGN_Detailing.png",
  },
  { name: "TAXI GUILLAUME", description: "Site vitrine d'un chauffeur de taxi.", img: "" },
];

function Creations() {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [creationSelection, setCreationSelection] = useState<number>(0);

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    const handleScroll = () => {
      if (!itemRefs.current.length) return;

      const centerY = window.innerHeight / 2;

      const distances = itemRefs.current.map((el, index) => {
        if (!el) return { index, distance: Infinity };
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - elementCenter);
        return { index, distance };
      });

      const closest = distances.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );

      setVisibleIndex(closest.index);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="w-full bg-[#333646]  p-3 md:px-[105px] py-[0] flex flex-col relative md:h-[120vh] h-[175vh] [box-shadow:0_3px_15px_#0000003d]">
      <div className="absolute top-[0] left-[0] flex md:-translate-y-[150px] translate-y-[190px] flex-col w-full gap-[50px]  p-3 md:px-[105px] py-[0] z-100">
        <ul className="h-[300px] flex justify-center items-center gap-10 md:gap-[50px] flex-col md:flex-row">
          <li
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
            data-index={0}
            className="h-full p-[30px] w-full md:w-1/5 cursor-pointer [transition:all_0.5s_ease-in-out] gap-[20px] flex flex-col items-start [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_15px] rounded-[7px] hover:scale-110"
            style={{
              background: visibleIndex === 0 ? "#32aeff" : "#424758",
            }}
          >
            <FontAwesomeIcon icon={faPenNib} className="text-[20px]" />
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[20px] leading-[22px] pb-[10px]">
                Branding <br />
                Design.
              </h4>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 0 ? "white" : "#b6b6b6" }}
              >
                - Création de votre identité visuelle
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 0 ? "white" : "#b6b6b6" }}
              >
                - Logo
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 0 ? "white" : "#b6b6b6" }}
              >
                - Couleurs
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 0 ? "white" : "#b6b6b6" }}
              >
                - Thème
              </p>
            </div>
          </li>
          <li
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
            data-index={1}
            className="h-full p-[30px] w-full md:w-1/5 cursor-pointer [transition:all_0.5s_ease-in-out] gap-[20px] flex flex-col items-start [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_15px] rounded-[7px] hover:scale-110"
            style={{
              background: visibleIndex === 1 ? "#32aeff" : "#424758",
            }}
          >
            <FontAwesomeIcon icon={faCube} />
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[20px] leading-[22px] pb-[10px]">
                UI Design
                <br /> Développement Frontend.
              </h4>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 1 ? "white" : "#b6b6b6" }}
              >
                - Responsive et dynamique
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 1 ? "white" : "#b6b6b6" }}
              >
                - Frameworks modernes
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 1 ? "white" : "#b6b6b6" }}
              >
                - CSS frameworks et animations
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 1 ? "white" : "#b6b6b6" }}
              >
                - Expérience utilisateur optimale
              </p>
            </div>
          </li>
          <li
            ref={(el) => {
              itemRefs.current[2] = el;
            }}
            data-index={2}
            className="h-full p-[30px] w-full md:w-1/5 cursor-pointer [transition:all_0.5s_ease-in-out] gap-[20px] flex flex-col items-start [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_15px] rounded-[7px] hover:scale-110"
            style={{
              background: visibleIndex === 2 ? "#32aeff" : "#424758",
            }}
          >
            <FontAwesomeIcon icon={faCode} />
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-[20px] leading-[22px] pb-[10px]">
                Full Stack <br />
                Developer.
              </h4>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 2 ? "white" : "#b6b6b6" }}
              >
                - API REST / GraphQL
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 2 ? "white" : "#b6b6b6" }}
              >
                - Stack moderne
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 2 ? "white" : "#b6b6b6" }}
              >
                - Authentification sécurisée
              </p>
              <p
                className="text-[14px] font-normal [transition:all_0.5s_ease-in-out]"
                style={{ color: visibleIndex === 2 ? "white" : "#b6b6b6" }}
              >
                - Déploiement scalable
              </p>
            </div>
          </li>
        </ul>
        <div className="flex flex-col translate-y-[300px] md:translate-y-[0] justify-center gap-[30px] px-[30px] py-[20px] text-[50px] items-center w-full">
          <ul className="flex gap-[50px] w-4/5 items-center justify-center">
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              <FontAwesomeIcon icon={faHtml5} />
            </li>
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              <FontAwesomeIcon icon={faCss3Alt} />{" "}
            </li>
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              <FontAwesomeIcon icon={faSquareJs} />{" "}
            </li>
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              <FontAwesomeIcon icon={faReact} />
            </li>
          </ul>

          <ul className="flex gap-[60px] md:gap-[50px] w-4/5 items-center justify-center">
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              {" "}
              <Image
                src="/nextjs.svg"
                alt="Nextjs logo"
                width={100}
                height={40}
                priority
              />
            </li>
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              {" "}
              <Image
                src="/node.svg"
                alt="Node logo"
                width={50}
                height={40}
                priority
              />
            </li>
            {/* <li>
            <FontAwesomeIcon icon={faPython} />
          </li> */}
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              <FontAwesomeIcon icon={faDribbble} />
            </li>
            <li className="[filter:drop-shadow(0_5px_5px_rgba(0,_0,_0,_0.7))] w-[33%] flex justify-center">
              {" "}
              <Image
                src="/canva.svg"
                alt="Canva logo"
                width={50}
                height={40}
                priority
              />
            </li>
          </ul>
        </div>
        <div className="flex translate-y-[300px] md:translate-y-[0] flex-col md:flex-row gap-5 md:gap-0 items-center">
          <div className="w-full md:w-1/3 px-10 md:px-[30px] md:py-[20px] h-full flex flex-col justify-center gap-[25px] tracking-[1px] text-center md:text-left">
            <h3 className="font-(family-name:--font-inconsolata) font-extralight text-white text-lg tracking-wide">
              - Portfolio
            </h3>
            <h2 className="text-white text-[5vw] md:text-[2vw] font-semibold leading-snug">
              Quelques créations <br />& Projets de développement.
            </h2>
          </div>
          <div className="flex flex-col h-full w-6/7 md:w-2/3 items-center">
          <h4 className="text-[#dfdfdf] text-base font-semibold leading-relaxed text-center">
            {creations[creationSelection].name}
          </h4>
          <p className="text-[#b6b6b6] text-sm font-light leading-relaxed text-center md:pb-6">
            {creations[creationSelection].description}
          </p>
          <div className="w-full h-[200px] md:h-[400px] my-[0] rounded-[7px] overflow-hidden flex items-center relative md:mb-6">
            <Image
              src={creations[creationSelection].img}
              alt="Travel Agent"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex justify-center md:justify-start gap-10">
            <button
              onClick={() =>
                creationSelection > 0 &&
                setCreationSelection((prev) => prev - 1)
              }
              className="flex items-center text-[#32aeff] group font-medium cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <p className="underline underline-offset-[5px] pl-[10px] transition-all duration-300 group-hover:pl-[20px] group-hover:underline-offset-[1px]">
                Précédent
              </p>
            </button>
            <button
              onClick={() =>
                creationSelection < 2 &&
                setCreationSelection((prev) => prev + 1)
              }
              className="flex items-center text-[#32aeff] group font-medium cursor-pointer"
            >
              <p className="underline underline-offset-[5px] pr-[10px] transition-all duration-300 group-hover:pr-[20px] group-hover:underline-offset-[1px]">
                Suivant
              </p>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Creations;
