"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const counters = [
  { final: 7, label: "ans \nd'Experience." },
  {
    final: 22,
    label: "Projets Webs et\nApplications Mobiles cr\u00e9\u00e9s.",
  },
  { final: 100, label: "% clients\nSatisfaits." },
];

function Contact() {
  const [counts, setCounts] = useState(counters.map(() => 0));
  const numbersRef = useRef<HTMLUListElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true);
        }
      },
      { threshold: 1 }
    );

    if (numbersRef.current) observer.observe(numbersRef.current);

    return () => {
      if (numbersRef.current) observer.unobserve(numbersRef.current);
    };
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const newCounts = counters.map((c) => Math.floor(c.final * progress));
      setCounts(newCounts);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="w-full md:h-[50vh] bg-[#242734] md:p-[105px] p-3 pt-12 flex z-[99] shadow-[0px_3px_15px_rgba(0,0,0,0.24)] flex-col-reverse md:flex-row gap-8 pb-[180px] ">
      <div className="w-full md:w-1/2 md:h-3/4 h-1/2 flex flex-col md:justify-center gap-6 px-4 text-center md:text-left">
        <h3 className="font-(family-name:--font-inconsolata) font-extralight text-white text-lg tracking-wide">
          - Tarifs
        </h3>
        <h2 className="text-white text-[5vw] md:text-[2vw] font-semibold leading-snug">
          Sur devis, contactez-moi !
        </h2>
        <p className="text-[#b6b6b6] text-sm font-light leading-relaxed">
          Site web personnalisé clé en main <b className="text-base">à partir de 200€</b>.
        </p>
        <Link
          href="#contact"
          className="flex items-center text-[#32aeff] group font-medium justify-center md:justify-start"
        >
          <p className="underline underline-offset-[5px] pr-[10px] transition-all duration-300 group-hover:pr-[20px] group-hover:underline-offset-[1px]">
            Contact
          </p>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>

      <div className="w-full md:w-1/2 h-3/4 flex flex-col justify-center gap-6 px-4">
        <h2 className="text-white text-2xl md:text-3xl font-medium text-center md:text-left">
          « La créativité, c’est l’intelligence qui s’amuse. »
        </h2>
        <p className="text-white font-light text-center md:text-left">— Albert Einstein</p>

        <ul className="w-full flex gap-12 items-center mt-4 flex-wrap justify-center md:justify-start" ref={numbersRef}>
          {counters.map((counter, i) => (
            <li key={i} className="flex gap-5 items-center">
              <h4 className="text-[#32aeff] text-5xl font-bold">{counts[i]}</h4>
              <p className="text-white text-sm leading-snug">
                {counter.label.split("\n").map((l, j) => (
                  <span key={j}>
                    {l}
                    <br />
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
