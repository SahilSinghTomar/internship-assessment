import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { headerData } from '../../data.json';
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import CustomCursor from "../CustomCursor/CustomCursor";

import PropTypes from 'prop-types';

const Layout = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? <Preloader /> : (
        <>
          <CustomCursor />
          <Header data={headerData} user={user} />
          <Outlet />
        </>
      )}
    </>
  )
}

Layout.propTypes = {
  user: PropTypes.object.isRequired
}

export default Layout;
