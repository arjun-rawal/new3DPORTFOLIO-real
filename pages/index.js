import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Canvas,useFrame } from '@react-three/fiber'
import React from 'react'
import Triangle from '@/components/triangle'
import Spline from '@splinetool/react-spline';
// import Scene from '@/components/splined'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.cv}>
    <Spline  scene="https://prod.spline.design/5uxNGoicFfDdXS6W/scene.splinecode"/>
    </div>
  )
}
