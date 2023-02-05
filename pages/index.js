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
  const nameTag = useRef();
  const projectsTag = useRef();
  function onLoad(spline) {
    const Name = spline.findObjectByName('Name');
    const projects = spline.findObjectByName('Projects')
    projectsTag.current = projects;
    nameTag.current = Name;
  }
  function clearAll() {
    nameTag.current.visible=false;
    projectsTag.current.visible=false;
  }
  return (
    <div style={{width:"100vw",height:"100vh"}}>
    <Spline onLoad={onLoad} scene="https://prod.spline.design/5uxNGoicFfDdXS6W/scene.splinecode" />
    <button style={{position:'fixed',top:'0px'}}type="button" onClick={()=>{clearAll(); nameTag.current.visible=true;}}>
      Arjun Rawal
      </button>
      <button style={{position:'fixed',top:'30px'}}type="button" onClick={()=>{clearAll(); projectsTag.current.visible=true;}}>
      Projects
      </button>
    </div>
  )
}
