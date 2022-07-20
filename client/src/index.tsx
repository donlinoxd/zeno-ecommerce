import ReactDOM from "react-dom/client";
import App from "./App";
import StyledThemeProvider from "./components/styled/StyledThemeProvider";
import { ReduxProvider } from "./redux/ReduxProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <ReduxProvider>
      <StyledThemeProvider>
        <App />
      </StyledThemeProvider>
    </ReduxProvider>
  </QueryClientProvider>
);
