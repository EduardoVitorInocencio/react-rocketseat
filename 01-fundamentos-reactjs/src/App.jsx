import { Header } from "./components/Header";
import {Post} from "./Post"

import styles from './App.module.css'

import'./global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            <Post 
            author="Eduardo Inocencio" 
            content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate sunt incidunt in voluptatem iste ullam excepturi architecto recusandae, deleniti alias tempora eaque pariatur, omnis perferendis culpa exercitationem. Totam, fugiat."
            />
            <Post 
              author="Vitor Silva"
              content = "Um novo post muito louco!" 
            />
          </main>
      </div>
    </div>
  )
}

export default App

