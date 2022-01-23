import RarityMenu from "./menu";
import RarityContent from "./rarityContent";
import { useState } from "react";

const Rarities = () =>{
    const [cMenu,setCMenu] = useState(0);
    const RarityClass = {
        contain: "block mt-0 mb-10 py-0",
        title: "uppercase my-5p text-36p text-Mint text-montserrat font-bold text-center text-montserrat",
        tabMenu: "mt-40p text-center relative text-roboto",
        tabContent: "px-130p relative block overflow-hidden",
    }
    return (
        <div className={RarityClass.contain}>
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