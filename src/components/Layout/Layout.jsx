import React, { useContext, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet, createHashRouter } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import UserDetailContext from '../../context/UserDetailContext'
import { useMutation } from 'react-query'
import { createUser } from '../../utils/api'
import useFavourites from '../../hooks/useFavourites'
import useBookings from '../../hooks/useBookings'

const Layout = () => {
  useFavourites()
  useBookings()
  const { isAuthenticated, user,getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email),
  });

  useEffect(() => {
    // const getTokenAndRegister = async () => {

    // const res=await getAccessTokenWithPopup({
    //   authorizationParams:{
    //     audience:"http://localhost:8000",
    //     scope:"openid profile email"
    //   }
    // })
    // localStorage.setItem("access_token",res)
    // setUserDetails((prev)=>({...prev,token:res}))
    // console.log(res)
    // }


    isAuthenticated && mutate();
    // isAuthenticated && getTokenAndRegister()
  }, [isAuthenticated]);
  return (
    <>
    
    <div style={{backgroundColor:"var(--black)",overflow:"hidden"}}>
        <Header/>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout