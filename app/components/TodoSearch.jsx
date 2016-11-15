var React = require('react');

var TodoSearch = React.createClass({
    handleSearch:function(){
        var showCompleted = this.refs.showComplete.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText)
    },
    render:function(){
        return (
            <div className="container__header">
                <div>
                    <input ref="searchText" type="text" placeholder="Search Todo" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showComplete" onChange={this.handleSearch}/>
                        Show Complete Todos
                    </label>
                </div>
            </div>
        )
    }
})

module.exports=TodoSearch;
