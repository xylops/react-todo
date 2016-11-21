var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions')

export var TodoSearch = React.createClass({
    render:function(){
        var {dispatch, showCompleted, searchText} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input ref="searchText" type="text" placeholder="Search Todo" value ={searchText} onChange={()=>{
                            var searchText = this.refs.searchText.value;
                            dispatch(actions.setSearchText(searchText));
                        }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showComplete" checked={showCompleted} onChange={()=>{
                                dispatch(actions.toggleShowCompleted());
                            }}/>
                        Show Complete Todos
                    </label>
                </div>
            </div>
        )
    }
})

export default connect(
    (state) =>{
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);
