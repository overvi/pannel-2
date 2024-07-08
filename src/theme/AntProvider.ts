import { theme } from "antd";
import { useTheme } from "../components/ToggleColorMode";

const useAtheme = () => {
  const { darkMode } = useTheme();
  const { darkAlgorithm, defaultAlgorithm } = theme;

  return {
    components: {
      Segmented: {
        itemActiveBg: "orange",
        itemHoverBg: "orange",
        itemSelectedBg: "orange",
        itemSelectedColor: "white",
      },

      Slider: {
        trackBg: "orange",
        handleColor: "orange",
        handleActiveColor: "orange",
        trackHoverBg: "orange",
      },

      Tabs: {
        itemColor: darkMode !== "dark" ? "white" : "black",
        itemActiveColor: darkMode !== "dark" ? "white" : "black",
        itemHoverColor: darkMode !== "dark" ? "white" : "black",
        itemSelectedColor: darkMode !== "dark" ? "white" : "black",
        inkBarColor: "orange",
      },
    },

    token: {
      fontFamily: "yekan",
    },

    algorithm: darkMode == "dark" ? defaultAlgorithm : darkAlgorithm,
  };
};

export default useAtheme;
