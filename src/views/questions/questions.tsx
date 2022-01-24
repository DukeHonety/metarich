import Question from "./questionDiv";
import configData from '../../config.json';
const AskQuestions = () =>{
    const questions = configData.questions;
    const quesClass ={
        contain: "py-40p px-140p border border-black",
        title: "mb-20p text-Mint text-36p text-center mt-20p font-montserrat font-bold",
    }
    return (
        <div className={quesClass.contain}>
            <h1 className={quesClass.title}>FREQUENTLY ASKED QUESTIONS</h1>
            <div className="px-auto">
            {
                questions.map( (ques:any, key:number)=>{
                    return <Question key={key} num={key} info={ques}/>
                })
            }
            </div>
        </div>
    );
}

export default AskQuestions;