import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyles } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

export function App() {

  const toastContainer = <ToastContainer
    position="bottom-right"
    autoClose={3500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    style={{ fontSize: "16px", zIndex: 99 }}
  />

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
      {toastContainer}
    </QueryClientProvider>
  )
}