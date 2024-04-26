import { useCallback, useMemo, useState } from "react";
import { Node, Edge, OnNodesChange, applyNodeChanges } from "reactflow";
import { LayoutDirectionT, getLayoutedElements } from "../../lib/dagre";
import { CardCommitteeChart } from "../../components/ReactFlow/CardCommitteeChart";
import { CardMetaChart } from "../../components/ReactFlow/CardMetaChart";

export function useReactFlow() {

  const nodeTypes = useMemo(() => ({ cardCommitteeChart: CardCommitteeChart, cardMetaChart: CardMetaChart }), [])
  
    const [nodes, setNodes] = useState([] as Node[])
    const [edges, setEdges] = useState([] as Edge[])
    const [layoutDirection, setLayoutDirection] = useState<LayoutDirectionT>("TB")
    
    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
      );
    
      const onLayout = useCallback(
        (direction: LayoutDirectionT) => {
          const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            nodes,
            edges,
            direction
          );
    
          setNodes([...layoutedNodes]);
          setEdges([...layoutedEdges]);
          setLayoutDirection(direction)
        },
        [nodes, edges]
      );

      return { 
        nodes,
        edges,
        layoutDirection,
        onNodesChange,
        onLayout,
        setNodes,
        setEdges,
        nodeTypes
    }
}