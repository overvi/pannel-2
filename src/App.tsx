import { ConfigProvider } from "antd";
import "./App.css";
import Home from "./pages/Home";

const customTheme = {
  components: {
    Segmented: {
      itemActiveBg: "orange",
      itemHoverBg: "orange",
      itemSelectedBg: "orange",
      itemSelectedColor: "white",
    },
  },
};

function App() {
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Home />
      </ConfigProvider>
    </>
  );
}

export default App;
