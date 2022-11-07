import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {stuGet, stuUpdate } from '../actions/studentactions';
import { connect } from 'react-redux';


class EditStudent extends React.Component{

    name = '';
    address = '';
    age = 0;
    department = '';

    componentDidMount() {

        console.log('at editing');

        const id = this.props.match.params.id;

        console.log(id);
        
        // const id=13;
        this.props.dispatch(stuGet(id));

    }
    
    handleOnSubmit = (e) => {
        e.preventDefault()
        
        this.props.dispatch(stuUpdate({ id: this.props.match.params.id, name: this.name, address: this.address, age: this.age, department: this.department }));
        
        e.target.reset();
    }

    render(){
        return(
            <div className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
                <br/>
                <h4 className="mb-3">Edit Student</h4>
                <form className="needs-validation" noValidate onSubmit={this.handleOnSubmit}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" onChange={e => this.name = e.target.value} required />
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address" onChange={e => this.address = e.target.value} required />
                            <div className="invalid-feedback">Valid Address is required.</div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Age</label>
                            <input type="number" className="form-control" id="age" placeholder="Age" onChange={e => this.age = e.target.value} required />
                            <div className="invalid-feedback">Valid Age is required.</div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="username" className="form-label">Department</label>
                            <div className="input-group has-validation">
                                <input type="text" className="form-control" id="department" placeholder="Department" onChange={e => this.department = e.target.value} required />
                                <div className="invalid-feedback">Your department is required</div>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <button className="btn btn-primary" type="submit" >Submit</button>
                        </div>
                        <div className="col-sm-6">
                            <Link to="/"><button className="btn btn-primary">Back</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {};
}

export default connect(mapStatetoProps)(withRouter(EditStudent));



