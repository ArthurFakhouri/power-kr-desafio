import { useSearchParams } from "react-router-dom";
import { useChartState } from "../../zustand/store";
import { Container, User } from "./styles";

export function Header() {

    const [searchParams] = useSearchParams()
    const { chartData } = useChartState()

    const id = searchParams.get('id') ?? '1'
    const user = chartData?.chart.find(user => user.id === Number(id))

    return (
        <Container>
            <User src={user?.image} />
        </Container>
    )
}