
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
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-1.jpg"
        },
        {
            title: "Automated Quality Inspection",
            para: "Automatically detects issues such as video image quality, abnormal joint poses, and data synchronization errors, and generates quality inspection reports with real-time visibility into pass rates and issue distribution.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-2.jpg"
        },
        {
            title: "Semantic Annotation & Task Segmentation",
            para: "Conducts frame-by-frame annotation on continuous video for action types, interaction objects, operating hands and other labels, auto-segments videos into separate task clips, and provides Chinese-English bilingual semantic annotations.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-3.jpg"
        },
        {
            title: "Data Augmentation",
            para: "Applies data augmentation to generate supplementary training samples from existing data, expanding dataset size while enriching visual diversity.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-4.jpg"
        }
    ],
    en: [
        {
            title: "Collection Management",
            para: "Unified management of task progress, operator assignment, and device status, with real-time tracking of data volume and completion rate.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-1.jpg"
        },
        {
            title: "Automated Quality Inspection",
            para: "Automatically detects issues such as video image quality, abnormal joint poses, and data synchronization errors, and generates quality inspection reports with real-time visibility into pass rates and issue distribution.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-2.jpg"
        },
        {
            title: "Semantic Annotation & Task Segmentation",
            para: "Conducts frame-by-frame annotation on continuous video for action types, interaction objects, operating hands and other labels, auto-segments videos into separate task clips, and provides Chinese-English bilingual semantic annotations.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-3.jpg"
        },
        {
            title: "Data Augmentation",
            para: "Applies data augmentation to generate supplementary training samples from existing data, expanding dataset size while enriching visual diversity.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s9-1-4.jpg"
        }
    ]
};