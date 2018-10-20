# GeoJsonZoneDetector

[![Version Badge][npm-img]][npm-url]

[npm-img]: https://img.shields.io/npm/v/geojson-zone-detector.svg
[npm-url]: https://www.npmjs.com/package/geojson-zone-detector

**_Tool to detect the zone (GeoJSON Polygon) of a given point. (Coordinates)_**

## Installation

### In Node.js

```bash
npm install geojson-zone-detector
```

### TypeScript

TypeScript is supported internally within each module, no installs required.

## [Documentation](markdown/geojson-zone-detector.md)

## Data in GeoJsonZoneDetector

GeoJsonZoneDetector uses <a href='http://geojson.org/'>GeoJSON</a> for all geographic data. GeoJsonZoneDetector expects the data to be standard <a href='http://en.wikipedia.org/wiki/World_Geodetic_System'>WGS84</a> longitude, latitude coordinates. Check out <a href='http://geojson.io/#id=gist:anonymous/844f013aae8354eb889c&map=12/38.8955/-77.0135'>geojson.io</a> for a tool to easily create this data.

> **NOTE:** GeoJsonZoneDetector expects data in (longitude, latitude) order per the GeoJSON standard.

Most GeoJsonZoneDetector functions work with GeoJSON features. These are pieces of data that represent a collection of properties (ie: population, elevation, zipcode, etc.) along with a geometry. GeoJSON has several geometry types such as:

- Point
- LineString
- Polygon
