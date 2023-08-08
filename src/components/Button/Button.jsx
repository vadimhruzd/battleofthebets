import s from "./Button.module.scss";

const Button = (props) => {
  return (
    <div className={s.div_button_create} onClick={props.onClick}>
      <button
        type="submit"
        className={s.button}
        style={{
          width: props.width,
          backgroundColor: props.backgroundColor,
          color: props.textColor,
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
