

angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */


  var listings={code:$scope.newListing.code,
  name:$scope.newListing.name,
  address:$scope.newListing.address,
};
     $scope.listings.push($scope.newListing);
   $scope.newListing={};
Listings.create(listings);


};

    $scope.deleteListing = function(index) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful,
		navigate back to 'listing.list'. Otherwise, display the error.
       */
       var listindex = $scope.listings[index];
    Listings.delete(listindex._id).then(function(response) {
      //   res.json(listing);
     }, function(error) {
       console.log('Unable to delete:', error);
     });
     $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
}
]);
