
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
            title: "自主设计兼量产双侧上肢外骨骼",
            pic: "/kinetixai/company/img-1-1.png"
        },
        {
            title: "超百台L4自动驾驶矿卡商业化落地",
            pic: "/kinetixai/company/img-1-2.png"
        },
        {
            title: "首个被自然杂志《Nature》报道的国产统一语言与视觉生成多模态大模型",
            pic: "/kinetixai/company/img-1-3.png"
        },
        {
            title: "全球首个端到端自动驾驶大模型，CVPR史上第一篇自动驾驶最佳论文",
            pic: "/kinetixai/company/img-1-4.png"
        },
        {
            title: "入选Morgan Stanley《Humanoid 100》的高拟人人形机器人产品",
            pic: "/kinetixai/company/img-1-5.png"
        },
        {
            title: "全球首个分层AI Agent框架，排名居GAIA开源模型第一",
            pic: "/kinetixai/company/img-1-6.png"
        },
        {
            title: "性能超过PI0.5 的统一VLA大模型",
            pic: "/kinetixai/company/img-1-7.png"
        }
    ],
    en: [
        {
            title: "Independently designed and mass-produced bilateral upper limb exoskeletons",
            pic: "/kinetixai/company/img-1-1.png"
        },
        {
            title: "Over a hundred L4 autonomous driving mining trucks have been commercialized and put into operation",
            pic: "/kinetixai/company/img-1-2.png"
        },
        {
            title: "The first domestically produced multimodal model for unified language and visual generation reported in the journal Nature",
            pic: "/kinetixai/company/img-1-3.png"
        },
        {
            title: "The world's first end-to-end autonomous driving model, the first best paper on autonomous driving in CVPR history",
            pic: "/kinetixai/company/img-1-4.png"
        },
        {
            title: "Highly humanoid robot product selected for Morgan Stanley's Humanoid 100",
            pic: "/kinetixai/company/img-1-5.png"
        },
        {
            title: "The world's first hierarchical AI agent framework, ranked first in GAIA open source models",
            pic: "/kinetixai/company/img-1-6.png"
        },
        {
            title: "Unified VLA Large Model with Performance Exceeding PI0.5",
            pic: "/kinetixai/company/img-1-7.png"
        }
    ]
};