import React from 'react';
import Scramble from 'react-scramble'
import styles from './mystyle.module.css'; 

export const Home = (props) => (
    <div className={styles.retro_font}>
    <p>This is a paragraph and I am writing on the HOME page</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p><p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <div className={styles.retro_font}><Scramble
        autoStart
        text="Hi, I'm Aaron Masanes! I am a Full Stack Engineer, ex-barista and now coffee-addict."
        steps={[
          {
            roll: 5,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'forward',
          },
        ]}
      />
      </div>
    </div>
)