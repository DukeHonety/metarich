const RarityPerson = (props:any) => {
    const data = props.manData;
    const num = props.num;
    const personClass = {
        contain: "block border-solid border-2 border-white rounded-20p",
        imgDiv: "w-auto h-auto min-w-250p min-h-250p bg-white relative rounded-20p",
        img: "max-w-full inline-block align-middle rounded-t-20p",
        
        title: "my-0 text-white uppercase text-20p text-montserrat font-bold",
        rate: "mt-5p mb-0 text-rarityPersonRate font-medium uppercase text-montserrat text-16p",
    };
    return (
        <div className={personClass.contain} key={num}>
            <div className={personClass.imgDiv} key="0">
                <img className={personClass.img} src={data.image} />
            </div>
            <div className="py-10p" key="1">
                <h1 className={personClass.title}>{data.title}</h1>
                <h1 className={personClass.rate}>{data.rate}</h1>
            </div>
        </div>
    );
}

export default RarityPerson;