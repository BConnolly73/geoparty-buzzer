import React from 'react';
import { Route as RouterRoute } from 'react-router-dom';
import Header from './../Header';

type Props = {
    exact: boolean,
    path: string,
    Component: React.FunctionComponent,
    pageProps?: object
};

const Route = (props: Props) => {
    const { exact, path, Component, pageProps } = props;

    const ComponentToRender = (pageProps: any) => (
        <Component
            {...pageProps}
        />
    );

    return (
        <>
            <Header />
            <RouterRoute
                exact={exact}
                path={path}
                component={() => ComponentToRender(pageProps)}
            />
        </>
    )
}
export default Route;