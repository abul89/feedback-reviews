import ComponentLevel from "./Components/ComponentLevel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { useState } from "react";
// import Feedbackdatas from "./Components/Feedbackdatas";
import ConnectingProps from "./Components/ConnectingProps";
import Title from "./Components/Title";
import FeedbackStats from "./shared/FeedbackStats";
import Feedbackform from "./Components/Feedbackform";
import About from "./Components/About";
// import { v4 as uuidv4 } from "uuid";
import Header from "./Components/Header";
import Post from "./Components/Post";
import { FeedbackProvider } from "./Context/FeebackContext";
import EditableContent from "./check-delete/EditableContent";

//   deletion is dummy   import DeleteFunction from './check-delete/DeleteFunction';

function App() {
  return (
    <div>
      <FeedbackProvider>
        <Router>
          <Routes>
            <Route path="/ComponoentLevel" element={<ComponentLevel />} />
          </Routes>

          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  <Title />
                  <Feedbackform />

                  <FeedbackStats />
                  <ConnectingProps
                  // itemsfromfeedback={feedback}
                  // passing dlt function through props
                  // Deletation={deleteFeedback}
                  />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route
              path="/Post"
              //  Params
              // path="/Post/:id/:name"

              element={
                <>
                  <Post />
                  <EditableContent />
                </>
              }
            />
          </Routes>
        </Router>
      </FeedbackProvider>

      {/* <DeleteFunction/>   deletion is dummy */}
    </div>
  );
}

export default App;
