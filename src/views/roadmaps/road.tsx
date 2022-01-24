import Step1Img from "../../assets/images/roadmaps/step1.svg";
import Step2Img from "../../assets/images/roadmaps/step2.svg";
import Step3Img from "../../assets/images/roadmaps/step3.svg";
import Step4Img from "../../assets/images/roadmaps/step4.svg";
import Step5Img from "../../assets/images/roadmaps/step5.svg";
import Step6Img from "../../assets/images/roadmaps/step6.svg";

interface RoadMapType {
    img: string,
    title: string,
    content: string
}
const RoadStepImg = [Step1Img, Step2Img, Step3Img, Step4Img, Step5Img, Step6Img];
const Road = (props:any) => {
    const data = props.data;
    const num = props.num;
    const oStyle = props.opacity == true ? " opacity-100" : " opacity-10";
    const roadClass = {
        contain: "flex mb-40p items-center z-2",
        step: "flex min-w-stepMin1 py-16p items-center",
        stepImg: "relative border-black border inline-block max-w-full w-40p align-center",
        content: "flex p-24p justify-flex-start items-center border-2 border-white rounded-16p",
        imgDiv: "flex min-w-stepMin2 h-240p justify-center items-center rounded-12p",
        img:"max-w-full w-55% align-middle inline-block",
        textDiv: "flex ml-24p flex-col items-flex-start",
        title: "font-semibold text-Mint text-25p uppercase text-montserrat mt-8p mb-12p",
        description: "text-avenir mb-10p text-16p text-roadDetail",
    };
    return (
        <div className={roadClass.contain} key={num}>
            <div className={roadClass.step} key="1">
                <img className={roadClass.stepImg + oStyle} src={RoadStepImg[num]}/>
            </div>
            <div className={roadClass.content + oStyle} key="2">
                <div className={roadClass.imgDiv} key="1">
                    <img className={roadClass.img} src={data.img}/>
                </div>
                <div className={roadClass.textDiv} key="2">
                    <h1 className={roadClass.title}>{data.title}</h1>
                    <div className={roadClass.description}>{data.content}</div>
                </div>
            </div>
        </div>
    );
}

export default Road;