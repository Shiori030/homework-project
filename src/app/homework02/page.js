'use client' // 在瀏覽器進行渲染，可以使用hooks

import Image from 'next/image'
import styles from './homework02.module.css'

export default function Homework2() {
  return (
    <>
      <div className={`${styles.all}`}>
        <h1 className={`${styles.title}`}>吉伊卡哇</h1>
        <details className={`${styles.role}`}>
          <summary className={`${styles.name}`}>小八</summary>
          <p className={`${styles.detail}`}>一隻以貓咪為原型的角色，擁有藍色的「八字瀏海」，性格開朗、樂觀，並且非常健談，常常在漫畫中擔任解說角色。</p>
          <Image className={`${styles.photo}`} src="/hachi.avif" alt="hachi" width={50} height={50} />
        </details>
        <details className={`${styles.role}`}>
          <summary className={`${styles.name}`}>吉伊</summary>
          <p className={`${styles.detail}`}>以白色倉鼠為原型，性格膽小害羞，但內心充滿愛與關懷，是漫畫中的主角之一。開心時，它會哼起歌來，並喜歡抱著自己的小熊玩偶入睡。</p>
          <Image className={`${styles.photo}`} src="/chii.webp" alt="chii" width={60} height={60} />
        </details>
        <details className={`${styles.role}`}>
          <summary className={`${styles.name}`}>烏薩奇</summary>
          <p className={`${styles.detail}`}>以白色倉鼠為原型，性格膽小害羞，但內心充滿愛與關懷，是漫畫中的主角之一。開心時，它會哼起歌來，並喜歡抱著自己的小熊玩偶入睡。</p>
          <Image className={`${styles.photo}`} src="/usagi.webp" alt="usagi" width={60} height={60} />
        </details>
      </div>
    </>
  )
}
