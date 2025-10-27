
export interface indexTech {
    title: string;
    pic: string;
    stats: {
        num: string;
        unit: string;
        desc: string;
        icon: string;
    }[];
}

type LanguageData = {
    [key: string]: indexTech[];
};


export const indexTechData: LanguageData = {
    zh: [
        {
            title: "世界Kinetix AI大模型",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-1.jpg",
            stats: [
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "框架坚持走Kinetix AI框架\n相比目前行业主流的开环框架效率提升10+倍",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-1.png"
                },
                {
                    "num": "5",
                    "unit": "+",
                    "desc": "内嵌Kinetix AI模型\n相比主流的视频生成路线，效率提升5+倍",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-2.png"
                },
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "使用全球唯一的Kinetix AI\n数据使用效相比过往技术提升10+倍",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-3.png"
                }
            ]
        },
        {
            title: "世界Kinetix AI大模型2",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-2.jpg",
            stats: [
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "框架坚持走Kinetix AI框架\n相比目前行业主流的开环框架效率提升10+倍",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-1.png"
                },
                {
                    "num": "5",
                    "unit": "+",
                    "desc": "内嵌Kinetix AI模型\n相比主流的视频生成路线，效率提升5+倍",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-2.png"
                },
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "使用全球唯一的Kinetix AI\n数据使用效相比过往技术提升10+倍",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-3.png"
                }
            ]
        }
    ],
    en: [
        {
            title: "World Kinetix AI Large Model",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-1.jpg",
            stats: [
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "Adhere to the Kinetix AI framework",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-1.png"
                },
                {
                    "num": "5",
                    "unit": "+",
                    "desc": "Embedded Kinetix AI model",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-2.png"
                },
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "Using the world's only Kinetix AI",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-3.png"
                }
            ]
        },
        {
            title: "World Kinetix AI Large Model2",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-2.jpg",
            stats: [
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "Adhere to the Kinetix AI framework",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-1.png"
                },
                {
                    "num": "5",
                    "unit": "+",
                    "desc": "Embedded Kinetix AI model",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-2.png"
                },
                {
                    "num": "10",
                    "unit": "+",
                    "desc": "Using the world's only Kinetix AI",
                    "icon": "https://assets.kinetixai.tech/kinetixai/index/icon-1-3.png"
                }
            ]
        }
    ]
};