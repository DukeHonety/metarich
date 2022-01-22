import MintImage from "../../assets/images/mint.gif";

const MintPage = () =>{
  return (
    <div className="block lg:w-960p p-20p m-0 mx-auto">
      <div className="w-full max-w-mintDiv">
        <h1 className="text-38p text-Mint text-montserrat font-bold text-center text-roboto">MINT IS LIVE</h1>
        <div className="flex">
          <div className="w-1/2 flex">
            <img src={MintImage}/>
          </div>
          <div className="w-1/2 flex">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintPage;