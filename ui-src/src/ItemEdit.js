import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class ItemEdit extends Component {

  emptyCustomer = this.props.emptyItem;

  constructor(props) {
    super(props);
    console.log(this.emptyCustomer);
    this.state = {
      item: this.emptyCustomer
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const item = await (await fetch(`${this.props.apiUrl}/${this.props.match.params.id}`)).json();
      this.setState({item: item});
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    const _apiUrl = (item.id) ? this.props.apiUrl + "/" + item.id : this.props.apiUrl;
    console.log(JSON.stringify(item));
    console.log(_apiUrl);
    await fetch(`${_apiUrl}`, {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push(`${this.props.uiUrl}`);
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit Item' : 'Add Item'}</h2>;

    return <div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          {
            this.props.attrs.map(attr => (
                <FormGroup>
                  <Label for={attr}>{attr}</Label>
                  <Input type="text" name={attr} id={attr} value={item[attr] || ''}
                         onChange={this.handleChange} autoComplete={attr}/>
                </FormGroup>
            ))
          }
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to={this.props.uiUrl}>Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(ItemEdit);