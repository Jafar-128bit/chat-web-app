import './button.css';
import {ButtonType} from "../../types/types";

const Button = ({propData, children, onClickFunction}: ButtonType) => {
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