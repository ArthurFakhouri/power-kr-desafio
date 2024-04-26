const position = { x: 0, y:0 }

type Meta = {
    id: number
    title: string
    aes: number[]
}

type NodeData = {
    id: number
    metas: Meta[]
    department: string
}

export function createMetaNode({
    id,
    department,
    metas
}:NodeData) {
    return {
        id: id + '',
        type: 'cardMetaChart',
        position,
        data: {
            id,
            department,
            metas
        }
    }
}

export function createMetaEdge(source: string, target: string) {
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