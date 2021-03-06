import React, {Component, PropTypes} from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import td from 'testdouble';

import AddTodoInput from '../../app/components/AddTodoInput';

// Step 2
describe('AddTodoInput', () => {
    let props;

    beforeEach(() => {
        props = {
            todos: [{
                id: 1,
                text: 'have breakfast',
                completed: false
            }],
            addTodo: td.function('addTodo')
        };
    });

    it('It should has a input', () => {
        const addTodoInput = shallow(<AddTodoInput {...props}/>);
        expect(addTodoInput.find('input').length).to.equal(1);
    });

    it('It should call the prop.addTodo method when keypress enter', () => {
        const addTodoInput = mount(<AddTodoInput {...props}/>);
        const event = {
            target: {value: ' brush my teeth '},
            nativeEvent: {keyCode: 13}
        };
        addTodoInput.find('input').simulate('keypress', event);

        td.verify(props.addTodo({
            text: 'brush my teeth',
            completed: false
        }));
    });
});