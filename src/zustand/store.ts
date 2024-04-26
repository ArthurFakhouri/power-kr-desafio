import { create } from "zustand";
import { ChartData } from "../api/getChartInfo";

type ChartState = {
    chartData: ChartData | null;
    setChartData: (data: ChartData) => void;
}

export const useChartState = create<ChartState>((set) => ({
  chartData: null,
  setChartData: (data: ChartData) => set({ chartData: data }),
}));