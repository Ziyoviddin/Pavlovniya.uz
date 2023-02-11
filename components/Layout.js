import styles from "../styles/Layout.module.css"
import Navbar from "./Navbar"
import TopNav from "./TopNav"
import Footer from "./Footer"
import Meta from "./Meta"

const Layout = ({children}) => {
    return (
        <>
            <Meta/>
            <TopNav/>
            <Navbar/>
            <div className={styles.container}>
               <main className={styles.main}>
                 {children}
                </main> 
            </div>
            <Footer/>
        </>
    )
}
export default Layout