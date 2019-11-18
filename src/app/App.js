import React,{useState} from 'react';
import '../css/app.css';
import Header from './header';
import Todos from './todos'
import AddTodo from './addTodo';
import TodoState from './todoState';

const list = [
  {id:0,done:false,txt:'react hooks 1-13 vedeo'},
  {id:1,done:true, txt:'动手写个todoList'},
  {id:2,done:false,txt:'生命周期理解'},
  {id:3,done:false,txt:'之前课程也还没看完。。'},
]
function App() {
  const [data,setData] = useState(list);
  return (
    <div className="App">
      <Header />
      <AddTodo   data={data} setData={setData} />
      <Todos     data={data} setData={setData} />
      <TodoState data={data} setData={setData} />
    </div>
    
  );
}

export default App;
