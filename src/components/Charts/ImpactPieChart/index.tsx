import { Cell, Pie, PieChart } from "recharts";

type DataChart = {
    name: string,
    value: number
}

type ImpactPieChartProps = {
    data: DataChart[]
}
const COLORS = ['#fd4233', '#009e53', '#ff9a00'];

export function ImpactPieChart({
    data
}: ImpactPieChartProps) {
    return (
        <PieChart width={90} height={60}>
            <Pie
                data={data}
                cx={55}
                cy={30}
                innerRadius={15}
                outerRadius={25}
                paddingAngle={1}
                dataKey="value"
            >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
}