import { ChangeEvent, SetStateAction } from "react"
import { ChartList, ChartOption, SelectChartBox } from "./styles"

type Chart = {
    value: string
    index: number
    label: string
}

type SelectChartProps = {
    title: string,
    chart: number,
    setChart: (chart: SetStateAction<number>) => void
    listChart: Chart[]
}

export function SelectChart({
    title,
    chart,
    setChart,
    listChart,
}: SelectChartProps) {

    function handleChangeDestinatario(event: ChangeEvent<HTMLInputElement>) {
        setChart(listChart.findIndex(item => item.value === event.target.value))
    }

    return (
        <SelectChartBox>
            <span>{title}</span>
            <ChartList onChange={handleChangeDestinatario}>
                {
                    listChart.map((item, index) => {
                        return (
                            <ChartOption key={item.index}>
                                <input type="radio" defaultChecked={index === chart}
                                    name="chart" value={item.value} />
                                {item.label}
                            </ChartOption>
                        )
                    })
                }
            </ChartList>
        </SelectChartBox>
    )
}