import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {items: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch(this.props.apiUrl)
      .then(response => response.json())
      .then(data => this.setState({items: data, isLoading: false}));
    console.log("____________##################_______________")
  }

  async remove(id) {
    await fetch(`/${this.props.apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedItems = [...this.state.items].filter(i => i.id !== id);
      this.setState({items: updatedItems});
    });
  }

  render() {
    const {items, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const itemList = items.map(item => {
      return <tr key={item.id}>
        <td>{item.id}</td>
        {
          this.props.attrs.map(attr => (
              <td>{item[attr]}</td>
        ))
        }
        {/*<td style={{whiteSpace: 'nowrap'}}>{customer.firstname}</td>*/}
        {/*<td>{customer.lastname}</td>*/}
        {/*<td>{customer.age}</td>*/}
        {/*<td>{customer.address}</td>*/}
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={this.props.uiUrl + "/" + item.id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(item.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to={this.props.uiUrl+"/new"}>Add Customer</Button>
          </div>
          <h3>Customer List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th>ID</th>
                {
                  this.props.attrs.map(attr => (
                      <th>{attr}</th>
                  ))
                }
                {/*<th width="20%">Firstname</th>*/}
                {/*<th width="20%">Lastname</th>*/}
                {/*<th width="10%">Age</th>*/}
                {/*<th>Address</th>*/}
                {/*<th width="10%">Actions</th>*/}
              </tr>
            </thead>
            <tbody>
            {itemList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default ItemList;
