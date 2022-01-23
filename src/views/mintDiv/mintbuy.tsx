import { useState } from "react";

const MintBuy = () => {

    const [buycount,setBuyCount] = useState(0);
    const decreaseBycount = () => {
        let value:number = buycount;
        value--;
        if ( value < 0)
            value = 0;
        setBuyCount(value);
    }
    const increaseBycount = () => {
        let value:number = buycount;
        value++;
        setBuyCount(value);
    }
    return (
        <div className="pl-50p text-left mt-80p">
            <h1 className="m-20p mb-30p text-montserrat text-38p leading-44p font-bold text-white">META RICH</h1>
            <p className="text-white text-12p">Pick the amount of <span className="text-Mint">NFT's</span> you would like to mint.</p>
            <span className="inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-l-full text-center hover:bg-gray-100" onClick={decreaseBycount}>-</span>
            <input className="inline-block bg-white w-50p h-30p cursor-pointer br-0 text-center text-444 align-top" type="text" value={buycount}/>
            <span className="inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-r-full text-center hover:bg-gray-100" onClick={increaseBycount}>+</span>
            <button className="block min-w-mintBtn p-5p px-10p rounded-full text-22p font-bold text-white bg-Mint-default mt-35p">MINT</button>
            <p className="text-12p text-white">Connect your wallet to buy NFTs.</p>
        </div>
    );
}

export default MintBuy;