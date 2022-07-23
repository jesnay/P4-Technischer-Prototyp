import React from "react";
import styles from "./Problem.module.css";
import felix from "../../assets/felix.png";

function Problem() {
  return (
    <div className={styles.Problem}>
      <div className="content">
        <div className="leftSide">
          <h3>Problematik</h3>
          <p>
            Kinder kommen bereits im frühen Alter mit Geld in Kontakt. Sie sehen
            ihren Eltern zu, wie sie mit Geld bezahlen, bekommen Geld von der
            Oma zu Weihnachten geschenkt oder im späteren Alter dann auch ihr
            eigenes Taschengeld. Dabei versuchen die Eltern ihrem Kind den
            Umgang mit Geld und seinem Wert beizubringen. <br></br>Doch was die
            Kinder nicht sehen: Woher haben die Eltern das Geld? Wächst es auf
            Bäumen? Fällt es vom Himmel? Wie können Kinder den Umgang mit Geld
            lernen, wenn sie nicht verstehen, woher das Geld kommt und was dafür
            getan werden musste? <br></br>
            <br></br>An dieser Problematik setzt “PuzZiel” an.
          </p>
        </div>

        <div className="rightSide">
          <div className="image">
            <img className="felix" src={felix} alt="felix Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
