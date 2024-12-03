const layout = ({ children }) => {
  return (
    <div className="flex items-center">
      <div>hello Doctor</div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
