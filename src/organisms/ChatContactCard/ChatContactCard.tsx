import './chatContectCard.css';

import {ProfileImageContainer, PText} from "../../atoms/IndexAtom";

import ProfilePicture01 from "../../assets/dataAssets/profilePicture01.jpeg";
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';
import {ChatCardType} from "../../types/types";

type Prop = {
    userData: ChatCardType;
}

const ChatContactCard = ({userData}: Prop) => {

    const pinIconStyle = {
        color: "var(--color3)",
        fontSize: "22px",
    }

    return <div className="chatContactCard">
        <section className="chatContactCard__section1">
            <ProfileImageContainer
                imageWidth="100%"
                imageHeight="100%"
                imageBorderRadius="var(--borderRadius5)"
                imageSrc={userData.imageSrc}
            />
        </section>
        <section className="chatContactCard__section2">
            <div className="chatContactCard__titleContainer">
                <section className="chatContactCard__Username">
                    <PText propData={{
                        color: "var(--colorBlack)",
                        fontSize: 14,
                        fontWeight: 600
                    }}>
                        {userData.username}
                    </PText>
                </section>
                <section className="chatContactCard__messageTime">
                    <PText propData={{
                        color: "var(--colorGray2)",
                        fontSize: 14,
                        fontWeight: 400
                    }}>
                        {userData.createdTime}
                    </PText>
                </section>
            </div>
            <div className="chatContactCard__chatInfo">
                <section className="chatContactCard__lastMessageContainer">
                    <PText propData={{
                        color: "var(--colorGray5)",
                        fontSize: 14,
                        fontWeight: 400,
                        pWidth: "100%",
                        pHeight: "100%",
                    }}>
                        {userData.lastMessage}
                    </PText>
                </section>
                <section className="chatContactCard__chatIndicatorContainer">
                    {userData.unreadMessage > 0 && <div className="chatContactCard__badge">
                        <PText propData={{
                            color: "var(--colorWhite)",
                            fontSize: 12,
                            fontWeight: 400
                        }}>
                            {userData.unreadMessage}
                        </PText>
                    </div>}
                    {userData.isPin && <PushPinRoundedIcon style={pinIconStyle}/>}
                </section>
            </div>
        </section>
    </div>
}

export default ChatContactCard;