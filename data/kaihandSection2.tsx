
export interface KaihandSection2Item {
    image: string;
    label: string;
    title: string;
    htmlContent: string;
}

type LanguageData = {
    [key: string]: KaihandSection2Item[];
};


export const kaihandSection2Data: LanguageData = {
    zh: [
        {
            image: "/kaihand/img-2-1.png",
            label: "无惧磕碰，灵活无上限",
            title: "超高自由度",
            htmlContent: `
                <div class="data">
                    <span>20</span>
                    <p>主动</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <span>1</span>
                    <p>被动</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <span>16</span>
                    <p>柔顺自由度</p>
                </div>
            `
        },
        {
            image: "/kaihand/img-2-2.png",
            label: "人类手部数据的最佳载体",
            title: "高拟人度",
            htmlContent: `
                <div class="data">
                    <span>1:1</span>
                    <p>成人手型</p>
                </div>
            `
        },
        {
            image: "/kaihand/img-2-3.png",
            label: "提供接近人脑的决策空间",
            title: "多模态感知能力",
            htmlContent: `
                <div class="data">
                    <p>指尖触觉</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <p>可移动视觉方案</p>
                </div>
            `
        }
    ],
    en: [
        {
            image: "/kaihand/img-2-1.png",
            label: "无惧磕碰，灵活无上限",
            title: "超高自由度",
            htmlContent: `
                <div class="data">
                    <span>20</span>
                    <p>主动</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <span>1</span>
                    <p>被动</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <span>16</span>
                    <p>柔顺自由度</p>
                </div>
            `
        },
        {
            image: "/kaihand/img-2-2.png",
            label: "人类手部数据的最佳载体",
            title: "高拟人度",
            htmlContent: `
                <div class="data">
                    <span>1:1</span>
                    <p>成人手型</p>
                </div>
            `
        },
        {
            image: "/kaihand/img-2-3.png",
            label: "提供接近人脑的决策空间",
            title: "多模态感知能力",
            htmlContent: `
                <div class="data">
                    <p>指尖触觉</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <p>可移动视觉方案</p>
                </div>
            `
        }
    ]
};