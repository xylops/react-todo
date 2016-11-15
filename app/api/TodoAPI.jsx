module.exports = {
    setTodos: function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos)
        }catch(e){

        }

        return $.isArray(todos) ? todos : [];

        // if($.isArray(todos)){
        //     return todos;
        // }else{
        //     return [];
        // }
    },
    filterTodos:function(todos, showCompleted, searchText){
        var filteredTodos = todos;

        //filter by showCompleted
        filteredTodos = filteredTodos.filter((todo)=>{
            return !todo.completed || showCompleted;
        })
        //filtred by searchText
        filteredTodos = filteredTodos.filter((todo)=>{
            var text = todo.text.toLowerCase()
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        })

        //sort todos with nono completed first
        filteredTodos.sort((a,b) =>{
            if(!a.completed === false && b.completed){
                return -1;
            }else if(a.completed && !b.completed){
                return 1;
            }else{
                return 0
            }
        });

        return filteredTodos;
    }
}