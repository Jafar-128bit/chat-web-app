import './imageContainer.css';
import {useEffect, useState} from "react";
import defaultImage from '../../assets/defaultImages/defaultImage.png';

type Prop = {
    width: number;
    height: number;
    borderRadius: string;
    image: any | null;
    altText: string | "default text";
}

const ImageContainer = ({width, height, borderRadius, image, altText}: Prop) => {
    const [imageSrc, setImageSrc] = useState<any | null>(defaultImage);

    useEffect(() => {
        if (image !== null && image !== undefined) setImageSrc(image);
    }, [image]);

    const style = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
    };

    return <div className="imageContainer" style={style}>
        <img src={imageSrc} alt={altText}/>
    </div>
}

export default ImageContainer;