import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import {connect} from "react-redux";
import {Row} from "./Row";
import {getPayments} from "./redux/action";
import {ModelView} from "./ModelView";

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          model: null
      }
  }

  componentWillMount() {
      this.props.getPayments(this.props.metadata)
  }

  buttonClick = () => {
    this.props.getPayments(this.props.metadata)
  }

  closeHandler = () => {
      this.setState({
          model: null
      })
  }

  selectHandler = (payment) => {
      this.setState({
          model : payment
      })
  }
  render() {
    return (
        <>
          <table>
              <thead>
                  <tr>
                      <th>index</th>
                      <th>Payment Amount</th>
                      <th>Payment Currency</th>
                      <th>Payment Type</th>
                      <th>Payment Date</th>
                      <th>Payment Status</th>
                  </tr>
              </thead>
              <tbody>
                {this.props.payments.map( (payment, index) => {
                   return <Row key={index} payment = {payment} index={index} click = {this.selectHandler}></Row>
                })}
              </tbody>
          </table>
          {this.props.metadata.hasMoreElements ? <button onClick = {this.buttonClick}>Get Payments</button> : null}
          {this.state.model ? <ModelView payment={this.state.model} close = {this.closeHandler}></ModelView> : null}
        </>);
  }
};

const mapStateToProps = (state) => {
  return {
    payments : state.reducer.payments,
    metadata : state.reducer.metadata
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPayments: (metadata) => dispatch(getPayments(metadata)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
