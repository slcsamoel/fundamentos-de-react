
import React, {useEffect , useRef } from 'react';
import lottie from 'lottie-web';

function  Animation(props) {

    const container = useRef(null)

    useEffect(()=>{
       lottie.loadAnimation({
           container: container.current,
           renderer: 'svg',
           loop: true ,
           autoplay: true ,
           animationData: require(`./${props.data}`)
       })
     },[])

    return (
        <div className="container" ref={container}></div>
    );

}

export default Animation;