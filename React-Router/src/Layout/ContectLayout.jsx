import React from 'react'

import { Outlet } from 'react-router-dom';
import Contect from '../Pages/Contect';

const ContectLayout = () => {
  return (
    <div>
      <Contect />
      <Outlet />
    </div>
  )
};

export default ContectLayout;
