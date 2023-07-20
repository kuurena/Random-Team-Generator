export default function AddFixedTeamBits({ forms, setForms }) {
  const deleteForm = (index) => {
    const delForm = [...forms];
    delForm.splice(index, 1);
    setForms(delForm);
  };

  const handleChange = (event, index) => {
    const newForms = [...forms];
    newForms[index].text = event.target.value;
    setForms(newForms);
  };

  return (
    <>
      {forms.map((form, index) => (
        <div key={index} className="w-[80%] min-h-[35%] h-[35%] flex flex-col">
          <div className="flex justify-between">
            <h3>GROUP {index + 1}:</h3>
            <button className="" onClick={() => deleteForm(index)}>
              <p className="">delete</p>
            </button>
          </div>

          <textarea
            className="resize-none focus:outline-none focus:ring-2 focus:ring-bits-border 
            bg-transparent w-full h-full border-2 border-bits-border text-lg px-2"
            placeholder="Fixed Group"
            value={form.text || ""}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
    </>
  );
}
