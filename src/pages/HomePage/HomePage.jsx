import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./index.css"
import { useState } from 'react'
import { useEffect } from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import { HeroSection } from '../../components/HeroSection/HeroSection'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'
import DevotedSection from '../../components/DevotedSection/DevotedSection'
import "./index.css"
import ContactUsSection from '../../components/ContactUsSection/ContactUsSection'
function HomePage() {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState([])
    const [isSortedAZ, setIsSortedAZ] = useState(false)
    const [isSortedZA, setIsSortedZA] = useState(false)


    useEffect(() => {
            fetch("http://localhost:3000/products")
                .then(res => res.json())
                .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        if (input) {
            return
        }
            fetch("http://localhost:3000/products")
                .then(res => res.json())
                .then(data => setProducts(data))
    }, [input,setInput])
    const sortAZ = () => {
        setIsSortedZA(false)
        setIsSortedAZ(true)
        setProducts(items => items.toSorted((a, b) => a.price - b.price))
    }
    const searchHandle = (e) => {
        setInput(e.target.value)
        setProducts(items => items.filter(it => it.title.includes(input)))
    }
    const sortZA = () => {
        setIsSortedAZ(false)
        setIsSortedZA(true)
        setProducts(items => items.sort((a, b) => b.price - a.price))
    }
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <HeroSection></HeroSection>
            <AboutUsSection></AboutUsSection>
            <DevotedSection></DevotedSection>
            <ContactUsSection></ContactUsSection>
            <section>
                <div className="home_operations_div">
                    <button onClick={() => sortAZ()}>A-Z</button>
                    <button onClick={() => sortZA()}>Z-A</button>
                    <input type="text" onChange={(e) => searchHandle(e)} />
                </div>
                <div className="card_container flex-wrap g-4">

                    {products ? products.map(item => <HomeCard key={item._id} product={item} />) : "Loading..."}
                </div>
            </section>
        </>
    )
}

export default HomePage