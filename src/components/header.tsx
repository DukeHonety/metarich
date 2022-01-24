import MenuBar from "./menubar";
import configData from "../config.json";
const PageHeader = () => {
    const classAry = {
        contain: "fixed top-0 w-full p-20p pr-60p pl-60p bg-black z-40",
        siteUrl: "relative float-left top-10p",
    }
    const siteUrl = configData.siteUrl;
    return (
        <div className={classAry.contain}>
            <a className={classAry.siteUrl}><img src={siteUrl} width="393"/></a>
            <MenuBar />
        </div>
    )
};

export default PageHeader;