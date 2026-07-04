
export interface headbandSection7 {
    data: string;
    description: string;
}

type LanguageData = {
    [key: string]: headbandSection7[];
};


export const headbandSection7Data: LanguageData = {
    zh: [
        {
            data: "100,000+",
            description: "",
        },
        {
            data: "150+",
            description: "标注动作类别",
        },
        {
            data: "2,000+",
            description: "标注技能类别",
        },
        {
            data: "10,000+",
            description: "覆盖场景数量",
        }
    ],
    en: [
        {
            data: "100,000+",
            description: "",
        },
        {
            data: "150+",
            description: "Annotated Action Types",
        },
        {
            data: "2,000+",
            description: "Annotated Skills",
        },
        {
            data: "10,000+",
            description: "Scenarios",
        }
    ]
};