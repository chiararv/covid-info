import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const Chart = ({chartData})=>{ 

    return (
      <div className="chart">
        <Pie
          data={chartData}
          redraw
          width={400}
          height={400}
          options={{
            
          }}
        />

      </div>
    )
}

export default Chart;