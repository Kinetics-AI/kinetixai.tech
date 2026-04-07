
export interface headbandSection6 {
    title: string;
    para: string;
    pic: string;
}

type LanguageData = {
    [key: string]: headbandSection6[];
};


export const headbandSection6Data: LanguageData = {
    zh: [
        {
            title: "First-person video",
            para: "Using gripper data collected with the Kai-UMI solution for training, the robotic arm performs can picking and sorting placement. After incorporating our data, the task success rate in new scenarios increased from 23% to 90%.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Full-body pose capture",
            para: "Real-time motion capture with support for retargeting to multiple robot embodiments.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Hand pose (fine-grained)",
            para: "High-precision hand keypoint detection, capturing the movement of every finger.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "3D scene reconstruction",
            para: "Automatically generates high-quality 3D point clouds to faithfully reconstruct real-world environments.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Semantic action annotation",
            para: "Frame-by-frame labeling of action categories, manipulated objects, and time segments, with semantic descriptions in both Chinese and English.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Rich scene coverage",
            para: "Covering homes, hotels, supermarkets, offices, hospitals, and more.",
            pic: "/headband/s6-1-1.jpg"
        }
    ],
    en: [
        {
            title: "First-person video",
            para: "Using gripper data collected with the Kai-UMI solution for training, the robotic arm performs can picking and sorting placement. After incorporating our data, the task success rate in new scenarios increased from 23% to 90%.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Full-body pose capture",
            para: "Real-time motion capture with support for retargeting to multiple robot embodiments.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Hand pose (fine-grained)",
            para: "High-precision hand keypoint detection, capturing the movement of every finger.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "3D scene reconstruction",
            para: "Automatically generates high-quality 3D point clouds to faithfully reconstruct real-world environments.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Semantic action annotation",
            para: "Frame-by-frame labeling of action categories, manipulated objects, and time segments, with semantic descriptions in both Chinese and English.",
            pic: "/headband/s6-1-1.jpg"
        },
        {
            title: "Rich scene coverage",
            para: "Covering homes, hotels, supermarkets, offices, hospitals, and more.",
            pic: "/headband/s6-1-1.jpg"
        }
    ]
};