import "./Button.css";
import "./ImcCalc.css"

const Button = ({id, Text, action}) => {
    const handleAction = (e) => {
        action(e);
    }
  return (
    <button id={id} onClick={handleAction}>{Text}</button>
  )
}

export default Button