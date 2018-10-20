import geojson from './__fixtures__/zonas.json'
import { GeoJsonZoneDetector } from './GeoJsonZoneDetector'
import { Polygon, GeoJsonProperties, Feature } from 'geojson'

const polygons = geojson.features as Feature<Polygon, GeoJsonProperties>[]

describe('GeoJsonZoneDetector', () => {
  test('constructor', () => {
    expect(() => {
      // tslint:disable-next-line
      new GeoJsonZoneDetector(polygons)
    }).not.toThrow()
  })
  test('findZoneExact', () => {
    expect(new GeoJsonZoneDetector(polygons).findZoneExact([-103.7282468, 19.2431936])).toHaveProperty(
      'properties',
      expect.objectContaining({ name: 'ZONA 4-D' })
    )
    expect(new GeoJsonZoneDetector(polygons).findZoneExact([-103.8008877, 19.2758187])).toBeNull()
  })

  test('findClosestZone', () => {
    expect(new GeoJsonZoneDetector(polygons).findClosestZone([-103.7282468, 19.2431936])).toHaveProperty(
      'properties',
      expect.objectContaining({ name: 'ZONA 4-D' })
    )
    expect(new GeoJsonZoneDetector(polygons).findClosestZone([-103.8008877, 19.2758187])).toHaveProperty(
      'properties',
      expect.objectContaining({ name: 'ZONA 7 SUR' })
    )
  })

  test('findZone', () => {
    expect(new GeoJsonZoneDetector(polygons).findZone([-103.7282468, 19.2431936])).toHaveProperty(
      'properties',
      expect.objectContaining({ name: 'ZONA 4-D' })
    )
    expect(new GeoJsonZoneDetector(polygons).findZone([-103.8008877, 19.2758187])).toHaveProperty(
      'properties',
      expect.objectContaining({ name: 'ZONA 7 SUR' })
    )
  })
})
