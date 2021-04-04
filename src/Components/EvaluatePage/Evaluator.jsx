import React from 'react';

function Evaluator(props) {

    return (
        <div style={{padding: "3%"}}>
            <div style={{padding: "3%"}}>
                <h2 style={{
                    fontSize: "48px", 
                    marginBottom: "1%",
                    backgroundImage: "linear-gradient(blue, white)"
                }}>{props.title}</h2>
                <p> {props.description}</p>
            </div>
            <p 
                style={{
                    marginLeft: "20%",
                    marginRight: "20%",
                    marginTop: "5%",
                    marginBottom: "5%",
                    fontFamily: "helvetica",
                    fontSize: "24px"
                }}>
                {props.result}
            </p>
            <div style={{padding: "3%"}}>
                <p style={{fontFamily: "arial"}}>Here's some things you can do to improve:</p>
                    <div style={{padding: "3%" }}>
                    <p style={{marginTop: "1%", marginBottom: "1%", fontFamily: "arial"}}>{props.todo1}</p>
                    <p style={{marginTop: "1%", marginBottom: "1%", fontFamily: "arial"}}>{props.todo2}</p>
                    <p style={{marginTop: "1%", marginBottom: "1%", fontFamily: "arial"}}>{props.todo3}</p>
                </div>
            </div>
        </div>
    );
}

export default Evaluator;