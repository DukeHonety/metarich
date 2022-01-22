function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
    fontSize:{
      ...range(5, 140).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f}px`}), {}),
    },
    spacing:{
      ...range(5, 140).reduce((merged, f) => ({ ...merged, [`${f}p`]: `${f}px`}), {}),
    },
  },
  plugins: [],
}
