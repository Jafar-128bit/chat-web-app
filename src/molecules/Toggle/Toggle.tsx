import './toggle.css';

import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import React from "react";
import {motion} from 'framer-motion';
import {PText} from "../../atoms/IndexAtom";

type Prop = {
    // icon1: React.ReactElement;
    // icon2: React.ReactElement;
    toggleValue: boolean;
}

const Toggle = ({toggleValue}: Prop) => {
    const iconStyle = {
        fontSize: "18px",
        color: "var(--colorWhite)",
    };

    /* Public - Private */

    return <div className="toggle" style={{background: toggleValue ? "var(--color5)" : "var(--colorWhite)"}}>
        <motion.div
            className="toggleSwitch"
            initial={{x: -40, opacity: 1}}
            animate={{x: !toggleValue ? -40 : 0, opacity: !toggleValue ? 0 : 1}}
            transition={{duration: 0.25, ease: "easeIn"}}
        >
            <LockRoundedIcon style={iconStyle}/>
        </motion.div>
        <motion.div
            className="toggleSwitch"
            initial={{x: 0, opacity: 1}}
            animate={{x: toggleValue ? -40 : 0, opacity: toggleValue ? 0 : 1}}
            transition={{duration: 0.25, ease: "easeIn"}}
        >
            <PublicRoundedIcon style={iconStyle}/>
        </motion.div>
        <PText
            propData={{
                fontSize: 14,
                fontWeight: 500,
                color: toggleValue ? "var(--colorWhite)" : "var(--color6)",
                styleName: "togglePTextStyle"
            }}
        >
            {toggleValue ? "Private" : "Public"}
        </PText>
    </div>
};

export default Toggle;