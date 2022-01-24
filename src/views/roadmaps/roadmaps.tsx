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
        ctimeline: "bg-white w-2p",
    };
    const roadMString = configInfo.roadMap.roadString;
    const roadMaps = configInfo.roadMap.roadMaps;
    return (
        <div className={roadMClass.container} id="Roadmap">
            <div>
                <h2 className={roadMClass.title}>{roadMString.title}</h2>
                <p className={roadMClass.decription}>{roadMString.description}</p>
            </div>
            <div className={roadMClass.roadContain}>
                <div className={roadMClass.timeline} >
                    <div className="relative w-2p h-4/5 bg-roadStep">z
                        <div className={roadMClass.ctimeline}></div>
                    </div>
                </div>
                <div className="z-0">
                    {roadMaps.map((road,key)=>{
                        return <Road data={road} num={key} key={key}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Roadmaps;