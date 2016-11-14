var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch')

describe('TodoSearch', ()=>{
    it('should exist', ()=>{
        expect(TodoSearch).toExist();
    });

    it('should call on search when input text',()=>{
        var searchText = 'dog'
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false,'dog');
    });

    it('should call on search with proper check value', ()=>{

        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showComplete.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showComplete);

        expect(spy).toHaveBeenCalledWith(true,'');
    });
})
