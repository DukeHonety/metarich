
const Getway = (props:any) => {
    const info = props.info;
    const num = props.num;
    const wayClass = {
        contain: "w-3/10 p-20p pt-0 border border-solid border-getWay rounded-20p bg-roadStep text-center",
        title: "mb-0 text-white text-17p text-center mt-20p font-bold",
        imgDiv: "flex justify-center items-center -mt-35p",
        img: "w-100p h-100p border border-solid border-getWay",
        detail: "my-20p text-white text-center text-roboto text-14p",
        btn: "font-bold text-white cursor-pointer bg-Mint text-14p rounded-3p px-15p py-9p"
    };
    return (
        <div className={wayClass.contain}>
            <div className={wayClass.imgDiv}>
                <img src={info.img} className={wayClass.img}/>
            </div>
            <h1 className={wayClass.title}>{info.title}</h1>
            <p className={wayClass.detail}>{info.detail}</p>
            <a className={wayClass.btn} href={info.btnLink}>{info.btnName}</a>
        </div>
    );

}

export default Getway;