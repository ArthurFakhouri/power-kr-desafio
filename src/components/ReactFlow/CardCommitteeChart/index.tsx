import { Handle, NodeProps, Position } from "reactflow";
import { CardContainer, Department, DepartmentInfo, Gauge, ProfileImage } from "./styles";
import { GaugeChart } from "../../Charts/GaugeChart";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Dialog } from "../../../widgets/Dialog";
import { DetailCommitteChart } from "../DetailCommitteChart";

type CardCommitteeChartProps = {
    id: number
    image: string
    name: string
    department: string
    valueInPercentage: number
    children: number[]
}

const colors = {
    GREEN: '#009e53',
    YELLOW: '#ff9a00',
    RED: '#fd4233',
} as const

export function CardCommitteeChart({
    data
}: NodeProps<CardCommitteeChartProps>) {

    const { id, image, name, department, valueInPercentage } = data

    const color = valueInPercentage > 66 ? colors.GREEN : valueInPercentage > 33 ? colors.YELLOW : colors.RED

    const [openDialog, setOpenDialog] = useState(false)

    const handleOrgChartGlobalMeta = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
        toast.info("Prévia dentro do card do organograma do geral da meta(global)")
    }

    return (
        <React.Fragment key={id}>
            <Handle type="target" position={Position.Top} />
            <CardContainer color={color} onClick={() => setOpenDialog(value => !value)}>
                <Department>
                    <ProfileImage title={name} src={image} />
                    <DepartmentInfo>
                        <strong>{department}</strong>
                        <span>{name}</span>
                    </DepartmentInfo>
                </Department>
                <Gauge onClick={handleOrgChartGlobalMeta}>
                    <GaugeChart valueInPercentage={valueInPercentage} matchColor />
                </Gauge>
            </CardContainer>
            <Handle type="source" position={Position.Bottom} id="cardCommitteeChart" />
            <Dialog
                open={openDialog}
                setOpen={setOpenDialog}
                content={
                    <DetailCommitteChart data={data} />
                }
            />
        </React.Fragment>
    )
}