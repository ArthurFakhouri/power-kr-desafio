import { toast } from "react-toastify";
import { formatCmpctNumber } from "../../../utils/CompactNumbers";
import { PieChartC } from "../../Charts/PieChart";
import { Amount, Averages, BalanceAndGlobalStatus, ButtonMeta, Container, MetaChartContainer, Section, Text, TextValues, Title } from "./styles";
import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { metaChartData } from "../../../utils/MetaChartData";

const colors = {
    RED: '#fd4233',
    GREEN: '#009e53',
    YELLOW: '#ff9a00',
    PURPLE: '#6200ee',
    BLUE: '#3366cc',
    SKYBLUE: '#64c1dc'
};


export function DetailMetaChart() {

    const handleGoToMeta = () => {
        toast.info("Visualização da meta")
    }

    return (
        <Container>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </Text>
            <MetaChartContainer>
                <ResponsiveContainer width={"100%"} height={240}>
                    <ComposedChart margin={{ left: -35 }} barGap={1} data={metaChartData}>
                        <XAxis dataKey="name" fontSize={8} />
                        <YAxis fontSize={8} tickCount={8} />
                        <CartesianGrid vertical={false} />
                        <Bar dataKey="meta" fill={colors.BLUE} />
                        <Bar dataKey="situacaoGlobal" fill={colors.RED} />
                        <Bar dataKey="mediaPrevista" fill={colors.YELLOW} />
                        <Bar dataKey="mediaRealizada" fill={colors.GREEN} />
                        <Bar dataKey="saldo" fill={colors.PURPLE} />
                        <Line type="linear" strokeWidth={2} dataKey="acumulado" dot={false} fill={colors.SKYBLUE} />
                    </ComposedChart>
                </ResponsiveContainer>
            </MetaChartContainer>
            <TextValues>
                <Section style={{ height: 'fit-content' }}>
                    <Title>Meta</Title>
                    <Amount>5.000.000</Amount>
                </Section>
                <Section style={{ height: 'fit-content' }}>
                    <Title>Acumulado</Title>
                    <Amount>4.239.000</Amount>
                </Section>
            </TextValues>
            <BalanceAndGlobalStatus>
                <Section>
                    <Title>Saldo</Title>
                    <PieChartC
                        title={formatCmpctNumber(-761000).toString()}
                        value={75}
                        innerRadius={30}
                        outerRadius={40}
                        color={colors.PURPLE}
                        fontSize={14}
                        fontWeight={700}
                    />
                </Section>
                <Section>
                    <Title>Situação Global</Title>
                    <PieChartC
                        title={"84.7%"}
                        value={75}
                        innerRadius={30}
                        outerRadius={40}
                        color={colors.RED}
                        fontSize={14}
                        fontWeight={700}
                    />
                </Section>
            </BalanceAndGlobalStatus>
            <Averages>
                <Section>
                    <Title>Média Realizada</Title>
                    <PieChartC
                        title={"416.6"}
                        sufix={"MI"}
                        value={75}
                        innerRadius={30}
                        outerRadius={40}
                        color={colors.GREEN}
                        fontSize={14}
                        fontWeight={700}
                    />
                </Section>
                <Section>
                    <Title>Média Prevista</Title>
                    <PieChartC
                        title={"416.6"}
                        sufix={"MI"}
                        value={75}
                        innerRadius={30}
                        outerRadius={40}
                        color={colors.YELLOW}
                        fontSize={14}
                        fontWeight={700}
                    />
                </Section>
            </Averages>
            <ButtonMeta onClick={handleGoToMeta}>
                Ir para meta
            </ButtonMeta>
        </Container >
    )
}