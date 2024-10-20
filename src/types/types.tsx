import React, {ChangeEvent} from "react";

export interface PopUpType {
    actionArgument: boolean;
    actionState?: any;
}

export interface PopUpState {
    [key: string]: PopUpType;
}

export interface SignInType {
    username: string;
    password: string;
}

type PropDataButton = {
    innerButtonText: string | null;
    buttonStyleName: string;
    buttonType: "button" | "submit" | "reset";
}

export interface IconButtonType {
    propData: PropDataButton;
    iconStyleName: string;
    badge: string | null;
    onMouseOver: () => void;
    onMouseLeave: () => void;
    onClickFunction: () => void;
    children: React.ReactElement;
}

export interface ButtonProp {
    propData: PropDataButton;
    children: React.ReactElement | null;
    onClickFunction?: (e: any) => void;
}

export interface SectionDataType {
    sectionName: string;
    description: string;
    isPrivate: boolean;
}

export interface ActualSectionDataType extends SectionDataType {
    unreadMessage: number;
}

export interface InputFieldType {
    inputType: "text" | "password" | "tel" | "number" | "email" | "button";
    labelText: string | null;
    name: string;
    blurCallback: React.FocusEventHandler<HTMLInputElement>;
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    inputFieldStyle: string;
    placeholder: string;
    showError: string | false | undefined;
    errorMessage: string;
}