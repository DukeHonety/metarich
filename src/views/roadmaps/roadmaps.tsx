import Road from "./road";

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
    const roadMString = {
        title: "LAUNCH ROADMAP",
        description: "As we value our community and its creativity, our roadmap will be updated according to your comments and ideas.",
    };
    const roadMaps = [{
            img: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/619e469acaa16fe4c6d8d04f_1.svg",
            title: "CREATION OF THE META RICH CLUB",
            content: "A $50 000 fund is available to finance the creation, design and development of the community. In addition, 5% of OpenSea's fees are dedicated to this special fund ensuring the longevity of the Meta Rich Club.",
        },
        {
            img: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/619e469c6c56d1312e400c96_2.svg",
            title: "THE BEGINNING",
            content: "5,000 NFT Golden Tickets will be sold at the launch, NFT Golden Tickets will allow their holders to exchange them for an NFT Meta Rich Club a few days later.",
        },
        {
            img: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/619e46a16c56d14d6e400ca2_3.svg",
            title: "BENEFITS OF THE WEALTHY CLUB",
            content: "Our happy community will meet frequently at incredible Masterminds around the globe to share valuable business secrets and tips. At the same time, it will create a powerful network of successful entrepreneurs.",
        },
        {
            img: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/619e46a14eb8f6583c4d4151_4.svg",
            title: "THE INGENIOUS MARKETING",
            content: "The Meta Rich Club is planning a massive international media tour to promote the collection to millions of people. The goal is to create a huge hype around our community to make the floor price grow exponentially.",
        },
        {
            img: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/619e469e195d5cf6ebbf6b57_6.svg",
            title: "HIGHER SPEED",
            content: "A PVP video game is in discussion and will allow members, in addition to playing with unique and customized items, to recurrently get 50% of the revenue from this game.",
        },
        {
            img: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/619e469f50307d092c758da7_7.svg",
            title: "OUR CHOSEN ONES",
            content: "After sold out, $10,000 or equivalent will be distributed each day to a randomly selected holder, for a total of $500,000.",
        },
    ];
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