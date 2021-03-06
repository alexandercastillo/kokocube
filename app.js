'use strict'

var App = angular.module('App', ['Koko','ngRoute','ngStorage','ngAnimate','ngMaterial','door3.css']);

App.config(function($routeProvider) {
  
  $routeProvider
    .when('/start', {
      templateUrl: 'pages/start/start.html',
      controller: 'startCtrl',
      css: 'pages/start/start.css'
    })
    .when('/game/:id', {
      templateUrl: 'pages/game/game.html',
      controller: 'gameCtrl',
      css: 'pages/game/game.css'
    })
    .when('/results', {
      templateUrl: 'pages/results/results.html',
      controller: 'resultsCtrl',
      css: 'pages/results/results.css'
    })
    .when('/about', {
      templateUrl: 'pages/about/about.html',
      controller: 'aboutCtrl',
      css: 'pages/about/about.css'
    })
    .when('/share', {
      templateUrl: 'pages/share/share.html',
      controller: 'shareCtrl',
      css: 'pages/share/share.css'
    })
    .when('/error', {
      templateUrl: 'pages/error/error.html',
      css: 'pages/error/error.css'
    })
    .otherwise({
      redirectTo: '/start'
    });

});