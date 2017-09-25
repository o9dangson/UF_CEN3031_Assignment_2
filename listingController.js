angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = "";
    $scope.latLong = "";
    
    /*var unhideDetails= function() {
      var x = document.getElementbyID('details');
      if(x.style.visiblility = 'hidden')
        x.style.visiblility = 'visible';
    } */

    $scope.addListing = function() {
      var bld = {"code": $scope.new_code,
                  "name": $scope.new_name,
                  "coordinates": {"latitude": parseInt($scope.new_lat),
                        "longitude": parseInt($scope.new_long)},
                  "address": $scope.new_address};
      $scope.listings.push(bld);
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      //unhideDetails();
      $scope.detailedInfo=$scope.listings[index];
      $scope.latLong='(' + $scope.detailedInfo.coordinates.latitude + ', ' + $scope.detailedInfo.coordinates.longitude + ')';
    };
  }
]);