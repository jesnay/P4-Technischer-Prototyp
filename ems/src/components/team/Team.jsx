import React from "react";
import styles from "./Team.module.css";
import jenny from "../../assets/Team/Jenny.png";
import marc from "../../assets/Team/Marc.jpeg";
import kirsten from "../../assets/Team/Kirsten.jpeg";
import yara from "../../assets/Team/Yara.jpeg";

function Team() {
  return (
    <div className={styles.Team}>
      <div className="content">
        <h3>Das Team</h3>
        <div className="images">
          <div className="teamMember">
            <img className="teamImg" src={yara} alt="jenny Image" />
            <p>
              Yara Malina Held,21 <br></br>4. Fachsemester IMD
            </p>
          </div>
          <div className="teamMember">
            <img className="teamImg" src={marc} alt="jenny Image" />
            <p>
              Marc H. Hofmann, 23 <br></br>4. Fachsemester IMD
            </p>
          </div>
          <div className="teamMember">
            <img className="teamImg" src={jenny} alt="jenny Image" />
            <p>
              Jennifer Snay, 19 <br></br>4. Fachsemester IMD
            </p>
          </div>
          <div className="teamMember">
            <img className="teamImg" src={kirsten} alt="jenny Image" />
            <p>
              Kirsten Anke Urban , 24 <br></br>4. Fachsemester IMD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
/*Yara Malina Held, 21, 4. Fachsemester IMD
Marc H. Hofmann, 23, 4. Fachsemester IMD
Jennifer Snay, 19, 4. Fachsemester IMD
Kirsten Anke Urban , 24, 4. Fachsemester IMD
 */
