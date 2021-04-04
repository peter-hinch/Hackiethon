import React from 'react';

function Evaluator(props) {

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.result}</p>
            <p>To Do:</p>
            <p> - Point 1</p>
            <p> - Point 2</p>
            <p> - Point 3</p>
        </div>
    );
}

export default Evaluator;