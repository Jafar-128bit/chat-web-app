import './button.css';
import {ButtonProp} from "../../types/types";

const Button = ({propData, children, onClickFunction}: ButtonProp) => {
    return <button
        type={propData.buttonType}
        className={`Button ${propData.buttonStyleName}`}
        onClick={onClickFunction}
    >
        {children}
        {propData.innerButtonText}
    </button>
}

export default Button;