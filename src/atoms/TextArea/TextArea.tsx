import './textArea.css';
import React from "react";

type Prop = {
    value: string;
    onChangeHandle: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocusHandle: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    rows: number;
    placeholder: string;
    textAreaStyleName: string;
    textAreaRef: any;
}

const TextArea = ({
                      value,
                      onChangeHandle,
                      rows,
                      placeholder,
                      textAreaStyleName,
                      onFocusHandle,
                      textAreaRef
                  }: Prop) => {
    return <textarea
        ref={textAreaRef}
        className={`textArea ${textAreaStyleName}`}
        value={value}
        onChange={onChangeHandle}
        onFocus={onFocusHandle}
        rows={rows}
        maxLength={5000}
        placeholder={placeholder}
    />
}

export default TextArea;