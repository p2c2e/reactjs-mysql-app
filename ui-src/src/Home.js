import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';
import {Row, Button, Container} from 'reactstrap';
import Autocomplete from "react-autocomplete";

class Home extends Component {
    state = { val: '', customers: '[]'};

    componentDidMount() {
        fetch("api/customer")
            .then(response => response.json())
            .then(data => this.setState({customers: data, isLoading: false}));
        console.log("Loaded Data ....")
    }

    render() {
        function renderFirstName(state, val) {
            return (
                (val.length > 2) &&
                ((state.firstname.toLowerCase().indexOf(val.toLowerCase()) !== -1) ||
                (state.lastname.toLowerCase().indexOf(val.toLowerCase()) !== -1))
            );
        }

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Row>
                    <Button color="link"><Link to="/customers">Manage Customer List</Link></Button>
                    </Row>
                    <Row>
                    <Button color="link"><Link to="/employees">Manage Employee List</Link></Button>
                    </Row>
                    <Row>
                        <div className="autocomplete-wrapper">
                            <h3>React Autocomplete Demo</h3>
                            <Autocomplete
                                value={this.state.val}
                                items={this.state.customers}
                                getItemValue={item => item.firstname}
                                shouldItemRender={renderFirstName}
                                renderMenu={item => (
                                    <div className="dropdown">
                                        {item}
                                    </div>
                                )}
                                renderItem={(item, isHighlighted) =>
                                    <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                                        {item.firstname + ' ' + item.lastname}
                                    </div>
                                }
                                onChange={(event, val) => this.setState({ val })}
                                onSelect={val => this.setState({ val })}
                            />
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;