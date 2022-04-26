import {useEffect, useRef} from 'react';
import {Icon, LayerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';
import MarkerIcon from 'assets/img/pin.svg';
import * as S from './map.styled';

const iconSizes = {
  width: 26,
  height: 40,
  iconAnchor: 13,
};

const defaultCustomIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [iconSizes.width, iconSizes.height],
  iconAnchor: [iconSizes.iconAnchor, iconSizes.height],
});

function Map({location}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const markerLayerRef = useRef();

  useEffect(() => {
    if (map) {
      if (markerLayerRef.current) {
        markerLayerRef.current.clearLayers();
      }

      markerLayerRef.current = new LayerGroup().addTo(map);
      const marker = new Marker({
        lat: location.latitude,
        lng: location.longitude,
      });

      marker
        .setIcon(
          defaultCustomIcon,
        )
        .addTo(markerLayerRef.current);

    }
  }, [map, location.latitude, location.longitude]);

  return (
    <S.ContactsMapDiv
      ref={mapRef}
    />
  );
}

export default Map;
