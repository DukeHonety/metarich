import MenuBar from "./menubar";
import configData from "../config.json";
const PageHeader = () => {
    const classAry = {
        contain: "fixed top-0 w-full p-20p pr-60p pl-60p bg-black z-40",
        siteUrl: "relative float-left top-10p cursor-pointer",
    }
    const siteImg = configData.siteImg;
    return (
        <div className={classAry.contain}>
            <a href="" className={classAry.siteUrl}>
                {/* <img src={siteImg} width="393"/> */}
                <h1 className="text-white">RICHYSHIB</h1> 
            </a>
            <MenuBar />
        </div>
    )
};

export default PageHeader;