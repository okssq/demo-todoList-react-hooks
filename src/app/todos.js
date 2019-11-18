import React from 'react';
import ItemTodos from './itemTodos.js';
function Todos(props) {
    let { data, setData } = props;
    return (
        data.length ?
            (<div className="todos">
               {
                    data.map(item =><ItemTodos key={item.id} item={item} data={data} setData={setData} />)
                }
            </div>)
            : ('')
    )
}
export default Todos;

