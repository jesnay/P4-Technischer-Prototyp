import React from "react";
import styles from "./Painting.module.css";

function Painting() {
  const [paint, setPaint] = React.useState(false); //false: show Front //true: show back
  return (
    <div className={styles.Painting}>
      <div className="content">
        <div className="leftSide">
          <div className="image">
            {!paint ? (
              <img
                className="puzzleImg"
                src={require(`.././../assets/Painting_Empty.png`)}
                alt="Front Image"
                onMouseEnter={(e) => {
                  setPaint(true);
                }}
                onMouseLeave={(e) => {
                  setPaint(false);
                }}
              />
            ) : null}

            {paint ? (
              <img
                className="puzzleImg"
                src={require(`.././../assets/Painting_Full.png`)}
                alt="Back Image"
                onMouseEnter={(e) => {
                  setPaint(true);
                }}
                onMouseLeave={(e) => {
                  setPaint(false);
                }}
              />
            ) : null}
            <p className="paint">Hover over the empty paper to draw</p>
          </div>
        </div>

        <div className="rightSide">
          <h3>So funktionierts</h3>
          <p>
            Das System der Entlohnung wird anhand eines Wunsches gezeigt. Das
            Kind setzt sich gemeinsam mit seinen Eltern hin und mal seinen
            Wunsch oder sein Ziel auf ein DIN A4 Blatt. Das kann ein neues
            Spielzeug sein, Karten fürs Kino oder ein Ausflug in den Zoo. Das
            Bild kann nun in den PuzZiel Rahmen geschoben werden. <br></br>
            <br></br>Jetzt kann das Kind seine Eltern im Haushalt unterstützen
            und kleine Aufgaben erledigen, wie Blumen gießen oder die
            Spülmaschine ausräumen. Für jede erledigte Aufgabe erhält das Kind
            ein besonderes Puzzleteil
          </p>
        </div>
      </div>
    </div>
  );
}

export default Painting;
