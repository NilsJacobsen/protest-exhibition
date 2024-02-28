import React, { Fragment } from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "../helper/mapHook";


export const Markers = () => {
  const { markers }: any = useStateMap();
  return (
    <Fragment>
      {markers.map((marker: any, index: number) => (
        <Marker
          key={index}
          //@ts-ignore
          offsetTop={0}
          offsetLeft={0}
          latitude={marker[0]}
          longitude={marker[1]}
          color={"#9B9ECE"}
        >
          
        </Marker>
      ))}
    </Fragment>
  );
};