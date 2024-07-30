import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { useDispatchMap } from "../helper/mapHook";
import { Markers } from "./Markers";

export const Map = () => {
  const mapDispatch = useDispatchMap();

  const [mapViewport, setMapViewport] = useState({
    height: "100vh",
    width: "100wh",
    zoom: 4
  });

  const onMove = React.useCallback(({viewState}: any) => {
    const newCenter = [viewState.longitude, viewState.latitude];
    setMapViewport(newCenter as any);
  }, [])

  useEffect(() => {
    setMapViewport({
      height: "100vh",
      width: "100wh",
      //@ts-ignore
      longitude: "7.2246114",
      latitude: "51.536251",
      zoom: 16
    })
  }, []); 

  //@ts-ignore
  useEffect(() => {
    console.log("add marker")
    //@ts-ignore
    mapDispatch({ type: "REMOVE_MARKER", payload: { marker: [51.537951, 7.2270114] } })
    //@ts-ignore
    mapDispatch({ type: "ADD_MARKER", payload: { marker: [51.537951, 7.2270114] } })
  }, [])



  return (
    <ReactMapGL
      {...mapViewport}
      mapboxAccessToken="pk.eyJ1Ijoibmlsc2phY29ic2VuIiwiYSI6ImNrZm9iYmc2ZzF0YjAydHFoMTlncTVidDYifQ._dfTx0ZMFo96_-Zq3jykMA"
      mapStyle="mapbox://styles/nilsjacobsen/ckusebxfycigb17s00prk3qdz"
      //@ts-ignore
      onViewportChange={setMapViewport}
      onMove={onMove}
    >
      <Markers/>
    </ReactMapGL>
  );
};
