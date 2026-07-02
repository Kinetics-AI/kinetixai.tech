
export interface headbandSection4 {
    title: string;
    description: string;
    video: string;
    image: string;
    isTaskPerformance ? : boolean;
    successTitle ? : string;
    successRate?: React.ReactNode;
}

type LanguageData = {
    [key: string]: headbandSection4[];
};


export const headbandSection4Data: LanguageData = {
    zh: [
        {
            title: "Hardware solution",
            description: "Head-mounted device + self-developed wearable clamp, collecting operation data \ncorresponding to the robotic arm's clamping.",
            video: "/headband/s4-20260702-1.mp4",
            image: "/headband/s4-20260702-1.jpg",
            isTaskPerformance: false
        },
        {
            title: "Task performance",
            description: "Can storage, success rate in new scenarios increased from 23% to 90% \nafter adding Kai-UMI data.",
            video: "/headband/s4-20260702-2.mp4",
            image: "/headband/s4-20260702-2.jpg",
            isTaskPerformance: true,
            successTitle: "Success rate: ",
            successRate: (
                <>·
                    23% <span></span> 90%
                </>
            )
        }
    ],
    en: [
        {
            title: "Hardware solution",
            description: "Head-mounted device + self-developed wearable clamp, collecting operation data \ncorresponding to the robotic arm's clamping.",
            video: "/headband/s4-20260702-1.mp4",
            image: "/headband/s4-20260702-1.jpg",
            isTaskPerformance: false
        },
        {
            title: "Task performance",
            description: "Can storage, success rate in new scenarios increased from 23% to 90% \nafter adding Kai-UMI data.",
            video: "/headband/s4-20260702-2.mp4",
            image: "/headband/s4-20260702-2.jpg",
            isTaskPerformance: true,
            successTitle: "Success rate: ",
            successRate: (
                <>·
                    23% <span></span> 90%
                </>
            )
        }
    ]
};