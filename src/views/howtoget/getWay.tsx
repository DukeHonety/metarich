
const Getway = (props:any) => {
    const info = props.info;
    const num = props.num;
    const wayClass = {
        contain: "w-1/3 p-20p pt-0 border border-solid border-getWay rounded-20p bg-roadStep text-center",
        title: "mb-0 text-white text-17p text-center",
        imgDiv: "flex justify-center items-center",
        img: "w-full h-full border border-solid border-getWay",
        detail: "",
        btn: ""
    };
    return (
        <div className={wayClass.contain}>
            <div>
                
            </div>
            <h1 className={wayClass.title}>{info.title}</h1>
            <p className={wayClass.detail}>{info.detail}</p>
            <a className={wayClass.btn} href={info.btnLink}>{info.btnName}</a>
        </div>
    );

}

export default Getway;