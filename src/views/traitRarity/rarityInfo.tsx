

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
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1761fcc90efb94999c05c_11.png",
            title: "CANDY",
            rate: "3%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1761fd1a68a057b6fbd9f_3.png",
            title: "DARK",
            rate: "2%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17621cadcf18d13c37330_5.png",
            title: "GALAXY",
            rate: "1%"
        },
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
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bb1a6fe6f77edfa824d_26.png",
            title: "HOODIE",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bca0d051b3371fec40a_8.png",
            title: "CHICAGO",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17ba1628de554197091a6_23.png",
            title: "HOODIE B",
            rate: "4.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bd129604d54db9c9015_1.png",
            title: "HOODIE R",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bb9cadcf17ec4c38986_5.png",
            title: "HOODIE P",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61be2baef8dafead0ca8848a_15.png",
            title: "RASTA",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17ba809cce5b4a22ec849_15.png",
            title: "FINALLY RICH",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bc42d9af0d0fe3f4e1f_14.png",
            title: "FCK RICH",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bb4b0730a313f1fef53_3.png",
            title: "GANG GANG",
            rate: "3.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bb295241b3ca2bbfe9d_9.png",
            title: "PRISON",
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
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bac6a7dd8c360129912_11.png",
            title: "PINK SUIT",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bbfcc90efd0be99e3ed_20.png",
            title: "BLACK FUR",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17be1b03b0f1a76e2980e_18.png",
            title: "G FUR",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bd8b0730a57bb1ff124_2.png",
            title: "PINK FUR",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17be1b03b0f1a76e2980e_18.png",
            title: "G FUR",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bcaa6fe6f492bfa8348_12.png",
            title: "LEATHER",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c17bc6e008042906d03464_16.png",
            title: "TURTLE NECT",
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
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fceb1765f56ac2f39a1_4.png",
            title: "3D",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fc60d051b5cd6ff2f1e_1.png",
            title: "BERSACE",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fa8828563014832e810_9.png",
            title: "ORBIT EYE",
            rate: "7%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fc3c80508051a8f64f2_6.png",
            title: "STONED",
            rate: "6.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fbb8ca11aff918aa2e3_5.png",
            title: "LASER",
            rate: "6%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fb2ff2755109cd51bc1_7.png",
            title: "THUG",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fb6e008042b59d0c563_11.png",
            title: "$ GLASSES",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fd2ea7f6c7307f907dd_12.png",
            title: "BTC GLASSES",
            rate: "4.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fbfa4d83f731c91961c_13.png",
            title: "CYCLOPE",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61be2c11d742df6c00983446_6.png",
            title: "WINK",
            rate: "3.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fbbb0730aa530206da4_14.png",
            title: "FAINTING",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fb76a7dd879a6130a2e_16.png",
            title: "PIRATE",
            rate: "2.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fd10d051b7bc4ff2f25_2.png",
            title: "BLACK",
            rate: "2%"
        },
    ],
    Hat: [
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c18fa91774e2863e259b3a_15.png",
            title: "NONE",
            rate: "28%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c195625189173e1421ef3e_3.png",
            title: "WHITE HAT",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19551d198bd788df9c0a6_5.png",
            title: "BLACK CAP",
            rate: "10%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19566f73f87484bfca4ca_2.png",
            title: "MAGICIAN",
            rate: "7.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1955fbc8a9d727ace2307_4.png",
            title: "ANGEL",
            rate: "6.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1954cb03b0f6967e3195c_11.png",
            title: "CESAR",
            rate: "6.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61be2c51b2f1c6e6aca97b15_2.png",
            title: "MEXICAN",
            rate: "6%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19551bc8a9deb15ce214c_1.png",
            title: "CAPTAIN",
            rate: "5.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19560df617d4a75fa1aa2_6.png",
            title: "SANGOKU",
            rate: "5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1955495393019562b22db_8.png",
            title: "LOCKS",
            rate: "4.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19564dcac3e24d3ccb1a5_9.png",
            title: "ARAB CAP",
            rate: "4.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1955b9539306ac92b22e7_10.png",
            title: "CROWN",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1955cfe9ca8c99dd06089_7.png",
            title: "GANG SCARF",
            rate: "3%"
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
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dd2d2f33d3bbab21ade_2.png",
            title: "D BONE",
            rate: "3.5%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dc72638a0193bdf4e19_7.png",
            title: "KNIFE",
            rate: "2%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c19dc7f5174eb1e945b3f0_6.png",
            title: "KNIFE",
            rate: "1%"
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
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a0321b91c1e7c1ca0580_7.png",
            title: "AWP",
            rate: "8%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a032e94735939e3464b3_4.png",
            title: "AK47",
            rate: "7%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a03bad35eb6c59903093_2.png",
            title: "ANGEL",
            rate: "4%"
        },
        {
            image: "https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61c1a0383626fe03c3c2d658_5.png",
            title: "DEMON",
            rate: "4%"
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