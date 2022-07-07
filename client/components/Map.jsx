// import React, { useRef, useEffect, useState } from 'react';
// //import mapboxgl from '!mapbox-gl';
// // import Worker from "worker-loader!./Worker.js";
// import './Map.css';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

// mapboxgl.accessToken = process.env.MAPBOX_API;
// mapboxgl.workerClass = MapboxWorker;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9, // starting zoom
//     projection: 'globe' // display the map as a 3D globe
// });

// map.on('style.load', () => {
//     map.setFog({}); // Set the default atmosphere style
// });





// useEffect(() => {
// if (map.current) return; // initialize map only once
// map.current = new mapboxgl.Map({
// container: mapContainer.current,
// style: 'mapbox://styles/mapbox/streets-v11',
// center: [lng, lat],
// zoom: zoom
// });
// });

// export default function Map (){
//   const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(-70.9);
// const [lat, setLat] = useState(42.35);
// const [zoom, setZoom] = useState(9);

//   return(
//     <div id='map'>
//     Map will render here
//     <div ref={mapContainer} className="map-container" />
//     </div>
//   )
// }