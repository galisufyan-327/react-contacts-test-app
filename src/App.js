import React from "react";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import MainScreen from "./components/MainScreen/MainScreen";
import rootReducer from "./reducers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalA from "./pages/ModalA";
import ModalB from "./pages/ModalB";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/modal-a" element={<ModalA />} />
          <Route path="/modal-b" element={<ModalB />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
