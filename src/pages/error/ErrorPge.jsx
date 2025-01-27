import React from 'react';
import { Helmet } from 'react-helmet-async';

const ErrorPge = () => {
    return (
        <div>
            <Helmet>
                <title>Error Page</title>
            </Helmet>
            <h2 className="text-5xl">404 Page Not Found</h2>
        </div>
    );
};

export default ErrorPge;