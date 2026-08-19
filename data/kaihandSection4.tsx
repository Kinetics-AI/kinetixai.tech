
export interface KaihandSection4Item {
    label: string;
    para: string;
}

type LanguageData = {
    [key: string]: KaihandSection4Item[];
};


export const kaihandSection4Data: LanguageData = {
    zh: [
        {
            label: "重量",
            para: "750g"
        },
        {
            label: "手部尺寸",
            para: "185 × 90 × 40mm"
        },
        {
            label: "整手自由度",
            para: "37自由度（20主动、1被动、16柔顺）"
        },
        {
            label: "重复定位精度",
            para: "±1mm"
        },
        {
            label: "通讯频率",
            para: "最高500Hz"
        },
        {
            label: "驱动方式",
            para: "直驱—线驱混合方案，单向自锁"
        },
        {
            label: "指尖握力",
            para: "30N"
        },
        {
            label: "单指动态负载",
            para: "2kg"
        },
        {
            label: "通讯协议",
            para: "CAN、CAN FD、RS-485、EtherCAT"
        },
        {
            label: "传感器",
            para: "指尖触觉"
        },
        {
            label: "视觉传感器",
            para: "双目相机（选配）"
        },
        {
            label: "工作电压",
            para: "12V，支持宽压输入"
        },
        {
            label: "操作速度",
            para: "后期需补充数据"
        },
    ],
    en: [
        {
            label: "重量",
            para: "750g"
        },
        {
            label: "手部尺寸",
            para: "185 × 90 × 40mm"
        },
        {
            label: "整手自由度",
            para: "37自由度（20主动、1被动、16柔顺）"
        },
        {
            label: "重复定位精度",
            para: "±1mm"
        },
        {
            label: "通讯频率",
            para: "最高500Hz"
        },
        {
            label: "驱动方式",
            para: "直驱—线驱混合方案，单向自锁"
        },
        {
            label: "指尖握力",
            para: "30N"
        },
        {
            label: "单指动态负载",
            para: "2kg"
        },
        {
            label: "通讯协议",
            para: "CAN、CAN FD、RS-485、EtherCAT"
        },
        {
            label: "传感器",
            para: "指尖触觉"
        },
        {
            label: "视觉传感器",
            para: "双目相机（选配）"
        },
        {
            label: "工作电压",
            para: "12V，支持宽压输入"
        },
        {
            label: "操作速度",
            para: "后期需补充数据"
        },
    ]
};