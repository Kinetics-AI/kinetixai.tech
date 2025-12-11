
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
            tips: "DYNA-1 模型",
            title: "DYNA-1 基于先进的视觉-语言-动作系统构建，并在真实环境中直接进行训练——不依赖任何模拟捷径。",
            date: "2025年10月15日",
            pic: "https://assets.kinetixai.tech/kinetixai/research/img-1-1.jpg",
            url: "research/detail-1"
        }
    ],
    en: [
        {
            tips: "DYNA-1 model",
            title: "DYNA-1 Built on advanced visual language action systems and trained directly in real environments without relying on any simulation shortcuts.",
            date: "2025-10-15",
            pic: "https://assets.kinetixai.tech/kinetixai/research/img-1-1.jpg",
            url: "research/detail-1"
        }
    ]
};