import React from "react";
import Button from "../UI/Button/Button";
import classes from "./FinishedQuiz.module.css";
import { Link } from "react-router-dom";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            props.results[quizItem.id] === "error"
              ? classes.minus
              : classes.plus,
            classes[props.results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>. &nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>

      <p>
        Right {successCount} / {props.quiz.length}
      </p>

      <div>
        <Button onClick={props.onRetry} type="primary">
          Repeat
        </Button>
        <Link to={"/"}>
          <Button type="success">Go to tests' list</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
