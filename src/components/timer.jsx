import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTodo } from "../contexts";

const children = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timevalue">
      {hours}:{minutes}:{seconds}
    </div>
  );
};

const Timer = ({ play, setPlay, key }) => {
  const { todoState } = useTodo();

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={play}
      duration={Number(todoState.timer)}
      colors="var(--primary-color)"
      onComplete={() => ({ shouldRepeat: false })}
    >
      {children}
    </CountdownCircleTimer>
  );
};
export { Timer };
