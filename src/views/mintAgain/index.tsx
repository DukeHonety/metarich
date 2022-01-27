
import PageFooter from "../../components/footer";
import PageHeader from "../../components/header";
import Adavantage from "./advantage";
import MintAgainPane from "./mintAgainPane";

const MintAgain = () =>{
    const classAry = {
        contain: "block lg:w-960p p-20p m-0 mx-auto",
        title: "text-38p text-Mint text-montserrat font-bold text-center text-roboto mb-10p",
        description : "text-22p my-10p mb-20p text-white text-montserrat font-bold text-center text-montserrat" 
      }
    const Advantages = [{
            img: "",
            title: "❤️ HOLDER (1 RICHYSHIB)",
            content: ["Access to the holders chat", "Access to everything on the roadmap"]
        },
        {
            img: "",
            title: "🦈SHARK (3 RICHYSHIB)",
            content: ["Access to the holders chat", "Access to everything on the roadmap"," 1 entry for the exclusive Rolex giveaway"]
        },
        {
            img: "",
            title: "🐋 GOLDEN WHALE (10 RICHYSHIB)",
            content: ["Access to the holders chat", "Access to everything on the roadmap"," 1 entry for the exclusive Rolex giveaway", "Access to Mastermind with 7-9 figures entrepreneurs"]
        }
    ];
    return (
        <div>
            <PageHeader />
            <div className="mt-155p">
                <MintAgainPane />
                <h1 className={classAry.title}>HOLDERS ADVANTAGES</h1>
                <div className="flex justify-between px-100p">
                    {
                        Advantages.map((data, key)=>{
                            return <Adavantage key={key} num={key} info={data}/>;
                        })
                    }
                </div>
            </div>
            <PageFooter />
        </div>
    );
}

export default MintAgain;