import React, { useEffect } from "react";
import Search from "./search/container/Search";
import "antd/dist/antd.css";
import { Route } from "react-router-dom";
import User from "./user/container/User";

export default function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl.removeChild(loadingEl);
  }, []);

  return (
    <>
      <Route exact path="/" component={Search}></Route>
      <Route path="/user/:name" component={User}></Route>
    </>
  );
}
