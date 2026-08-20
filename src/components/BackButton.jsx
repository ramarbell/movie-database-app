import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  }

  return (
    <button className="btn-back" type="button" onClick={handleBack}>
      Back
    </button>
  );
}

export default BackButton;
