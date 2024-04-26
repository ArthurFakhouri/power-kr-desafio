import { useSearchParams } from "react-router-dom"
import { ChartContainer, Container, Heading, StyledPanel, Title } from "./styles"
import { Breadcrumbs, FormControl, InputLabel, Link, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { BiHomeAlt } from "react-icons/bi"
import ReactFlow, { Background, Controls } from "reactflow"
import { proOptions } from "../../lib/react-flow"
import { useReactFlow } from "../../hooks/Chart/UseReactFlow"
import { LayoutDirectionT, getLayoutedElements } from "../../lib/dagre"
import { useEffect, useState } from "react"
import { createCommitteeEdge, createCommitteeNode } from "../../utils/CommiteChart"
import 'reactflow/dist/style.css';
import { useChartState } from "../../zustand/store"
import { SelectChart } from "../../components/Charts/SelectChart"
import { chartOptions } from "../../utils/ChartOptions"
import { createMetaEdge, createMetaNode } from "../../utils/MetaChart"

export function Chart() {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id') ?? '1'

    const [selectedChart, setSelectedChart] = useState(0)
    const { chartData } = useChartState()
    const {
        nodes,
        edges,
        onNodesChange,
        onLayout,
        layoutDirection,
        setNodes,
        setEdges,
        nodeTypes
    } = useReactFlow()

    useEffect(() => {
        if (chartData) {
            const charts = chartData.chart
            const nodes = []
            const edges = []

            for (const chart of charts) {

                let node = null
                if (chartOptions[selectedChart].value === 'META')
                    node = createMetaNode(chart)
                else
                    node = createCommitteeNode(chart)
                nodes.push(node)

                for (const child of chart.children) {
                    let edge = null
                    if (chartOptions[selectedChart].value === 'META')
                        edge = createMetaEdge(chart.id + "", child + "")
                    else
                        edge = createCommitteeEdge(chart.id + "", child + "")
                    edges.push(edge)
                }
            }
            let nodeWidth = 400, nodeHeight = 150

            if (chartOptions[selectedChart].value === 'META') {
                nodeWidth = 400
                nodeHeight = 200
            }

            const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
                nodes,
                edges,
                layoutDirection,
                nodeWidth,
                nodeHeight
            );

            setNodes(layoutedNodes)
            setEdges(layoutedEdges)
        }
    }, [chartData, layoutDirection, selectedChart, setNodes, setEdges])

    return (
        <Container>
            <Title>
                <Heading>Organograma</Heading>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Typography
                        color="text.primary"
                        fontFamily={'Roboto'}
                        fontSize={16}
                        fontWeight={500}
                    >
                        Organograma
                    </Typography>
                </Breadcrumbs>
            </Title>
            <ChartContainer>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onNodesChange={onNodesChange}
                    proOptions={proOptions}
                    fitView
                >
                    <StyledPanel position="top-left" style={{ display: 'flex' }}>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Layout</InputLabel>
                            <Select
                                labelId={`${id}-label`}
                                id={id}
                                label="Layout"
                                value={layoutDirection}
                                onChange={(event: SelectChangeEvent) => onLayout(event.target.value as LayoutDirectionT)}
                            >
                                <MenuItem value="TB">Vertical</MenuItem>
                                <MenuItem value="LR">Horizontal</MenuItem>
                            </Select>
                        </FormControl>

                        <SelectChart
                            title="Desempenho por"
                            chart={selectedChart}
                            setChart={setSelectedChart}
                            listChart={chartOptions}
                        />
                    </StyledPanel>
                    <Background color="transparent" />
                    <Controls />
                </ReactFlow>
            </ChartContainer>
        </Container>
    )
}