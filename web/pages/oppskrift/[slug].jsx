import client from "../../client"
const Oppskrift = (props) => {
    console.log(props)
    const {recipe} = props
 
    return <h1> {recipe.name}</h1>
 }
 
 // Vi henter den oppskriften som matcher query slugen (det bakerste i url'en)
 Oppskrift.getInitialProps = async (context) => {
    const { slug = ""} = context.query
 return {
        recipe: await client.fetch(`*[_type == 'recipe' && slug.current == $slug][0]`,{slug})
    }
 }
 export default Oppskrift