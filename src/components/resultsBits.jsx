export default function ResultsBits({ setShowModal, result }) {
  return (
    <div className=" absolute w-full h-[600vh] flex flex-col p-4 gap-2 bg-bits-divBg">
      <div className="flex justify-between">
        <h3>Result</h3>
        <button className="" onClick={() => setShowModal(false)}>
          <p className="">back</p>
        </button>
      </div>

      <div className="w-full flex flex-col gap-2 h-full overflow-y-auto px-4">
        {result.map((s, index) => (
          <div key={index}>
            <p className="">Team: {index + 1}</p>
            <div className="border-2 border-bits-border h-28 px-4 overflow-y-auto gap-2 flex flex-wrap">
              {s.map((h, i) => (
                <div key={(i + i) * i}>
                  <p className="">{h}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
