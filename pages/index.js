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
  const spline = useRef();
  const nameTag = useRef();
  const projectsTag = useRef();
  function onLoad(splineApp) {
    const Name = splineApp.findObjectByName('Name');
    const projects = splineApp.findObjectByName('Projects')
    projectsTag.current = projects;
    nameTag.current = Name;
    clearAll();
    nameTag.current.visible=true;
    spline.current=splineApp;
  }

  function clearAll() {
    nameTag.current.visible=false;
    projectsTag.current.visible=false;
  }
  return (
    <div style={{width:"100vw",height:"100vh"}}>
    <Spline onLoad={onLoad} scene="https://prod.spline.design/5uxNGoicFfDdXS6W/scene.splinecode" />
    <p className={styles.name} type="button" onMouseOver={()=>{clearAll(); nameTag.current.visible=true;}}>
      Arjun Rawal
      </p>
      <p className={styles.projects} type="button" onClick={()=>{spline.current.emitEvent('mouseHover', 'bottomDrawer');}}onMouseOver={()=>{clearAll(); projectsTag.current.visible=true;}}>
      Projects
      </p>  
    </div>
  )
}
