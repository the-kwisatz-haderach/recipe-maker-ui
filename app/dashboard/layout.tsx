import React, { ReactNode } from 'react'
import Navigation from '@/components/Navigation/Navigation'
import styles from './styles.module.scss'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className={styles.gridContainer}>
      <header className={styles.gridHead}>
        <Navigation />
      </header>
      <nav className={styles.gridNav}>
        <ul>
          <li>
            <a href="/dashboard/recipes">Recipes</a>
          </li>
          <li>
            <a href="/dashboard/ingredients">Ingredients</a>
          </li>
          <li>
            <a href="/dashboard/pantry">Pantry</a>
          </li>
        </ul>
      </nav>
      <main className={styles.gridMain}>{children}</main>
    </div>
  )
}
