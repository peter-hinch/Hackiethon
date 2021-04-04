import React, { Component } from 'react';
import Evaluator from '../Components/EvaluatePage/Evaluator';
import {getStrings} from '../Components/EvaluatePage/resultStrings';

class EvaluatePage extends Component {
    
    state = {
        strings: getStrings(),

        satRes: 20,
        strRes: 60,
        phyRes: 100,

        autRes: "yes",
        conRes: "sometimes",
        grwRes: "no",

        // oneThingToChange: "placeholder",
    };

    callResultByInt(index, variable) {
        var temp = index * 5;

        if(variable > 67)
            return temp + 2;
        else if (variable > 33)
            return temp + 3;
        else
            return temp + 4;
    }

    callResultByString(index, variable) {
        var temp = index * 5;

        if(variable === "yes")
            return temp + 2;
        else if (variable === "sometimes")
            return temp + 3;
        else
            return temp + 4;
    }

    callTitle(index)
    {
        return index * 5;
    }

    callDescription(index)
    {
        return index * 5 + 1;
    }

    render () {

        return (
            <React.Fragment>
                <div>
                    <Evaluator
                        title={this.state.strings[this.callTitle(0)]}
                        description={this.state.strings[this.callDescription(0)]}
                        result={this.state.strings[this.callResultByInt(0, this.state.satRes)]}
                    />
                    <Evaluator 
                        title={this.state.strings[this.callTitle(1)]}
                        description={this.state.strings[this.callDescription(1)]}
                        result={this.state.strings[this.callResultByInt(1, this.state.strRes)]}
                    />
                    <Evaluator 
                        title={this.state.strings[this.callTitle(2)]}
                        description={this.state.strings[this.callDescription(2)]}
                        result={this.state.strings[this.callResultByInt(2, this.state.phyRes)]}
                    />
                    <Evaluator 
                        title={this.state.strings[this.callTitle(3)]}
                        description={this.state.strings[this.callDescription(3)]}
                        result={this.state.strings[this.callResultByString(3, this.state.autRes)]}
                    />
                    <Evaluator
                        title={this.state.strings[this.callTitle(4)]}
                        description={this.state.strings[this.callDescription(4)]}
                        result={this.state.strings[this.callResultByString(4, this.state.conRes)]}
                    />
                    <Evaluator 
                        title={this.state.strings[this.callTitle(5)]}
                        description={this.state.strings[this.callDescription(5)]}
                        result={this.state.strings[this.callResultByString(5, this.state.grwRes)]}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default EvaluatePage;