"use client";
import React, { useState } from "react";
import styles from "./Creations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCode, faCube, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Creations() {
  const [creationSelection, setCreationSelection] = useState(0);

  return (
    <div className={styles.container}>
      <ul className={styles.services}>
        <li
          className={styles.serviceItem}
          onClick={() => setCreationSelection(0)}
          style={{
            background: creationSelection === 0 ? "#32aeff" : "#424758",
          }}
        >
          <FontAwesomeIcon icon={faCube} />
          <div className={styles.text}>
            <h4>
              Product <br /> Designer.
            </h4>
            <p style={{ color: creationSelection === 0 ? "white" : "#b6b6b6" }}>
              124 Projects
            </p>
          </div>
        </li>
        <li
          className={styles.serviceItem}
          onClick={() => setCreationSelection(1)}
          style={{
            background: creationSelection === 1 ? "#32aeff" : "#424758",
          }}
        >
          <FontAwesomeIcon icon={faPenNib} />
          <div className={styles.text}>
            <h4>
              Branding <br />
              Design.
            </h4>
            <p style={{ color: creationSelection === 1 ? "white" : "#b6b6b6" }}>
              37 Projects
            </p>
          </div>
        </li>
        <li
          className={styles.serviceItem}
          onClick={() => setCreationSelection(2)}
          style={{
            background: creationSelection === 2 ? "#32aeff" : "#424758",
          }}
        >
          <FontAwesomeIcon icon={faCode} />
          <div className={styles.text}>
            <h4>
              Full Stack <br />
              Developer.
            </h4>
            <p style={{ color: creationSelection === 2 ? "white" : "#b6b6b6" }}>
              62 Projects
            </p>
          </div>
        </li>
      </ul>
      <div className={`${styles.paragraphContainer} paragraph__container`}>
        <h3>- Portfolio</h3>
        <h2>
          Toutes mes créations, <br />
          Projects de développement.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Earum suscipit, a mollitia blanditiis voluptatibus in?
        </p>
        <Link href={"/"} className="paragraph__link">
          <p>Voir plus</p>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>
    </div>
  );
}

export default Creations;
