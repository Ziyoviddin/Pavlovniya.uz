//import Head from 'next/head'
import Hero from "../components/Hero"
import Info from "../components/Info"
import Service from "../components/Service"
import ChooseUs from "../components/ChooseUs"
import ProductCard from '../components/ProductCard'
import ProductCard1 from '../components/ProductCard1'
import Meta from '../components/Meta'

import styles from '../styles/Responsive.module.css'
//import Footer from '../components/Footer'



export default function Home({articles}) {
  console.log(articles)
  return (
    <div className={styles.all}>
      <Meta 
        title='Pavloniyachi.uz' 
        description='Ўзбекистонда Павловния Етиштириш' 
        content='Павловния дарахти'
      />
      <Hero/>
      <Info/>
      <Service/>
      <ChooseUs/>
      <ProductCard/>
      <ProductCard1/>
      
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
