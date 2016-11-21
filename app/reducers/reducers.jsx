var uuid = require('node-uuid');
var moment = require('moment');


export var searchTextReducer = (state = '', action)=>{
    switch (action.type){
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
}

export var showCompleteReducer = (state = false, action) =>{
    switch(action.type){
        case 'TOGGLE_SHOW_COMPLETED':
            return !state
        default:
            return state;
    }
}

export var todosReducers = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:uuid(),
                    text:action.text,
                    completed:false,
                    createAt:moment().unix(),
                    completeAt:undefined,
                }
            ];
        default:
            return state;
    }
}
