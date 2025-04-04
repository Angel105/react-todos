import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'Alexa' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'Jonny' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'Alexa' },
    { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'Alexa' },
  ]

  const addTodo = () => {
    console.log('Our addTodo btn has been clicked! ');
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>

          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>

        </div>
      </div>

    </div>
  );
}

export default App;
