import React from "react";
import ReactApexChart from "react-apexcharts";

interface AreaChartProps {}

interface AreaChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexCharts.ApexOptions;
}

class AreaChart extends React.Component<AreaChartProps, AreaChartState> {
  constructor(props: AreaChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: "Series 1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      options: {
        chart: {
          height: 350,

          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },

          type: "area",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#FFA500"], // Set the color to orange
        grid: {
          show: false,
        },

        fill: {
          opacity: 0.1, // Adjust the opacity as needed
          type: "solid", // Ensure the fill type is solid
          gradient: {
            opacityFrom: 0.2,
            opacityTo: 0.1,
            stops: [0, 100],
          },
        },
        yaxis: {
          labels: {
            show: false, // Hide Y-axis labels
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-20T01:30:00.000Z",
            "2022-09-21T02:30:00.000Z",
            "2022-09-22T03:30:00.000Z",
            "2022-09-23T04:30:00.000Z",
            "2022-09-24T05:30:00.000Z",
            "2022-09-25T06:30:00.000Z",
          ],
        },
        tooltip: {
          theme: "dark",
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        markers: {
          colors: ["#FFA500"], // Set default marker color to orange
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default AreaChart;
