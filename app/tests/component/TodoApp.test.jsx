var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp')

describe('TodoApp', ()=>{
    it('should exist', ()=>{
        expect(TodoApp).toExist();
    })


    it('should add todo to the todos state on handleAddTodo', ()=>{
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
        //expected createAt to be a number
        expect(todoApp.state.todos[0].createAt).toBeA('number');
    })

    it('should toggle complete value when handleToggle called',()=>{
        var todoData = {
            id:11,
            text:'test feature',
            completed:false,
            createAt:0,
            completeAt:undefined,
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});

        //check that todos first item have complete value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        //call handleToggle with 11
        todoApp.handleToggle(11)
        //verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
        //expected completed app to be number
        expect(todoApp.state.todos[0].completeAt).toBeA('number');
    });

    it('should toggle complete value when handleToggle called',()=>{
        var todoData = {
            id:11,
            text:'test feature',
            completed:true,
            createAt:0,
            completeAt:123,
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});

        //check that todos first item have complete value of false
        expect(todoApp.state.todos[0].completed).toBe(true);
        //call handleToggle with 11
        todoApp.handleToggle(11)
        //verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(false);
        //expected completed app to be number
        expect(todoApp.state.todos[0].completeAt).toNotExist();
    });


})
