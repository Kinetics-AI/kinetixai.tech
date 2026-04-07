
export interface headbandSection10 {
    title: string;
    para: string;
    pic: string;
}

type LanguageData = {
    [key: string]: headbandSection10[];
};


export const headbandSection10Data: LanguageData = {
    zh: [
        {
            title: "Can Organization",
            para: "Using gripper data collected with the Kai-UMI solution for training, the robotic arm performs can picking and sorting placement. After incorporating our data, the task success rate in new scenarios increased from 23% to 90%.",
            pic: "/headband/s10-1-1.jpg"
        },
        {
            title: "Clothing Folding",
            para: "Trained based on full-body motion data, the robotic arm completes tasks such as unfolding, folding, and stacking clothing.",
            pic: "/headband/s10-1-2.jpg"
        },
        {
            title: "More Tasks",
            para: "More scene demonstrations will be continuously added in the future.",
            pic: "/headband/s10-1-3.jpg"
        }
    ],
    en: [
        {
            title: "Can Organization",
            para: "Using gripper data collected with the Kai-UMI solution for training, the robotic arm performs can picking and sorting placement. After incorporating our data, the task success rate in new scenarios increased from 23% to 90%.",
            pic: "/headband/s10-1-1.jpg"
        },
        {
            title: "Clothing Folding",
            para: "Trained based on full-body motion data, the robotic arm completes tasks such as unfolding, folding, and stacking clothing.",
            pic: "/headband/s10-1-2.jpg"
        },
        {
            title: "More Tasks",
            para: "More scene demonstrations will be continuously added in the future.",
            pic: "/headband/s10-1-3.jpg"
        }
    ]
};