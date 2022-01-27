
const Adavantage = (props:any) =>{
    const data = props.info;
    const num = props.num;
    const classAry = {
        title: "text-white text-18p text-center",
        detail: "text-white text-13p text-center px-0"
    };
    return (
        <div key={num}>
            <h1 className={classAry.title}>{data.title}</h1>
            {
                data.content.map((conent:any, key:any)=>{
                    return <p className={classAry.detail} key={key}>{conent}</p>;
                })
            }
        </div>
    );
}

export default Adavantage;