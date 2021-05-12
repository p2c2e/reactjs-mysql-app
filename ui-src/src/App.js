import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemList from './ItemList';
import CustomerEdit from './ItemEdit';
import TagTest from './TagTest';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
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
                                                  "address": ''
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

                    <Route
                        path='/short/:id'
                        render={(props) => (
                            <CustomerEdit {...props} apiUrl={'/api/employee'} uiUrl="/short"
                                          attrs={['emp_id', 'firstname']}
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
                        path='/short'
                        render={(props) => (
                            <ItemList {...props} apiUrl={'/api/employee'} uiUrl="/short"
                                      attrs={['emp_id', 'firstname']}/>
                        )}
                    />

                    <Route path='/tagger' exact={true} component={TagTest}/>
                </Switch>
            </Router>
        )
    }
}

export default App;