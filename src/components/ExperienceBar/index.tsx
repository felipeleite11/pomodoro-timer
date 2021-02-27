import { useEffect, useState } from 'react'

import styles from '../../styles/components/ExperienceBar.module.css'

const maxExperience = 1000

export function ExperienceBar() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if(progress < 100) {
			setTimeout(() => {
				setProgress(progress + 0.5)
			}, 10);
		}
	}, [progress])

	return (
		<header className={styles.experienceBar}>
			<span>0xp</span>
			<div>
				<div style={{ width: `${progress}%` }}></div>

				{progress > 0 && progress < 100 && (
					<span className={styles.currentExperience} style={{ left: `${progress}%` }}>
						{maxExperience / 100 * progress}xp
					</span>
				)}
			</div>
			<span className={progress === 100 ? styles.reachedExperience : ''}>{maxExperience}xp</span>
		</header>
	)
}
