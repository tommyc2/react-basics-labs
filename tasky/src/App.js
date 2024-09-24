import './App.css';
import Task from './components/Task';

const App = () => {

  return (
      <div className="container">
        <h1>Tasky</h1>
        <Task title="Dishes" deadline="Today" description="Do the dishes ASAP" difficulty="3/10"/>
        <Task title="Laundry" deadline="Tomorrow" description="Do the laundry tomorrow" difficulty="3/10"/>
        <Task title="Tidy" deadline="Today" description="Tidy my bed today" difficulty="3/10"/>
        <Task title="Mop" deadline="Tomorrow" description="Mop floor in my room" difficulty="3/10"/>
      </div>
  );
}

export default App;
