
import styles from './styles/switch.module.scss'

const Switch = ({ checked, setChecked, handleChange }) => {
  return (
    <label className={styles.switch}>
      <input
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  )
}

export default Switch
