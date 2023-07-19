export default function Result({ setShowModal, result }) {
  return (
    <div className="w-screen h-screen fixed z-10 top-0 left-0 flex justify-center items-center">
      <div className="flex relative w-[30%] h-[40%] bottom-24 right-48">
        <div
          className="w-full h-full rounded-2xl bg-threeDs-cream text-threeDs-darkPinkShadow text-base p-5
            drop-shadow-[50px_50px_1px_rgba(238,105,88,0.4)] shadow-[inset_-20px_-20px_10px_rgba(251,202,157,0.9)]
           hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(238,105,88,0.6)] 
           duration-500 "
        >
          <div className="h-full w-full overflow-y-auto flex flex-col gap-5 items-center">
            {result.map((s, index) => (
              <div
                key={index}
                className=" flex flex-col p-3 w-[80%]
              rounded-2xl bg-threeDs-lightYellow
            drop-shadow-[5px_5px_1px_rgba(251,202,157,0.7)] shadow-[inset_-20px_-20px_10px_rgba(251,202,157,0.6)]
           hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(251,202,157,1)] 
           duration-500"
              >
                <p className="text-lg drop-shadow-[3px_3px_1px_rgba(250,209,173,1)]">
                  Team: {index + 1}
                </p>
                <div className="flex flex-wrap gap-5 justify-around m-5">
                  {s.map((h, i) => (
                    <div key={(i + i) * i}>
                      <p className="text-lg drop-shadow-[3px_3px_1px_rgba(250,209,173,1)]">
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute -bottom-2 -right-2 bg-threeDs-darkPink flex justify-center items-center
          rounded-xl  text-base p-4 h-15 w-20 
          drop-shadow-[50px_50px_2px_rgba(252,119,114,0.6)] shadow-[inset_-7px_-7px_5px_rgba(238,105,88,1)]
         hover:scale-[99%] hover:translate-x-[2px] hover:translate-y-[2px] hover:drop-shadow-[2px_2px_1px_rgba(252,119,114,0.5)] 
         duration-300"
          onClick={() => setShowModal(false)}
        >
          <p className="drop-shadow-[3px_3px_1px_rgba(238,105,88,0.90)]">
            delete
          </p>
        </button>
      </div>
    </div>
  );
}
