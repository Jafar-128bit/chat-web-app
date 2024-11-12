import './ptext.css';
import React from "react";

type Prop = {
    fontSize: number;
    fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    color: string;
    styleName?: string;
    pWidth?: string;
    pHeight?: string;
};

interface PTextType {
    propData: Prop;
    children: React.ReactNode;
}

const PText = ({children, propData}: PTextType) => {
    const styleData = {
        color: propData.color,
        fontSize: `${propData.fontSize}px`,
        fontWeight: propData.fontWeight,
        width: propData.pWidth,
        height: propData.pHeight
    };

    return <p className={`pText ${propData.styleName ? propData.styleName : ''}`} style={styleData}>{children}</p>;
};

export default PText;
