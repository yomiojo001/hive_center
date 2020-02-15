import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import {  LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ComposedChart,
  Area,
  Bar
} from "recharts";

const data = [
  {
    name: "Jan",
    percentage: 0,
   
   
  },
  {
    name: "Feb",
    percentage: 40,
    
  },
  {
    name: "Mar",
    percentage: 30,
    
  },
  {
    name: "April",
    percentage: 0,
   
  },
  {
    name: "May",
    percentage: 30,
    amt: 2210
  },{
    name: "June",
    percentage: 30,
    
  },{
    name: "July",
    percentage: 40,
    
  },
  {
    name: "Aug",
    
    percentage: 60,
  },
  {
    name: "Sept",    
    percentage: 80,
  },
  {
    name: "Oct",
    percentage: 75,
    
  },
  {
    name: "Nov",
    percentage: 50,
    
  },
  {
    name: "Dec",
    
    percentage: 100,
  },
];
class Overview extends Component {
  render() {
    return (
        <div className="container nl7">
            <small className=""> Overview</small>
            <FontAwesomeIcon icon={faBell}  className="fr silver ma1"/>
      <div className=" bg-light  ">
        
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="percentage" stroke="#8884d8" />
          <Line type="monotone" dataKey="month" stroke="#82ca9d" />
        </LineChart>
      </div>
      </div>
    );
  }
}
export default Overview;