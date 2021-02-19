import React, { useState, useEffect } from "react";
import Select from "react-select";

import useVisualMode from "hooks/useVisualMode";

import sage from "./images/cocktailsage.gif";
import dev from "./images/devtips.gif";
import sched from "./images/scheduler.gif";
import tweet from "./images/tweeter.gif";
import tiny from "./images/tinyapp.gif";

import "./index.scss";

export default function ProjectSelector(props) {

  const CSAGE = "CSAGE";
  const DEVTIPS = "DEVTIPS";
  const SCHEDULER = "SCHEDULER";
  const TWEETER = "TWEETER";
  const TINYAPP = "TINYAPP";

  const options = [
    { value: CSAGE, label: "CocktailSage" },
    { value: DEVTIPS, label: "DevTips" },
    { value: SCHEDULER, label: "Scheduler" },
    { value: TWEETER, label: "Tweeter" },
    { value: TINYAPP, label: "TinyApp" },
  ];

  const customStyle = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
      backgroundColor: state.isSelected ? '#fdc029' : 'white'
    }),
    control: (provided) => ({
      ...provided
    })
  };

  const [project, setProject] = useState(CSAGE);

  const { mode, transition } = useVisualMode();

  useEffect(() => {
    transition(project);
  }, [project]);

  return (
    <>
    <div class="portfolio--radio">
      <h1>PROJECTS:</h1>
      <p>View a preview or click the preview to see more!</p>
      {options && (
          <Select
            styles={customStyle}
            className="portfolio--select"
            options={options}
            defaultValue={{ value: CSAGE, label: "CocktailSage" }}
            onChange={(e) => setProject(e.value)}
          />
        )}      <div
        class="portfolio--radio-container"
        value={project}
        onChange={e => setProject(e.target.value)}
      >
        <input id="cocktailsage" name="project" type="radio" value="CSAGE" checked={project === CSAGE} />
        <label for="cocktailsage">CocktailSage</label>
        <input id="devtips" name="project" type="radio" value="DEVTIPS" checked={project === DEVTIPS} />
        <label for="devtips">DevTips</label>
        <input id="scheduler" name="project" type="radio" value="SCHEDULER" checked={project === SCHEDULER} />
        <label for="scheduler">Scheduler</label>
        <input id="tweeter" name="project" type="radio" value="TWEETER" checked={project === TWEETER} />
        <label for="tweeter">Tweeter</label>
        <input id="tinyapp" name="project" type="radio" value="TINYAPP" checked={project === TINYAPP} />
        <label for="tinyapp">Tinyapp</label>
      </div>
    </div>
    {mode === CSAGE && (
      <img className="img" onClick={props.onCSage} id="csage" src={sage} alt="cocktail sage" />
    )}
    {mode === DEVTIPS && (
      <img className="img" onClick={props.onDevtips} id="devtips" src={dev} alt="devtips" />
    )}
    {mode === SCHEDULER && (
      <img className="img" onClick={props.onSched} id="sched" src={sched} alt="scheduler" />
    )}
    {mode === TWEETER && (
      <img className="img" onClick={props.onTweet} id="tweets" src={tweet} alt="tweeter" />
    )}
    {mode === TINYAPP && (
      <img className="img" onClick={props.onTiny} id="tiny" src={tiny} alt="tinyapp" />
    )}
    </>
  )
}