function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
    fontSize:{
      ...range(5, 500,5).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f}px`}), {}),
    },
    spacing:{
      ...range(5, 500.5).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f}px`}), {}),
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
    }
  },
  plugins: [],
}
