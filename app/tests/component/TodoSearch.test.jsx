var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

// var TodoSearch = require('TodoSearch')
import{TodoSearch} from 'TodoSearch';

describe('TodoSearch', ()=>{
    it('should exist', ()=>{
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change',()=>{
        var searchText = 'dog'
        var action = {
            type:'SET_SEARCH_TEXT',
            searchText
        }
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOWCOMPLETED when checkbox checked', ()=>{

        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        var action = {
            type:'TOGGLE_SHOW_COMPLETED'
        }

        todoSearch.refs.showComplete.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showComplete);

        expect(spy).toHaveBeenCalledWith(action);
    });
})
