import React, { Component } from "react";
import "./style.css";
import Cards from "./Cards";

export default class ClassComponents extends Component {
  state = {
    name: "",
    dept: "",
    rate: "",
    EmpData: [],
    isSubmitted: true,
  };

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitHnadle = ()=>{
    this.setState({ EmpData: this.state.EmpData,isSubmitted:!this.state.isSubmitted});
  }

  clickHnadle = (e) => {
    e.preventDefault();
    this.state.EmpData.push({
      name: this.state.name,
      dept: this.state.dept,
      rate: this.state.rate,
    });
    this.SubmitHnadle();
    // console.log(this.state.EmpData);
  };
  render() {
    return (
      <div>
           {this.state.isSubmitted?
        <form className="formHandle">
          <label htmlFor="name">
            Name:
            <input
              name="name"
              id="name"
              type="text"
              className="name"
              value={this.state.name}
              onChange={this.changeHandle}
            ></input>
          </label>
          <label htmlFor="dept">
            Department:
            <input
              name="dept"
              id="dept"
              type="text"
              className="name"
              value={this.state.dept}
              onChange={this.changeHandle}
            ></input>
          </label>
          <label htmlFor="rate">
            Rating:
            <input
              name="rate"
              id="rate"
              type="number"
              className="name"
              value={this.state.rate}
              onChange={this.changeHandle}
            ></input>
          </label>

          <button className="button" onClick={ this.clickHnadle}>
            Submitt
          </button>
        </form>
     :<Cards EmpData={this.state.EmpData} clickHnadle={this.SubmitHnadle} />}
      </div>
   
    );
  }
}
