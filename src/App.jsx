import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './shared/MainLayout'
import AdminLayout from './shared/AdminLayout'
import HomePage from './pages/HomePage/HomePage'
import BasketPage from './pages/BasketPage/BasketPage'
import WishlistPage from './pages/WishlistPage/WishlistPage'
import NotFound from './pages/NotFound/NotFound'
import AdminHomePage from './pages/AdminHomePage/AdminHomePage'
import AddPage from './pages/AddPage/AddPage'
import { HelmetProvider } from 'react-helmet-async'
import { BasketContextProvider } from './context/BasketContext'
import { WishlistContextProvider } from './context/WishlistContext'
import DetailPage from './pages/DetailPage/DetailPage'

function App() {

  return (
    <>
      <WishlistContextProvider>
        <BasketContextProvider>
          <HelmetProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/products' element={<MainLayout />}>
                  <Route index path='/products' element={<HomePage />}></Route>
                  <Route path='/products/basket' element={<BasketPage />}></Route>
                  <Route path='/products/wishlist' element={<WishlistPage />}></Route>
                  <Route path='/products/detail/:id' element={<DetailPage />}></Route>
                </Route>
                  <Route path='/products/*' element={<NotFound />}></Route>
                <Route path='/products/admin' element={<AdminLayout />}>
                  <Route path='/products/admin' element={<AdminHomePage />}></Route>
                  <Route path='/products/admin/addpage' element={<AddPage />}></Route>
                </Route>
                  <Route path='/products/admin/*' element={<NotFound />}></Route>
              </Routes>
            </BrowserRouter>
          </HelmetProvider>
        </BasketContextProvider>
      </WishlistContextProvider>
    </>
  )
}

export default App
