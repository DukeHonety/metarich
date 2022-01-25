import AboutImg from "../assets/images/about.gif";
import configData from "../config.json";
const Abouts = () =>{
    const aboutInfo = configData.about;
   
    const AboutClass = {
        contianer: "p-40p px-80p",
        lContent: "w-1/2 flex px-20p",
        rContent: "w-1/2 flex flex-col px-20p justify-center",
        about: "mb-40p text-white text-avenir text-16p text-center",
        subTitle: "text-Mint font-bold text-14p text-montserrat",
        subTitleLine: "w-1/3 h-2p ml-20p bg-Mint",
        subTitleContent: "text-white mb-20p mt-20p text-30p font-bold text-montserrat uppercase",
        subDetails : "text-avenir text-17p text-white my-20p",
    };
    const aboutDetails = aboutInfo.moreAbout;
    return (
        <div className = {AboutClass.contianer} id="About">
            <p className= {AboutClass.about}>{aboutInfo.mainAbout}</p>
            <div className="flex">
                <div className={AboutClass.lContent}>
                    <img className="max-w-full w-full" src={AboutImg} />
                </div>  
                <div className={AboutClass.rContent}>
                    <div className="flex w-full items-center">
                        <p className={AboutClass.subTitle}>ABOUT</p>
                        <div className={AboutClass.subTitleLine}></div>
                    </div>
                    <h1 className={AboutClass.subTitleContent}>5,000 UNIQUE RICHYSHIB WHO NEED DRIVERS</h1>
                    {
                        aboutDetails.map((detail,key)=>{
                            return <p className={AboutClass.subDetails} key={key}>{detail.content}</p>;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Abouts;