import {AttachmentMenu} from "../../molecules/IndexMolecules";
import {ButtonType} from "../../types/types";

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

type Prop = {
    showAttachmentMenu: boolean;
}

const AttachmentMenuTemplate = ({showAttachmentMenu}: Prop) => {
    const iconStyle = {
        fontSize: "22px",
        color: "var(--colorGray4)",
    }

    const buttonMenuData: ButtonType[] = [
        {
            propData: {
                innerButtonText: "Photos & Videos",
                buttonType: "button",
                buttonStyleName: "attachmentMenuButton"
            },
            children: <InsertPhotoOutlinedIcon style={iconStyle}/>,
            onClickFunction: () => {},
        },
        {
            propData: {
                innerButtonText: "Documents",
                buttonType: "button",
                buttonStyleName: "attachmentMenuButton"
            },
            children: <InsertDriveFileOutlinedIcon style={iconStyle}/>,
            onClickFunction: () => {},
        },
    ];

    return <>
        <AttachmentMenu buttonData={buttonMenuData} showAttachmentMenu={showAttachmentMenu}/>
    </>
}

export default AttachmentMenuTemplate;