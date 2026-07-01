import React, { useContext } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

import { Context } from "./context/context";

const App = () => {

    const { theme } = useContext(Context);

    return (
        <div className={`app ${theme}`}>
            <Sidebar />
            <Main />
        </div>
    );
};

export default App;