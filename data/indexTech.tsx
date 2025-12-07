
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
            title: "空间智能与世界模型",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/Spatial%20Intelligence.m4v/ik-video.mp4?updatedAt=1765024038935"
        },
        {
            title: "高拟人全身运动控制",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E8%B5%B0%E7%8C%AB%E6%AD%A5.m4v/ik-video.mp4?updatedAt=1765110702206"
        },
        {
            title: "视觉语言触觉动作基础模型",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/VLA.mp4"
        },
        {
            title: "虚实贯通数据生成",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E8%99%9A%E5%AE%9E%E8%B4%AF%E9%80%9A%E6%95%B0%E6%8D%AE%E7%94%9F%E6%88%90.mp4?updatedAt=1765104378992"
        },
        {
            title: "具身智能基础设施",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/High-quality%20and%20Low-cost%20Data%20Acquisition.mp4?updatedAt=1765011347798"
        }
    ],
    en: [
        {
            title: "World Model with Spatial Intelligence",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/Spatial%20Intelligence.m4v/ik-video.mp4?updatedAt=1765024038935"
        },
        {
            title: "Whole Body Control",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E8%B5%B0%E7%8C%AB%E6%AD%A5.m4v/ik-video.mp4?updatedAt=1765110702206"
        },
        {
            title: "Multimodal Understanding and Generation",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/VLA.mp4"
        },
        {
            title: "High-quality and Low-cost Data Acquisition",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/%E8%99%9A%E5%AE%9E%E8%B4%AF%E9%80%9A%E6%95%B0%E6%8D%AE%E7%94%9F%E6%88%90.mp4?updatedAt=1765104378992"
        },
        {
            title: "Closed-loop Infrastructure",
            pic: "https://ik.imagekit.io/uabcioduh/Web%20Set/High-quality%20and%20Low-cost%20Data%20Acquisition.mp4?updatedAt=1765011347798"
        }
    ]
};