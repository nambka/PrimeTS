import React from 'react';
import { calcPrime } from './Algo';

// Render the input form to enter a number
interface IProps {
  // value: number;
}
interface IState {
  inputNum: string;
  answer: string;
}

class PrimeForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {inputNum: '100',answer: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputNum: e.target.value
    });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const num: number = +this.state.inputNum

    this.setState({
      answer: calcPrime(num),
    });  
  }

  render() {
    return (
      <form id="frmFindHighestPrime" onSubmit={this.handleSubmit} className="container-fluid nambk-container-input text-center">
        <h2 className="nambk-header">Highest Prime</h2>
        <div className="nambk-header-desc">Lower than Input Number</div>
        <div>
          <input id="inputNumber" name="inputNumber" className="nambk-input" style={{width: '50%'}} 
                 type="number" value={this.state.inputNum} aria-label="Input Number" autoFocus
                 onChange={this.handleChange} placeholder="Enter a number"/>
          <input id="btnFindHighestPrime" className="nambk-btn nambk-btn-primary" 
                 type="submit" value="Go"/>
        </div>
        <div id="result" className="mt-3" aria-readonly style={{minHeight: '2rem',}}>
          {this.state.answer}  
        </div>   
      </form>
    );
  }
}
export default PrimeForm;