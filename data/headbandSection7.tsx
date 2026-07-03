
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