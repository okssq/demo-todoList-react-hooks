import React,{useState} from 'react';
function AddTodo(props) {
    const   
        {data,setData} = props,
        [txt,setTxt] = useState(''),
        addTodo = (e) => {
            e.persist();
            if (e.keyCode === 13) {
                if (!e.target.value.trim()) {
                    alert('内容不能为空！');
                } else {
                    let txt = e.target.value.trim(),
                        item = {
                            id: Date.now(),
                            done: false,
                            txt: txt
                        },
                        newData = [...data];
                    newData.unshift(item);
                    setData(newData);
                    setTxt('');
                }
            }
        };
    return (
        <div className="add-todo">
            <input
                className="input-add"
                placeholder="请输入待办事项"
                value={txt}
                onChange={(e) => { setTxt(e.target.value) }}
                onKeyDown={(e) => { addTodo(e) }}
            />
        </div>
    );
}
export default AddTodo;

