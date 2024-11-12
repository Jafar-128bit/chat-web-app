import {ChatContactCard} from "../../organisms/IndexOrganism";
import {ChatCardType} from "../../types/types";
import {formatTimeDifference} from "../../util/util";

type Prop = {
    userData: ChatCardType;
}

const ChatContactCardTemplate = ({userData}: Prop) => {


    const filteredUserData: ChatCardType = {
        username: userData.username,
        lastMessage: userData.lastMessage,
        createdTime: formatTimeDifference("2024-10-20 14:32"),
        imageSrc: userData.imageSrc,
        unreadMessage: userData.unreadMessage,
        isPin: userData.isPin
    }

    return <>
        <ChatContactCard userData={filteredUserData}/>
    </>
}

export default ChatContactCardTemplate