
export interface KaihandSection2Item {
    image: string;
    label: string;
    title: string;
    htmlContent: string;
    paraContent: string;
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
            `,
            paraContent: ` `
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
            `,
            paraContent: ` `
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
            `,
            paraContent: ` `
        }
    ],
    en: [
        {
            image: "/kaihand/img-2-1.png",
            label: "Built for contact, engineered for dexterity",
            title: "High Degrees of Freedom",
            htmlContent: `
                <div class="data">
                    <span>20</span>
                    <p>Active</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <span>1</span>
                    <p>Passive</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <span>16</span>
                    <p>Compliant DoF</p>
                </div>
            `,
            paraContent: `
                <p>High-DOF  High Anthropomorphism</p>
                <p>Low-Cost Human Data Transfer</p>
            `
        },
        {
            image: "/kaihand/img-2-2.png",
            label: "Built to Embody Human-Hand Data",
            title: "Human-Scale Biomimetic Design",
            htmlContent: `
                <div class="data">
                    <span>1:1</span>
                    <p>Adult Human-Hand Scale</p>
                </div>
            `,
            paraContent: `
                <p>Human-scale geometry makes KAl Hand a natural embodiment for retargeting human demonstrations and transferring manipulation data to robotic systems.</p>
            `
        },
        {
            image: "/kaihand/img-2-3.png",
            label: "Richer observations for manipulation",
            title: "Multimodal Perception",
            htmlContent: `
                <div class="data">
                    <p>Fingertip tactile sensing</p>
                </div>
                <div class="icon">+</div>
                <div class="data">
                    <p>Adjustable wrist vision</p>
                </div>
            `,
            paraContent: `
                <p>Joint position, tactile, and visual inputs provide richer observations for teleoperation, policy learning, and closed-loop manipulation.</p>
            `
        }
    ]
};