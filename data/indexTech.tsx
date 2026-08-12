
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
            title: "KAI 具身智能基础设施",
            pic: "https://assets.kinetixai.cn/20260811/20260812-160115.mp4"
        },
        {
            title: "KAI 世界模型",
            pic: "https://assets.kinetixai.cn/20260811/KAI%20World%20Model.mp4"
        },
        {
            title: "KAI 第一人称数据采集工厂",
            pic: "https://assets.kinetixai.cn/20260811/KAI%20Ego%20Data.MP4"
        },
        {
            title: "超高拟人人形机器人KAI Bot",
            pic: "https://assets.kinetixai.cn/20260811/Ultra-high%20humanlike.mp4"
        }
    ],
    en: [
        {
            title: "KAI Embodied AI Infra",
            pic: "https://assets.kinetixai.cn/20260811/20260812-160115.mp4"
        },
        {
            title: "KAI World Model",
            pic: "https://assets.kinetixai.cn/20260811/KAI%20World%20Model.mp4"
        },
        {
            title: "KAI Ego Data",
            pic: "https://assets.kinetixai.cn/20260811/KAI%20Ego%20Data.MP4"
        },
        {
            title: "KAI Bot Ultra-high humanlike humanoid",
            pic: "https://assets.kinetixai.cn/20260811/Ultra-high%20humanlike.mp4"
        }
    ]
};