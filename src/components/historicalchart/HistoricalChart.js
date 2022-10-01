 import axios from "axios";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./historicalChart.css";


const HistoricalChart = React.memo(() =>{
   const [historicData,setHistoricData] = useState([{}]);
   const [flag,setFlag] = useState(false);
   const [time,setTime] = useState({});
   const currency="USD";
   const days = 1;
   let {id} = useParams();
    id=id.slice(1);
    let heading = id.charAt(0).toUpperCase()+id.slice(1);
  
   const getData = async () =>{
     const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
     setFlag(true);
     setHistoricData(response.data.prices)
      let output = {}
      response.data.prices.map((data) => output[new Date(data[0]).getHours()]=data[1]) 
       console.log('out',output);
       setTime(output)
   }
   
    useEffect(()=>{
       getData();

    },[])


   
   
    return(
    <div className="container">
        <div className="heading">
           <h1>{heading}</h1>
           </div>
           <div className="chart-container">
           <Line data={{
            labels: Object.entries(time).map((coin) => coin[0]),
    datasets: [
      {
        label: "Coin Gained",
        data: Object.entries(time).map((coin) => coin[1]),
      
        borderColor: "#c1502e ", 
        borderWidth: 5
      }
    ]
           }} />
        </div>  
    </div>
    )
})

export default HistoricalChart;


