import './App.css';
import fetchRecords from '../fetchRecords';
import Records from '../Components/Records';

function App() {
  fetchRecords();
  return (
    <div class="section">
      <div class="container">
        <h1 class="title" style={{ textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>
          PollentaNantes
        </h1>
        <Records></Records>
      </div>
    </div>
  );
}
export default App;
