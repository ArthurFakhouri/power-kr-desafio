import { Outlet, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { Content, Layout } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getChartInfo } from "../../api/getChartInfo";
import { useEffect } from "react";
import { useChartState } from "../../zustand/store";

export function DefaultLayout() {

    const [searchParams] = useSearchParams()

    const id = searchParams.get('id') ?? '1'
    const { setChartData } = useChartState()

    const { data } = useQuery({
        queryKey: ['chart', id],
        queryFn: () => getChartInfo(id),
    })

    useEffect(() => {
        if (data) {
            setChartData(data)
        }
    }, [data, setChartData])

    return (
        <Layout>
            <Navigation />
            <Content>
                <Header />
                <Outlet />
            </Content>
        </Layout>
    )
}