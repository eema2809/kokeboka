import client from "../client"
import { Recipe } from "../components/Recipe"
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const {recipes} = props
  console.log(recipes)
  return (
    <h1 className={styles.title}>
          Hei Trondheim
    </h1>,
    <div className="recipes-list">
    {recipes.map(recipe =>
          <Recipe recipe={recipe}/>
    )}
    </div>
  )
}

Home.getInitialProps = async () => {
  return {recipes: await client.fetch(`*[_type == 'recipe']`)}
}

