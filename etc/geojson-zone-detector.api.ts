// @public
class GeoJsonZoneDetector {
  constructor(polygons: Feature<Polygon>[]);
  // (undocumented)
  findClosestZone(coordinates: Coord): Feature<Polygon>;
  // (undocumented)
  findZone(coordinates: Coord): Feature<Polygon>;
  // (undocumented)
  findZoneExact(coordinates: Coord): Feature<Polygon> | null;
  // (undocumented)
  zones: Feature<Polygon>[];
}

// (No @packagedocumentation comment for this package)
