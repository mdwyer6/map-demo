import * as geo from 'geo-helpers';

export function getClosestCity(list, coordinates) {
  let closestCity;
  let closestDist;
  let dist;
  for (let prop in list) {
    dist = geo.findGeodesic(list[prop].lat, list[prop].lng, coordinates.lat, coordinates.lng);
    if (dist < closestDist || closestDist === undefined) {
      closestCity = prop;
      closestDist = dist;
    }
  }

  return closestCity;
}