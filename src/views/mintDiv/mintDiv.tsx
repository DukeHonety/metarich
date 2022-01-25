import MintImage from "../../assets/images/mint.gif";
import MintBuy from "./mintbuy";
const MintPage = () =>{
  const classAry = {
    contain: "block lg:w-960p p-20p m-0 mx-auto",
    title: "text-38p text-Mint text-montserrat font-bold text-center text-roboto",
    description : "text-22p my-10p mb-20p text-white text-montserrat font-bold text-center text-montserrat" 
  }
  return (
    <div className = {classAry.contain}>
      <div className = "w-full max-w-mintDiv">
        <h1 className = {classAry.title}>MINT IS LIVE</h1>
        <h1 className = {classAry.description}>As promised, we reached 200.000 members</h1>
        <div className="flex">
          <div className="w-1/2 flex">
            <img className="z-10" src={MintImage}/>
          </div>
          <div className="w-1/2 flex">
            <MintBuy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintPage;