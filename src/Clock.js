import React, { useState } from 'react';


export default function  Clock  ( )  {
    const [inputTime, setInputValue] = useState("");

 inputTime 

 
    constructor() {
        super();
        this.state = {
            hour: 0, 
            min: 0, 
            second : 0, 
            time : ""
        };
        this.update = this.update.bind(this);
    }

    class Hand extends React.Component{
        render(){
            const divStyle = {transform: `rotate(${this.props.time}deg)`};
            const nomClass = `hand hour-${this.props.type}`;        
            return <div className={nomClass} style={divStyle}></div>;
        };
    };

    return (
        <>
            <div>                    
                <h1>{this.props.timeZone} - {this.state.time}</h1>
                <div className="clock">                 
                    <div className="clock-face">
                    <Hand type="hour" time={this.state.hour}/>
                    <Hand type="min" time={this.state.min}/>
                    <Hand type="second" time={this.state.second}/>
                    </div>
                </div>
                <hr/>
            </div>
        
        </>
    );

}



c

    update(event){
        const date = new Date().toLocaleString("en-US", {timeZone: this.props.timeZone}).split(" ")[1];
        const time = date.split(":");        
        this.setState({
            hour: ((Number(time[0]) / 12) * 360) + 90, 
            min: ((Number(time[1]) / 60) * 360) + 90, 
            second : ((Number(time[2]) / 60) * 360) + 90, 
            time : date
        });        
    }

    componentWillMount(){        
        setInterval(this.update, 1000);
        this.update();
    }


    
};

Clock.propTypes = {
    timeZone : React.PropTypes.string.isRequired
};

//Para establecer valores por defecto...
Clock.defaultProps = {
    timeZone : "America/Bogota"
};



