import "./chart.css"
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, CartesianGrid} from 'recharts';

export default function Chart() {
  const data = [
    {
      name: 'Jan',
      "Active User": 4000,
    },
    {
      name: 'Feb',
      "Active User": 3000,
    },
    {
      name: 'Mar',
      "Active User": 5000,
    },
    {
      name: 'Apr',
      "Active User": 2000,
    },
    {
      name: 'May',
      "Active User": 1000,
    },
    {
      name: 'Jun',
      "Active User": 3500,
    },
    {
      name: 'Jul',
      "Active User": 4500,
    },
    {
      name: 'Aug',
      "Active User": 1000,
    },
    {
      name: 'Sep',
      "Active User": 2500,
    },
    {
      name: 'Oct',
      "Active User": 1200,
    },
    {
      name: 'Nov',
      "Active User": 4000,
    },
    {
      name: 'Dec',
      "Active User": 2000,
    },

  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}
