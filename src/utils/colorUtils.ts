// Use a random hex color code from a preconfigured list.
export const generateColor = () => {
  const colors = [
    "#ff4141",
    "#ff6f30",
    "#ffa030",
    "#ffcc30",
    "#fffd30",
    "#ccff30",
    "#83ff30",
    "#30ff3f",
    "#30ff88",
    "#30ffd1",
    "#30eeff",
    "#30afff",
    "#6990ff",
    "#ab68ff",
    "#c936ff",
    "#f836ff",
    "#ff36bf",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}