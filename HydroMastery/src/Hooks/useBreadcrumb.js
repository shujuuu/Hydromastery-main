import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";

import styles from './breadcrumb.module.css'

const pathNamingMap = {
    '': 'Home',
    'blog': 'Blog'
}

export default function useBreadcrumb(name) {
    const location = useLocation();
    const navigate = useNavigate();

    const item = useMemo(() => {
        const subPaths = location.pathname.split('/');

        const isActiveLink = (index) => index !== subPaths.length - 1;

        return subPaths.map((item, index) => <li className={isActiveLink(index)? styles.activeLink: styles.inActiveLink} onClick={isActiveLink(index)? () => navigate(`/${subPaths.slice(0,index+1).join('/')}`): undefined}>{pathNamingMap[item]}</li>)
    },[location]);

    return <section className="breadcrumbs">
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
            <h2>{name}</h2>
            <ol>
                {item}
            </ol>
            </div>

        </div>
    </section>;
}