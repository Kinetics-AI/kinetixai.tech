'use client';


import { FadeIn } from "@/components/animation/fade-in"
import { FadeInUp } from "@/components/animation/fade-in-up"





export default function ProductPage(){



    return (
        <div className="product-main">
            <div className="inner-s5">
                <div className="video-box">
                    <video autoPlay muted loop playsInline poster="https://assets.kinetixai.tech/kinetixai/product/video.jpg">
                        <source src="https://assets.kinetixai.tech/kinetixai/product/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="txt-box">
                    <FadeInUp className="num">
                        2026
                        {/* <CountUp
                            start={2023}
                            end={2026}
                            duration={3}
                            separator=""
                        /> */}
                    </FadeInUp>
                </div>
            </div>
        </div>
    )
}
