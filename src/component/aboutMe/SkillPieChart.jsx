import { PieChart, Pie } from "recharts";

const data = [{ value: 100 }];
export default function SkillPieChart({ angle }) {
  const endAngle = (angle / 100) * 360 + 90;

  return (
    <PieChart width={95} height={100}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={endAngle}
        innerRadius={40}
        outerRadius={46}
        fill="#c0e3e7 "
      />
    </PieChart>
  );
}
