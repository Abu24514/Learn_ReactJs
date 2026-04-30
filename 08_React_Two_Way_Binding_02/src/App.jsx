import { useState } from "react";
const cityLabel = { delhi: "Delhi", lucknow: "Lucknow", mumbai: "Mumbai" };

const App = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("lucknow");

  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="form-title">Two Way Binding</h1>

        <div className="field">
          <label className="field-label">Title</label>
          <input
            className="text-input"
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field-label">Status</label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
            Completed
          </label>
        </div>

        <div className="field">
          <label className="field-label">Gender</label>
          <div className="radio-group">
            <label className="radio-row">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className="radio-row">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>

        <div className="field">
          <label className="field-label">City</label>
          <select
            className="select-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="delhi">Delhi</option>
            <option value="lucknow">Lucknow</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
{/* ------------------------------------------------------ */}
        <div className="divider" />

        <p className="preview-label">Live State...</p>
        <div className="preview-grid">
          <div className="chip">
            <span className="chip-key">title</span>
            <span className="chip-val">{title || "—"}</span>
          </div>
          <div className="chip">
            <span className="chip-key">completed</span>
            <span className={`badge ${completed ? "badge-true" : "badge-false"}`}>
              {completed ? "true" : "false"}
            </span>
          </div>
          <div className="chip">
            <span className="chip-key">gender</span>
            <span className="chip-val">
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </span>
          </div>
          <div className="chip">
            <span className="chip-key">city</span>
            <span className="chip-val">{cityLabel[city]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;