'use strict';

/**
 * @ngdoc function
 * @name oojsNotesApp.controller:ListofbooksCtrl
 * @description
 * # ListofbooksCtrl
 * Controller of the oojsNotesApp
 */
angular.module('oojsNotesApp')
  .controller('ListofbooksCtrl', ['$scope', function ($scope) {
        $scope.books = [
          {
          	id: 'oojs',
			title: 'Principles of Object Oriented Javascript',
			author: 'Nicholas C. Zakas',
			image: 'images/principles-of-object-oriented-javascript.png',
			chapters: [
				{
					title: 'Functions',
					url: 'functions'
				},
				{
					title: 'Understanding Objects',
					url: 'understanding-objects'
				},
				{
					title: 'Constructors and Prototypes',
					url: 'constructors-prototypes'
				},
				{
					title: 'Inheritance',
					url: 'inheritance'
				}
			]
          },
          {
          	id: 'good-parts',
			title: 'Javascript - The Good Parts',
			author: 'Douglas Crockford',
			image: 'images/javascript-good-parts.jpg',
          }
        ];

        $scope.getChapters = function(book) {

        }
    }]);