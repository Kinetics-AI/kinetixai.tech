
export interface indexTech {
    title: string;
    pic: string;
}

type LanguageData = {
    [key: string]: indexTech[];
};


export const indexTechData: LanguageData = {
    zh: [
        {
            title: "空间智能",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E7%A9%BA%E9%97%B4%E6%84%9F%E7%9F%A5.gif"
        },
        {
            title: "高拟人全身运动控制",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%8C%AB%E6%AD%A5.gif"
        },
        {
            title: "全身视觉-语言-触觉-动作大模型",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/VLA.gif"
        },
        {
            title: "全身数采工厂",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E8%99%9A%E6%8B%9F%E7%8E%B0%E5%AE%9E%E8%81%94%E9%80%9A.gif"
        },
        {
            title: "具身智能基础设施",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%8F%B0.gif"
        }
    ],
    en: [
        {
            title: "Spatial Intelligence",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E7%A9%BA%E9%97%B4%E6%84%9F%E7%9F%A5.gif"
        },
        {
            title: "Highly Human-Like Whole-Body Control",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%8C%AB%E6%AD%A5.gif"
        },
        {
            title: "Whole-Body Foundation Model for Vision, Language, Touch, Action, and Emotion",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/VLA.gif"
        },
        {
            title: "Whole-Body Data Acquisition Factory",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E8%99%9A%E6%8B%9F%E7%8E%B0%E5%AE%9E%E8%81%94%E9%80%9A.gif"
        },
        {
            title: "Advanced Embodied AI Infrastructure",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%8F%B0.gif"
        }
    ]
};