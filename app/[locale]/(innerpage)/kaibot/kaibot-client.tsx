'use client';

import type { KaibotMedia } from '@/lib/content-api';

interface Props {
    /** 视频与封面(服务端从 CMS「KaiBot」栏目配置拉取后下发) */
    media: KaibotMedia;
}

/**
 * KaiBot 页面
 * 页面只有一个视频区块,视频地址与封面图来自后台「内容管理 → KaiBot → 栏目配置」
 */
export default function KaibotClient({ media }: Props) {
    return (
        <div className="product-main">
            <div className="inner-s5">
                <div className="video-box">
                    <video autoPlay muted loop playsInline poster={media.poster}>
                        <source src={media.video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}
