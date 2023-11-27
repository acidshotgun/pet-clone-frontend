// import styles from "./Button.module.scss";
import "./Button.scss";

interface IButton {
  text?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  size: string;
}

const Button = ({ text, icon, className, onClick, size }: IButton) => {
  const test_btn = () => {
    console.log("click");
  };

  return (
    <button
      className={`button ${className} ${size}`}
      onClick={() => test_btn()}
    >
      {icon && <img src={icon} alt="icon" className="button_icon" />}
      {text}
    </button>
  );
};

export default Button;
