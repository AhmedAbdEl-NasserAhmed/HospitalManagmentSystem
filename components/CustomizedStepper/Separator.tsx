const Separator = ({ styles }: { styles: { [key: string]: string } }) => {
  return (
    <span className={styles.containerStyles}>
      <span className={styles.elementStyles}> &nbsp;</span>
    </span>
  );
};

export default Separator;
