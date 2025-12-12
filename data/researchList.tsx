
export interface researchList {
    tips: string;
    title: string;
    date: string;
    pic: string;
    url: string; 
}

type LanguageData = {
    [key: string]: researchList[];
};


export const researchListData: LanguageData = {
    zh: [
        {
            tips: "AMS",
            title: "统一人形机器人全身控制框架，首次实现在单一策略中同时具备动态运动跟踪和极限平衡控制能力。",
            date: "2025年11月24日",
            pic: "https://assets.kinetixai.tech/kinetixai/research/img-1-1.jpg",
            url: "research/detail-1"
        }
    ],
    en: [
        {
            tips: "AMS",
            title: "Agility Meets Stability: Versatile Humanoid Control with Heterogeneous Data",
            date: "Nov 24 '2025",
            pic: "https://assets.kinetixai.tech/kinetixai/research/img-1-1.jpg",
            url: "research/detail-1"
        }
    ]
};