import React, { useState } from "react"
import { Handle, NodeProps, Position } from "reactflow"
import { AeItem, Aes, CardContainer, Department, General, GeneralChart } from "./styles"
import { PieChartC } from "../../Charts/PieChart"
import { Select } from "../../../widgets/Select"
import { DetailMetaChart } from "../DetailMetaChart"
import { Dialog } from "../../../widgets/Dialog"

type Meta = {
    id: number
    title: string
    aes: number[]
}

type CardMetaChartProps = {
    id: number
    metas: Meta[]
    department: string
}

const colors = {
    GREEN: '#009e53',
    YELLOW: '#ff9a00',
    RED: '#fd4233',
} as const

export function CardMetaChart({
    data: {
        id,
        metas,
        department
    }
}: NodeProps<CardMetaChartProps>) {


    const [selectedMeta, setSelectedMeta] = useState(0)

    const totalMetaAeAvg = metas[selectedMeta].aes.reduce((acc, cur) =>
        acc + cur
        , 0
    ) / metas[selectedMeta].aes.length

    const color = totalMetaAeAvg > 66 ? colors.GREEN : totalMetaAeAvg > 33 ? colors.YELLOW : colors.RED

    const [openDialog, setOpenDialog] = useState(false)

    return (
        <React.Fragment key={id}>
            <Handle type="target" position={Position.Top} />
            <CardContainer color={color} onClick={() => setOpenDialog(value => !value)}>
                <Department>
                    {department}
                </Department>
                <General>
                    <Select
                        options={metas.map((meta) => ({ value: meta.id + "", label: meta.title }))}
                        selectedIndex={selectedMeta}
                        setSelectedIndex={setSelectedMeta}
                    />
                    <GeneralChart>
                        <PieChartC title={totalMetaAeAvg.toFixed() + "%"} value={totalMetaAeAvg} />
                    </GeneralChart>
                </General>
                <Aes>
                    {metas[selectedMeta].aes.map((ae, index) => (
                        <AeItem key={crypto.randomUUID()}>
                            <span>AE {(index + 1).toString().padStart(2, '0')}</span>
                            <PieChartC
                                title={ae.toFixed() + "%"}
                                value={ae}
                                innerRadius={15}
                                outerRadius={20}
                            />
                        </AeItem>
                    ))}
                </Aes>
            </CardContainer>
            <Handle type="source" position={Position.Bottom} id="cardMetaChart" />
            <Dialog
                open={openDialog}
                setOpen={setOpenDialog}
                content={
                    <DetailMetaChart />
                }
            />
        </React.Fragment>
    )
}