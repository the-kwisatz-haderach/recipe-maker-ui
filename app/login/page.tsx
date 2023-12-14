import LoginForm from './LoginForm'
import styles from './styles.module.css'

export default async function Page() {
  return (
    <div>
      <LoginForm />
      <a className={styles.signupLink} href="/signup">
        or create a new account
      </a>
    </div>
  )
}
