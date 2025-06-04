"use client";
import React, { useState } from "react";
import styles from "./Hero.module.css";
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

const Hero = () => {
  const [contentSelection, setContentSelection] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <Image src="/logo.png" alt="TF Logo" width={120} height={40} priority />

        <div className={styles.title}>
          <h1>Tom</h1>
          <h1>Foltier.</h1>
        </div>
        <div className={styles.contacts}>
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "20px" }} />
          <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "20px" }} />
          <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "20px" }} />
        </div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.contentSelection}>
          <ul>
            <li onClick={() => setContentSelection(0)}>
              <h2
                style={{ color: contentSelection === 0 ? "white" : "#565968" }}
              >
                Services
              </h2>
            </li>
            <li onClick={() => setContentSelection(1)}>
              <h2
                style={{ color: contentSelection === 1 ? "white" : "#565968" }}
              >
                Works
              </h2>
            </li>
            <li onClick={() => setContentSelection(2)}>
              <h2
                style={{ color: contentSelection === 2 ? "white" : "#565968" }}
              >
                Blog
              </h2>
            </li>
            <div
              className={styles.contentSelectionPoint}
              style={{ left: `${16.5 * (2 * contentSelection + 1)}%` }}
            ></div>
          </ul>
        </div>
        <div className="paragraph__container">
          <h3>- Introduction</h3>
          <h2>
            Web Developer et <br />
            Product Designer, basé en <br />
            France.
          </h2>
          <p>
            Spécialisé dans la création et la refonte d'interfaces web, je
            conçois des applications performantes et sur mesure, de l’idée au
            déploiement. Fort de 7 ans d'expérience, je maîtrise l’écosystème
            JavaScript, du frontend (HTML, CSS, React, Next.js) au backend
            (NestJS, Express, MongoDB) ainsi que des services comme OAuth,
            Firebase, Microsoft Graph API, ...
          </p>
          <Link href={"/"} className="paragraph__link">
            <p>Mon histoire</p>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
