import React from "react";
import { Link } from "react-router-dom";
import { stuAdd } from "../actions/studentactions"
import { connect } from 'react-redux';


class AddStudent extends React.Component{

    student={ name: '', address: '', age: '', department: '' }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(stuAdd(Object.assign({}, this.student)));
        
        e.target.reset();
    }


    render(){
        return(
            <div className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
                <br/>
                <h4 className="mb-3" style={{margin: 'auto'}}>Add Student</h4>
                <form className="needs-validation" noValidate onSubmit={this.handleOnSubmit}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" onChange={e => this.student.name = e.target.value} required />
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address" onChange={e => this.student.address = e.target.value} required />
                            <div className="invalid-feedback">Valid Address is required.</div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Age</label>
                            <input type="number" className="form-control" id="age" placeholder="Age" onChange={e => this.student.age = e.target.value} required />
                            <div className="invalid-feedback">Valid Age is required.</div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="username" className="form-label">Department</label>
                            <div className="input-group has-validation">
                                <input type="text" className="form-control" id="department" placeholder="Department" onChange={e => this.student.department = e.target.value} required />
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

export default connect(mapStatetoProps)(AddStudent);