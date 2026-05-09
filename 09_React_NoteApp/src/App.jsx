import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log(title , details);
    if (!title.trim() || !details.trim()) {
      alert("Please fill input field");
    } else {
      const copyTask = [...task];
      copyTask.push({ title, details });
      setTask(copyTask);
      setDetails("");
      setTitle("");
    }
  };
  const DeleteHandler = (id) => {
    // console.log(id);
    const copyTask = [...task];
    copyTask.splice(id, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 md:px-12">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Notes App</h1>
        <p className="text-gray-400 mt-2">
          Create and manage your daily notes easily.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <div className="lg:w-[35%] w-full">
          <form
            onSubmit={(evt) => SubmitHandler(evt)}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col gap-5 shadow-lg"
          >
            <div>
              <h2 className="text-2xl font-bold uppercase">Add Notes</h2>
              <p className="text-gray-400 text-sm mt-1">
                Write something important...
              </p>
            </div>

            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter title..."
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-white transition"
            />

            <textarea
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              placeholder="Write your note..."
              rows="6"
              className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none resize-none focus:border-white transition"
            ></textarea>

            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 active:scale-95 transition cursor-pointer"
            >
              Add Note
            </button>
          </form>
        </div>

        {/* Notes Section */}
        <div className="flex-1">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Card 1 */}
            {task.map((elem, id) => {
              return (
                <div
                  key={id}
                  className="bg-white text-black rounded-3xl p-5 flex flex-col justify-between shadow-lg min-h-55"
                >
                  <div>
                    <h2 className="text-xl font-bold">{elem.title}</h2>
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                      {elem.details}
                    </p>
                  </div>
                  <button
                    onClick={() => DeleteHandler(id)}
                    className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-medium active:scale-95 transition cursor-pointer p-3"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
