var expect = require('expect');
var df = require('deep-freeze-strict');


var reducers = require('reducers');

describe('Reducers',()=>{
    describe('searchTextReducer',()=>{
        it('should set search text', () =>{
            var action = {
                type:'SET_SEARCH_TEXT',
                searchText:'dog'
            }
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        })
    })

    describe('showCompleteReducer',()=>{
        it('should toggle showCompleted', ()=>{
            var action ={
                type:'TOGGLE_SHOW_COMPLETED',
            }
            var res = reducers.showCompleteReducer(df(false), df(action));
            expect(res).toEqual(true)
        })
    })

    describe ('todosReducers',() =>{
        it('should add new todo',()=>{
            var action = {
                type:'ADD_TODO',
                text:'Walk the dog'
            }
            var res = reducers.todosReducers(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text)
        })

        it('should toggle todo', ()=>{
            var todos = [{
                id:'123',
                text:'something',
                completed:true,
                createAt:123,
                completedAt:125
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id:'123'
            }
            var res = reducers.todosReducers(df(todos), df(action));
            expect(res[0].completed).toEqual(false)
            expect(res[0].completedAt).toEqual(undefined)
        })
    })
})
