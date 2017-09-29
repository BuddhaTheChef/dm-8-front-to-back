angular.module('fullstack').controller('homeCtrl', function($scope, user) {
    // user comes from resolve, will either be the user obj or error message we send from server
    console.log(user);
    $scope.user = user.data && user.data.err ? user.data.err : user;
})
