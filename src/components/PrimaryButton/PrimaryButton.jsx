import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = ({ text, icon = false , onClick }) => {
  return (
    <button
      className="btn-primary-outlined"
      onClick={onClick}
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <span>
        {text}
      </span>

      {icon && <FaArrowRight />}


      
    </button>
  );
};

export default PrimaryButton;