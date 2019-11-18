import React from 'react';
function TodoState(props) {
    let {data , setData} = props,
		  doneData = data.filter(item => item.done),
        unDoneData = data.filter(item => !item.done),
        delAllDone = () => {
            setData(data.filter( item => !item.done));
        };
    return (
        <div className="todo-state">
            <div className="state-item">
                {
                    unDoneData.length
                        ?
                        ([<strong key={1}>{unDoneData.length} </strong>, <span key={2}>项待完成</span>])
                        :
                        ('')
                }
            </div>
            <div className="state-item pointer" onClick={delAllDone}>
                {
                    doneData.length
                        ?
                        ([<span key={3}>清除</span>, <strong key={4}> {doneData.length} </strong>, <span key={5}>项已完成事项</span>])
                        :
                        ('')
                }
            </div>
        </div>
    )
}
export default TodoState;

