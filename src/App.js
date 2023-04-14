import React from 'react';
import axios from "axios";
//import { useNavigate } from 'react-router-dom'
//import page1 from './page1'
import { useNavigate, Route, Switch, Link, NavLink, useHistory } from 'react-router-dom'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: 0,
      idNumber: '',
      accountNumber: '',
      cardNumber: '',
      display: 'none'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ display: 'block' });
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/")
      .then((res) => {
        this.setState({
          users: res.data,
          id: 0,
          idNumber: '',
          accountNumber: '',
          cardNumber: ''
        })
      })
  }
  submit(event, id) {
    event.preventDefault();
    if (id === 0) {
      axios.post("http://localhost:8080/api/", {
        idNumber: this.state.idNumber,
        accountNumber: this.state.accountNumber,
        cardNumber: this.state.cardNumber
      })
        .then((res) => {
          this.componentDidMount();
        })
    } else {
      axios.put("http://localhost:8080/api/", {
        id: this.state.id,
        idNumber: this.state.idNumber,
        accountNumber: this.state.accountNumber,
        cardNumber: this.state.cardNumber
      }).then(() => {
        this.componentDidMount();
      })

    }

  }
  delete(id) {
    axios.delete(`http://localhost:8080/api/${id}`)
      .then(() => {
        this.componentDidMount();
      })
  }
  edit(id) {
    axios.get(`http://localhost:8080/api/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          id: res.data.id,
          idNumber: res.data.idNumber,
          accountNumber: res.data.accountNumber,
          cardNumber: res.data.cardNumber
        })
      })
  }

  render() {
    //let navigate = useNavigate()
    return (

      <div className="container" >

        <div className="row">
          {/* <div className="col s6">
            <form onSubmit={(e) => this.submit(e, this.state.id)}>
              <div class="input-field col s12">
                <i class="material-icons prefix">idNumber</i>
                <input onChange={(e) => this.setState({ idNumber: e.target.value })} value={this.state.idNumber} type="text" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">idNumber</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">accountNumber</i>
                <input onChange={(e) => this.setState({ accountNumber: e.target.value })} value={this.state.accountNumber} type="email" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">accountNumber</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">cardNumber</i>
                <input onChange={(e) => this.setState({ cardNumber: e.target.value })} value={this.state.cardNumber} type="password" id="autocomplete-input" class="autocomplete" />
                <label for="autocomplete-input">cardNumber</label>
              </div>


              <button class="btn waves-effect waves-light right" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div> */}
          <div className="col s6">
            <table style={{ display: this.state.display }}>
              <thead>
                <tr>
                  <th>idNumber</th>
                  <th>accountNumber</th>
                  <th>cardNumber</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.users.map(user =>
                    <tr key={user.id}>
                      <td>{user.idNumber}</td>
                      <td>{user.accountNumber}</td>
                      <td>{user.cardNumber}</td>
                      <td>
                        <button onClick={(e) => this.edit(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                          <i class="material-icons">edit</i>
                        </button>
                      </td>
                      <td>
                        <button onClick={(e) => this.delete(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                          <i class="material-icons">delete</i>
                        </button>
                      </td>
                    </tr>
                  )
                }

              </tbody>
            </table>
          </div>

        </div>
        {/* --------------------------------------------------- */}
        <div className='row'>
          <form onSubmit={(e) => this.submit(e, this.state.id)}>
            <div col s12>
              <div >
                <label for="last_name">本人/代領人身分證字號或居留證統一證號</label>
                <input id="last_name" onChange={(e) => this.setState({ idNumber: e.target.value })} value={this.state.idNumber} type="text" class="validate" />
                {/* <label for="last_name">本人/代領人身分證字號或居留證統一證號</label> */}
              </div>
            </div>
            <div col s12>
              <div >
                <label for="last_name">本人/代領人金融機構帳號</label>
                  <input id="last_name" onChange={(e) => this.setState({ accountNumber: e.target.value })} value={this.state.accountNumber} type="text" class="validate" />
                  {/* <label for="last_name">本人/代領人金融機構帳號</label> */}
              </div>
            </div>
            <div col s12>
              <div >
                <label for="last_name">發放對象健保卡號</label>
                  <input id="last_name" onChange={(e) => this.setState({ cardNumber: e.target.value })} value={this.state.cardNumber} type="text" class="validate" />
                  {/* <label for="last_name">發放對象健保卡號</label> */}
              </div>
            </div>
            <button class="btn waves-effect waves-light right" type="submit" name="action">確定
              {/* <i class="material-icons right">send</i> */}
            </button>
          </form>
          <NavLink to="/Page1">

          </NavLink>
          <button onClick={this.handleClick} class="btn waves-effect waves-light " type="submit" name="action">查看
            {/* <i class="material-icons right">send</i> */}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
