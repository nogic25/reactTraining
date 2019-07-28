import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap'
import { addStack } from '../actions';

class StackForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            cards: []
        }
    }

    addCards() {
        const { cards } = this.state;
        cards.push({ id: cards.length, prompt: '', answer: '' });
        this.setState({ cards });

    }

    updateCardPart(event, index, part) {
        const { cards } = this.state;
        cards[index][part] = event.target.value;
        this.setState({ cards })

    }

    addStack() {
        // console.log('StackForm state', this.state)
        this.props.addStack(this.state);
    }
    render() {

        return (
            <div>
                <Link to='/' className='link-home'><h4>Home</h4></Link>
                <h2>Create a New Stack</h2>
                <br />
                <Form inline>
                    <FormGroup>
                        <FormLabel>
                            Title:
                            <FormControl onChange={event => this.setState({ title: event.target.value })} />
                        </FormLabel>
                    </FormGroup>
                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <div key={card.id}>
                                    <br />
                                    <FormGroup>

                                        {' '}
                                        <FormControl
                                            onChange={event => this.updateCardPart(event, index, 'prompt')
                                            } />
                                        {' '}

                                        {' '}
                                        <FormControl
                                            onChange={event => this.updateCardPart(event, index, 'answer')
                                            } />
                                    </FormGroup>
                                </div>
                            )
                        }
                        )
                    }
                </Form>
                <br />
                <Button onClick={() => this.addCards()}>Add Card</Button>

                {' '}
                <Button onClick={() => this.addStack()}>Save and add the stack</Button>
            </div>
        )
    }
}

export default connect(null, { addStack })(StackForm);