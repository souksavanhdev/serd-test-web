import { useState } from "react";
import { ConfigProvider } from 'antd';
import "./App.css";
import Footer from "./components/Footer";
import Router from "./route/Router";

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Noto Sans Lao"
        },
        components: {
          Radio: {
            radioSize: 25
          },
          Modal: {
          },
        },
      }}>
      <Router />
    </ConfigProvider >
  );
}

export default App;
