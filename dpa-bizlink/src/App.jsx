import React from "react";
import StoreProvider from "./store/StoreProvider";
import ConfigProviderWrapper from "./config/ConfigProviderWrapper";
import Toastify from "./components/Common/Toastify";
import TestPage from "./pages/TestPage";

const App = () => {
    return (
        <StoreProvider>
            <ConfigProviderWrapper>
                <Toastify />
                <TestPage />
            </ConfigProviderWrapper>
        </StoreProvider>
    );
};

export default App;
