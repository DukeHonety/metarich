import Abouts from "./abouts";
import Roadmaps from "./roadmaps/roadmaps";
import Rarities from "./rarities";
import Teams from "./teams";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import MintPage from "./mintDiv/mintDiv";

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
                <PageFooter />
            </div>
        </>
    );
}

export default Richyshib;