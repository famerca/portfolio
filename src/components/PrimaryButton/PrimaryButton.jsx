//const style = import("PrimaryButton.css");

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      className="btn-primary-outlined"
      onClick={onClick}
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <span>
        {text}
      </span>
    </button>
  );
};

export default PrimaryButton;