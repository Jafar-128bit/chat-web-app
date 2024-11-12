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

export interface ButtonType {
    propData: PropDataButton;
    children: React.ReactElement | null;
    onClickFunction?: (e: any) => void;
}

export interface SectionDataType {
    sectionName: string;
    description: string;
}

export interface ActualSectionDataType extends SectionDataType {
    unreadMessage: number;
}

export interface InputFieldType {
    inputType: "text" | "password" | "tel" | "number" | "email" | "button";
    name: string;
    inputValue: string;
    inputFieldStyle: string;
    placeholder: string;
    showError: string | false | undefined;
    labelText: string | null;
    inputContainerStyle?: string;
    blurCallback?: React.FocusEventHandler<HTMLInputElement>;
    onChangeCallback?: (e: ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

export interface ChatCardType {
    username: string;
    imageSrc: string;
    createdTime: string;
    lastMessage: string;
    unreadMessage: number;
    isPin: boolean;
}

export interface UserType {
    id: string;           // Unique identifier for the user
    username: string;     // Display name of the user
    avatarUrl?: string;   // Optional avatar URL for the user
    createdAt: Date;      // Timestamp when the user was created
}

export interface FileType {
    id: string;               // Unique identifier for the file
    url: string;              // URL to access the file
    fileType: 'image' | 'video' | 'pdf' | 'document'; // Type of the file
    name: string;             // Name of the file
    size: number;             // Size of the file in bytes
    createdAt: Date;          // Timestamp when the file was uploaded
}

export interface MessageType {
    id: string;               // Unique identifier for the message
    content?: string;         // Content of the message (optional, since there may be only a file)
    senderId: string;         // User ID of the message sender
    receiverId?: string;      // Optional User ID of the message receiver (for private messages)
    createdAt: Date;          // Timestamp when the message was sent
    isRead: boolean;          // Flag to indicate if the message has been read
    files?: FileType[];           // Optional array of files associated with the message
}

export interface ConversationType {
    id: string;                    // Unique identifier for the conversation
    participants: UserType[];          // List of users participating in the conversation
    messages: MessageType[];           // List of messages in the conversation
    lastMessage?: MessageType;         // Optional last message sent in the conversation
    createdAt: Date;               // Timestamp when the conversation was created
    updatedAt: Date;               // Timestamp when the conversation was last updated
}

export interface ChatState {
    users: UserType[];                 // Array of users in the chat application
    conversations: ConversationType[];  // Array of conversations in the chat application
    activeConversationId?: string;  // ID of the currently active conversation
}