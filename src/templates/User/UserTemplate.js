import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';

const UserTemplate = () => {
    const { isLoading } = useSelector((state) => state.loadingSlice);
  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className='relative'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default UserTemplate