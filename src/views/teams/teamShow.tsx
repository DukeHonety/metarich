const TeamShow = (props:any) =>{
    const team = props.info;
    const num = props.num;
    const img = props.img;
    const showClass={
        contain: " text-center w-375p z-10",
        img : "max-w-full align-middle block w-full",
        title : "mb-0 uppercase text-17p text-center text-white mt-20p text-montserrat",
        detail: "mb-10p text-14p text-Mint",
        link : "",
    };
    return (
        <div className={showClass.contain} key={num}>
            <img className={showClass.img} src={img}/>
            <div>
                <h3 className={showClass.title}>{team.title}</h3>
                <p className={showClass.detail}>{team.detail}</p>
            </div>
        </div>
    );
}

export default TeamShow;