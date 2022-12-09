import {Circle as sCircle, Fill, Stroke, Style} from "ol/style";
import {Feature} from "ol";
import {Point} from "ol/geom";
import * as olProj from "ol/proj";
import {Vector as VectorLayer} from "ol/layer";
import {Vector as VectorSource} from "ol/source";

export const setMarker = ()=>{
    let _style = new Style({
        image: new sCircle({
            radius: 10,
            stroke: new Stroke({
                color: "#fff",
            }),
            fill: new Fill({
                color: "#3399CC",
            }),
        }),
    });
    let _feature = new Feature({
        geometry: new Point(olProj.fromLonLat([108.945951, 34.465262])),
    });
    _feature.setStyle(_style);
    let _marker = new VectorLayer({
        source: new VectorSource({
            features: [_feature],
        }),
    });
    this.openMap.addLayer(_marker);
}
