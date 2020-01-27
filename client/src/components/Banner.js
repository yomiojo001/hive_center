import React from 'react';
import BannerButtons from './BannerButtons';
import '../Banner.css';



export default function Banner (){
    

    return (
            <div className="banner-bg">
                <div className="banner-transparency">
                    <div style={{position: "relative",top: "40%"}}>
                        <BannerButtons />
                    </div>
                </div>
            </div>
    );
}
