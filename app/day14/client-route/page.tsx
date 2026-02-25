"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTheme } from '@/app/component/theme-context';


export default function ClientRoute() {

    const theme = useTheme()
    const settings = {
        dots: true,
    };
    return (
        <>
            <h2 style={{ color: theme.color.secondary }}>Hello Theme Context Provider</h2>
            <div className="image-slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                    <div>
                        <img src="http://picsum.photos/400/200" />
                    </div>
                </Slider>
            </div>
        </>
    );
}
