import GaugeComponent from 'react-gauge-component'

type GaugeChartProps = {
    valueInPercentage: number,
    matchColor?: boolean
}

export function GaugeChart({
    valueInPercentage,
    matchColor = false
}: GaugeChartProps) {
    return (
        <GaugeComponent
            type="semicircle"
            style={{
                transform: "translateY(-5px)",
                width: '100%',
                height: '100%',
            }}
            arc={{
                width: 0.2,
                padding: 0.05,
                cornerRadius: 0,
                subArcs: [
                    {
                        color: '#fd4233',
                    },
                    {
                        color: '#ff9a00',
                    },
                    {
                        color: '#009e53',
                    }
                ]
            }}
            pointer={{
                color: '#2e2e2e',
                animationDelay: 0,
                length: 0.5,
                width: 15
            }}
            labels={{
                tickLabels: {
                    hideMinMax: true,
                },
                valueLabel: {
                    matchColorWithArc: matchColor,
                    style: {
                        fill: '#2e2e2e',
                        textShadow: "unset",
                        transform: matchColor ? 'translateY(15px)' : 'translateY(20%)',
                        fontSize: matchColor ? 40 : 60,
                        fontWeight: "bold",
                    }
                }
            }}
            value={valueInPercentage}
        />
    )
}