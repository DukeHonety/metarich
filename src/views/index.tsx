import Abouts from "./abouts";
import Roadmaps from "./roadmaps/roadmaps";
import Rarities from "./traitRarity/rarities";
import Teams from "./teams/teams";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import MintPage from "./mintDiv/mintDiv";
import Howtoget from "./howtoget/howtoget";
import PressAboutUs from "./pressAboutUs";
import AskQuestions from "./questions/questions";
import WaitForUs from "./waitingfor";
import WarnBeware from "./warnBeware";

const Richyshib = () =>{
    return (
        <>
            <div className="pt-155p">
                <PageHeader />
                <MintPage />
                <Abouts />
                <Roadmaps />
                <Rarities />
                <Teams />
                <Howtoget />
                <WarnBeware />
                <PressAboutUs />
                <AskQuestions />
                <WaitForUs />
                <PageFooter />
            </div>
        </>
    );
}

export default Richyshib;