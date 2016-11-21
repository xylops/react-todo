var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore'
import  ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo'

describe('TodoList', ()=>{
    it('should exist', ()=>{
        expect(TodoList).toExist();
    })

    it('should render one Todo component for each todo items',()=>{
        var todos = [{
            id:1,
            text:'do something',
            completed:false,
            completeAt:undefined,
            createAt:500
        },{
            id:2,
            text:'Check test',
            completed:false,
            completeAt:undefined,
            createAt:501
        }];

        var store = configure({
            todos
        })
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        )
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponents.length).toBe(todos.length);
    })
})
