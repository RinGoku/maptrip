import { atom } from 'recoil';

export const MapViewMode = {
  Init: 'INIT',
  PutMarker: 'PUT_MARKER',
} as const;

type MapViewModeValue = typeof MapViewMode[keyof typeof MapViewMode];

export const mapViewModeState = atom<MapViewModeValue>({
  key: 'mapViewModeState',
  default: MapViewMode.Init,
});

export const mapboxRefState = atom<mapboxgl.Map | null>({
  key: 'mapboxRefState',
  default: null,
});
