import '../globals.css'
import styles from '@/app/tests/page.module.css'

export default function TestsLayout({ children }) {
    return (
        <div className={styles.testslayout}>
            {children}
        </div>
    )
}