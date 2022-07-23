import React from "react";
import styles from "./Rahmen.module.css";
import Left from ".././../assets/Left.png";
import Right from ".././../assets/Right.png";

function Rahmen() {
  const [workState, setWorkState] = React.useState(1);
  const [perspective, setPerspective] = React.useState(false); //false: show Front //true: show back
  const turn = () => {
    if (perspective === false) {
      setPerspective(true);
    } else {
      setPerspective(false);
    }
  };
  return (
    <div className={styles.Rahmen}>
      <div className="content">
        <div className="leftSide">
          {!perspective ? (
            <img
              className="frontImage"
              src={require(`.././../assets/Rahmen_Front/Rahmen_Front_${workState}.png`)}
              alt="Front Image"
            />
          ) : null}

          {perspective ? (
            <img
              className="backImage"
              src={require(`.././../assets/Rahmen_Back/Rahmen_Back_${workState}.png`)}
              alt="Back Image"
            />
          ) : null}
          <button className="left round" onClick={turn}>
            <img className="LeftButton" src={Left} alt="Left Button" />
          </button>
          <button className="right round" onClick={turn}>
            <img className="RightButton" src={Right} alt="Right Button" />
          </button>
          <p>
            Probier es doch mal selber aus! Klicke dafür auf einen der Knöpfe
            unter dem Bild und gib damit an, wie viele Aufgaben du schon im
            Haushalt erledigt hast, um dein Ziel zu erreichen.
          </p>
          <div className="btns">
            <button className="lvlbtn round" onClick={() => setWorkState(1)}>
              0
            </button>
            <button className="lvlbtn round" onClick={() => setWorkState(2)}>
              5
            </button>
            <button className="lvlbtn round" onClick={() => setWorkState(3)}>
              10
            </button>
            <button className="lvlbtn round" onClick={() => setWorkState(4)}>
              15
            </button>
            <button className="lvlbtn round" onClick={() => setWorkState(5)}>
              20
            </button>
            <button className="lvlbtn round" onClick={() => setWorkState(6)}>
              25
            </button>
            <button className="lvlbtn round" onClick={() => setWorkState(7)}>
              30
            </button>
            <button className="lvlbtn round" onClick={() => setWorkState(8)}>
              35
            </button>
          </div>
        </div>
        <div className="rightSide">
          <h3>Das Semesterprojekt</h3>
          <p>
            Im Semesterprojekt „PuzZiel” handelt es sich um ein Produkt, welches
            Kindern das System der Entlohnung durch Dinge begreifbar macht. Für
            die Nutzung des Produktes setzt sich das Kind gemeinsam mit den
            Eltern ein Ziel. <br></br>
            <br></br>„PuzZiel” ist dabei ein interaktiver Rahmen, welcher sowohl
            das Ziel als auch den Fortschritt dahin für das Kind visualisiert
            und begreifbar macht. Um seine Ziele zu erreichen, soll das Kind
            Aufgaben im Haushalt erfüllen. Die selbst erbrachte Leistung
            ermöglichen es dem Kind, Puzzleteile als Entlohnung zu sammeln. Je
            mehr Puzzleteile das Kind gesammelt hat, desto näher kommt es seinem
            Ziel. Wird ein Puzzleteil eingesetzt, wird das Bild auf der anderen
            Seite des Rahmens erleuchtet und das Kind erkennt, wie Weit das Ziel
            noch entfernt ist. <br></br>
            <br></br>Durch das erbringen eigener Leistung soll das Kind
            verstehen, wie viel Aufwand hinter einer Entlohnungen, wie z.B. Geld
            steckt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rahmen;
/*<div className="leftSide">
        
          
        </div>
      </div>

      
 */
/* */
