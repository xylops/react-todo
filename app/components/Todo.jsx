var React = require('react');
var moment = require('moment')

var Todo = React.createClass({
    render:function(){
        var {text, id, completed, createAt, completeAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo'
        var renderDate = ()=>{
            var message = 'Created';
            var timeStamp = createAt;

            if(completed){
                message = 'Completed'
                timeStamp=completeAt
            }

            return message + ' ' + moment.unix(timeStamp).format('MM Do YYYY @ h:mm a')
        }
        return(
            <div className={todoClassName} onClick={()=>{
                    this.props.onToggle(id)
                }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>

            </div>
        )
    }
});

module.exports = Todo;
