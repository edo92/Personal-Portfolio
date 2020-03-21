import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
