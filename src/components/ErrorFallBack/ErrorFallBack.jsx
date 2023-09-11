import React, { memo } from 'react'
import { Navigate } from 'react-router-dom';

const ErrorFallBack = ({ error }) => {
  setTimeout(() => {
    window.location.reload(true);
  }, 2000)
  return (
    // <Navigate to={'/'} />
    <></>
  );
}

export default memo(ErrorFallBack)