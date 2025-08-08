import { PortfolioTabs } from "../components/PortfolioTabs";
import { ThemeProvider } from "../components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioTabs />
    </ThemeProvider>
  );
}
