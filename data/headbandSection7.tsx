
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
            data: "99,000+",
            description: "Nearly 100,000 total samples collected, with a total duration of 1,600+ hours, \ncontinuously growing every day.",
        },
        {
            data: "1,600+",
            description: "Data Collection Hours",
        },
        {
            data: "150+",
            description: "Annotated Action Types",
        }
    ],
    en: [
        {
            data: "99,000+",
            description: "Nearly 100,000 total samples collected, with a total duration of 1,600+ hours, \ncontinuously growing every day.",
        },
        {
            data: "1,600+",
            description: "Data Collection Hours",
        },
        {
            data: "150+",
            description: "Annotated Action Types",
        }
    ]
};