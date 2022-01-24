import Getway from "./getWay";
import configInfo from "../../config.json"

const Howtoget = () =>{
    const getWays = configInfo.metarich;
    const classAry = {
        contain : "",
        title : "mb-5p mt-20p text-Mint text-36p font-bold text-center uppercase",
        description : "text-white text-center text-roboto text-14p",
        meta: "flex mt-70p px-130p justify-between items-center",
    };
    const stringAry = {
        title: "HOW TO GET A META RICH",
        description : "New to NFTs? No worries, here are some steps on what you need to do to get your Meta Rich",
    };
    return (
        <div className={classAry.contain}>
            <h3 className={classAry.title}>{stringAry.title}</h3>
            <p className={classAry.description}>{stringAry.description}</p>
            <div className={classAry.meta}>
                {
                    getWays.map( (way:any, key:number) => {
                        return <Getway info={way} key={key} num={key} />;
                    })
                }
            </div>
        </div>
    );
}

export default Howtoget;