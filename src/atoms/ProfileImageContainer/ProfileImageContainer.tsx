import './profileImageContainer.css';

type Prop = {
    imageWidth: string;
    imageHeight: string;
    imageBorderRadius: string;
    imageSrc: string;
}

const ProfileImageContainer = ({imageBorderRadius, imageHeight, imageWidth, imageSrc}: Prop) => {

    const imageContainerStyle = {
        width: imageWidth,
        height: imageHeight,
        borderRadius: imageBorderRadius,
    }

    return <div
        className="profileImageContainer"
        style={imageContainerStyle}
    >
        <img src={imageSrc} alt="my profile username"/>
    </div>
}

export default ProfileImageContainer;