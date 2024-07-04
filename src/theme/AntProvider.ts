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
    },
    algorithm: darkMode === "dark" ? defaultAlgorithm : darkAlgorithm,
  };
};

export default useAtheme;
