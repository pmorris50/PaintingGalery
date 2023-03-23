const { AuthenticationError } = require("apollo-server-express");

const {Painting} = require ("../models") 
const {signToken} = require ("../utils/auth");