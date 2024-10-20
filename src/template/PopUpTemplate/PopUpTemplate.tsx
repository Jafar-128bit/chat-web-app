import './popUpTemplate.css';

import {motion} from 'framer-motion';
import {useSelector, useDispatch} from "react-redux";
import {PopUpState} from "../../types/types";
import {toggleCloseAll} from "../../store/slices/popUpSlices";
import {CreateSectionTemplate} from "../IndexTemplate";

const PopUpTemplate = () => {
    const dispatch = useDispatch();
    const popUpState = useSelector((state: { popUpSlice: PopUpState }) => state.popUpSlice);

    const handleCloseAll = (): void => {
        dispatch(toggleCloseAll());
    };

    return <motion.section
        className="popUpContainer"
        initial={{opacity: 0, zIndex: -10}}
        animate={{opacity: popUpState.addNewGroup?.actionArgument ? 1 : 0, zIndex: popUpState.addNewGroup?.actionArgument ? 2 : -2}}
        onClick={handleCloseAll}
    >
        {popUpState.addNewGroup?.actionArgument && <CreateSectionTemplate/>}
    </motion.section>
}

export default PopUpTemplate;