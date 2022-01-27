import {useState,useEffect} from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import configInfo from "../../config.json";
import { formatEther } from "@ethersproject/units";
import { workerData } from "worker_threads";

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
const MintBuy = () => {
    const mintData = configInfo.mint;
    const [buycount,setBuyCount] = useState(2);

    const {activateBrowserWallet, account } = useEthers();
    console.log(account);
    const etherBalance = useEtherBalance(account);
    const [walletInfo, setWalletInfo] = useState(mintData.mintNormal);
    
    const mintClass = {
        mintTitle: "m-20p mb-30p text-montserrat text-38p leading-44p font-bold text-white",
        minuse: "inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-l-full text-center hover:bg-gray-100",
        input: "inline-block bg-white w-50p h-30p cursor-pointer br-0 text-center text-444 align-top",
        plus: "inline-block bg-white w-30p h-30p cursor-pointer br-0 rounded-r-full text-center hover:bg-gray-100",
        mintBuyBtn: "block min-w-mintBtn p-5p px-10p rounded-50p text-22p font-bold text-white bg-Mint mt-35p",
    };
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
    const checkWalletIsConnected = () => {
        if ( !ethereum){
            setWalletInfo(mintData.notMetamasklink);
            window.history.back();
            window.location.href = "https://metamask.io/download/";
            return;
        }
        //setWalletInfo(mintData.metamasklink);
        activateBrowserWallet();
        //console.log(etherBalance && JSON.stringify(etherBalance));
    }
    
    useEffect(()=>{
        if (ethereum) {
            //var provider = new ethers.providers.Web3Provider(ethereum);
            
        }
    },[]);
    const isMetaMaskConnected = async () => {
        //const accounts = await provider.listAccounts();
        //return accounts.length > 0;
    }

    return (
        <div className="pl-50p text-left mt-80p">
            <h1 className={mintClass.mintTitle}>RICHYSHIB</h1>
            <p className="text-white text-12p mb-2p">Pick the amount of <span className="text-Mint">NFT's</span> you would like to mint.</p>
            <span className={mintClass.minuse} onClick={decreaseBycount}>-</span>
            <input className={mintClass.input} type="text" onChange={()=>{}} defaultValue={2} value={buycount} />
            <span className={mintClass.plus} onClick={increaseBycount}>+</span>
            <button className={mintClass.mintBuyBtn} onClick={checkWalletIsConnected}>MINT</button>
            { () => { 
                    return account ? <div>work</div> : <p className="text-12p text-white">{walletInfo}</p>;
                } 
            } 
        </div>
    );
}

export default MintBuy;