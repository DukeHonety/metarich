import {useState} from "react";

const MintBuy = () => {

    const [buycount,setBuyCount] = useState(2);

    const decreaseBycount = () => {
        let value:number = buycount;
        value--;
        if ( value < 0)
            value = 0;
        setBuyCount(value);
    };
    const increaseBycount = () => {
        let value:number = buycount;
        value++;
        setBuyCount(value);
    };

    const mintClass = {
        mintTitle: "m-20p mb-30p text-montserrat text-38p leading-44p font-bold text-white",
        minuse: "inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-l-full text-center hover:bg-gray-100",
        input: "inline-block bg-white w-50p h-30p cursor-pointer br-0 text-center text-444 align-top",
        plus: "inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-r-full text-center hover:bg-gray-100",
        mintBuyBtn: "block min-w-mintBtn p-5p px-10p rounded-50p text-22p font-bold text-white bg-Mint mt-35p",
    };
    return (
        <div className="pl-50p text-left mt-80p">
            <h1 className={mintClass.mintTitle}>RICHYSHIB</h1>
            <p className="text-white text-12p mb-2p">Pick the amount of <span className="text-Mint">NFT's</span> you would like to mint.</p>
            <span className={mintClass.minuse} onClick={decreaseBycount}>-</span>
            <input className={mintClass.input} type="text" value={buycount}/>
            <span className={mintClass.plus} onClick={increaseBycount}>+</span>
            <button className={mintClass.mintBuyBtn}>MINT</button>
            <p className="text-12p text-white">Connect your wallet to buy NFTs.</p>
        </div>
    );
}

export default MintBuy;