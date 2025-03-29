import styles from "./Options.module.css";

export default function Options({
  options,
  onLeaveFeedback,
  onReset,
  showReset,
}) {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      {showReset && (
        <button onClick={onReset} className={styles.reset}>
          Reset
        </button>
      )}
    </div>
  );
}
