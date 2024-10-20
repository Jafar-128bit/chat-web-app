import './iconButton.css';

import {Button, Badge} from '../../atoms/IndexAtom';
import {IconButtonType} from "../../types/types";

const IconButton = ({
                        propData,
                        children,
                        iconStyleName,
                        badge,
                        onMouseOver,
                        onMouseLeave,
                        onClickFunction
                    }: IconButtonType) => {
    return <div
        className={`iconButton ${iconStyleName}`}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClickFunction}
    >
        {badge !== null && <Badge badgeValue={badge}/>}
        <Button propData={propData}>{children}</Button>
    </div>
}

export default IconButton;