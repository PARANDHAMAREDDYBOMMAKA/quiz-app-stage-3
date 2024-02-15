import { Component } from "react";
import styles from "./HomeComponent.module.css";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  render() {
    return (
      <div className={styles["mainContainer"]}>
        <h1>Quiz App</h1>
        <Link to={"quiz"} className={styles["button"]}>
          <button>Play</button>
        </Link>
      </div>
    );
  }
}

export default HomeComponent;
