import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { getCookie } from "./ApiHandler";

export const ProtectedRoute = (props) => {
  const { children } = props;

  if(getCookie('accesstoken')){
    return children;
  }else{
    return <Navigate to="/login" />;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};