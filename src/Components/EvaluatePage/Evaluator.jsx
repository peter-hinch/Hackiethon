import React from 'react';
import './EvaluatorStyle.css';

function Evaluator(props) {

    return (
        <div id="main_evaluate_body">
            <div id="eval_container1">
                <h2 id="eval_title">{props.title}</h2>
                <p id="eval_desc">{props.description}</p>
            </div>
            <p id="eval_result">
                {props.result}
            </p>
            <div id="todo_container">
                <h3 id="todo_title">Here's some things you can do to improve:</h3>
                    <div>
                    <p className="todo">{props.todo1}</p>
                    <p className="todo">{props.todo2}</p>
                    <p className="todo">{props.todo3}</p>
                </div>
            </div>
        </div>
    );
}

export default Evaluator;