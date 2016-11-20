export var setSearchText = (searchText) =>{
    return {
        type:'SET_SEARCH_TEXT',
        searchText,
    }
}

export var toggleShowComplete = () =>{
    return{
        type:'TOGGLE_SHOW_COMPLETE',
    }
}


export var addTodo = (text) =>{
    return {
        type:'ADD_TODO',
        text
    }
}

export var toggleTodo = (id) =>{
    return{
        type:'TOGGLE_TODO',
        id
    }
}
