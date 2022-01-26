

const RarityTypes = () =>{
    return (
        <></>
    );
}

const TypeRairity = ["Fur", "Background", "Clothes", "Eyes", "Hat", "Necklace", "Ear", "Mouth", "Backpack"];
export const GetTypes = () =>{
    return TypeRairity;
};

const RarityData:any = {
    Fur: [{
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1787bdf617d02b8f9733c_2.png",
            title: "CLASSIC",
            rate: "40%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17881628de522867089ca_7.png",
            title: "SILVER",
            rate: "15%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1787bd1a68a5cbd6fcc63_6.png",
            title: "BLACK",
            rate: "15%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17885e48c2e5fe14e2520_5.png",
            title: "RADIO",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1788cb1765f48a82eb5da_1.png",
            title: "CHEETAH",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c178870870e938850bf1ce_4.png",
            title: "GOLD",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c2351f14f751a9a7e59756_1.png",
            title: "DIAMOND",
            rate: "2%"
        },
    ],
    Background: [{
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18d074048f31dc1615b19_none.png",
            title: "NONE",
            rate: "20%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61bef6f7981c8f55551c1eee_3.png",
            title: "GREY",
            rate: "13%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17613c8050850d58ed0c3_12.png",
            title: "BLUE",
            rate: "11%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61bef6f593b7b0fe8a504ce4_4.png",
            title: "BLACK",
            rate: "9%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61bef6f0fa16264bc2ce3a6a_7.png",
            title: "RED",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61bef6f1798ca6210671a529_8.png",
            title: "ORANGE",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61bef6f75662f750ac8e5187_6.png",
            title: "YELLOW",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c176231c81a2b3456eb7fe_4.png",
            title: "TURQUOISE",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61bef6fa8bfa11788ebb3f6e_2.png",
            title: "SILVER",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61bef6fd65d458a50c69755d_5.png",
            title: "GOLD",
            rate: "4%"
        }
    ],
    Clothes: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17b9cd198bd952df93f99_21.png",
            title: "SHIRT W",
            rate: "6%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bbeada33f5885dde996_10.png",
            title: "SHIRT B",
            rate: "6%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bbbbc8a9d0296cd7454_25.png",
            title: "SHIRT P",
            rate: "6%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17ba40e790c35a85db9d3_19.png",
            title: "JORDAN",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17b9cdf5863963418a64b_24.png",
            title: "DHL",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bca0d051b3371fec40a_8.png",
            title: "CHICAGO",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17ba809cce5b4a22ec849_15.png",
            title: "FINALLY RICH",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bb4b0730a313f1fef53_3.png",
            title: "GANG GANG",
            rate: "3.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bdfe008048992d03481_22.png",
            title: "HOLY 1",
            rate: "3.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bd90a8de56cfb8ae404_6.png",
            title: "HOLY 2",
            rate: "3.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bab95241be991bbfe97_13.png",
            title: "HOLY 3",
            rate: "3.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17be1b03b0f1a76e2980e_18.png",
            title: "G FUR",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17be7d03553040762a2ce_7.png",
            title: "HAWAIAN",
            rate: "2%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17ba7fe9ca8af2ccff5bf_17.png",
            title: "JACKET",
            rate: "2%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bd0828563370732789f_4.png",
            title: "SUIT AND TIE",
            rate: "1%"
        }
    ],
    Eyes: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fbecfa7d7734f28c09b_8.png",
            title: "CLASSIC",
            rate: "12%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fca9b47cd097dc3c62f_10.png",
            title: "DESK",
            rate: "9%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fb3518917c6be21c59f_3.png",
            title: "PATCH",
            rate: "9%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fc60d051b5cd6ff2f1e_1.png",
            title: "BERSACE",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fbfa4d83f731c91961c_13.png",
            title: "CYCLOPE",
            rate: "4%"
        },
    ],
    Hat: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c195625189173e1421ef3e_3.png",
            title: "WHITE HAT",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19566f73f87484bfca4ca_2.png",
            title: "MAGICIAN",
            rate: "7.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1954cb03b0f6967e3195c_11.png",
            title: "CESAR",
            rate: "6.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19564dcac3e24d3ccb1a5_9.png",
            title: "ARAB CAP",
            rate: "4.5%"
        },
    ],
    Necklace: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fa91774e2863e259b3a_15.png",
            title: "NONE",
            rate: "25%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c198df4a8636646f294879_4.png",
            title: "DIAMOND",
            rate: "13%"
        },{
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c198cd151e6a320347e66e_5.png",
            title: "G CROSS",
            rate: "2.5%"
        },{
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c198dfa3249597d7a46a7d_6.png",
            title: "D SKULL",
            rate: "0.5%"
        },
    ],
    Ear: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fa91774e2863e259b3a_15.png",
            title: "NONE",
            rate: "30%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19cac1b91c1073bc9fc1a_2.png",
            title: "G EARRING",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19ca8be030891c9ad13b3_4.png",
            title: "G PIERCING",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19ca5ef491d38c1f6126b_6.png",
            title: "D PIERCING",
            rate: "7%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19ca4e2f3800e27bd854e_7.png",
            title: "D EARRING",
            rate: "6%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19ca7889e5f587911921f_5.png",
            title: "AIRPODS",
            rate: "5%"
        }
    ],
    Mouth: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fa91774e2863e259b3a_15.png",
            title: "CLASSIC",
            rate: "20%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19db8210a4f630febc91c_9.png",
            title: "SAD",
            rate: "20%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dbb210a4f3893ebc91f_1.png",
            title: "HAPPY",
            rate: "15%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dc49cebccb166ed43d8_8.png",
            title: "SMILE",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dc2c7568a157133ea91_11.png",
            title: "SILVER",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dbf30c5afce5e774ab2_10.png",
            title: "G BONE",
            rate: "5%"
        },
    ],
    Backpack: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fa91774e2863e259b3a_15.png",
            title: "NONE",
            rate: "40%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dbf30c5afce5e774ab2_10.png",
            title: "SWORD",
            rate: "20%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a03b210a4f60a7ebd706_1.png",
            title: "DOUBLE",
            rate: "12%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a02d3e3b9505fa41c428_8.png",
            title: "FALCON",
            rate: "9%"
        },

        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a032e94735939e3464b3_4.png",
            title: "AK47",
            rate: "7%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a03ef5f337544b664012_6.png",
            title: "DRAGON",
            rate: "3%"
        },
    ],
};

export const GetTypeData = (type: string) =>{
    let index = 0;
    for(let key in RarityData)
    {
        if ( key === type )
            return RarityData[key];
    }
    return RarityData;
};

export default RarityTypes;