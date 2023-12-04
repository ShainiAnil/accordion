import { useState, useEffect } from 'react'
import { Accordion } from './components/Accordion'
import axios from "axios";
function App() {

  const [dataList, setDataList] = useState([]);
  const fetchData = async () => {
    const response = await axios("data.json");
    setDataList(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="accordion">
       <img src='images/image1.png'/>
       <h2>FAQ</h2>
        <Accordion dataList={dataList} />
      </div>
    </div>
  )
}

export default App
