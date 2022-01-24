import Getway from "./getWay";
import configInfo from "../../config.json"

const Howtoget = () =>{
    const info = configInfo.richshib;
    const classAry = {
        contain : "",
        title : "mb-5p mt-20p text-Mint text-36p font-bold text-center uppercase",
        description : "text-white text-center text-roboto text-14p",
        meta: "flex mt-70p px-130p justify-between items-center",
    };
    return (
        <div className={classAry.contain}>
            <h3 className={classAry.title}>{info.title}</h3>
            <p className={classAry.description}>{info.description}</p>
            <div className={classAry.meta}>
                {
                    info.ways.map( (way:any, key:number) => {
                        return <Getway info={way} key={key} num={key} />;
                    })
                }
            </div>
        </div>
    );
}

export default Howtoget;