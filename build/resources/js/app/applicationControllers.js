
var applicationControllers = angular.module('applicationControllers', ['ngTable','ngGrid']);


applicationControllers
		.controller(
				"loginPageConroller",
				 function($scope, WSLOGINCLIENT, $location) {
					
					$scope.resultMessage = "";
					$scope.isshown = true;
					$scope.loginAction = function loginAction() {
						/*if ($scope.password == "" || $scope.username == "") {
							$scope.resultMessage = " erreur ";
                            
						} else {
							$scope.resultMessage = " Mot de passe ou non utilsateur non correcte";
							$scope.isshown = false;
							//$location.path("views/template.html");
							WSLOGINCLIENT.post({
								username : $scope.username,
								password : $scope.password
							});
						}*/
						$location.path("views/template.html");
					};
				});





applicationControllers.controller("templateController", function($scope) {
	window.alert("template");
});



// create the controller and inject Angular's $scope
applicationControllers.controller("contractController", function($scope,WSGETRATEPLANCLIENT,WSGETSERVICEPACKAGES,Base64,$http) {
	 
	
	
	
     	$scope.showModal = false;
        $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
         };
	     var rateplans ,spackages;
	     $scope.selectedRp;
	     
	    /* $scope.spackages = [{spShdes: "Moroni", spDescriptino: "jbali"},
	    	                 {spShdes: "Tiancum", spDescriptino: "Fehri"},
	    	                 {spShdes: "Jacob", spDescriptino: "9arwi"},
	    	                 {spShdes: "Nephi", spDescriptino: "Zoglami"},
	    	                 {spShdes: "Enos", spDescriptino: "Bouhali"},
	    	                 {spShdes: "Enos", spDescriptino: "Bouhali"},
	    	                 {spShdes: "Enos", spDescriptino: "Bouhali"},
	    	                 {spShdes: "Enos", spDescriptino: "Bouhali"},
	    	                 {spShdes: "Enos", spDescriptino: "Bouhali"},
	    	                 {spShdes: "Enos", spDescriptino: "Bouhali"},
	    	                 {spShdes: "Enos", spDescriptino: "Bouhali"}];*/
	   

	     
	   	$scope.Edit = function Edit(s){
		   window.alert(s.spShdes);
	    };
	    
	  
	    //Fonction permettant de récupérer tout les plants tarifaire
	    $scope.getRateplansAction = function getRateplansAction(){ 
	        $scope.rateplans = WSGETRATEPLANCLIENT.query();
	    };
	    
	     //Fonction permettant de récupérer tout les service packages
	    $scope.selectRpAction = function selectRpAction(){ 
	        $scope.spackages = WSGETSERVICEPACKAGES.query({rpShdes: $scope.selectedRp.ratePlanShdes});
	    };
});




applicationControllers.controller("monthlyBillController",function($scope){
	

});


