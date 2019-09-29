  const express = require( 'express' );
  const path = require( 'path' );
  const fs = require('fs');
  const app = express(  );
  const db = require( './models' );

  const mongooseConnection = require( './server/mongo' );
  const appUse = require( './server/appUse' );

  // const privateKey  = fs.readFileSync('./server.pass.key', 'utf8');
  // const certificate = fs.readFileSync('./server.pass.key', 'utf8');
  
  const firebaseApp = require('./server/fb_initialize_app');
  const admin = require('firebase-admin');

  const PORT = process.env.PORT || 3001;
  if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
  };

  appUse( app ); 

  firebaseApp( admin ); //firebase initialzie

  mongooseConnection(); // Mongoose

  require('./routes' )( app, db ); //Route files

  app.get( '*', ( req, res ) =>{
    res.sendFile( path.join( __dirname, './client/build/index.html' ) );
  });
  
  app.listen( PORT, (  ) =>{
    console.log( `🌎 ==> Server now on port ${PORT}!` );
  });
