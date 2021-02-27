import { useState, useEffect } from 'react'

import styles from '../../styles/components/Countdown.module.css'

const initialTime = 0.05 * 60
let countdownTimeout: NodeJS.Timeout

export function Countdown() {
	const [time, setTime] = useState(initialTime)
	const [isActive, setActive] = useState(false)
	const [hasFinish, setHasFinish] = useState(false)

	const minutes = Math.floor(time / 60)
	const seconds = time % 60

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

	useEffect(() => {
		if(isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1)
			}, 1000)
		} else if(isActive && time === 0) {
			setHasFinish(true)
			setActive(false)
		}
	}, [isActive, time])

	function resetCountdown() {
		clearTimeout(countdownTimeout)
		setActive(false)
		setTime(initialTime)
	}

	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{hasFinish ? (
				<button 
					disabled
					className={styles.countdownButton} 
				>
					Ciclo encerrado
					<img src="icons/check.svg" alt=""/>
				</button>
			) : !isActive ? (
				<button 
					type="button" 
					className={styles.countdownButton} 
					onClick={() => setActive(true)}
				>
					Iniciar um ciclo
				</button>
			) : (
				<button 
					type="button" 
					className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
					onClick={resetCountdown}
				>
					Abandonar ciclo
				</button>
			)}
		</div>
	)
}
