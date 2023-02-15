import Link from 'next/link'
import styles from 'styles/logo.module.css'

export default function Logo() {
	return (
		<Link legacyBehavior href="/">
		<a>CUBE</a>
		</Link>
	)
}
