import Abouts from "./abouts";
import Roadmaps from "./roadmaps";
import Rarities from "./rarities";
import Teams from "./teams";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";

const Richyshib = () =>{
    return (
        <>
            <div className="bg-black">
                <PageHeader />
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