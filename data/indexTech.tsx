
export interface indexTech {
    title: string;
    pic: string;
}

type LanguageData = {
    [key: string]: indexTech[];
};


export const indexTechData: LanguageData = {
    zh: [
        {
            title: "多模态理解能力",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-1.jpg"
        },
        {
            title: "空间智能",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-2.jpg"
        },
        {
            title: "AI智能体",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-3.jpg"
        },
        {
            title: "视觉语言动作模型",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-4.jpg"
        },
        {
            title: "全身运控技术",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-5.jpg"
        }
    ],
    en: [
        {
            title: "Multimodal Understanding",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-1.jpg"
        },
        {
            title: "Spatial Intelligence",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-2.jpg"
        },
        {
            title: "AI agent",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-3.jpg"
        },
        {
            title: "Visual Language Action Model",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-4.jpg"
        },
        {
            title: "Whole-body control",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-3-5.jpg"
        }
    ]
};