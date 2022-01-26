
const Question = (props:any) =>{
    const info = props.info;
    const num = props.num;
    const classAry = {
        headDiv:"flex py-20p justify-between items-center text-20p font-semibold",
        title: "mr-10p text-white uppercase text-20p font-roboto",
        detail: "mb-0 py-14p font-montserrat text-18px font-normal text-999 text-white",
        btn: "bg-white max-w-full inline-block",
        contain: "px-40p cursor-pointer"
    }
    return (
        <div className={classAry.contain}>
            <a className={classAry.headDiv}>
                <div className={classAry.title}>{info.title}</div>
                <div>
                    <img className={classAry.btn} src="https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/6190a1f04e2d842f1a7d7bea_plus.svg" />
                </div>
            </a>
            <p className={classAry.detail}>{info.detail}</p>
            <div className="h-1 border-b-2 border-999"></div>
        </div>
    );
}

export default Question;