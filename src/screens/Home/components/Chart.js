import React from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const data = [
  {quarter: '0', earnings: 0},
  {quarter: 'Mon', earnings: 1500},
  {quarter: 'Tue', earnings: 1200},
  {quarter: 'Wen', earnings: 5000},
  {quarter: 'Thu', earnings: 2300},
  {quarter: 'Fri', earnings: 6089},
  {quarter: 'Sat', earnings: 1500},
  {quarter: 'Sun', earnings: 4392},
];

const Chart = () => {
  const {colors} = useTheme();
  return (
    <VictoryChart width={DEVICE_WIDTH} theme={VictoryTheme.material}>
      <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
        style={{
          data: {fill: colors.accent},
          parent: {
            border: '1px solid #ddf',
          },
        }}
        alignment="middle"
        barRatio={0.7}
        animate={{
          duration: 2000,
          onLoad: {duration: 1000},
        }}
      />
    </VictoryChart>
  );
};

export default Chart;
