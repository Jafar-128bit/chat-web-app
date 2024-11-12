import './attachmentMenu.css';
import {ButtonType} from "../../types/types";
import {Button} from "../../atoms/IndexAtom";
import {motion} from 'framer-motion';

type Prop = {
    buttonData: ButtonType[];
    showAttachmentMenu: boolean;
}

const AttachmentMenu = ({buttonData, showAttachmentMenu}: Prop) => {
    return <motion.div
        className="attachmentMenu"
        initial={{opacity: 0, y: 150}}
        animate={{opacity: showAttachmentMenu ? 1 : 0, y: showAttachmentMenu ? 0 : 150}}
        transition={{duration: 0.15, ease: "easeIn"}}
    >
        {buttonData.map((value: ButtonType, index: number) => <Button
                key={index}
                propData={{
                    innerButtonText: value.propData.innerButtonText,
                    buttonStyleName: value.propData.buttonStyleName,
                    buttonType: value.propData.buttonType,
                }}
                onClickFunction={value.onClickFunction}
            >
                {value.children}
            </Button>
        )}
    </motion.div>
}

export default AttachmentMenu;