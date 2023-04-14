import React from 'react';
const Page1 = () => {
    return <div className="container">
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
            <table>
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
    </div>
  }
  
  export default Page1