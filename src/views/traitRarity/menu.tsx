import { GetTypes } from "./rarityInfo";

const RarityMenu = (props:any) =>{
    let current = props.num;
    const changeType = (key: number) => {
        props.changeFunc(key);
    }
    const rTypes = GetTypes();

    const menuClass = {
        contain: "text-center text-white relative",
        itemdefault: "mx-5p px-30p py-10p border-b-2 border-solid  font-16p  hover:text-white hover:border-white cursor-pointer",
        itemDisable: " text-rarityMenuDisable border-rarityMenuLine",
        itemCheck: " text-white border-white"
    };
    return (
        <div className={menuClass.contain}>
            {
                rTypes.map((type,key)=>{
                    if ( key == current )
                        return <a className={menuClass.itemdefault + menuClass.itemCheck} key={key}>{type}</a>;
                    return <a className={menuClass.itemdefault + menuClass.itemDisable} key={key} onClick={()=>changeType(key)}>{type}</a>;
                })
            }
        </div>
    );
}

export default RarityMenu;