import Head from "next/head"

const navbar = () => {
    return(
        <div>
            <Head>
                <title>Navbar</title>
            </Head>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
    )
}
 export default navbar