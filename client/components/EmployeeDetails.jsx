import React from 'react';
export default class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const empData = this.state.data;
        const filterValue = this.inputVal.value;
        let length = empData.length;
        for (let i = 0; i < length; i++) {
            if (empData[i]) {
                for (var j in empData[i]) {
                    if (empData[i][j] == filterValue) {
                        this.setState({
                            data: empData[i]
                        })
                    }
                }
            }
        }
    }
    componentDidMount() {
        fetch("./client/components/details.json").then(res => res.json())
            .then(data => {
                this.setState({
                    data: data.items
                })
            }).catch(err => console.log(err))
    }
    render() {
        const { data } = this.state;
        if (!data) {
            return <div> Loading... </div>
        } else if (Array.isArray(data)) {
            return (
                <div className="card row align-items-center justify-content-center p-2">
                    <div className="form-group mx-sm-3 mb-2 form-inline row align-items-center justify-content-center">
                        <input ref={val => this.inputVal = val} type="text" className="form-control mr-2" />
                        <button onClick={this.handleClick} className="btn btn-primary"> Filter </button>
                    </div>
                    {data.map(item => (
                        <div key={item.id} className="card z-depth-3 row align-items-center justify-content-center mb-2" style={{ width: '18rem' }}>
                            <h3>{item.id}</h3>
                            <h3>{item.name}</h3>
                            <h3>{item.Age}</h3>
                        </div>
                    ))}
                </div>
            );
        } else if (data) {
            return (
                <div className="card row align-items-center justify-content-center p-2">
                    <div className="card row align-items-center justify-content-center mb-2" style={{ width: '18rem' }}>
                        <h3>{this.state.data.id}</h3>
                        <h3>{this.state.data.name}</h3>
                        <h3>{this.state.data.Age}</h3>
                    </div>
                </div>
            );
        }
    }
}