<template>
<div>
  <div class="ol-map" ref="olMap" id="map"></div>
</div>
</template>

<script>
import { Map, View, Feature } from "ol";
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import { defaults, FullScreen, MousePosition, ScaleLine } from 'ol/control'
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { XYZ, Vector as VectorSource } from "ol/source";
import * as olProj from "ol/proj";
import { Point } from "ol/geom";
import { Style, Fill, Stroke, Circle as sCircle } from "ol/style";

export default {
  name: "openlayers",
  components: {},
  data() {
    return {
      openMap: null,
    };
  },
  mounted() {
    this.initMap();
    // this.setMarker();
  },
  methods: {
    initMap() {
      console.log(1)
      this.openMap = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new XYZ({
              url: "https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
            }),
          }),
        ],
        view: new View({
          // 将青岛作为地图中心
          center: olProj.fromLonLat([120.38698, 36.07101]),
          zoom: 10,
        }),
        interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
        controls: defaults().extend([
          new FullScreen(), // 全屏
          new MousePosition(), // 显示鼠标当前位置的经纬度
          new ScaleLine()// 显示比例尺
        ])
      });
      this.openMap.on('click', e => {
        console.log('地图点击', e)
      })
    },
  },
}
</script>

<style scoped>
.ol-map{
  width: 100%;
  height: 800px;
}
</style>
