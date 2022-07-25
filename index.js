import React from 'react';
import './try.css'
import ReactDOM from 'react-dom/client';



class Forminfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {fullName: '',
                  phoneNo: '',
                  mailAddress:'',
                  birthDay: ''}
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
            
  }

  handleChange(event){
    let name = event.target.name
    this.setState({ [name] : event.target.value
  })
  }

  handleSubmit(event){
    alert(`User ID : ${this.state.fullName} Phone Number : ${this.state.phoneNo} Mail Address : ${this.state.mailAddress} Birthday ${this.state.birthDay}`)
    console.log(`User ID : ${this.state.fullName} Phone Number : ${this.state.phoneNo} Mail Address : ${this.state.mailAddress} Birthday ${this.state.birthDay}`)
    event.preventDefault()
  }

  render(){
    return (
      
      <div className ="App">
      <img src="/logo192.png" alt="Error"></img>
      <br></br> <br></br>
      USER REGISTER SYSTEM <br></br>
      <form action='https://www.instagram.com' method='POST' onSubmit={this.handleSubmit} >
      <br></br>
      User ID <br></br>
      <input className='inputBox' type='text' name='fullName'required value={this.state.value} onChange={this.handleChange}></input>
      <br></br> <br></br>
      Telephone (TR) <br></br>
      <input className='inputBox' type="tel" name="phoneNo" value={this.state.value} onChange={this.handleChange} required pattern='[0]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}'></input>
      <br></br> <br></br>
      E-mail Address <br></br>
      <input className='inputBox' type="email" name="mailAddress" value={this.state.value} onChange={this.handleChange} required></input>
      <br></br> <br></br>
      birthDay <br></br>
      <input className='inputBox' type="date" name="birthDay" value={this.state.value} onChange={this.handleChange} required></input>
      <br></br> <br></br>
      <button name='submit' value='submit' type="submit" id='submit'>Register</button>
      </form>
    </div>
  )
  } 

}

export default Forminfo


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Forminfo />);