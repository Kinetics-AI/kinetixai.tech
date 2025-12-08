
export interface companyList {
    title: string;
    pic: string;
}

type LanguageData = {
    [key: string]: companyList[];
};


export const companyListData: LanguageData = {
    zh: [
        {
            title: "自主设计兼量产医用上肢外骨骼",
            pic: "https://ik.imagekit.io/uabcioduh/History/HSR.jpg?updatedAt=1765103586307"
        },
        {
            title: "超百台L4自动驾驶矿卡商业化落地",
            pic: "https://ik.imagekit.io/uabcioduh/History/L4%E7%9F%BF%E5%8D%A1.gif"
        },
        {
            title: "首个被自然杂志《Nature》报道的国产统一语言与视觉生成多模态大模型",
            pic: "https://ik.imagekit.io/uabcioduh/History/First%20Chinese%20unified%20language-vision%20generative%20multimodal%20foundation%20model%20to%20receive%20Nature%20coverage.jpg?updatedAt=1765104071520"
        },
        {
            title: "全球首个端到端自动驾驶大模型，CVPR史上第一篇自动驾驶最佳论文",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-4.png"
        },
        {
            title: "入选Morgan Stanley《Humanoid 100》的高拟人人形机器人产品",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-5.png"
        },
        {
            title: "全球首个分层AI Agent框架，排名居GAIA开源模型第一",
            pic: "https://ik.imagekit.io/uabcioduh/History/World's%20first%20hierarchical%20AI%20agent%20framework,%20achieving%20top%20ranking%20among%20open-source%20models%20on%20GAIA%20benchmark.jpg?updatedAt=1765103953481"
        },
        {
            title: "性能超过PI0.5 的统一VLA大模型",
            pic: "https://ik.imagekit.io/uabcioduh/History/First%20Chinese%20unified%20language-vision%20generative%20multimodal%20foundation%20model%20to%20receive%20Nature%20coverage.jpg?updatedAt=1765104071520"
        }
    ],
    en: [
        {
            title: "Self-Designed and Mass-Produced Medical Upper-Limb Exoskeleton",
            pic: "https://ik.imagekit.io/uabcioduh/History/HSR.jpg?updatedAt=1765103586307"
        },
        {
            title: "Commercial deployment of 100+ L4 autonomous mining trucks",
            pic: "https://ik.imagekit.io/uabcioduh/History/L4%E7%9F%BF%E5%8D%A1.gif"
        },
        {
            title: "First Chinese unified language-vision generative multimodal foundation model to receive Nature coverage",
            pic: "https://ik.imagekit.io/uabcioduh/History/First%20Chinese%20unified%20language-vision%20generative%20multimodal%20foundation%20model%20to%20receive%20Nature%20coverage.jpg?updatedAt=1765104071520"
        },
        {
            title: "World's first end-to-end autonomous driving foundation model and the first-ever best paper on autonomous driving at the CVPR",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-4.png"
        },
        {
            title: "Highly humanoid robotics platform selected for Morgan Stanley's ‘Humanoid 100’ list",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-5.png"
        },
        {
            title: "World's first hierarchical AI agent framework, achieving top ranking among open-source models on GAIA benchmark",
            pic: "https://ik.imagekit.io/uabcioduh/History/World's%20first%20hierarchical%20AI%20agent%20framework,%20achieving%20top%20ranking%20among%20open-source%20models%20on%20GAIA%20benchmark.jpg?updatedAt=1765103953481"
        },
        {
            title: "Unified Vision-Language-Action (VLA) foundation model outperforming Pi0.5",
            pic: "https://ik.imagekit.io/uabcioduh/History/First%20Chinese%20unified%20language-vision%20generative%20multimodal%20foundation%20model%20to%20receive%20Nature%20coverage.jpg?updatedAt=1765104071520"
        }
    ]
};