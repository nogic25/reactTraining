import React from 'react';
import { mount } from 'enzyme';
import App from './App';


describe('App', () => {
    //varuable to store mount component 
    let app = mount(<App />);

    it('renders the App title', () => {
        //console.log(app.debug());
        expect(app.find('h2').text()).toEqual('Note to Self');
    });

    it('renders the clear button', () => {
        //at method 
        expect(app.find('.btn').at(1).text()).toEqual('Clear All Notes');
    });


    describe('when rendering the form', () => {

        it('creates a form', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        it('creates a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);

        });
        it('renders the submit button', () => {
            //at method 
            expect(app.find('.btn').at(0).text()).toEqual('Submit');
        });
    });
    describe('when creting a note', () => {
        let testNote = 'test note';
        //simulate behavior of clicking on the button
        beforeEach(() => {
            //fires a change event on the actual change. And second value is an object that represents what we actually want to change this component with
            //just like a form control gives back it value through it targets event, we can specify that it value should change by providing simulate function
            //within object which has a target key itself which is also an object with it value 
            app.find('FormControl').simulate('change', {
                target: { value: testNote }
            });
        });
        it('updates the text in state', () => {
            // state is a function in mount component helps to view the note 
            console.log(app.state());
            expect(app.state().text).toEqual(testNote);
        });
describe ('and submitting th new note', ()=>{
    beforeEach(()=>{
    app.find('.btn').at(0).simulate('click');
   });

   it ('adds a new to state',()=>{
       console.log(app.state());
       expect(app.state().notes[0].text).toEqual(testNote);
   });

   describe ('and clickng the clear button',()=>{
       beforeEach(()=>{
        app.find('.btn').at(2).simulate('click');
       });
      /* it ( 'clear the notes in a state',()=>{
           console.log(app.state());
           expect(app.state().notes).toEqual([]);
       }) */
    });
});  

});
});