
export interface headbandSection6 {
    title: string;
    pic: string;
}

type LanguageData = {
    [key: string]: headbandSection6[];
};


export const headbandSection6Data: LanguageData = {
    zh: [
        {
            title: "第一视角视频",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-1.jpg"
        },
        {
            title: "全身姿态重建",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-2.jpg"
        },
        {
            title: "精细手部姿态捕捉",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-3.jpg"
        },
        {
            title: "三维场景重建",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s6-1-4.jpg"
        },
        {
            title: "动作语义标注",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s6-1-5.jpg"
        },
        {
            title: "海量场景覆盖",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-6.jpg"
        }
    ],
    en: [
        {
            title: "First-person video",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-1.jpg"
        },
        {
            title: "Full-body pose capture",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-2.jpg"
        },
        {
            title: "Hand pose (fine-grained)",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-3.jpg"
        },
        {
            title: "3D scene reconstruction",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s6-1-4.jpg"
        },
        {
            title: "Semantic action annotation",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s6-1-5.jpg"
        },
        {
            title: "Rich scene coverage",
            pic: "https://assets.kinetixai.cn/shucai/s6-1-6.jpg"
        }
    ]
};