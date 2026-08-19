export interface NavItem {
    title: string;
    href: string;
}

export interface DocOutlineItem {
    id: string;
    title: string;
    href: string;
    children?: DocOutlineItem[];
}

export interface DocContentItem {
    id: string;
    title: string;
    content: string;
    children?: DocContentItem[];
}

type LanguageNavItem = {
    [key: string]: NavItem[];
};

type LanguageDocOutline = {
    [key: string]: DocOutlineItem[];
};

type LanguageDocContent = {
    [key: string]: DocContentItem[];
};

export const navItemsData: LanguageNavItem = {
    zh: [
        { title: '产品介绍', href: '' },
        { title: '硬件说明', href: '' },
        { title: '软件与开发', href: '' },
        { title: '用户须知', href: '' },
        { title: '售后条款', href: '' },
    ],
    en: [
        { title: '产品介绍', href: '' },
        { title: '硬件说明', href: '' },
        { title: '软件与开发', href: '' },
        { title: '用户须知', href: '' },
        { title: '售后条款', href: '' },
    ],
};

export const docOutlineData: LanguageDocOutline = {
    zh: [
        { id: '1', title: '结构与尺寸', href: '#kaihand-1' },
        {
            id: '2', title: '自由度定义与关节定义', href: '#kaihand-2', children: [
                { id: '2-1', title: '2.1 自由度定义', href: '#kaihand-2-1' },
                { id: '2-2', title: '2.2 关节定义', href: '#kaihand-2-2' },
            ]
        },
        { id: '3', title: '力热平衡设计', href: '#kaihand-3' },
        {
            id: '4', title: '多模态感知系统', href: '#kaihand-4', children: [
                { id: '4-1', title: '4.1 关节位置感知', href: '#kaihand-4-1' },
                { id: '4-2', title: '4.2 触觉感知', href: '#kaihand-4-2' },
                { id: '4-3', title: '4.3 视觉感知', href: '#kaihand-4-3' },
            ]
        },
        {
            id: '5', title: '电气与通信接口', href: '#kaihand-5', children: [
                { id: '5-1', title: '5.1 供电要求', href: '#kaihand-5-1' },
                { id: '5-2', title: '5.2 通信接口', href: '#kaihand-5-2' },
                { id: '5-3', title: '5.3 接线示意图', href: '#kaihand-5-3' },
                { id: '5-4', title: '5.4 指示灯示意说明', href: '#kaihand-5-4' },
            ]
        },
        {
            id: '6', title: '系统集成', href: '#kaihand-6', children: [
                { id: '6-1', title: '6.1 机械集成', href: '#kaihand-6-1' },
                { id: '6-2', title: '6.2 手腕视觉传感器集成', href: '#kaihand-6-2' },
                { id: '6-3', title: '6.3 电气集成', href: '#kaihand-6-3' },
                { id: '6-4', title: '6.4 集成注意事项', href: '#kaihand-6-4' },
            ]
        },
    ],
    en: [
        { id: '1', title: '结构与尺寸', href: '#kaihand-1' },
        {
            id: '2', title: '自由度定义与关节定义', href: '#kaihand-2', children: [
                { id: '2-1', title: '2.1 自由度定义', href: '#kaihand-2-1' },
                { id: '2-2', title: '2.2 关节定义', href: '#kaihand-2-2' },
            ]
        },
        { id: '3', title: '力热平衡设计', href: '#kaihand-3' },
        {
            id: '4', title: '多模态感知系统', href: '#kaihand-4', children: [
                { id: '4-1', title: '4.1 关节位置感知', href: '#kaihand-4-1' },
                { id: '4-2', title: '4.2 触觉感知', href: '#kaihand-4-2' },
                { id: '4-3', title: '4.3 视觉感知', href: '#kaihand-4-3' },
            ]
        },
        {
            id: '5', title: '电气与通信接口', href: '#kaihand-5', children: [
                { id: '5-1', title: '5.1 供电要求', href: '#kaihand-5-1' },
                { id: '5-2', title: '5.2 通信接口', href: '#kaihand-5-2' },
                { id: '5-3', title: '5.3 接线示意图', href: '#kaihand-5-3' },
                { id: '5-4', title: '5.4 指示灯示意说明', href: '#kaihand-5-4' },
            ]
        },
        {
            id: '6', title: '系统集成', href: '#kaihand-6', children: [
                { id: '6-1', title: '6.1 机械集成', href: '#kaihand-6-1' },
                { id: '6-2', title: '6.2 手腕视觉传感器集成', href: '#kaihand-6-2' },
                { id: '6-3', title: '6.3 电气集成', href: '#kaihand-6-3' },
                { id: '6-4', title: '6.4 集成注意事项', href: '#kaihand-6-4' },
            ]
        },
    ],
};


export const docContentData: LanguageDocContent = {
    zh: [
        {
            id: 'kaihand-1',
            title: '结构与尺寸',
            content: `
                <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
            `,
        },
        {
            id: 'kaihand-2',
            title: '自由度定义与关节定义',
            content: `<p>KAIHand 采用 20 个主动自由度设计，每个手指配备 4 个柔顺关节，实现高度拟人的手部运动。</p>`,
            children: [
                {
                    id: 'kaihand-2-1',
                    title: '2.1 自由度定义',
                    content: `
                        <p>KAIHand 灵巧手共包含 <strong>20 个主动自由度</strong>，每个手指 4 个自由度。大拇指独立配置 1 个轴动自由度和指尖 1 个触觉传感器，其余手指每根配置 3 个柔顺关节。</p>
                        <p>关节驱动方式为氟基-胶碳复合材料，单向自锁；控制方式为 FOC 控制；最大输出力 30N；最大负载 2KG。</p>
                    `,
                },
                {
                    id: 'kaihand-2-2',
                    title: '2.2 关节定义',
                    content: `
                        <table>
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>数值 / 说明
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>手部尺寸</td>
                                    <td>185 x 90 x 40 mm</td>
                                </tr>
                                <tr>
                                    <td>整手自由度</td>
                                    <td>20主动，每个手指4个<br>1被动，大拇指指尖<br>16柔顺，大拇指4个，其他手指各3个</td>
                                </tr>
                                <tr>
                                    <td>驱动方式</td>
                                    <td>直驱-线驱混合方案，单向自锁</td>
                                </tr>
                                <tr>
                                    <td>驱动控制算法</td>
                                    <td>FOC控制</td>
                                </tr>
                                <tr>
                                    <td>指尖握力</td>
                                    <td>30N</td>
                                </tr>
                                <tr>
                                    <td>单指动态负载</td>
                                    <td>2KG</td>
                                </tr>
                                <tr>
                                    <td>通讯频率</td>
                                    <td>最高500Hz</td>
                                </tr>
                                <tr>
                                    <td>通讯协议</td>
                                    <td>CAN、 CAN-FD、 RS-485、EtherCAT</td>
                                </tr>
                            </tbody>
                        </table>
                    `,
                },
            ],
        },
        {
            id: 'kaihand-3',
            title: '力热平衡设计',
            content: `
                <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
            `,
        },
        {
            id: 'kaihand-4',
            title: '多模态感知系统',
            content: `<p>KAIHand 集成了关节位置感知、触觉感知和视觉感知三种感知系统，为灵巧操作提供全方位的感知支撑。</p>`,
            children: [
                {
                    id: 'kaihand-4-1',
                    title: '4.1 关节位置感知',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-4-2',
                    title: '4.2 触觉感知',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-4-3',
                    title: '4.3 视觉感知',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
            ],
        },
        {
            id: 'kaihand-5',
            title: '电气与通信接口',
            content: `<p>KAIHand 提供丰富的电气接口和通信协议支持，便于与各类机器人控制系统集成。</p>`,
            children: [
                {
                    id: 'kaihand-5-1',
                    title: '5.1 供电要求',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-5-2',
                    title: '5.2 通信接口',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-5-3',
                    title: '5.3 接线示意图',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-5-4',
                    title: '5.4 指示灯示意说明',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
            ],
        },
        {
            id: 'kaihand-6',
            title: '系统集成',
            content: `<p>KAIHand 可与多种机器人本体和控制系统集成，提供机械、电气和软件层面的完整集成方案。</p>`,
            children: [
                {
                    id: 'kaihand-6-1',
                    title: '6.1 机械集成',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-6-2',
                    title: '6.2 手腕视觉传感器集成',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-6-3',
                    title: '6.3 电气集成',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-6-4',
                    title: '6.4 集成注意事项',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
            ],
        },
    ],
    en: [
        {
            id: 'kaihand-1',
            title: '结构与尺寸',
            content: `
                <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
            `,
        },
        {
            id: 'kaihand-2',
            title: '自由度定义与关节定义',
            content: `<p>KAIHand 采用 20 个主动自由度设计，每个手指配备 4 个柔顺关节，实现高度拟人的手部运动。</p>`,
            children: [
                {
                    id: 'kaihand-2-1',
                    title: '2.1 自由度定义',
                    content: `
                        <p>KAIHand 灵巧手共包含 <strong>20 个主动自由度</strong>，每个手指 4 个自由度。大拇指独立配置 1 个轴动自由度和指尖 1 个触觉传感器，其余手指每根配置 3 个柔顺关节。</p>
                        <p>关节驱动方式为氟基-胶碳复合材料，单向自锁；控制方式为 FOC 控制；最大输出力 30N；最大负载 2KG。</p>
                    `,
                },
                {
                    id: 'kaihand-2-2',
                    title: '2.2 关节定义',
                    content: `
                        <table>
                            <thead>
                                <tr>
                                    <th>参数</th>
                                    <th>数值 / 说明
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>手部尺寸</td>
                                    <td>185 x 90 x 40 mm</td>
                                </tr>
                                <tr>
                                    <td>整手自由度</td>
                                    <td>20主动，每个手指4个<br>1被动，大拇指指尖<br>16柔顺，大拇指4个，其他手指各3个</td>
                                </tr>
                                <tr>
                                    <td>驱动方式</td>
                                    <td>直驱-线驱混合方案，单向自锁</td>
                                </tr>
                                <tr>
                                    <td>驱动控制算法</td>
                                    <td>FOC控制</td>
                                </tr>
                                <tr>
                                    <td>指尖握力</td>
                                    <td>30N</td>
                                </tr>
                                <tr>
                                    <td>单指动态负载</td>
                                    <td>2KG</td>
                                </tr>
                                <tr>
                                    <td>通讯频率</td>
                                    <td>最高500Hz</td>
                                </tr>
                                <tr>
                                    <td>通讯协议</td>
                                    <td>CAN、 CAN-FD、 RS-485、EtherCAT</td>
                                </tr>
                            </tbody>
                        </table>
                    `,
                },
            ],
        },
        {
            id: 'kaihand-3',
            title: '力热平衡设计',
            content: `
                <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
            `,
        },
        {
            id: 'kaihand-4',
            title: '多模态感知系统',
            content: `<p>KAIHand 集成了关节位置感知、触觉感知和视觉感知三种感知系统，为灵巧操作提供全方位的感知支撑。</p>`,
            children: [
                {
                    id: 'kaihand-4-1',
                    title: '4.1 关节位置感知',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-4-2',
                    title: '4.2 触觉感知',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-4-3',
                    title: '4.3 视觉感知',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
            ],
        },
        {
            id: 'kaihand-5',
            title: '电气与通信接口',
            content: `<p>KAIHand 提供丰富的电气接口和通信协议支持，便于与各类机器人控制系统集成。</p>`,
            children: [
                {
                    id: 'kaihand-5-1',
                    title: '5.1 供电要求',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-5-2',
                    title: '5.2 通信接口',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-5-3',
                    title: '5.3 接线示意图',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-5-4',
                    title: '5.4 指示灯示意说明',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
            ],
        },
        {
            id: 'kaihand-6',
            title: '系统集成',
            content: `<p>KAIHand 可与多种机器人本体和控制系统集成，提供机械、电气和软件层面的完整集成方案。</p>`,
            children: [
                {
                    id: 'kaihand-6-1',
                    title: '6.1 机械集成',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-6-2',
                    title: '6.2 手腕视觉传感器集成',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-6-3',
                    title: '6.3 电气集成',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
                {
                    id: 'kaihand-6-4',
                    title: '6.4 集成注意事项',
                    content: `
                        <p>KAI Hand 是一款由超维动力打造的新一代线驱-直驱混合方案高自由高拟人度灵巧手，具有被动柔顺，力热平衡，模块化设计等优势，专为具身智能打造，提供接近人手的操作能力。</p>
                    `,
                },
            ],
        },
    ],
};