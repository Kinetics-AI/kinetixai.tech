
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
            pic: "https://assets.kinetixai.cn/20251211/Spatial%20Intelligence.gif"
        },
        {
            title: "高拟人全身运动控制",
            pic: "https://assets.kinetixai.cn/20251211/Highly%20Human-Like%20Whole-Body%20Control.gif"
        },
        {
            title: "全身视觉-语言-触觉-动作大模型",
            pic: "https://assets.kinetixai.cn/20251211/Highly%20Human-Like%20Whole-Body%20ControlWhole-Body%20Foundation%20Model%20for%20Vision%2C%20Language%2C%20Touch%2C%20Action%2C%20and%20Emotion.gif"
        },
        {
            title: "全身数采工厂",
            pic: "https://assets.kinetixai.cn/20251211/Whole-Body%20Data%20Acquisition%20Factory.gif"
        },
        {
            title: "具身智能基础设施",
            pic: "https://assets.kinetixai.cn/kinetixai/1f49e3b8cd9b2f34ae1dba3d35210e5d.png"
        }
    ],
    en: [
        {
            title: "Spatial Intelligence",
            pic: "https://assets.kinetixai.cn/20251211/Spatial%20Intelligence.gif"
        },
        {
            title: "Highly Human-Like Whole-Body Control",
            pic: "https://assets.kinetixai.cn/20251211/Highly%20Human-Like%20Whole-Body%20Control.gif"
        },
        {
            title: "Foundation Model for Vision, Language, Touch, Action, and Emotion",
            pic: "https://assets.kinetixai.cn/20251211/Highly%20Human-Like%20Whole-Body%20ControlWhole-Body%20Foundation%20Model%20for%20Vision%2C%20Language%2C%20Touch%2C%20Action%2C%20and%20Emotion.gif"
        },
        {
            title: "Whole-Body Data Acquisition Factory",
            pic: "https://assets.kinetixai.cn/20251211/Whole-Body%20Data%20Acquisition%20Factory.gif"
        },
        {
            title: "Advanced Embodied AI Infrastructure",
            pic: "https://assets.kinetixai.cn/kinetixai/1f49e3b8cd9b2f34ae1dba3d35210e5d.png"
        }
    ]
};