export interface JobList {
    title: string;
    category: string;
    location: string;
    type: string;
    workMode: string;
    url: string;
}

type LanguageJobData = {
    [key: string]: JobList[];
};

export const jobData: LanguageJobData = {
    zh: [
        {
            title: "高级机器人集成工程师",
            category: "硬件工程",
            location: "圣克拉拉",
            type: "全职",
            workMode: "现场",
            url: "https://www.kinetixai.tech/zh"
        },
        {
            title: "高级/职员机器人专家",
            category: "硬件工程",
            location: "圣克拉拉",
            type: "兼职",
            workMode: "现场",
            url: ""
        },
        {
            title: "高级机械工程师",
            category: "硬件工程",
            location: "圣克拉拉",
            type: "全职",
            workMode: "现场",
            url: ""
        },
        {
            title: "部署工程师",
            category: "运营",
            location: "圣克拉拉",
            type: "兼职",
            workMode: "远程",
            url: ""
        },
        {
            title: "机器人技术部署项目经理",
            category: "运营",
            location: "圣克拉拉",
            type: "全职",
            workMode: "远程",
            url: ""
        },
        {
            title: "分析工程师",
            category: "产品",
            location: "圣克拉拉/西雅图",
            type: "全职",
            workMode: "现场",
            url: ""
        },
        {
            title: "高级数据基础设施工程师",
            category: "产品",
            location: "圣克拉拉",
            type: "全职",
            workMode: "现场",
            url: ""
        },
        {
            title: "高级产品工程师，3D 计算机视觉",
            category: "产品",
            location: "圣克拉拉/西雅图",
            type: "全职",
            workMode: "现场",
            url: ""
        }
    ],
    en: [
        {
            title: "Senior Robot Integration Engineer",
            category: "Hardware Engineering",
            location: "Santa Clara",
            type: "Full-time",
            workMode: "On-site",
            url: "https://www.kinetixai.tech/en"
        },
        {
            title: "Senior/Staff Robot Specialist",
            category: "Hardware Engineering",
            location: "Santa Clara",
            type: "Part-time",
            workMode: "On-site",
            url: ""
        },
        {
            title: "Senior Mechanical Engineer",
            category: "Hardware Engineering",
            location: "Santa Clara",
            type: "Full-time",
            workMode: "On-site",
            url: ""
        },
        {
            title: "Deployment Engineer",
            category: "Operations",
            location: "Santa Clara",
            type: "Part-time",
            workMode: "Remote",
            url: ""
        },
        {
            title: "Robotics Deployment Project Manager",
            category: "Operations",
            location: "Santa Clara",
            type: "Full-time",
            workMode: "Remote",
            url: ""
        },
        {
            title: "Analytics Engineer",
            category: "Product",
            location: "Santa Clara/Seattle",
            type: "Full-time",
            workMode: "On-site",
            url: ""
        },
        {
            title: "Senior Data Infrastructure Engineer",
            category: "Product",
            location: "Santa Clara",
            type: "Full-time",
            workMode: "On-site",
            url: ""
        },
        {
            title: "Senior Product Engineer, 3D Computer Vision",
            category: "Product",
            location: "Santa Clara/Seattle",
            type: "Full-time",
            workMode: "On-site",
            url: ""
        }
    ]
};