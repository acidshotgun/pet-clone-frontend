// import styles from "./Button.module.scss";
import "./Button.scss";

interface IButton {
  text?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  type: string;
}

const Button = ({ text, icon, className, onClick, type }: IButton) => {
  const test_btn = () => {
    console.log("click");
  };

  return (
    <button
      className={`button ${className} ${type}`}
      onClick={() => test_btn()}
    >
      {icon && <img src={icon} alt="icon" className="button_icon" />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
