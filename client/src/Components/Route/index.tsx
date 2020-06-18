import React from 'react';
import { Route as RouterRoute } from 'react-router-dom';
import Header from './../Header';

const Route = (props: any) => {
    return (
        <>
            <Header />
            <RouterRoute
                {...props}
            />
        </>
    )
}
export default Route;