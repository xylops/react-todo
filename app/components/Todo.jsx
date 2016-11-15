var React = require('react');
var moment = require('moment')

var Todo = React.createClass({
    render:function(){
        var {text, id, completed, createAt, completeAt} = this.props;
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
            <div onClick={()=>{
                    this.props.onToggle(id)
                }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }
});

module.exports = Todo;
