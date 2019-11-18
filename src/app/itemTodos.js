import React,{useState,useRef,useEffect} from 'react';
function ItemTodos(props) {
    let
        {id,done,txt}  = props.item,
        {data,setData} = props,
        [edit,setEdit] = useState(false),
        [val ,setVal ] = useState(''),
        ref = useRef(null),
        doubleClick = () => {
            setEdit(!edit);
            setVal(txt);
            return
        },
        onKeyDown = (e,id) => {
            e.persist();
            if (e.keyCode === 13) {
                blur(id)
            }
        },
        blur = (id) => {
            console.log('valu',val,'txt',txt,'ID',id)
            if(val.trim() && val.trim() !== txt ){
                for(let i=0;i<data.length;i++){
                    if(data[i]['id'] === id){
                        data[i]['txt'] = val.trim();
                        break
                    }
                }
                console.log('data',data)
                setData([...data]);
            }
            setEdit(false);
            setVal('');
        },
        changeDone = (id) => {
            for(let i=0;i<data.length;i++){
                if(data[i]['id'] === id){
                    data[i]['done'] = !data[i]['done'];
                    break
                }
            }
            setData([...data]);
        },
        removeItem = (id) => {
            setData(data.filter(item => item.id !== id))
        };
    useEffect( () => {
        if(edit){
            ref.current.focus();
        }
    },[edit])
    return (
        <div className={'item' + (edit ? ' editing' : '')}>
            <div className="item-left" >
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={done}
                    onChange={() => { changeDone(id) }}
                ></input>
                {
                    edit ? 
                    (
                        <input
                            ref={ref}
                            className="item-input"
                            type="text"
                            value={val}
                            onChange={(e) => {setVal(e.target.value)}}
                            onBlur={() => { blur(id); }}
                            onKeyDown={(e) => { onKeyDown(e,id) }}
                        />
                    )   :
                    (
                        <div
                            className={"txt" + (done ? ' done' : '')}
                            onDoubleClick={(e) => { doubleClick() }}
                        >
                            {txt}
                        </div>
                    )
                }
            </div>
            <span className="pointer" onClick={() => { removeItem(id) }}>X</span>
        </div>
    )
}

export default ItemTodos;
