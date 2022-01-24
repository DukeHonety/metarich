import MintImage from "../../assets/images/mint.gif";
import MintBuy from "./mintbuy";
const MintPage = () =>{
  const classAry = {
    contain: "block lg:w-960p p-20p m-0 mx-auto",
    title: "text-38p text-Mint text-montserrat font-bold text-center text-roboto",
  }
  return (
    <div className = {classAry.contain}>
      <div className = "w-full max-w-mintDiv">
        <h1 className = {classAry.title}>MINT IS LIVE</h1>
        <div className="flex">
          <div className="w-1/2 flex">
            <img src={MintImage}/>
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