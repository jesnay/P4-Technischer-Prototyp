import React from "react";
import styles from "./Trailer.module.css";
import ReactPlayer from "react-player";

function Trailer() {
  return (
    <div className={styles.Trailer}>
      <div className="content">
        <h3>PuzZiel Trailer</h3>
        <ReactPlayer width="100%" url="https://vimeo.com/731438880" />
      </div>
    </div>
  );
}

export default Trailer;
