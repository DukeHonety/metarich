import {useState,useEffect} from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import configInfo from "../../config.json";
import { classicNameResolver } from "typescript";

declare global {
    interface Window {
      ethereum: {
        request<T>(params: { method: string }): Promise<T>;
        on<T>(event: string, cb: (params: T) => void): void;
        removeListener<T>(event: string, cb: (params: T) => void): void;
        selectedAddress: string | undefined;
      };
    }
  }
const {ethereum} = window;
const MintAgainPane = () => {
    const mintData = configInfo.mintAgain;
    const [ethCount,setEthCount] = useState(2);

    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const [walletInfo, setWalletInfo] = useState(mintData.mintNormal);
    
    const mintClass = {
        title: "text-38p text-Mint text-montserrat font-bold text-center text-roboto",
        description : "text-22p my-10p mb-20p text-white text-montserrat font-bold text-center text-montserrat" ,

        mintTitle: "m-20p mb-30p text-montserrat text-38p leading-44p font-bold text-white",
        minuse: "inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-l-full text-center hover:bg-gray-100",
        input: "inline-block bg-white w-50p h-30p cursor-pointer br-0 text-center text-444 align-top",
        plus: "inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-r-full text-center hover:bg-gray-100",
        mintBuyBtn: "inline-block w-250p p-5p px-10p rounded-50p text-22p font-bold text-white bg-Mint mt-35p",
    };
    
    useEffect(()=>{
        if ( !ethereum){
            window.history.back();
            window.location.href = "https://metamask.io/download/";
            return;
        }
        activateBrowserWallet();
    },[]);
    return (
        <div className="w-full max-w-mintDiv mx-auto">
            <h1 className = {mintClass.title}>MINT IS LIVE</h1>
            <h1 className = {mintClass.description}>We offer you the benefits of the Golden Whale if you mint 1 more.</h1>
            <div className="flex">
                <div className="w-1/2 flex">
                    <img src="https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61e1f3cf4a7cd041ab4f8360_IMG_2596.JPG"/>
                </div>
                <div className="w-1/2 flex justify-col">
                    <div className="pl-50p text-left mt-80p">
                        <h1 className={mintClass.mintTitle}>RICHYSHIB</h1>
                        <p className="text-white text-24p mb-2p">0.00ETH</p>
                        <div className="flex">
                            <button className={mintClass.mintBuyBtn}>NO</button>
                            <button className={mintClass.mintBuyBtn}>YES</button>
                        </div>
                        <p className="text-18p text-white">{walletInfo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MintAgainPane;