import { booleanPointInPolygon, polygonToLine, nearestPointOnLine, Coord, Point } from '@turf/turf'
import { Feature, Polygon } from 'geojson'
import { find, minBy } from 'lodash'
import { NearestPointOnLine } from '@turf/nearest-point-on-line'

const MM_111_32 = 0.000001 // about 111.32mm in Decimal degrees at equator

function adjustCoordinate (coord: Coord) {
  let a
  let b
  if ((coord as Feature<Point>).geometry != null) {
    [a, b] = (coord as Feature<Point>).geometry.coordinates
  } else if ((coord as Point).coordinates != null) {
    [a, b] = (coord as Point).coordinates
  } else {
    [a, b] = coord as [number, number]
  }
  return [a + MM_111_32, b + MM_111_32]
}

/**
 * Class to detect the {@link https://tools.ietf.org/html/rfc7946#section-3.1.6 | zone} (GeoJSON Polygon) of a given {@link https://tools.ietf.org/html/rfc7946#section-3.1.1 | point}. (Coordinates)
 *
 * @public
 */
export class GeoJsonZoneDetector {
  zones: Feature<Polygon>[]
  constructor (polygons: Feature<Polygon>[]) {
    this.zones = polygons.filter(z => z.geometry && z.geometry.type === 'Polygon')
  }

  findZoneExact (coordinates: Coord): Feature<Polygon> | null {
    return find(this.zones, z => booleanPointInPolygon(coordinates, z)) || null
  }

  findClosestZone (coordinates: Coord): Feature<Polygon> {
    const lines = this.zones.map(z => polygonToLine(z))
    const closestPoints = lines.map(l => nearestPointOnLine(l, coordinates))
    const closestPointFeature = minBy(closestPoints, p => p.properties.dist) as NearestPointOnLine
    const closestPoint = closestPointFeature.geometry as Point

    const closestZone = find(this.zones, z => booleanPointInPolygon(closestPoint.coordinates, z)) as Feature<Polygon>

    return closestZone || this.findClosestZone(adjustCoordinate(closestPoint.coordinates))
  }

  findZone (coordinates: Coord): Feature<Polygon> {
    return this.findZoneExact(coordinates) || this.findClosestZone(coordinates)
  }
}
