
export interface headbandSection4 {
    title: string;
    description: string;
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
            image: "/headband/s4-1-1.jpg",
            isTaskPerformance: false
        },
        {
            title: "Task performance",
            description: "Can storage, success rate in new scenarios increased from 23% to 90% \nafter adding Kai-UMI data.",
            image: "/headband/s4-1-2.jpg",
            isTaskPerformance: true,
            successTitle: "Success rate: ",
            successRate: (
                <>
                    23% <span></span> 90%
                </>
            )
        }
    ],
    en: [
        {
            title: "Hardware solution",
            description: "Head-mounted device + self-developed wearable clamp, collecting operation data \ncorresponding to the robotic arm's clamping.",
            image: "/headband/s4-1-1.jpg",
            isTaskPerformance: false
        },
        {
            title: "Task performance",
            description: "Can storage, success rate in new scenarios increased from 23% to 90% \nafter adding Kai-UMI data.",
            image: "/headband/s4-1-2.jpg",
            isTaskPerformance: true,
            successTitle: "Success rate: ",
            successRate: (
                <>
                    23% <span></span> 90%
                </>
            )
        }
    ]
};