const MintButtonCom = (props:any) =>{
    const btnStyle = "inline-block w-250p p-5p px-10p rounded-50p text-22p font-bold text-white bg-Mint mt-35p";
    return (
        <button className={btnStyle}>{props.name}</button>
    );
}

export default MintButtonCom;