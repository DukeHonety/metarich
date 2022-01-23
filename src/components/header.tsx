import MenuBar from "./menubar";
const PageHeader = () => {
    return (
        <div className="fixed top-0 w-full p-20p pr-60p pl-60p bg-black">
            <a className="relative float-left top-10p"><img src="https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/6197f5e3dabccf3d8e3c61d2_Untitled-1.png" loading="lazy" width="393"/></a>
            <MenuBar />
        </div>
    )
};

export default PageHeader;