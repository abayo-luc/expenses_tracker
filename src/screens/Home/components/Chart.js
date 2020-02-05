import React from 'react';
import {ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
import screenOrientation from '../../../utils/screenOrientation';
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
  const {isLandscape, ...rest} = screenOrientation();
  return (
    <ScrollView horizontal>
      <VictoryChart width={rest.width * 1.5} theme={VictoryTheme.material}>
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
          labels={({datum}) => `Rwf ${datum.earnings}`}
          alignment="middle"
          barRatio={0.8}
          animate={{
            duration: 2000,
            onLoad: {duration: 1000},
          }}
        />
      </VictoryChart>
    </ScrollView>
  );
};

export default Chart;
