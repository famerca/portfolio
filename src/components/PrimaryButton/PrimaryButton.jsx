//const style = import("PrimaryButton.css");

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      className="btn-primary-outlined"
      onClick={onClick}
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;