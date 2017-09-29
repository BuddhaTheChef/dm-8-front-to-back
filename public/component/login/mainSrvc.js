angular.module('fullstack').service('mainSrvc', function($http) {
    this.getUser = () => $http.get('/auth/me');
});
