import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'Alexa' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'Jonny' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'Alexa' },
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>

          <TodoTable todos={todos}/>

        </div>
      </div>

    </div>
  );
}

export default App;
