import { Sector } from "recharts"

interface Props {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    startAngle: number
    endAngle: number
    fill: string
    stroke: string
    payload: {
        title: string,
        value: number,
        fontSize?: number,
        fontWeight?: string | number,
        sufix?: string
    }
    percent: number
    value: number
}

export const renderActiveShape = (props: unknown) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        stroke,
        payload,
    } = props as Props;

    return (
        <g>
            <text
                x={cx}
                y={payload.sufix ? cy - 5 : cy}
                dy={5}
                fontSize={payload.fontSize ?? 12}
                fontWeight={payload.fontWeight ?? 400}
                textAnchor="middle" fill={'#2e2e2e'}
            >
                {payload.title}
            </text>
            {payload.sufix && <text
                x={cx}
                y={cy + 10}
                dy={5}
                fontSize={payload.fontSize ?? 12}
                fontWeight={payload.fontWeight ?? 400}
                textAnchor="middle" fill={'#2e2e2e'}
            >
                {payload.sufix}
            </text>
            }
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                stroke={stroke}
            />
        </g>
    );
};