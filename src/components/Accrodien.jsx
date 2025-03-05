import { useState } from "react";

export default function Accordian() {
  const data = [
    {
      id: "1",
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id: "2",
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id: "3",
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id: "4",
      question:
        "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-5 bg-gray-100 p-4">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="px-5 py-2 bg-[#614101] text-white font-bold text-lg rounded-md hover:bg-[#4a2f00] transition"
      >
        {enableMultiSelection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="mb-3 bg-[#614101] rounded-md overflow-hidden"
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex justify-between items-center cursor-pointer px-4 py-3 text-white text-lg font-semibold hover:bg-[#4a2f00] transition"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="px-4 py-2 text-white bg-[#4a2f00]">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="px-4 py-2 text-white bg-[#4a2f00]">
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No data found!</div>
        )}
      </div>
    </div>
  );
}
