import SomeExport from '../models';
export default SomeExport;
import React from 'react';
import { Link } from 'react-router-dom';


const DefaultComponent: React.FC = () => {
  return (
    <div>
      <Link to="/some-route">Go to Some Route</Link>
    </div>
  );
};

// export default DefaultComponent;

interface Def {
    data: any;
}

function Def(html: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
                {/* tried to copy link from cdn but className center not working
                tried to install npm i bootstrap and used the bootstrap link directly, still nothing */}
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link> */}
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">New Place</a>
                        </li>
                    </ul>
                </nav>

                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
