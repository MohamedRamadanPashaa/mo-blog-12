"use client";

import { useReducer } from "react";
import Button from "../UiElements/Button";

const initialState = {
  score: 0,
  lives: 3,
  level: 1,
};

const reducer = (state, action) => {
  const { type, amount } = action;
  switch (type) {
    case "ADD_SCORE":
      return { ...state, score: state.score + amount };
    case "LOSE_SCORE":
      return { ...state, score: Math.max(0, state.score - amount) };

    default:
      return state;
  }
};

const About = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addScore = () => dispatch({ type: "ADD_SCORE", amount: 10 });
  const loseScore = () => dispatch({ type: "LOSE_SCORE", amount: 10 });

  return (
    <div>
      <h2>About</h2>
      <p>
        Score: {state.score} Lives: {state.lives} Level: {state.level}
      </p>

      <section>
        <Button onClick={addScore}>Score +</Button>
        <Button onClick={loseScore} danger>
          Score -
        </Button>
      </section>
    </div>
  );
};

export default About;
