
export interface companyList {
    year: string;
    title: string;
    pic: string;
}

type LanguageData = {
    [key: string]: companyList[];
};


export const companyListData: LanguageData = {
    zh: [
        {
            year: "Beginnings</br>2023",
            title: "自主设计兼量产医用上肢外骨骼",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-1.png"
        },
        {
            year: "2023",
            title: "全球首个端到端自动驾驶大模型</br>联合创始人HY说：“这是CVPR 30年史上第一篇自动驾驶最佳论文。”",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-2.png"
        },
        {
            year: "2024",
            title: "超百台L4自动驾驶矿卡商业化落地",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-3.gif"
        },
        {
            year: "2024",
            title: "入选Morgan Stanley《Humanoid 100》的高拟人人形机器人",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-4.gif"
        },
        {
            year: "2025",
            title: "国产统一语言与视觉生成多模态大模型</br>联合创始人P笑称：“自然杂志《Nature》报道这是震撼全球的中国AI之一。”",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-5.png"
        },
        {
            year: "2025",
            title: "全球首个开源分层AI Agent框架",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-6.png"
        },
        {
            year: "2025",
            title: "性能超过PI0.5的跨本体VLA大模型",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-7.png"
        }
    ],
    en: [
        {
            year: "Beginnings</br>2023",
            title: "Self-Designed and Mass-Produced Medical Upper-Limb Exoskeleton",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-1.png"
        },
        {
            year: "2023",
            title: "World’s First End-to-End Autonomous Driving Foundation Model</br>Co-founder HY stated, “This is the first Best Paper on Autonomous Driving in the 30-year history of CVPR.”",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-2.png"
        },
        {
            year: "2024",
            title: "Commercialized over 100 L4 autonomous mining trucks—ushering in a new era of intelligent automation in heavy industry.",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-3.gif"
        },
        {
            year: "2024",
            title: "Highly humanlike humanoid robot selected for Morgan Stanley's \"Humanoid 100\" list",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-4.gif"
        },
        {
            year: "2025",
            title: "The Unified Language-Vision Understanding and Generation Foundation Model received more than 18k stars on GitHub.</br>Co-founder P remarked, \"Nature magazine reported that this is one of China's AIs that shocked the world.\"",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-5.png"
        },
        {
            year: "2025",
            title: "The world's first hierarchical AI agent ranked first among open-source models on the GAIA benchmark and received more than 18k GitHub stars.",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-6.png"
        },
        {
            year: "2025",
            title: "Unified Vision-Language-Action (VLA) foundation model outperforming PI0.5",
            pic: "https://assets.kinetixai.tech/kinetixai/company/img-2-7.png"
        }
    ]
};