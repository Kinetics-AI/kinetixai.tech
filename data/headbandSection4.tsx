
export interface headbandSection4 {
    video: string;
    image: string;
}

type LanguageData = {
    [key: string]: headbandSection4[];
};


export const headbandSection4Data: LanguageData = {
    zh: [
        {
            video: "/headband/s4-20260702-1.mp4",
            image: "/headband/s4-20260702-1.jpg",
        },
        {
            video: "/headband/s4-20260702-2.mp4",
            image: "/headband/s4-20260702-2.jpg",
        }
    ],
    en: [
        {
            video: "/headband/s4-20260702-1.mp4",
            image: "/headband/s4-20260702-1.jpg",
        },
        {
            video: "/headband/s4-20260702-2.mp4",
            image: "/headband/s4-20260702-2.jpg",
        }
    ]
};