import { useTranslation } from "react-i18next";
import Chart from "react-apexcharts";

interface DonutChartProps {}

const DonutChart: React.FC<DonutChartProps> = () => {
  const { t, i18n } = useTranslation();
  const en = i18n.language == "en";

  const series = [103, 34, 34];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: [t("successful"), t("notPayed"), t("canceled")],
    colors: ["#00E396", "#FEB019", "#FF4560"], // Custom colors for each status
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
              offsetY: -8,
              color: "orange",
              fontSize: "3rem",
              fontFamily: "yekan",
              fontWeight: "bold",
            },
            total: {
              show: true,
              showAlways: true,
              label: "",
              formatter: () => (en ? "55%" : "۵۵%"),
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="donut mr-[5rem]">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default DonutChart;
