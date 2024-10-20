import './iconContainer.css';
import React from "react";

type Prop = {
    width: number;
    height: number;
    borderRadius: string;
    IconComponent: React.FC;
}

const IconContainer = ({IconComponent, width, height, borderRadius}: Prop) => {
    const style = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: borderRadius,
    };

    return <div className="iconContainer" style={style}>
        <IconComponent/>
    </div>
}

export default IconContainer;