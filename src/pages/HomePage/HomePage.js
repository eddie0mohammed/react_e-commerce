import React from 'react'

// import './HomePage.styles.scss';
import styled from 'styled-components';

import Directory from '../../components/directory/directory';

const HomePage = () => {

    const Homepage = styled.div`
          display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 80px;
    `;
    return (
        <Homepage>
            <Directory />
        </Homepage>
    )
}


export default HomePage
