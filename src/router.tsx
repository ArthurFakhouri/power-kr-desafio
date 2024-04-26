import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Chart } from "./pages/Chart";

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Chart />} />
            </Route>
        </Routes>
    )
}