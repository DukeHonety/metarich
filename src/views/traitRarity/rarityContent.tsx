import { GetTypes, GetTypeData } from "./rarityInfo";
import RarityPerson from "./rarityPerson";

const RarityContent = (props:any) =>{
    const index = props.num;
    const menus = GetTypes();
    const data = GetTypeData(menus[index]);
    return (
        <div className="grid mt-20p mb-40p auto-cols-fr grid-cols-4 gap-x-16p gap-y-16p">
            {
                data.map((item:any, key:number)=>{
                    return <RarityPerson manData={item} key={key} num={key} />;
                })
            }
        </div>
    );
}

export default RarityContent;