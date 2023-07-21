import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { name: 'Work', status: false }
  ]);
  const [input, setInput] = useState('');
  const todosArr = [...todos];

  function changeInput(event) {
    setInput(event.target.value);
  }

  function addTodo() {
    if(input.trim() !== '') {
      setTodos([...todos, { name: input, status: false }]);
      setInput('');
    }
  }

  function statusTodo(index) {
    todosArr[index].status = !todosArr[index].status;
    setTodos(todosArr);
  }

  function updateTodo(index) {
    if(input.trim() !== '') {
      todosArr[index].name = input;
      setTodos(todosArr);
      setInput('');
    }
  }

  function deleteTodo(index) {
    todosArr.splice(index, 1)
    setTodos(todosArr)
  }

  return (
    <div className="App text-center">
      <header className="App-header mt-8">
        <h1>TODO LIST</h1>
        <input value={input} onChange={changeInput} className='mt-10 bg-gray-400' />
        <button onClick={addTodo} className='p-1.5 bg-gray-200'>OK</button>
      </header>
      <main className='mt-10'>
        <ul className='grid mx-auto text-xl'>
          <li className='grid grid-cols-4 text-3xl bg-gray-500 p-2 text-white'>
            <p>Index</p>
            <p>Name</p>
            <p>Status</p>
            <p>CRUD</p>
          </li>
          {todos.map((todo, index) => (
            <li key={index} className='justify-start grid border-4 border-gray-500 grid-cols-4 p-4 -mt-1'>
              <p>{index + 1}</p>
              <p>{todo.name}</p>
              <a onClick={() => statusTodo(index)} className={todo.status === false ? 'text-red-600' : 'text-green-600'}>
                {todo.status === false ? 'In Work' : 'Complete' }
              </a>
              <div>
                <button onClick={() => updateTodo(index)} className='mr-5'>U</button>
                <button onClick={() => deleteTodo(index)}>D</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
