import React from "react";
import styles from "./Puzzle.module.css";
import puzzle from "../../assets/Puzzle.png";

function Puzzle() {
  return (
    <div className={styles.Puzzle}>
      <div className="content">
        <div className="leftSide">
          <h3>Das Puzzle</h3>
          <p>
            Mit dem Aufbringen von Leistung und Zeit, in Form von Aufgaben im
            Haushalt, kann das Kind sich Puzzleteile verdienen, welche auf die
            Rückseite des Rahmens gesetzt werden können. Mit dem Einsetzen der
            Puzzleteile wird das gemalte Bild Stück für Stück erleuchtet. Ist
            der gesamte Rahmen ausgefüllt, leuchtet auch das gesamte Bild und
            das Kind bekommt seinen Wunsch von den Eltern erfüllt. Das Kind wird
            somit für seine Leistungen durch die Puzzleteile und am Ende mit
            seinem Wunsch belohnt. PuzZiel ist aufgrund des austauschbaren
            Wunschbildes und den universellen Puzzleteilen beliebig oft
            wiederverwendbar.
          </p>
        </div>

        <div className="rightSide">
          <div className="image">
            <img className="puzzleImg" src={puzzle} alt="puzzle Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Puzzle;
