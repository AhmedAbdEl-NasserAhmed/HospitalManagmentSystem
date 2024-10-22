import styles from "./Spinner.module.scss";

export default function Spinner() {
  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <span className={styles.loader}></span>
    </div>
  );
}
