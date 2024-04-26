import { Pie, PieChart, ResponsiveContainer } from "recharts"
import { renderActiveShape } from "../../../utils/PieRenderChart"

type PieChartProps = {
    title: string
    value: number
    innerRadius?: number
    outerRadius?: number
    color?: string
    fontSize?: number
    fontWeight?: string | number
    sufix?: string
}

const colors = {
    GREEN: '#009e53',
    YELLOW: '#ff9a00',
    RED: '#fd4233',
} as const

export function PieChartC({
    title = "",
    value,
    innerRadius = 20,
    outerRadius = 25,
    color = "",
    fontSize,
    fontWeight,
    sufix
}: PieChartProps) {

    const colorChart = color !== "" ? color : value > 66 ? colors.GREEN : value > 33 ? colors.YELLOW : colors.RED

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={20} height={20}>
                <Pie
                    activeIndex={0}
                    activeShape={renderActiveShape}
                    data={[{ title, value, fontSize, fontWeight, sufix }]}
                    cx="50%"
                    cy="50%"
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={90}
                    endAngle={((-value * 360) / 100) + 90}
                    fill={colorChart}
                    dataKey={"value"}
                />
            </PieChart>
        </ResponsiveContainer>
    )
}