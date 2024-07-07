import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";
import { useTheme } from "../ToggleColorMode";

if (mapboxgl.getRTLTextPluginStatus() !== "loaded") {
  mapboxgl.setRTLTextPlugin(
    "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
    null
  );
}
const Map = () => {
  const { darkMode } = useTheme();
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2tpbGxzMTAxIiwiYSI6ImNreXczMW8zbTA0bTYyb213NDBhcm85OHcifQ.L4xxw4JR6VWAk7dbteyMcg";
    let map;
    let selectedMarker: any;

    map = new mapboxgl.Map({
      container: "map",
      style:
        darkMode !== "dark"
          ? "mapbox://styles/mapbox/dark-v10"
          : "mapbox://styles/mapbox/outdoors-v11",
      center: [51.389, 35.6892],
      zoom: 9,
      attributionControl: false, // Hide default attribution control
    });

    map.on("click", function (e) {
      if (selectedMarker) {
        selectedMarker.remove();
      }
      selectedMarker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(map);
    });

    map.on("render", () => {
      map.resize();
    });
  });

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-3xl my-4">
      <div
        dir="rtl"
        id="map"
        className="w-[870px] font-yekan rounded-3xl h-[353px]"
      ></div>
    </div>
  );
};

export default Map;
