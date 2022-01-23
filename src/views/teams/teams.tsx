import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getTeams } from "./teamInfo";
import TeamShow from "./teamShow";
const Teams = () =>{
    const teamClass={
        contain: "",
        title: "uppercase my-5p text-36p text-Mint text-montserrat font-bold text-center text-montserrat",
        description: "px-220p text-center text-avenir mb-10p text-18p text-roadDetail",
    };
    const teamString={
        title: "OUR TEAM",
        description: "We are committed to delivering a cutting-edge experience and making this project a success. Our team is formed by the investors specialized in marketing , expert blockchain and extremely talented artist as well as all community managers.",
    }
    const teams = getTeams();
    console.log(teams.map((team, key) => {
        return <TeamShow info={team} key={key} num={key}/>;
    }));
    return (
        <div className={teamClass.contain} id="team">
            <h2 className={teamClass.title}>{teamString.title}</h2>
            <p className={teamClass.description}>{teamString.description}</p>
            <div>
                <Carousel>
                    {
                    teams.map((team, key) => {
                        return <TeamShow info={team} key={key} num={key}/>;
                    })
                    }
                </Carousel>
            </div>
        </div>
    );
}
export default Teams; 