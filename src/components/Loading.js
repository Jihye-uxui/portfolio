import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Loading() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../media/loading-animation.json')
        })
    }, [])

    return (
        <div className="loading-container" ref={container}>
        </div>
    )
}

export default Loading;
