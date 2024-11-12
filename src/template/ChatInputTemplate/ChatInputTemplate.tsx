import {ChatInputBox} from "../../organisms/IndexOrganism";
import {IconButtonType} from "../../types/types";

import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';

import React, {useCallback, useEffect, useRef, useState} from "react";
import {AttachmentMenuTemplate} from "../IndexTemplate";

const debounce = (callback: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback(...args), delay);
    };
};

const ChatInputTemplate = () => {
    const iconStyle = {
        fontSize: "26px",
        color: "var(--color6)",
    };
    const [textAreaValue, setTextAreaValue] = useState<string>('');
    const [showAttachmentMenu, setShowAttachmentMenu] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleAttachmentMenu = (): void => {
        setShowAttachmentMenu(!showAttachmentMenu);
    }

    const adjustHeight = useCallback((element: HTMLTextAreaElement) => {
        element.style.height = 'auto'; // Reset height
        element.style.height = `${element.scrollHeight}px`;
    }, []);
    useEffect(() => {
        if (textareaRef.current) {
            adjustHeight(textareaRef.current);
        }
    }, [textareaRef, adjustHeight]);
    const debouncedAdjustHeight = useCallback(
        debounce((element: HTMLTextAreaElement) => adjustHeight(element), 100),
        [adjustHeight]
    )
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
        debouncedAdjustHeight(event.target);
    };
    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        adjustHeight(event.target);
    };

    const buttonData: IconButtonType[] = [
        {
            propData: {
                innerButtonText: null,
                buttonStyleName: "chatInputBoxButtonStyle",
                buttonType: "button",
            },
            iconStyleName: "chatInputBoxIconStyle",
            badge: null,
            onMouseOver: () => {
            },
            onMouseLeave: () => {
            },
            onClickFunction: handleAttachmentMenu,
            children: <AttachFileRoundedIcon style={iconStyle}/>
        },
        {
            propData: {
                innerButtonText: null,
                buttonStyleName: "chatInputBoxButtonStyle",
                buttonType: "button",
            },
            iconStyleName: "chatInputBoxIconStyle",
            badge: null,
            onMouseOver: () => {
            },
            onMouseLeave: () => {
            },
            onClickFunction: () => {
            },
            children: <SendRoundedIcon style={iconStyle}/>
        },
    ];

    return <>
        {showAttachmentMenu && <AttachmentMenuTemplate showAttachmentMenu={showAttachmentMenu}/>}
        <ChatInputBox
            iconButtonData={buttonData}
            textAreaProp={{
                handleInputChange: handleInputChange,
                handleFocus: handleFocus,
                textAreaValue: textAreaValue,
                textAreaRef: textareaRef,
            }}
        />
    </>
}

export default ChatInputTemplate;