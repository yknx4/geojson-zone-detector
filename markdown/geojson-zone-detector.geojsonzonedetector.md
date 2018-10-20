[Home](./index) &gt; [geojson-zone-detector](./geojson-zone-detector.md) &gt; [GeoJsonZoneDetector](./geojson-zone-detector.geojsonzonedetector.md)

# GeoJsonZoneDetector class

Class to detect the [ zone](https://tools.ietf.org/html/rfc7946#section-3.1.6) (GeoJSON Polygon) of a given [ point](https://tools.ietf.org/html/rfc7946#section-3.1.1)<!-- -->. (Coordinates)

## Properties

| Property                                                        | Access Modifier | Type                 | Description |
| --------------------------------------------------------------- | --------------- | -------------------- | ----------- |
| [`zones`](./geojson-zone-detector.geojsonzonedetector.zones.md) |                 | `Feature<Polygon>[]` |             |

## Methods

| Method                                                                                           | Access Modifier | Returns                   | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------ | --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [`constructor(polygons)`](./geojson-zone-detector.geojsonzonedetector.constructor.md)            |                 |                           | Constructs a new instance of the [GeoJsonZoneDetector](./geojson-zone-detector.geojsonzonedetector.md) class |
| [`findClosestZone(coordinates)`](./geojson-zone-detector.geojsonzonedetector.findclosestzone.md) |                 | `Feature<Polygon>`        |                                                                                                              |
| [`findZone(coordinates)`](./geojson-zone-detector.geojsonzonedetector.findzone.md)               |                 | `Feature<Polygon>`        |                                                                                                              |
| [`findZoneExact(coordinates)`](./geojson-zone-detector.geojsonzonedetector.findzoneexact.md)     |                 | `Feature<Polygon> | null` |                                                                                                              |
