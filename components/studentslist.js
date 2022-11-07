import React from "react";
import { connect } from "react-redux";
import { stuDel, stuGetAll } from "../actions/studentactions";
import { Link } from "react-router-dom";

class StudentTable extends React.Component{

    componentDidMount(){
      
        this.props.dispatch(stuGetAll());

    }

    deleteItem(id){
  
      this.props.dispatch(stuDel(id));
      
    }

    render(){

        return <main className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
      <br/>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            {this.props.students && this.props.students.map((item, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
                <td>{item.department}</td>
                <td>
                  <button type="button" className="btn btn-danger" aria-label="Left Align" onClick={() => this.deleteItem(item.id)} style={{marginRight:'10px'}}>Delete</button>
                  
                  <Link to={`/${item.id}`}>
                    <button type="button" className="btn btn-primary" aria-label="Left Align">
                      Edit
                    </button>
                  </Link>
                  
                </td>
              </tr>)}
          </tbody>
          
        </table>
      </div>
    </main>
  }

}

function mapStatetoProps(state){
    const { students } = state;
  return {
    students
  }
}

export default connect(mapStatetoProps)(StudentTable);