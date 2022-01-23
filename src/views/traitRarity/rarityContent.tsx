import { GetTypes, GetTypeData } from "./rarityInfo";
const RarityContent = (props:any) =>{
    const index = props.num;
    const menus = GetTypes();
    const data = GetTypeData(menus[index]);
    return (
        <>
            
        </>
    );
}

export default RarityContent;