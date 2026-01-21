
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
            tips: "WholeBodyVLA",
            title: "WholeBodyVLA：一种面向人形机器人移动操作的全身VLA框架",
            date: "2025年12月16日",
            pic: "https://assets.kinetixai.cn/kinetixai/research/img-1-2.jpg",
            url: "research/WholeBodyVLA"
        },
        {
            tips: "AMS",
            title: "统一人形机器人全身控制框架，首次实现在单一策略中同时具备动态运动跟踪和极限平衡控制能力。",
            date: "2025年11月24日",
            pic: "https://assets.kinetixai.cn/kinetixai/research/img-1-1.jpg?v=1",
            url: "research/AMS"
        }
    ],
    en: [
        // {
        //     tips: "WholeBodyVLA",
        //     title: "Towards Unified Latent VLA for Whole-body Loco-manipulation Control",
        //     date: "Dec 16, 2025",
        //     pic: "https://assets.kinetixai.cn/kinetixai/research/img-1-2.jpg",
        //     url: "research/WholeBodyVLA"
        // },
        // {
        //     tips: "AMS",
        //     title: "Agility Meets Stability: Versatile Humanoid Control with Heterogeneous Data",
        //     date: "Nov 24, 2025",
        //     pic: "https://assets.kinetixai.cn/kinetixai/research/img-1-1.jpg?v=1",
        //     url: "research/AMS"
        // }
        {
            tips: "WholeBodyVLA",
            title: "WholeBodyVLA：一种面向人形机器人移动操作的全身VLA框架",
            date: "2025年12月16日",
            pic: "https://assets.kinetixai.cn/kinetixai/research/img-1-2.jpg",
            url: "research/WholeBodyVLA"
        },
        {
            tips: "AMS",
            title: "统一人形机器人全身控制框架，首次实现在单一策略中同时具备动态运动跟踪和极限平衡控制能力。",
            date: "2025年11月24日",
            pic: "https://assets.kinetixai.cn/kinetixai/research/img-1-1.jpg?v=1",
            url: "research/AMS"
        }
    ]
};