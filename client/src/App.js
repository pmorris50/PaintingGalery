import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Footer from "./componets/Footer";
import { Container } from "react-bootstrap";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Shop from './pages/Shop';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
}
)

function App() {
  const style = {
    background: {
      backgroundColor: 'whitesmoke',
      height: "100vh",
      width: "100vw",
      position: 'fixed',
      top: 0,
      left: 0, 

    }
  }
  return (
    <ApolloProvider client = {client}>
      <Router>
        <div style = {style.background}>
          <Header />
          <Container>
            <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/about" element = {<About/>} />
             <Route path = "/about" element = {<Shop/>} />
          </Routes>
          </Container>
          <Footer />
       
        </div>
      </Router>
    </ApolloProvider>
    

  );
}

export default App;
