'use client';

import { useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button"
import styles from './page.module.css'
import github from '/public/icons/github.png';
import ai from '/public/icons/ai.png';
import axios from 'axios';

export default function Home() {
  return (
    <div className="body">
      <header className={styles.header}>
        <p>BytePrep</p>
      </header>
      <section className={styles.section}>
        <div className={styles.first}>
          <Image src={ai} alt="ai" width={30} height={30}/>
          <p>your personal ai interview coach</p>
        </div>
        <p className={styles.second}>Become confident for your next technical or behavioural interview using ai.</p>
        <p className={styles.third}>Practice with interview questions tailored to the job description and the company you are interviewing for.</p>
        <div className={styles.signHolder}>
          <Button className={styles.signButton}>Get started with Google</Button>        
        </div>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerName}>Andrew Arochukwu &copy; 2025</p>
        <a href="https://github.com/aarochuk/interview_buddy" target="_blank">
          <Image src={github} alt="github" width={30} height={30}/>
        </a>
      </footer>
    </div>
  );
}
