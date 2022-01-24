import { useEffect, useRef, useState } from "react";
import Road from "./road";
import configInfo from "../../config.json";
const Roadmaps = () =>{
    const roadMClass = {
        container: "pt-20p px-80p",
        titleDiv: "px-20p",
        title:"text-38p text-Mint text-montserrat font-bold text-center text-roboto",
        decription: "px-220p m-20p text-white text-18p text-center",
        roadContain: "relative max-w-roadMaxDiv w-4/5 mx-auto pt-60p",
        timeline: "absolute flex w-40p h-full justify-center items-center",
        ctimeline: "bg-white w-2p ",
    };
    const [scrollY, setScrollY] = useState(0);
    const [wheight, setWHeight] = useState({height: "0px"});
    const [childrenHeights, setChildrenHeights] = useState<number[]>([]);
    const roadMapRef = useRef<HTMLDivElement>(null);
    const roadMapContentRef = useRef<HTMLDivElement>(null);
    const [oStyle, setOStyle] = useState(Array(6).fill(false));
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            //console.log(window.scrollY);
        }    
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    useEffect(() => {
        const tmpChildrenHeight: any[] = Array.from(roadMapContentRef?.current?.children || []).map((item: any) => item.clientHeight);
        setChildrenHeights(tmpChildrenHeight);
    }, [])
    
    useEffect(() => {
        const roadMapTop = roadMapRef.current?.getBoundingClientRect().top || 0;
        const roadMapHeight = roadMapRef.current?.getBoundingClientRect().height == undefined ? 0 : roadMapRef.current?.getBoundingClientRect().height;
        if (roadMapTop < 0) { // scroll down the ref div
            let newRoadMapTop = Math.abs(roadMapTop);
            let heightSum = 0;
            for (let index = 1; index < childrenHeights.length; index ++) {
                if (newRoadMapTop >= heightSum) {
                    let initStyles = Array(6).fill(false);
                    initStyles[0] = true;
                    for (let i = 0; i < index; i++)
                        initStyles[i] = true;
                    console.log(initStyles);
                    setOStyle(initStyles);
                }
                heightSum += childrenHeights[index];
            }
            if ( newRoadMapTop > roadMapHeight * 0.8 -200)
                newRoadMapTop = roadMapHeight * 0.8 -200;
            
            let style = {height: newRoadMapTop.toString() + "px"};
            setWHeight(style);
        }
        else{
            let initStyles = Array(6).fill(false);
            setOStyle(initStyles);
            let style = {height: "0px"};
           setWHeight(style);
        }
    }, [scrollY]);

    const roadMString = configInfo.roadMap.roadString;
    const roadMaps = configInfo.roadMap.roadMaps;

    return (
        <div className={roadMClass.container} id="Roadmap">
            <div>
                <h2 className={roadMClass.title}>{roadMString.title}</h2>
                <p className={roadMClass.decription}>{roadMString.description}</p>
            </div>
            <div className={roadMClass.roadContain}>
                <div className={roadMClass.timeline} ref={roadMapRef}>
                    <div className="relative w-2p h-4/5 bg-roadStep">
                        <div className={roadMClass.ctimeline} style={wheight} ></div>
                    </div>
                </div>
                <div className="z-0" ref={roadMapContentRef}>
                    {roadMaps.map((road,key)=>{
                        return <Road data={road} num={key} key={key} opacity={oStyle[key]}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Roadmaps;