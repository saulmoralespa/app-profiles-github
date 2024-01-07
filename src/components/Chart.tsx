import { Dimensions } from "react-native";
import {
    LineChart
  } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;  

const Chart = ({users}) => {
  
    const data = {
        labels: [],
        datasets: [
          {
            data: users.map(user => user.followers),
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
    };

    return (
        users.length ? (
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        ) : null
    );
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

export default Chart;