
export interface headbandSection9 {
    title: string;
    para: string;
    pic: string;
}

type LanguageData = {
    [key: string]: headbandSection9[];
};


export const headbandSection9Data: LanguageData = {
    zh: [
        {
            title: "Collection Management",
            para: "Unified management of task progress, operator assignment, and device status, with real-time tracking of data volume and completion rate.",
            pic: "/headband/s9-1-1.jpg"
        },
        {
            title: "Automated Quality Inspection",
            para: "Automatically detects issues such as video image quality, abnormal joint poses, and data synchronization errors, and generates quality inspection reports with real-time visibility into pass rates and issue distribution.",
            pic: "/headband/s9-1-1.jpg"
        },
        {
            title: "Semantic Annotation & Task Segmentation",
            para: "Performs frame-by-frame annotation of continuous video, including action type, interaction object, operating hand, and more, then segments it into independent task clips. Includes semantic descriptions in both Chinese and English.",
            pic: "/headband/s9-1-1.jpg"
        },
        {
            title: "Data Augmentation",
            para: "Generates additional training samples based on existing data, increasing data volume while preserving distribution diversity.",
            pic: "/headband/s9-1-1.jpg"
        }
    ],
    en: [
        {
            title: "Collection Management",
            para: "Unified management of task progress, operator assignment, and device status, with real-time tracking of data volume and completion rate.",
            pic: "/headband/s9-1-1.jpg"
        },
        {
            title: "Automated Quality Inspection",
            para: "Automatically detects issues such as video image quality, abnormal joint poses, and data synchronization errors, and generates quality inspection reports with real-time visibility into pass rates and issue distribution.",
            pic: "/headband/s9-1-1.jpg"
        },
        {
            title: "Semantic Annotation & Task Segmentation",
            para: "Performs frame-by-frame annotation of continuous video, including action type, interaction object, operating hand, and more, then segments it into independent task clips. Includes semantic descriptions in both Chinese and English.",
            pic: "/headband/s9-1-1.jpg"
        },
        {
            title: "Data Augmentation",
            para: "Generates additional training samples based on existing data, increasing data volume while preserving distribution diversity.",
            pic: "/headband/s9-1-1.jpg"
        }
    ]
};