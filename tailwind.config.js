function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {    
      colors:{
        "Mint":"#0082f3",
        '444' : "#444444",
        "roadDetail" : "hsla(0, 0%, 100%, 0.65)",
        "roadStep": "hsla(0, 0%, 100%, 0.15)",
        "rarityMenuDisable": "#b6b6b6",
        "rarityMenuLine": "#8f8e8e",
        "rarityPersonRate": "#a3a3a3",
        "getWay" : "#585858",
      },
    },
    fontFamily:{
      roboto:"'Roboto', sans-serif",
      montserrat: "Montserrat, sans-serif",
      avenir: "Avenirnextltpro, sans-serif",
    },
    fontSize:{
      ...range(5, 50,1).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f}px`}), {}),
    },
    lineHeight: {
      '44p': '44px',
    },
    spacing:{
      ...range(5, 500, 1).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f}px`}), {}),
      '960p': '960px',
      '2p' : '2px',
      '55%' : '55%',
      '1/5': "10%",
    },
    backgroundImage:{
      'instagram': 'url("https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/6190a1f04e2d8433707d7be9_instagram.svg"), linear-gradient(180deg, #fff, #fff)',
      'twitter': 'url("https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/6190a1f04e2d84f7727d7bed_twitter%20(1).svg").svg), -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff))',
      'discord': 'url("https://uploads-ssl.webflow.com/6190a1f04e2d84fef77d7bdd/61d84f5f4fa41a1dde199625_Discord-Logo-Color.svg"), linear-gradient(180deg, #fff, #fff)',
    },
    backgroundPosition:{
      'linkBackPos': '50% 50%, 0px 0px',
    },
    backgroundSize:{
      '20pauto':'20px,auto',
    },
    maxWidth:{
      mintDiv: "960px",
      roadMaxDiv: "960px",
      '4/5': "80%",
    },
    minWidth:{
      mintBtn: "400px",
      stepMin1: "120px",
      stepMin2: "240px",
      "250p": "250px",
    },
    borderRadius:{
      full: "100%",
      '16p': "16px",
      '20p' : '20px',
      '50p' : '50px',
    }
  },
  plugins: [],
}
