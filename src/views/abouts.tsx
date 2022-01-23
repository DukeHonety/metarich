import AboutImg from "../assets/images/about.gif";

const Abouts = () =>{
    const aboutStr:string = "Welcome to our community. Being part of the meta rich club introduces you to a community of world wild entrepreneurs. It will give you the opportunity to get in touch with masters of e-commerce already set-up in the real life business. Many IRL meet up events as online events will be organized between holders so that they can exchange their network, discuss marketing strategies and all subjects related to their business, so we can grow up and improve together.";
    const AboutClass = {
        contianer: "p-40p px-80p",
        lContent: "w-1/2 flex px-20p",
        rContent: "w-1/2 flex flex-col px-20p justify-center",
        about: "mb-40p text-white text-16p text-center",
        subTitle: "text-Mint font-bold text-14p text-montserrat",
        subTitleLine: "w-1/3 h-2p ml-20p bg-Mint",
        subTitleContent: "text-white mb-20p mt-20p text-30p font-bold text-montserrat uppercase",
        subDetails : "text-avenir text-17p text-white my-20p",
    };
    const aboutDetails = [{
            content: "The Meta Rich is a collection of 5,000 generative Meta Rich with hundreds of elements inspired by Shiba universes."
        },
        {
            content: "Each artwork is original, with its own color palette and creation. The objective was to make each Meta Rich unique in order to prioritize quality above quantity."
        }
    ];
    return (
        <div className = {AboutClass.contianer} id="#About">
            <p className= {AboutClass.about}>{aboutStr}</p>
            <div className="flex">
                <div className={AboutClass.lContent}>
                    <img className="max-w-full" src={AboutImg} />
                </div>  
                <div className={AboutClass.rContent}>
                    <div className="flex w-full items-center">
                        <p className={AboutClass.subTitle}>ABOUT</p>
                        <div className={AboutClass.subTitleLine}></div>
                    </div>
                    <h1 className={AboutClass.subTitleContent}>5,000 UNIQUE META RICH WHO NEED DRIVERS</h1>
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