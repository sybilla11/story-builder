import { Link } from "react-router";
import Directory from "../../component/directory/directory.component";
import styles from "./homepage.module.scss";

const Homepage = () => (
  <div className={styles.homepage}>
    <div className={styles.card}>
      <p className={styles.eyebrow}>An interactive story</p>
      <h1 className={styles.title}>Story Builder</h1>
      <p className={styles.subtitle}>Pick a theme to begin your adventure</p>
      <Directory />
      <Link to="/story" className={styles.defaultLink}>
        Or view the default story →
      </Link>
    </div>
  </div>
);

export default Homepage;
