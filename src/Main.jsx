import React, { Component } from "react";
import HomeComponent from "./component/home/HomeComponent";
import MyPortfolioComponent from "./component/myportfolio/MyPortfolioComponent";
import { robots } from "./component/widget/DataDummy";
import "./Main.css";
import { motion } from "framer-motion";

class Main extends Component {
  render() {
    return (
      <motion.div className="wrapper">
        <HomeComponent id="home" />
        <MyPortfolioComponent id="android" title="Android Project" beforeId="#home" nextId="#game" nextTitle="Game Project" listItem={robots} />
        <MyPortfolioComponent id="game" title="Game Project" beforeId="#android" nextId="#web" nextTitle="Web Project" listItem={robots} />
        <MyPortfolioComponent id="web" title="Web Project" beforeId="#game" nextId="#uiux" nextTitle="UI/UX Project" listItem={robots} />
        <MyPortfolioComponent id="uiux" title="UI/UX Project" beforeId="#web" nextId="#sertifikat" nextTitle="My Sertifikat" listItem={robots} />
        <MyPortfolioComponent id="sertifikat" title="My Sertifikat" beforeId="#uiux" listItem={robots} />
      </motion.div>
    );
  }
}

export default Main;
