
export interface KaihandSection3Item {
    label: string;
    para: string;
    image: string;
    video: string;
}

type LanguageData = {
    [key: string]: KaihandSection3Item[];
};


export const kaihandSection3Data: LanguageData = {
    zh: [
        {
            label: "被动柔顺设计",
            para: "桌面抓握与木板测试、握持力热测试",
            image: "/kaihand/gchsj-1.png",
            video: "https://assets.kinetixai.cn/20260811/20260916_788.mp4",
        },
        {
            label: "力热平衡设计",
            para: "桌面抓握与木板测试、握持力热测试",
            image: "/kaihand/gchsj-2.png",
            video: "https://assets.kinetixai.cn/20260811/ys-2.mp4",
        },
        {
            label: "模块化设计",
            para: "桌面抓握与木板测试、握持力热测试",
            image: "/kaihand/gchsj-3.png",  
            video: "https://assets.kinetixai.cn/20260811/ys-3-1.mp4",
        }
    ],
    en: [
        {
            label: "Passive Compliance",
            para: "Built-in compliance helps the fingers accommodate contact and reduces impact loads during grasping and interaction.",
            image: "/kaihand/gchsj-1.png",
            video: "https://assets.kinetixai.cn/20260811/20260916_788.mp4",
        },
        {
            label: "Thermally Balanced Design",
            para: "Self-locking transmission reduces heat during sustained grasps.",
            image: "/kaihand/gchsj-2.png",
            video: "https://assets.kinetixai.cn/20260811/ys-2.mp4",
        },
        {
            label: "Modular Architecture",
            para: "Quick-swap fingers reduce maintenance costs and downtime.",
            image: "/kaihand/gchsj-3.png",
            video: "https://assets.kinetixai.cn/20260811/ys-3-1.mp4",
        }
    ]
};