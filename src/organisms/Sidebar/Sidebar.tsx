import './sidebar.css';

import {ImageContainer} from "../../atoms/IndexAtom";
import {IconButton} from '../../molecules/IndexMolecules';

import {IconButtonType} from "../../types/types";

type Prop = {
    userActionButtonData: IconButtonType[];
    userGroupDataButton: IconButtonType[];
    sidebarLogo: any;
}

const Sidebar = ({userActionButtonData, sidebarLogo, userGroupDataButton}: Prop) => {

    const [
        firstActionButton,
        secondActionButton,
        thirdActionButton,
        fourthActionButton,
        fifthActionButton,
        sixthActionButton
    ] = userActionButtonData;

    return <aside className="sidebar">
        <section className="sidebar__section1">
            <ImageContainer
                width={55}
                height={55}
                borderRadius='var(--borderRadius3)'
                image={sidebarLogo}
                altText={"chat app logo"}
            />
        </section>
        <section className="sidebar__section2">
            <section className="sidebar__section2-1 noScroll">
                {firstActionButton && (
                    <IconButton {...firstActionButton}>
                        {firstActionButton.children}
                    </IconButton>
                )}
                {userGroupDataButton.map((groupButton, index) => (
                    <IconButton key={index} {...groupButton}>
                        {groupButton.children}
                    </IconButton>
                ))}
                {[secondActionButton, thirdActionButton].map((actionButton, index) =>
                        actionButton && (
                            <IconButton key={index} {...actionButton}>
                                {actionButton.children}
                            </IconButton>
                        )
                )}
            </section>
            <div className="sidebar__separator"/>
            <section className="sidebar__section2-2">
                {[fourthActionButton, fifthActionButton].map((actionButton, index) =>
                        actionButton && (
                            <IconButton key={index} {...actionButton}>
                                {actionButton.children}
                            </IconButton>
                        )
                )}
            </section>
        </section>
        <section className="sidebar__section3">
            {sixthActionButton && (
                <IconButton {...sixthActionButton}>
                    {sixthActionButton.children}
                </IconButton>
            )}
        </section>
    </aside>
}

export default Sidebar;