'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
      setTime({ days, hours, minutes, seconds })
      if (timeDifference === 0) {
        clearInterval(timerInterval)
      }
    }, 1000)
    return () => {
      clearInterval(timerInterval)
    }
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          prurchase comes with exclusive perks and offers, making this month a celebration of savy
          choices and amazing deals. Don't miss out!
        </p>
        <ul className={classes.stats}>
          <StatBox Label="Days" value={time.days} />
          <StatBox Label="Hours" value={time.hours} />
          <StatBox Label="Minutes" value={time.minutes} />
          <StatBox Label="Second" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}
const StatBox = ({ Label, value }: { Label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{Label}</p>
  </li>
)

export default Promotion
