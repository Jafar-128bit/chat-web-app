import './inputField.css';
import {InputFieldType} from "../../types/types";
import {PText} from "../IndexAtom";

const InputField = ({
                        inputType,
                        labelText,
                        name,
                        inputValue,
                        onChangeCallback,
                        blurCallback,
                        inputFieldStyle,
                        inputContainerStyle,
                        placeholder,
                        showError,
                        errorMessage
                    }: InputFieldType) => {
    return <div className={`inputField ${inputContainerStyle}`}>
        {labelText !== null && <label htmlFor={name}>{labelText}</label>}
        <input
            className={inputFieldStyle}
            type={inputType}
            id={name}
            name={name}
            placeholder={placeholder}
            onBlur={blurCallback}
            onChange={onChangeCallback}
            value={inputValue}
        />
        {showError && <PText
            propData={{
                color: "var(--color4)",
                fontSize: 11,
                fontWeight: 500,
                styleName: "inputErrorMessage",
            }}
        >
            *{errorMessage}
        </PText>}
    </div>
}

export default InputField;