angular.module('fullstack').controller('mainCtrl', function (mainSrvc, $scope) {
    mainSrvc.getUser().then(response => {
        console.log(response);
        $scope.user = response.data;
    })
})
