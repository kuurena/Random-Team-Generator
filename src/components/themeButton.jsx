export default function ThemeButton({ setTheme, theme }) {
  return (
    <>
      {theme == "8bit" ? (
        <div className="absolute top-5 right-5 font-bits2 z-10">
          <button className="bg-bits-deepBlue border-2 border-bits-border border-r-0 aspect-square p-2">
            8Bit
          </button>
          <button
            className="border-2 border-bits-border border-l-0 aspect-square p-2 bg-bits-fillDullBlue hover:bg-bits-buttonGreen"
            onClick={() => setTheme("3D")}
          >
            3Ds.
          </button>
        </div>
      ) : (
        <div className="absolute top-5 right-5 font-bits2 z-10">
          <button
            className="p-2 bg-threeDs-darkPink rounded-xl
            drop-shadow-[5px_5px_2px_rgba(252,119,114,0.6)] shadow-[inset_-7px_-7px_5px_rgba(238,105,88,1)]
         hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(252,119,114,0.5)] 
         duration-300"
            onClick={() => setTheme("8bit")}
          >
            8Bit
          </button>
          <button
            className="p-2 bg-threeDs-darkYellowShadow rounded-xl  translate-y-[2px]
            drop-shadow-[2px_2px_1px_rgba(252,119,114,0.5)]  shadow-[inset_-7px_-7px_5px_rgba(213,44,39,0.6)]
         hover:scale-[99%] duration-300"
          >
            3Ds.
          </button>
        </div>
      )}
    </>
  );
}
