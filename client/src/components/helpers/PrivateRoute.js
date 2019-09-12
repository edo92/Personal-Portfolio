import React, { useContext, Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from './AuthProvider';
import CubeLoading from '../CubeLoading';

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return(
        <Route
            { ...rest }
            render={ routeProps => 
                !!currentUser ? (
                    <Suspense fallback={<CubeLoading/>}>
                        <RouteComponent { ...routeProps }/>
                    </Suspense>
                ) : (
                    <Redirect to={{
                        pathname:'/signin',
                        state:{ from: routeProps.location.pathname }
                    }}/>
                )
            }
        />
    )
};