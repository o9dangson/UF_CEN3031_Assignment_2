/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'), 
    config = require('./config');



var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name: 'Library West'}, function(err, listing){
    if(err) throw err;
    console.log(listing);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.find({code: 'CABL'}, function(err, listing){
    if(err) throw err;
    listing.remove(function(err){
      if(err) throw err;
      console.log('Listing successfully deleted!');
    });
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.find({name: 'Phelps Laboratory'}, function(err, listing){
    if(err) throw err;
    //Code here to change the address
    listing.address = '1953 MUSEUM RD GAINESVILLE, FL 32611, United States';
    //save
    listing.save(function(err){
      if(err) throw err;
      console.log('Listing successfully updated');
    });
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
