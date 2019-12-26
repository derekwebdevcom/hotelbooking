import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer }
    from "react-icons/fa";

import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free cocktails',
                info: "Intrinsicly recaptiualize reliable customer service without intuitive interfaces.Seamlessly monetize future- proof."
            },
            {
                icon: <FaHiking />,
                title: 'Endless hiking',
                info: "Intrinsicly recaptiualize reliable customer service without intuitive interfaces.Seamlessly monetize future- proof."
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: "Intrinsicly recaptiualize reliable customer service without intuitive interfaces.Seamlessly monetize future- proof."
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: "Intrinsicly recaptiualize reliable customer service without intuitive interfaces.Seamlessly monetize future- proof."
            }
        ]
    }
    render() {
        return (
            <section className="services">

                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                return (
                    <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                    })}
                    </div>
            </section>
        );
    }
}