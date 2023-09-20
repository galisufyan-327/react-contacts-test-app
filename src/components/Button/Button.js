import './Button.scss'

const Button = (props) => {
  const { text, variant, onClick } = props
  return (
    <button className='btn' id={`button-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;