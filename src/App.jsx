import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'
import { Accordion } from './components/Accordion'

function App() {

  const [dataList, setDataList] = useState([]);
  const fetchData = async () => {
    const response = await axios("../data.json");
    setDataList(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="accordion">
       <h2>React Interview Questions</h2>
        {dataList.map(({ id, title, description }) => (
          <Accordion key={id} title={title} description={description} />
        ))}
      </div>
    </div>
  )
}

export default App
