const position = { x: 0, y:0 }

type NodeData = {
    id: number,
    name: string
    image: string
    department: string
    valueInPercentage: number
    children: number[]
}

export function createCommitteeNode({
    id,
    name,
    image,
    department,
    valueInPercentage,
    children
}:NodeData) {
    return {
        id: id + '',
        type: 'cardCommitteeChart',
        position,
        data: {
            id,
            name,
            image,
            department,
            valueInPercentage,
            children
        }
    }
}

export function createCommitteeEdge(source: string, target: string) {
    return {
        id: `${source}-${target}`,
        source,
        target,
        type: 'step',
        style: {
            stroke: '#2e2e2e',
        },
    }
}