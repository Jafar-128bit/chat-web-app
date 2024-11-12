import './chatInputBox.css';
import {IconButton} from "../../molecules/IndexMolecules";
import {TextArea} from "../../atoms/IndexAtom";
import {IconButtonType} from "../../types/types";
import React from "react";

type TextAreaProp = {
    handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleFocus: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    textAreaValue: string;
    textAreaRef: any;
}

interface Prop {
    iconButtonData: IconButtonType[];
    textAreaProp: TextAreaProp;
}

const ChatInputBox = ({iconButtonData, textAreaProp}: Prop) => {
    const [attachmentButton, sendMessageButton] = iconButtonData;

    return <div className="chatInputBox">
        <section className="chatInputBox__section1">
            <IconButton
                propData={{
                    innerButtonText: attachmentButton.propData.innerButtonText,
                    buttonStyleName: attachmentButton.propData.buttonStyleName,
                    buttonType: attachmentButton.propData.buttonType,
                }}
                iconStyleName={attachmentButton.iconStyleName}
                badge={attachmentButton.badge}
                onMouseOver={attachmentButton.onMouseOver}
                onMouseLeave={attachmentButton.onMouseLeave}
                onClickFunction={attachmentButton.onClickFunction}
            >
                {attachmentButton.children}
            </IconButton>
        </section>
        <section className="chatInputBox__section2">
            <TextArea
                value={textAreaProp.textAreaValue}
                onChangeHandle={textAreaProp.handleInputChange}
                rows={1}
                placeholder="Your message"
                textAreaStyleName="chatInputTextArea"
                textAreaRef={textAreaProp.textAreaRef}
                onFocusHandle={textAreaProp.handleFocus}
            />
        </section>
        <section className="chatInputBox__section3">
            <IconButton
                propData={{
                    innerButtonText: sendMessageButton.propData.innerButtonText,
                    buttonStyleName: sendMessageButton.propData.buttonStyleName,
                    buttonType: sendMessageButton.propData.buttonType,
                }}
                iconStyleName={sendMessageButton.iconStyleName}
                badge={sendMessageButton.badge}
                onMouseOver={sendMessageButton.onMouseOver}
                onMouseLeave={sendMessageButton.onMouseLeave}
                onClickFunction={sendMessageButton.onClickFunction}
            >
                {sendMessageButton.children}
            </IconButton>
        </section>
    </div>
}

export default ChatInputBox;