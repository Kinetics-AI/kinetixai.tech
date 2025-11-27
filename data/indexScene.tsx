
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
            title: "Home: Your all-encompassing home assistant, from the living room and guest rooms to the kitchen",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-1.jpg"
        },
        {
            title: "Industrial applications: From sorting and handling to tightening screws, all-around workers are now online",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-2.jpg"
        },
        {
            title: "Commercial use: From restaurant kitchens and guest room cleaning to store restocking, it can be done anywhere",
            pic: "https://assets.kinetixai.tech/kinetixai/index/img-2-3.jpg"
        }
    ]
};