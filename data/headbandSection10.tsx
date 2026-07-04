
export interface headbandSection10 {
    title: string;
    para: string;
    pic: string;
    video: string;
}

type LanguageData = {
    [key: string]: headbandSection10[];
};


export const headbandSection10Data: LanguageData = {
    zh: [
        {
            title: "",
            para: "搭载灵巧手的机械臂持刀拆开快递箱，取出花束并插入花瓶摆放",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-1.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-1.mp4"
        },
        {
            title: "",
            para: "利用第一视角数据训练，双臂灵巧机器人可复刻人类行为，执行长时序连续作业任务",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-2.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-2.mp4"
        },
        {
            title: "",
            para: "灵巧机械臂握持剪刀裁切胶带，完成高精度精细操作作业",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-3.jpg",    
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-3.mp4"
        },
        {
            title: "",
            para: "双臂机器人左臂抓取水杯、右臂握持水瓶完成倒水动作；依托真实场景数据训练，机器人可实现流体类操作",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-4.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-4.mp4"
        },
        {
            title: "",
            para: "纸盒折叠属于针对可形变物料的长时序任务，低成本第一视角数据采集模式，可大幅降低传统遥操作采集训练数据的高昂成本",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-5.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-5.mp4"
        },
        {
            title: "",
            para: "该双臂操作演示包含电钻拆取钻头，随后将电钻与钻头一同收纳进工具箱，对双机械臂复杂协同运动控制能力要求较高",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-6.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-6.mp4"
        },
        {
            title: "",
            para: "依托双臂精准协同控制，机器人将餐盘拾取放入纸盒，并完成后续封盒动作",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-7.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-7.mp4"
        },
        {
            title: "",
            para: "衣物折叠过程中若被人为中断，双臂机器人可自动接续作业；即便衣物被手动取走再放回，机器人也能继续完成折叠任务",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-8.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-8.mp4"
        }
    ],
    en: [
        {
            title: "",
            para: "The robotic arm with dexterous hands uses a knife to open a delivery box, takes out a bouquet of flowers, and puts it into a vase.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-1.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-1.mp4"
        },
        {
            title: "",
            para: "Trained on egocentric data, the dual-arm robot with dexterous hands can imitate human behaviors to execute long-horizon sequential task.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-2.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-2.mp4"
        },
        {
            title: "",
            para: "The dexterous robotic arm grasps a pair of scissors to slice through adhesive tape, demanding high-precision fine manipulation.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-3.jpg",    
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-3.mp4"
        },
        {
            title: "",
            para: "The dual-arm robot picks up a glass cup with its left arm and a water bottle with its right arm, then pours water from the bottle into the cup. Trained on real-world data, the robot is capable of manipulating fluids.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-4.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-4.mp4"
        },
        {
            title: "",
            para: "Box folding is a long-horizon task with deformable cardboard; our low-cost egocentric data collection greatly reduces the high cost of traditional teleoperation-based training data gathering.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-5.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-5.mp4"
        },
        {
            title: "",
            para: "This dual-arm manipulation demo includes unscrewing and extracting the bit from a power drill, followed by stowing both the drill and its bit inside a toolbox, demanding sophisticated coordinated motion control of two manipulators.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-6.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-6.mp4"
        },
        {
            title: "",
            para: "By virtue of precise dual-arm coordination, the robot pick and place a dish into a paper carton and completes the subsequent carton closing operation.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-7.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-7.mp4"
        },
        {
            title: "",
            para: "The dual-arm robot resumes clothes folding automatically after human interruption. It continues finishing the task once the garment is taken away and placed back manually.",
            pic: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-8.jpg",
            video: "https://assets.kinetixai.cn/shucai/s10-20260702-2/s10-20260702-8.mp4"
        }
    ]
};