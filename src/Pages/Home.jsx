import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'reactstrap'

import '../styles/home.css'
import Helmet from '../Components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Service from '../services/Service'
import products from "../assets/data/products"
import CounterTimerImg from "../assets/images/counter-timer-img.png"

import ProductList from '../Components/UI/ProductList'
import Clock from '../Components/UI/Clock'

const Home = () => {

  const [trendingProducts, settrendingProducts] = useState(products)
  const [bestSalesProducts, setbestSalesProducts] = useState(products)
  const [mobileProducts, setMobileProducts] = useState(products)
  const [wirelessProducts, setWirelessProducts] = useState(products)
  const [popularProducts, setPopularProducts] = useState(products)

  const year = new Date().getFullYear()

  useEffect(() =>{
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'watch'
    )

    settrendingProducts(filteredProducts);
    setbestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts)

  }, []);

  return <Helmet title={"Home"}>
    <section  className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero_content'>
              <p className='hero_subtitle'>Trending product in {year}</p>
              <h2>Make Your Interior More Minimal & Modern</h2>
              <p>Modern interior design is shaped by a heritage of clean lines, geometric form, clear spaces, function and storage. Below we explore some of the concepts behind modern design style, how to distinguish each approach and how to create the look in your own home.</p>
              <motion.button whileTap={{scale: 1.2}} className='buy_btn'>
              <Link to = '/shop'>SHOP NOW</Link>
              </motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero_img'>
              <img src={heroImg} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Service />
    <section className='trending_products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts} />
        </Row>
      </Container>
    </section>

    <section className='best_sales'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title'>Best Sales</h2>
          </Col>
          <ProductList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>

    <section className='timer_count'>
      <Container>
        <Row>
        <Col lg='6' md='12'>
          <div className='clock_top-content'>
            <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
          </div>
          <Clock />

          <motion.button whileTap={{scale: 1.2}} className='buy_btn store_btn'>
            <Link to = "/shop">Visit Store</Link>
          </motion.button>
        </Col>
          <Col lg='6' md='12' className='text-end counter_img'>
            <img src={CounterTimerImg} alt='' />
          </Col>
        </Row>
      </Container>
    </section>

    <section className='new-arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section-title'>New Arrivals</h2>
          </Col>
          <ProductList data={mobileProducts} />
          <ProductList data={wirelessProducts} />
        </Row>
      </Container>
    </section>

    <section className='popular'>
      <Container>
        <Row>
          <Col lg ='12' className='text-center mb-5'>
            <h2 className='section-title'>Popular in Category</h2>
          </Col>
          <ProductList data={popularProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home