import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Canvas,useFrame } from '@react-three/fiber'
import React, {useEffect, useRef} from 'react'
import Triangle from '@/components/triangle'
import Spline from '@splinetool/react-spline';

// import Scene from '@/components/splined'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const cube = useRef();
  function onLoad(spline) {
    const obj = spline.findObjectById('323c6622-9e0c-430b-a9a7-e6dc37ab444b');
    cube.current = obj;
  }
  function moveObj() {
    console.log(cube.current); 
    cube.current.position.x += 10;
  }
  return (
    <div style={{width:"100vw",height:"100vh"}}>
    <Spline onLoad={onLoad} scene="https://prod.spline.design/5uxNGoicFfDdXS6W/scene.splinecode" />
    <button style={{position:'fixed',top:'0px'}}type="button" onClick={moveObj}>
        Move Cube
      </button>
    </div>
  )
}
