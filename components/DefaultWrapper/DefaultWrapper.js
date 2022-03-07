import Head from "next/head";
import Header from "../Header/Header";


export default function DefaultWrapper(props){
    return(
        <>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
        
        </Head>
            <Header />
            {props.children}
        </>
    )
}