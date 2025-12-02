
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
            title: "自主设计双侧上肢外骨骼并实现量产落地",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-1.png"
        },
        {
            title: "超百台L4自动驾驶矿卡商业化落地",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-2.png"
        },
        {
            title: "首个被自然杂志《Nature》报道的国产统一语言与视觉生成多模态大模型",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-3.png"
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
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-6.png"
        },
        {
            title: "性能超过PI0.5 的统一VLA大模型",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-7.png"
        }
    ],
    en: [
        {
            title: "Proprietary bilateral upper limb exoskeleton with mass production capabilities",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-1.png"
        },
        {
            title: "Commercial deployment of 100+ L4 autonomous mining trucks",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-2.png"
        },
        {
            title: "First Chinese unified language-vision generative multimodal foundation model to receive Nature coverage",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-3.png"
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
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-6.png"
        },
        {
            title: "Unified Vision-Language-Action (VLA) foundation model outperforming Pi0.5",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-1-7.png"
        }
    ]
};