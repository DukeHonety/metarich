import routes from "../routes";
const PageFooter = () => {
    const footClass={
        contain: "w-full max-w-mintDiv my-0 mx-auto px-16p text-center pb-20p",
        menuBar: "flex pt-10p pb-20p justify-center items-center",
        menuItem: "mx-10p pl-0 text-white",
        imgBtn: "w-150p max-w-full align-middle inline-block"
    }
    const linkUrls = [
        {
            name: "",
            url: "https://www.instagram.com/metarichnft/",
            content: "",
            class: "relative top-5p inline-block bg-no-repeat bg-linkBackPos bg-20pauto rounded-full w-30p h-30p mr-5p ml-5p bg-instagram",
            img: ""
        },
        {
            name: "",
            url: "http://www.twitter.com/metarichnft",
            content: "",
            class: "relative top-5p inline-block bg-no-repeat bg-linkBackPos bg-20pauto rounded-full w-30p h-30p mr-5p ml-5p bg-twitter",
        },
        {
            name: "",
            url: "https://discord.gg/cJJd8wNvCk",
            content: "",
            class: "relative top-5p inline-block bg-no-repeat bg-linkBackPos bg-20pauto rounded-full w-30p h-30p mr-5p ml-5p bg-discord",
        }
    ];
    return (
        <div className={footClass.contain}>
            <div className={footClass.menuBar} key="0">
                {
                    routes.map(
                        (route,key) => {
                        return <a className={footClass.menuItem} href={route.path} key={key}> {route.name} </a>;
                    })
                }
            </div>
            <img className={footClass.imgBtn} src="https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/6197f5e3dabccf3d8e3c61d2_Untitled-1.png" />
            <div key="1" className="py-20p">
            {
                linkUrls.map( (link,key) => {
                    return <a href={link.url} target="_blank" key={key} className={link.class}>{link.content}</a>;
                })
            }
            </div>
            <p className="mt-0 text-Mint text-15p font-bold">© 2021 META RICH CLUB. All rights reserved</p>
        </div>
    )
};

export default PageFooter;