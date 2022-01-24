import Abouts from "./abouts";
import Roadmaps from "./roadmaps/roadmaps";
import Rarities from "./traitRarity/rarities";
import Teams from "./teams/teams";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import MintPage from "./mintDiv/mintDiv";
import Howtoget from "./howtoget/howtoget";
const Richyshib = () =>{
    return (
        <>
            <div className="bg-black pt-100p">
                <PageHeader />
                <MintPage />
                <Abouts />
                <Roadmaps />
                <Rarities />
                <Teams />
                <Howtoget />
                <PageFooter />
            </div>
        </>
    );
}

export default Richyshib;