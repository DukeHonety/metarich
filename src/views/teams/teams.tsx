// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import TeamShow from "./teamShow";
import configInfo from "../../config.json";
import TeamImg1 from "../../assets/images/teams/KAIZ.jpg";
import TeamImg2 from "../../assets/images/teams/BLVCK.jpeg";
import TeamImg3 from "../../assets/images/teams/MAVERICK.jpg";
import TeamImg4 from "../../assets/images/teams/SERGIO.jpg";
import TeamImg5 from "../../assets/images/teams/Yudabento.jpg";

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
    const teamImg = [TeamImg1,TeamImg2,TeamImg3,TeamImg4,TeamImg5];
    const teamString = configInfo.team.teamString;
    const teams = configInfo.team.teams;
    // console.log(teams.map((team, key) => {
    //     return <TeamShow info={team} key={key} num={key}/>;
    // }));
    return (
        <div className={teamClass.contain} id="TeamId">
            <h2 className={teamClass.title}>{teamString.title}</h2>
            <p className={teamClass.description}>{teamString.description}</p>
            <div className="w-375p mx-auto">
                <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showIndicators={false} showThumbs={false}>
                    {
                    teams.map( (team:any, key:number) => {
                        return <TeamShow info={team} img={teamImg[key]} key={key} num={key}/>;
                    })
                    }
                </Carousel>
            </div>
        </div>
    );
}
export default Teams; 