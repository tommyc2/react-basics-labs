import './App.css';
import Task from './components/Task';

const App = () => {
  return (
      <div className="container">
        <h1>Tasky</h1>
        <Task title="Dishes" deadline="Today" description="Do the dishes ASAP" />
        <Task title="Laundry" deadline="Tomorrow" description="Do the laundry tomorrow" />
        <Task title="Tidy" deadline="Today" description="Tidy my bed today"/>
        <Task title="Mop" deadline="Tomorrow" description="Mop floor in my room"/>
      </div>
  );
}

export default App;
