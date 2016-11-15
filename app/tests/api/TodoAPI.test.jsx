var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',()=>{

    beforeEach(()=>{
        localStorage.removeItem('todos')
    })

    it('should exist',()=>{
        expect(TodoAPI).toExist();
    })

    describe ('setTodos',()=>{
        it('should set valid todo array',()=>{
            var todos = [{
                id:23,
                text:'Test all files',
                completed:false,
            }]

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', ()=>{
            var badTodos = {a: 'b'};

            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toEqual(null);
        })
    })

    describe ('getTodos',()=>{
        it('should return empty array for bad local storage data',()=>{
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        })

        it('should return todos if valid array in local storage',()=>{
            var todos = [{
                id:23,
                text:'Test all files',
                completed:false,
            }]

            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);

        })
    })

    describe('filteredTodos',()=>{
        var todos = [{
            id:1,
            text:'Some text here',
            completed:true
        },{
            id:2,
            text:'Other text',
            completed:false,
        },{
            id:3,
            text:'some text',
            completed:true
        }]

        it('should return all item if show completed is true',()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        })

        it('should return 1 item if show completed is false',()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        })

        it('should sort by completed status',()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].id).toBe(2);
        })

        it('should filtered todo by searchText',()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        })

        it('should return all todos if searchText is empty',()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        })
    })
})
