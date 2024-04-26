import { toast } from "react-toastify"
import { useChartState } from "../../../zustand/store"
import { GaugeChart } from "../../Charts/GaugeChart"
import { ButtonCommittee, CommitteParticipants, Container, Department, GeneralPerformance, Impact, ImpactStatus, Info, ItemImpact, Name, ParticipantItem, ParticipantList, PerformanceItem, Photo, Profile } from "./styles"
import { ImpactPieChart } from "../../Charts/ImpactPieChart"
import { FaCircle } from "react-icons/fa"

type CardCommitteeChartProps = {
    id: number
    image: string
    name: string
    department: string
    valueInPercentage: number
    children: number[]
}

type DetailCommitteeChartProps = {
    data: CardCommitteeChartProps
}

const COLORS = ['#fd4233', '#009e53', '#ff9a00'];

export function DetailCommitteChart({
    data
}: DetailCommitteeChartProps) {

    const { chartData } = useChartState()

    const participants = chartData?.chart.filter(participant => data.children.includes(participant.id))

    const handleGoToCommittee = () => {
        toast.info("Visualização do comitê")
    }

    const dataChart = [
        { name: 'Group A', value: 25 },
        { name: 'Group B', value: 50 },
        { name: 'Group C', value: 25 },
    ];

    return (
        <Container>
            <Profile>
                <Photo size={128} src={data.image} alt={data.name} title={data.name} />
                <Info>
                    <Department>{data.department}</Department>
                    <Name>{data.name}</Name>
                </Info>
            </Profile>
            <CommitteParticipants>
                <strong>Comitê formado por</strong>
                <ParticipantList>
                    {participants?.map(participant => (
                        <ParticipantItem key={participant.id}>
                            <Photo
                                size={64}
                                src={participant.image}
                                alt={participant.name}
                                title={participant.name}
                            />
                        </ParticipantItem>
                    ))}
                    {participants?.length === 0 && <span>-</span>}
                </ParticipantList>
            </CommitteParticipants>
            <GeneralPerformance>
                <PerformanceItem>
                    Desempenho do comitê
                    <GaugeChart valueInPercentage={35} />
                </PerformanceItem>
                <PerformanceItem>
                    Pontuação média do comitê
                    <GaugeChart valueInPercentage={data.valueInPercentage} />
                </PerformanceItem>
            </GeneralPerformance>
            <Impact>
                <ItemImpact autoFocus>
                    Assumidos 152
                    <ImpactPieChart data={dataChart} />
                    <ImpactStatus>
                        <FaCircle fill={COLORS[1]} />
                        Alto impacto
                    </ImpactStatus>
                </ItemImpact>
                <ItemImpact>
                    Realizados 152
                    <ImpactPieChart data={dataChart} />
                    <ImpactStatus>
                        <FaCircle fill={COLORS[2]} />
                        Medio impacto
                    </ImpactStatus>
                </ItemImpact>
                <ItemImpact>
                    Pontos 1522/1522
                    <ImpactPieChart data={dataChart} />
                    <ImpactStatus>
                        <FaCircle fill={COLORS[0]} />
                        Baixo impacto
                    </ImpactStatus>
                </ItemImpact>
            </Impact>
            <ButtonCommittee onClick={handleGoToCommittee}>
                Ir para comitê
            </ButtonCommittee>
        </Container>
    )
}