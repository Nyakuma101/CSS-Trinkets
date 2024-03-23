import "./Button.scss";

function Button({ text }) {
  return (
    <button className="header__upload" type="submit" id="button">
      {text}
    </button>
  );
}

export default Button;
