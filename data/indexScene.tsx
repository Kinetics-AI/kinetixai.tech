
export interface indexScene {
    title: string;
    pic: string;
}

type LanguageData = {
    [key: string]: indexScene[];
};


export const indexSceneData: LanguageData = {
    zh: [
        {
            title: "家庭：从客厅、客房到厨房，你的全域家庭助手",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-1.jpg"
        },
        {
            title: "工业：从分拣、搬运到拧螺丝，全能打工人已上线",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-2.jpg"
        },
        {
            title: "商用：从餐厅后厨、客房清洁到商店补货，去哪都行",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-3.jpg"
        }
    ],
    en: [
        {
            title: "Family: Living room, Guest Room or Kitchen, Kai-bot help you anywhere",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-1.jpg"
        },
        {
            title: "Factory:  Sorting , transporting or screwing, Kai-bot do all",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-2.jpg"
        },
        {
            title: "Business: Restaurants,  hotels and shops, Kai-bot appear in every scenario",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-3.jpg"
        }
    ]
};