import React from "react"
import { useState, useEffect } from "react"
import { DataContainer } from "./DataContainer"
export const GetUserLocation=()=>{
    const [lat,setLat]=useState(null)
    const [lon,setLon]=useState(null)
    const [loading,setLoading]=useState(true)
    const getuser=()=>{
        if(!navigator.geolocation)
            return ;
        navigator.geolocation.getCurrentPosition(position=>{
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
          
            setLoading(false)
        },(err)=>{
            console.warn("Using default coordinates!")
            setLat(27.7103);
            setLon(85.3222);
            setLoading(false)
        })
    }
    useEffect(()=>{
        getuser();
    },[])
    return (
        <div>
            {!loading && <DataContainer lat={lat } lon={lon} />  }
        </div>
    )
}

