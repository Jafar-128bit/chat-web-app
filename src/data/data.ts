import pp1 from "../assets/dataAssets/profileImage1.jpeg";
import pp2 from "../assets/dataAssets/profileImage2.jpeg";
import pp3 from "../assets/dataAssets/profileImage3.jpeg";
import pp4 from "../assets/dataAssets/profileImage4.jpeg";
import pp5 from "../assets/dataAssets/profileImage5.jpeg";

import {ActualSectionDataType, ChatCardType} from "../types/types";

export let sectionInfoData: ActualSectionDataType[] = [
    {sectionName: "My Section1", description: "", unreadMessage: 2},
];

export const userData: ChatCardType[] = [
    {
        username: "Cloe Johnson",
        lastMessage: "Hey! Let's catch up soon 😊",
        createdTime: "2024-10-20 14:32",
        imageSrc: pp1,
        unreadMessage: 12,
        isPin: true
    },
    {
        username: "Ricky Adams",
        lastMessage: "Got it, thanks for the update!",
        createdTime: "2024-10-19 18:12",
        imageSrc: pp2,
        unreadMessage: 0,
        isPin: false
    },
    {
        username: "John Georg",
        lastMessage: "See you tomorrow at the meeting.",
        createdTime: "2024-10-20 09:45",
        imageSrc: pp3,
        unreadMessage: 1,
        isPin: true
    },
    {
        username: "Sheldon Cooper",
        lastMessage: "Did you know that string theory suggests...",
        createdTime: "2024-10-20 13:25",
        imageSrc: pp4,
        unreadMessage: 4,
        isPin: false
    },
    {
        username: "Rajesh Chaudhuri",
        lastMessage: "Great! I'll send the documents by EOD.",
        createdTime: "2024-10-18 11:30",
        imageSrc: pp5,
        unreadMessage: 0,
        isPin: false
    }
];