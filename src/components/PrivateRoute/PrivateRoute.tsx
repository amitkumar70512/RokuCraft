import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../redux/store/store';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // will be used for normal user
  const isLoggedIn = useSelector((state: RootState) => state.loggedIn.isLoggedIn);
  const botData = useSelector((state: RootState) => state.bot.botData);
  
  console.log("bot data "+botData);
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
