"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const counters = [
  { final: 14, label: "Years of\nExperience." },
  { final: 25, label: "Projets Webs\net Applications Mobiles." },
  { final: 187, label: "Satisfied\nClients." },
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
    <div className={styles.container}>
      <div className={`${styles.paragraphContainer} paragraph__container`}>
        <h3>- Contact</h3>
        <h2>
          Pour Toute Demande <br />
          Ou Questionnement.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Earum suscipit, a mollitia blanditiis voluptatibus in?
        </p>
        <Link href={"/"} className="paragraph__link">
          <p>TechPulse.dev@gmail.com</p>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>

      <div className={`${styles.paragraphContainer} paragraph__container`}>
        <h2>« La créativité, c’est l’intelligence qui s’amuse. »</h2>
        <p>— Albert Einstein</p>

        <ul className={styles.numbers} ref={numbersRef}>
          {counters.map((counter, i) => (
            <li key={i} className={styles.numberItem}>
              <h4>{counts[i]}</h4>
              <p>{counter.label.split("\n").map((l, j) => <span key={j}>{l}<br /></span>)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
