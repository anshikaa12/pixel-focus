import React, { useState } from "react";
import { Timer, renderTime } from "../../components/timer";
import { useTodo } from "../../contexts";

function Pomodoro() {
  const { todoState } = useTodo();
  const [play, setPlay] = useState(false);
  const [key, setKey] = useState(0);
  return (
    <div className="pomo-sec">
      <div className="timer-sec">
        <div className="timer-comp">
          <Timer setPlay={setPlay} play={play} key={key} />
        </div>
        <div className="timer-btn">
          <button className="btn btn-primary" onClick={() => setPlay(true)}>
            <i class="fas fa-play"></i>START
          </button>
          <button className="btn btn-primary" onClick={() => setPlay(false)}>
            <i class="fas fa-pause"></i>PAUSE
          </button>
        </div>
        <button
          className="btn btn-primary-outline"
          onClick={() => setKey((prevKey) => prevKey + 1)}
        >
          RESET
        </button>
      </div>
      <div className="task-sec">
        <h2 className="main-h2">{todoState.name}</h2>
        <p className="main-p">{todoState.desc}</p>
      </div>
    </div>
  );
}

export default Pomodoro;
