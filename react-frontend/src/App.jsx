import  { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/add', { input });
      setData(response.data.data);
      setInput('');
    } catch (error) {
      console.error('Error adding input:', error);
    }
  };

  

  return (
    <div>
      <h1>enter a string</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a string"
        />
        <button type="submit">Submit</button>
      </form>
    
    </div>
  );
}

export default App;
