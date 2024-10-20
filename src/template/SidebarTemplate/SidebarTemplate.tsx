import {Sidebar} from '../../organisms/IndexOrganism';

import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';

import {ActualSectionDataType, IconButtonType} from "../../types/types";
import logo1 from '../../assets/logos/logo1Light.svg';

import useHover from "../../hook/useHover";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {togglePopUp} from "../../store/slices/popUpSlices";
import {sectionInfoData} from "../../data/data";
import {useEffect, useState} from "react";

const iconStyle = {
    fontSize: "28px",
};

const SidebarTemplate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        hoverData: hoverDataUserActionButton,
        handleHover: handleHoverUserActionButton
    } = useHover(6);
    const {
        hoverData: hoverDataUserGroupFolderButton,
        handleHover: handleHoverUserGroupFolder
    } = useHover(sectionInfoData.length);

    const [groupData, setGroupData] = useState<ActualSectionDataType[]>(sectionInfoData);

    /* TODO: make this Code State for CV and Dynamic for GitHube */
    useEffect(() => {
        setGroupData(sectionInfoData);
    }, [sectionInfoData]);

    const handleAddGroup = (): void => {
        dispatch(togglePopUp({actionName: "addNewGroup", actionArgument: true}));
        dispatch(togglePopUp({actionName: "popUpContainer", actionArgument: true}));
    };
    const handleNavigate = (link: string): void => {
        navigate(link);
    };

    const userActionButtonData: IconButtonType[] = [
        {
            children: <ChatBubbleRoundedIcon style={{
                ...iconStyle,
                color: hoverDataUserActionButton.button1 ? "var(--colorWhite)" : "var(--colorGray6)"
            }}/>,
            iconStyleName: "sidebarIconStyle",
            badge: "17",
            onMouseOver: () => handleHoverUserActionButton("button1", true),
            onMouseLeave: () => handleHoverUserActionButton("button1", false),
            onClickFunction: () => {
            },
            propData: {
                innerButtonText: "All Chats",
                buttonStyleName: "sidebarButtonStyle",
                buttonType: "button",
            }
        },
        {
            children: <CreateNewFolderRoundedIcon style={{
                ...iconStyle,
                color: hoverDataUserActionButton.button2 ? "var(--colorWhite)" : "var(--colorGray6)"
            }}/>,
            iconStyleName: "sidebarIconStyle",
            badge: null,
            onMouseOver: () => handleHoverUserActionButton("button2", true),
            onMouseLeave: () => handleHoverUserActionButton("button2", false),
            onClickFunction: () => handleAddGroup(),
            propData: {
                innerButtonText: "Create Section",
                buttonStyleName: "sidebarButtonStyle",
                buttonType: "button",
            }
        },
        {
            children: <InboxRoundedIcon style={{
                ...iconStyle,
                color: hoverDataUserActionButton.button3 ? "var(--colorWhite)" : "var(--colorGray6)"
            }}/>,
            iconStyleName: "sidebarIconStyle",
            badge: null,
            onMouseOver: () => handleHoverUserActionButton("button3", true),
            onMouseLeave: () => handleHoverUserActionButton("button3", false),
            onClickFunction: () => {
            },
            propData: {
                innerButtonText: "Archive",
                buttonStyleName: "sidebarButtonStyle",
                buttonType: "button",
            }
        },
        {
            children: <AccountCircleRoundedIcon style={{
                ...iconStyle,
                color: hoverDataUserActionButton.button4 ? "var(--colorWhite)" : "var(--colorGray6)"
            }}/>,
            iconStyleName: "sidebarIconStyle",
            badge: null,
            onMouseOver: () => handleHoverUserActionButton("button4", true),
            onMouseLeave: () => handleHoverUserActionButton("button4", false),
            onClickFunction: () => {
            },
            propData: {
                innerButtonText: "Profile",
                buttonStyleName: "sidebarButtonStyle",
                buttonType: "button",
            }
        },
        {
            children: <SettingsRoundedIcon style={{
                ...iconStyle,
                color: hoverDataUserActionButton.button5 ? "var(--colorWhite)" : "var(--colorGray6)"
            }}/>,
            iconStyleName: "sidebarIconStyle",
            badge: null,
            onMouseOver: () => handleHoverUserActionButton("button5", true),
            onMouseLeave: () => handleHoverUserActionButton("button5", false),
            onClickFunction: () => {
            },
            propData: {
                innerButtonText: "Settings",
                buttonStyleName: "sidebarButtonStyle",
                buttonType: "button",
            }
        },
        {
            children: <ExitToAppRoundedIcon style={{
                ...iconStyle,
                color: hoverDataUserActionButton.button6 ? "var(--colorWhite)" : "var(--colorGray6)"
            }}/>,
            iconStyleName: "sidebarIconStyle",
            badge: null,
            onMouseOver: () => handleHoverUserActionButton("button6", true),
            onMouseLeave: () => handleHoverUserActionButton("button6", false),
            onClickFunction: () => {
            },
            propData: {
                innerButtonText: "Exit",
                buttonStyleName: "sidebarButtonStyle",
                buttonType: "button",
            }
        },
    ];
    const userGroupData: IconButtonType[] = groupData.map((value, index) => {
        return {
            children: <FolderRoundedIcon style={{
                ...iconStyle,
                color: hoverDataUserGroupFolderButton[`button${index + 1}`] ? "var(--colorWhite)" : "var(--colorGray6)"
            }}/>,
            iconStyleName: "sidebarIconStyle",
            badge: value.unreadMessage === 0 ? null : `${value.unreadMessage}`,
            onMouseOver: () => handleHoverUserGroupFolder(`button${index + 1}`, true),
            onMouseLeave: () => handleHoverUserGroupFolder(`button${index + 1}`, false),
            onClickFunction: () => {
            },
            propData: {
                innerButtonText: value.sectionName,
                buttonStyleName: "sidebarButtonStyle",
                buttonType: "button",
            }
        }
    });

    return <>
        <Sidebar
            sidebarLogo={logo1}
            userActionButtonData={userActionButtonData}
            userGroupDataButton={userGroupData}
        />
    </>
}

export default SidebarTemplate;