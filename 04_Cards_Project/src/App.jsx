import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <button>
            Save <Bookmark size={12} />{" "}
          </button>
        </div>
        <div className="center">
          <div>
            <h3>
              Amazon <span>5 days ago</span>{" "}
            </h3>
            <h2>Senior UI/UX Designer</h2>
          </div>
          <div>
            <h4>Part Time</h4>
            <h4>Full Time</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
