import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  let values = props.dataPoints.map((dataPoint) => dataPoint.values);
  let maxx = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.values}
            label={dataPoint.label}
            key={dataPoint.label}
            max={maxx}
          />
        );
      })}
    </div>
  );
};

export default Chart;
