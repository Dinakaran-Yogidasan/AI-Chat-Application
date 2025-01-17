import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utils/constant';

const PrivateRoutes = () => {
    const {user} = useAuth();

  return (
    user ? <Outlet/> : <Navigate to={"/login"}/>
  )
}

export default PrivateRoutes