import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/layout/navbar/Navbar";
import ContentList from "./components/layout/content_list/ContentList";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Layout>
          <ContentList />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
