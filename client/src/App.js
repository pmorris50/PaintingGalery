import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
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
  link: httpLink,
  cache: new InMemoryCache(),
}
)

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="area">
          <Header />
          <div className = 'routeContainer'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
