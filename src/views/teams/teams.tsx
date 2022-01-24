import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamShow from "./teamShow";
import configInfo from "../../config.json";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Teams = () =>{
    const teamClass={
        contain: "",
        title: "uppercase my-5p text-36p text-Mint text-montserrat font-bold text-center text-montserrat",
        description: "px-220p text-center text-avenir mb-10p text-18p text-roadDetail",
    };
    const teamString = configInfo.team.teamString;
    const teams = configInfo.team.teams;
    // console.log(teams.map((team, key) => {
    //     return <TeamShow info={team} key={key} num={key}/>;
    // }));
    return (
        <div className={teamClass.contain} id="team">
            <h2 className={teamClass.title}>{teamString.title}</h2>
            <p className={teamClass.description}>{teamString.description}</p>
            <div>
                <Carousel responsive={responsive} autoPlaySpeed={1000} autoPlay infinite>
                    {
                    teams.map( (team:any, key:number) => {
                        return <TeamShow info={team} key={key} num={key}/>;
                    })
                    }
                </Carousel>
            </div>
        </div>
    );
}
export default Teams; 