import PropTypes from "prop-types";
import styles from "../styles/StudentCard.module.css";

export default function StudentCard({
  name = "Unknown Student",
  age = 0,
  course = "Not Assigned",
}) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        {name.charAt(0).toUpperCase()}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>

        <p className={styles.detail}>
          <span className={styles.label}>Age:</span> {age}
        </p>

        <p className={styles.detail}>
          <span className={styles.label}>Course:</span> {course}
        </p>
      </div>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  course: PropTypes.string,
};

StudentCard.defaultProps = {
  name: "Unknown Student",
  age: 0,
  course: "Not Assigned",
};