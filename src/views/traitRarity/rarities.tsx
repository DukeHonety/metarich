import RarityMenu from "./menu";
import RarityContent from "./rarityContent";
import { useState } from "react";

const Rarities = () =>{
    const [cMenu,setCMenu] = useState(0);
    const RarityClass = {
        contain: "block mt-0 mb-10 py-0 text-algin",
        title: "uppercase my-5p text-36p text-Mint text-montserrat font-bold text-center text-montserrat",
        tabMenu: "mt-40p text-center relative text-roboto",
        tabContent: "max-w-4/5 ml-1/5 mx-100p mt-40p relative block overflow-hidden text-center",
    }
    return (
        <div className={RarityClass.contain} id="rarity">
            <h1 className={RarityClass.title}>Trait Rarity</h1>
            <div>
                <div className={RarityClass.tabMenu}>
                    <RarityMenu num={cMenu} changeFunc={setCMenu} />
                </div>
                <div className={RarityClass.tabContent}>
                    <RarityContent num={cMenu} />
                </div>
            </div>
        </div>
    );
}

export default Rarities;