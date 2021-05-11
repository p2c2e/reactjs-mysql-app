import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemList from './CustomerList2';
import CustomerEdit from './CustomerEdit';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    {/*<Route path='/customers' exact={true} component={CustomerList}/>*/}
                    {/*<Route path='/customers/:id' component={CustomerEdit}/>*/}
                    <Route
                        path='/customers/:id'
                        render={(props) => (
                            <CustomerEdit {...props} apiUrl={'/api/customer'} uiUrl="/customers"
                                          attrs={['firstname', 'lastname', 'age', 'address']}
                                          emptyItem={
                                              {
                                                  "firstname": '',
                                                  "lastname": '',
                                                  "age": '',
                                                  "address": '',
                                                  "copyrigtby": ''
                                              }
                                          }
                            />
                        )}
                    />
                    <Route
                        path='/customers'
                        render={(props) => (
                            <ItemList {...props} apiUrl={'/api/customer'} uiUrl="/customers"
                                      attrs={['firstname', 'lastname', 'age', 'address']}/>
                        )}
                    />
                    {/* Precedence order of the parametrized version*/}
                    <Route
                        path='/employees/:id'
                        render={(props) => (
                            <CustomerEdit {...props} apiUrl={'/api/employee'} uiUrl="/employees"
                                          attrs={['emp_id', 'firstname', 'lastname', 'supervisor_id']}
                                          emptyItem={
                                              {
                                                  "emp_id": '',
                                                  "firstname": '',
                                                  "lastname": '',
                                                  "supervisor_id": ''
                                              }
                                          }
                            />
                        )}
                    />
                    <Route
                        path='/employees'
                        render={(props) => (
                            <ItemList {...props} apiUrl={'/api/employee'} uiUrl="/employees"
                                      attrs={['emp_id', 'firstname', 'lastname', 'supervisor_id']}/>
                        )}
                    />

                </Switch>
            </Router>
        )
    }
}

export default App;