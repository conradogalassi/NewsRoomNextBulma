import Link from "next/link";
import React, { Component } from "react";
import Router from "next/router";

const categorias = [
    { id: "1", name: "Política" },
    { id: "2", name: "Internacionales" },
    { id: "3", name: "Tecnología" },
    { id: "4", name: "Espectáculos" },
    { id: "5", name: "Deportes" }
  ];

class NavigationBar extends Component {
    constructor(props){
        super(props);

        this.state= { 
            input:""
        }

        this.filterNews = this.filterNews.bind(this);
        this.toggleStyles = this.toggleStyles.bind(this);
    }

    toggleStyles = (event) => {
        document.querySelector('#burger').classList.toggle('is-active')
        document.querySelector('#navbarmenu').classList.toggle('is-active')
    }

    inputChangedHandler(event) {
        this.setState({ input: event.target.value });
      }
    
    filterNews() {
        Router.push(`/search/${this.state.input}`, `/search/${this.state.input}`);
      }

    render() {
        const { input } = this.state;

        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="/static/acamica.jpg" />
                    </a>
                    <a id="burger" onClick={this.toggleStyles} 
                        role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarmenu" className="navbar-menu">
                    <div className="navbar-start">
                        <Link prefetch href="/">
                        <a className="navbar-item">Home</a>
                        </Link>
                        {categorias.map(item => (
                            <Link key={item.id} href="/category/[id]" as={`/category/${item.id}`}>
                            <a className="navbar-item">{item.name}</a>
                            </Link>
                        ))}  
                    </div>
                    <div className="navbar-end">
                        <div className="field has-addons navbar-item">
                            <div className="control">
                                <input className="input" type="text" value={input} onChange={event => this.inputChangedHandler(event)} placeholder="Leer mas sobre.."/>
                            </div>
                            <div className="control">
                                <a className="button is-info" onClick={this.filterNews}>Buscador de noticias</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
