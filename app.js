var app = angular.module('plunker', ['ui.grid']);

app.controller('MainCtrl', ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {
  $scope.clickMe = clickMe;
  
  $scope.gridOptions = {
    data: [ 
        { col1: "Hello", col2: "World", col3: "tester"},
        { col1: "Hello A", col2: "World A", col3: "tester a"},
        { col1: "Hello B", col2: "World A", col3: "tester a"}
    ],
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
      gridApi.core.on.renderingComplete(gridDrawn());
    },
	};

  function gridDrawn() {
	  var c = $scope.gridOptions.columnDefs.length;
	  // alert(c);
  }
	
	function clickMe(){
	  var c = $scope.gridOptions.columnDefs.length;
	  
    $scope.gridOptions.columnDefs.push({
	    field: "colButton", displayName: "Push Me",
	    cellTemplate:'<div><button>Click Here</button></div>'
	  });	
	}
}]);
