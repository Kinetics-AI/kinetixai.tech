
export interface indexNews {
    title: string;
    date: string;
    url: string; 
}

type LanguageData = {
    [key: string]: indexNews[];
};


export const indexNewsData: LanguageData = {
    zh: [
        {
            title: "与 NVIDIA Isaac 合作开发 AI 驱动的协作机器人",
            date: "2025年10月15日",
            url: "https://www.kinetixai.tech/zh"
        },
        {
            title: "我们的机器人焕发活力，立即投入工作",
            date: "2025年9月24日",
            url: "https://www.kinetixai.tech/zh"
        },
        {
            title: "将协作机器人与大型语言模型的强大功能融合",
            date: "2025年8月19日",
            url: "https://www.kinetixai.tech/zh"
        }
    ],
    en: [
        {
            title: "Collaborate with NVIDIA Isaac to develop AI driven collaborative robots",
            date: "2025-10-15",
            url: "https://www.kinetixai.tech/zh"
        },
        {
            title: "Our robots are full of vitality and immediately put into work",
            date: "2025-9-24",
            url: "https://www.kinetixai.tech/zh"
        },
        {
            title: "Integrating the powerful capabilities of collaborative robots with large-scale language models",
            date: "2025-8-19",
            url: "https://www.kinetixai.tech/zh"
        }
    ]
};