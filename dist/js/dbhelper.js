"use strict";var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var DBHelper=function(){function n(){_classCallCheck(this,n)}return _createClass(n,null,[{key:"openDatabase",value:function(){return navigator.serviceWorker?idb.open("restaurants",1,function(e){e.createObjectStore("restaurants",{keyPath:"id"})}):Promise.resolve()}},{key:"populateDatabase",value:function(r){return n.openDatabase().then(function(e){if(e){var t=e.transaction("restaurants","readwrite"),n=t.objectStore("restaurants");return r.forEach(function(e){n.put(e)}),t.complete}})}},{key:"getIdbRestaurants",value:function(){return n.openDatabase().then(function(e){if(e)return e.transaction("restaurants").objectStore("restaurants").getAll()})}},{key:"fetchRestaurants",value:function(t){return n.getIdbRestaurants().then(function(e){return e.length?e:fetch(n.DATABASE_URL).then(function(e){return e.json()}).then(function(e){return n.populateDatabase(e),e})}).then(function(e){t(null,e)})}},{key:"fetchRestaurantById",value:function(r,a){n.fetchRestaurants(function(e,t){if(e)a(e,null);else{var n=t.find(function(e){return e.id==r});n?a(null,n):a("Restaurant does not exist",null)}})}},{key:"fetchRestaurantByCuisine",value:function(r,a){n.fetchRestaurants(function(e,t){if(e)a(e,null);else{var n=t.filter(function(e){return e.cuisine_type==r});a(null,n)}})}},{key:"fetchRestaurantByNeighborhood",value:function(r,a){n.fetchRestaurants(function(e,t){if(e)a(e,null);else{var n=t.filter(function(e){return e.neighborhood==r});a(null,n)}})}},{key:"fetchRestaurantByCuisineAndNeighborhood",value:function(r,a,u){n.fetchRestaurants(function(e,t){if(e)u(e,null);else{var n=t;"all"!=r&&(n=n.filter(function(e){return e.cuisine_type==r})),"all"!=a&&(n=n.filter(function(e){return e.neighborhood==a})),u(null,n)}})}},{key:"fetchNeighborhoods",value:function(a){n.fetchRestaurants(function(e,n){if(e)a(e,null);else{var r=n.map(function(e,t){return n[t].neighborhood}),t=r.filter(function(e,t){return r.indexOf(e)==t});a(null,t)}})}},{key:"fetchCuisines",value:function(a){n.fetchRestaurants(function(e,n){if(e)a(e,null);else{var r=n.map(function(e,t){return n[t].cuisine_type}),t=r.filter(function(e,t){return r.indexOf(e)==t});a(null,t)}})}},{key:"urlForRestaurant",value:function(e){return"./restaurant.html?id="+e.id}},{key:"imageUrlForRestaurant",value:function(e,t){return 10==e.id&&(e.photograph=10),"dist/img/"+e.photograph+"-"+t+".webp"}},{key:"mapMarkerForRestaurant",value:function(e,t){return new google.maps.Marker({position:e.latlng,title:e.name,url:n.urlForRestaurant(e),map:t,animation:google.maps.Animation.DROP})}},{key:"DATABASE_URL",get:function(){return"http://localhost:1337/restaurants"}}]),n}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiaGVscGVyLmpzIl0sIm5hbWVzIjpbIkRCSGVscGVyIiwibmF2aWdhdG9yIiwib3BlbiIsImlkYiIsInVwZ3JhZGVEYiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsInN0b3JlIiwicmVzdGF1cmFudHMiLCJ0cmFuc2FjdGlvbiIsInRoZW4iLCJkYiIsInB1dCIsInR4Iiwib2JqZWN0U3RvcmUiLCJjb21wbGV0ZSIsInJlc3RhdXJhbnQiLCJvcGVuRGF0YWJhc2UiLCJnZXRBbGwiLCJjYWxsYmFjayIsImdldElkYlJlc3RhdXJhbnRzIiwiZmV0Y2giLCJEQVRBQkFTRV9VUkwiLCJyZXNwb25zZSIsImpzb24iLCJwb3B1bGF0ZURhdGFiYXNlIiwiaWQiLCJmZXRjaFJlc3RhdXJhbnRzIiwiZXJyb3IiLCJmaW5kIiwiciIsImN1aXNpbmUiLCJyZXN1bHRzIiwiZmlsdGVyIiwiY3Vpc2luZV90eXBlIiwibmVpZ2hib3Job29kIiwibmVpZ2hib3Job29kcyIsIm1hcCIsInYiLCJpIiwidW5pcXVlTmVpZ2hib3Job29kcyIsImluZGV4T2YiLCJjdWlzaW5lcyIsInVuaXF1ZUN1aXNpbmVzIiwicGhvdG9ncmFwaCIsInNpemUiLCJnb29nbGUiLCJtYXBzIiwiTWFya2VyIiwicG9zaXRpb24iLCJsYXRsbmciLCJ0aXRsZSIsIm5hbWUiLCJ1cmwiLCJ1cmxGb3JSZXN0YXVyYW50IiwiYW5pbWF0aW9uIiwiQW5pbWF0aW9uIiwiRFJPUCJdLCJtYXBwaW5ncyI6ImlZQU9NQSwwSEFxQkYsT0FBQUMsVUFBV0MsY0FBWEMsSUFBQUQsS0FBQSxjQUFBLEVBQUEsU0FBQUUsR0FLREEsRUFBQUMsa0JBQUEsY0FBQSxDQUhLQyxRQUFTLFNBRFBDLFFBQVFILG1EQU1RSSxHQUlwQixPQUFBUixFQUFZUyxlQUFZQyxLQUFBLFNBQWVDLEdBQ3ZDLEdBQUFBLEVBQUEsQ0FFSUosSUFBQUEsRUFBQUEsRUFBTUssWUFBTixjQUFBLGFBREpMLEVBQUFNLEVBQUFDLFlBQUEs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LEtBbkNwQkMsSUFBQXJELEVBQUFzRCxpQkFBQXRDLEdBQ0FoQixJQUFBQSxFQUNFdUQsVUFBQVQsT0FBV0MsS0FBQVMsVUFBQUMsNENBcEtiLE1BQUEiLCJmaWxlIjoiZGJoZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuXHJcbi8qKlxyXG4gKiBDb21tb24gZGF0YWJhc2UgaGVscGVyIGZ1bmN0aW9ucy5cclxuICovXHJcblxyXG5cclxuY2xhc3MgREJIZWxwZXIge1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhYmFzZSBVUkwuXHJcbiAgICogQ2hhbmdlIHRoaXMgdG8gcmVzdGF1cmFudHMuanNvbiBmaWxlIGxvY2F0aW9uIG9uIHlvdXIgc2VydmVyLlxyXG4gICAqL1xyXG5cclxuICAvKnN0YXRpYyBnZXQgREFUQUJBU0VfVVJMKCkge1xyXG4gICAgY29uc3QgcG9ydCA9IDgwODAgLy8gQ2hhbmdlIHRoaXMgdG8geW91ciBzZXJ2ZXIgcG9ydFxyXG4gICAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0vZGF0YS9yZXN0YXVyYW50cy5qc29uYDtcclxuICB9Ki9cclxuICBzdGF0aWMgZ2V0IERBVEFCQVNFX1VSTCgpIHtcclxuICAgIGNvbnN0IHBvcnQgPSAxMzM3IC8vIENoYW5nZSB0aGlzIHRvIHlvdXIgc2VydmVyIHBvcnRcclxuICAgIHJldHVybiBgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L3Jlc3RhdXJhbnRzYDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvcGVuRGF0YWJhc2UoKSB7XHJcbiAgICBpZighbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIpe1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlkYi5vcGVuKCdyZXN0YXVyYW50cycsIDEsIGZ1bmN0aW9uICh1cGdyYWRlRGIpIHtcclxuICAgICAgdmFyIHN0b3JlID0gdXBncmFkZURiLmNyZWF0ZU9iamVjdFN0b3JlKCdyZXN0YXVyYW50cycsIHtcclxuICAgICAgICBrZXlQYXRoOiAnaWQnXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcG9wdWxhdGVEYXRhYmFzZShyZXN0YXVyYW50cyl7XHJcbiAgICByZXR1cm4gREJIZWxwZXIub3BlbkRhdGFiYXNlKCkudGhlbihmdW5jdGlvbihkYil7XHJcbiAgICAgIGlmKCFkYikgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIHR4ID0gZGIudHJhbnNhY3Rpb24oJ3Jlc3RhdXJhbnRzJywgJ3JlYWR3cml0ZScpO1xyXG4gICAgICB2YXIgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSgncmVzdGF1cmFudHMnKTtcclxuICAgICAgcmVzdGF1cmFudHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdGF1cmFudCkge1xyXG4gICAgICAgICAgc3RvcmUucHV0KHJlc3RhdXJhbnQpO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gdHguY29tcGxldGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRJZGJSZXN0YXVyYW50cygpe1xyXG4gICAgcmV0dXJuIERCSGVscGVyLm9wZW5EYXRhYmFzZSgpLnRoZW4oZnVuY3Rpb24oZGIpe1xyXG4gICAgICBpZighZGIpIHJldHVybjtcclxuXHJcbiAgICAgIHZhciB0eCA9IGRiLnRyYW5zYWN0aW9uKCdyZXN0YXVyYW50cycpO1xyXG4gICAgICB2YXIgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSgncmVzdGF1cmFudHMnKTtcclxuICAgICAgcmV0dXJuIHN0b3JlLmdldEFsbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhbGwgcmVzdGF1cmFudHMuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudHMoY2FsbGJhY2spIHtcclxuICAgIC8qbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIERCSGVscGVyLkRBVEFCQVNFX1VSTCk7XHJcbiAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7IC8vIEdvdCBhIHN1Y2Nlc3MgcmVzcG9uc2UgZnJvbSBzZXJ2ZXIhXHJcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBqc29uLnJlc3RhdXJhbnRzO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3RhdXJhbnRzKTtcclxuICAgICAgfSBlbHNlIHsgLy8gT29wcyEuIEdvdCBhbiBlcnJvciBmcm9tIHNlcnZlci5cclxuICAgICAgICBjb25zdCBlcnJvciA9IChgUmVxdWVzdCBmYWlsZWQuIFJldHVybmVkIHN0YXR1cyBvZiAke3hoci5zdGF0dXN9YCk7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTsqL1xyXG4gICAgcmV0dXJuIERCSGVscGVyLmdldElkYlJlc3RhdXJhbnRzKCkudGhlbigocmVzdGF1cmFudHMpID0+IHtcclxuICAgICAgaWYgKHJlc3RhdXJhbnRzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiByZXN0YXVyYW50cztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goREJIZWxwZXIuREFUQUJBU0VfVVJMKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pLnRoZW4ocmVzdGF1cmFudHMgPT4ge1xyXG4gICAgICAgICAgICBEQkhlbHBlci5wb3B1bGF0ZURhdGFiYXNlKHJlc3RhdXJhbnRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3RhdXJhbnRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlc3RhdXJhbnRzID0+IHtcclxuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdGF1cmFudHMpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGEgcmVzdGF1cmFudCBieSBpdHMgSUQuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5SWQoaWQsIGNhbGxiYWNrKSB7XHJcbiAgICAvLyBmZXRjaCBhbGwgcmVzdGF1cmFudHMgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICBEQkhlbHBlci5mZXRjaFJlc3RhdXJhbnRzKChlcnJvciwgcmVzdGF1cmFudHMpID0+IHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSByZXN0YXVyYW50cy5maW5kKHIgPT4gci5pZCA9PSBpZCk7XHJcbiAgICAgICAgaWYgKHJlc3RhdXJhbnQpIHsgLy8gR290IHRoZSByZXN0YXVyYW50XHJcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN0YXVyYW50KTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBSZXN0YXVyYW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgY2FsbGJhY2soJ1Jlc3RhdXJhbnQgZG9lcyBub3QgZXhpc3QnLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVzdGF1cmFudHMgYnkgYSBjdWlzaW5lIHR5cGUgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoUmVzdGF1cmFudEJ5Q3Vpc2luZShjdWlzaW5lLCBjYWxsYmFjaykge1xyXG4gICAgLy8gRmV0Y2ggYWxsIHJlc3RhdXJhbnRzICB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZ1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGaWx0ZXIgcmVzdGF1cmFudHMgdG8gaGF2ZSBvbmx5IGdpdmVuIGN1aXNpbmUgdHlwZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSByZXN0YXVyYW50cy5maWx0ZXIociA9PiByLmN1aXNpbmVfdHlwZSA9PSBjdWlzaW5lKTtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCByZXN0YXVyYW50cyBieSBhIG5laWdoYm9yaG9vZCB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hSZXN0YXVyYW50QnlOZWlnaGJvcmhvb2QobmVpZ2hib3Job29kLCBjYWxsYmFjaykge1xyXG4gICAgLy8gRmV0Y2ggYWxsIHJlc3RhdXJhbnRzXHJcbiAgICBEQkhlbHBlci5mZXRjaFJlc3RhdXJhbnRzKChlcnJvciwgcmVzdGF1cmFudHMpID0+IHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZpbHRlciByZXN0YXVyYW50cyB0byBoYXZlIG9ubHkgZ2l2ZW4gbmVpZ2hib3Job29kXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHJlc3RhdXJhbnRzLmZpbHRlcihyID0+IHIubmVpZ2hib3Job29kID09IG5laWdoYm9yaG9vZCk7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcmVzdGF1cmFudHMgYnkgYSBjdWlzaW5lIGFuZCBhIG5laWdoYm9yaG9vZCB3aXRoIHByb3BlciBlcnJvciBoYW5kbGluZy5cclxuICAgKi9cclxuICBzdGF0aWMgZmV0Y2hSZXN0YXVyYW50QnlDdWlzaW5lQW5kTmVpZ2hib3Job29kKGN1aXNpbmUsIG5laWdoYm9yaG9vZCwgY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IHJlc3RhdXJhbnRzXHJcbiAgICAgICAgaWYgKGN1aXNpbmUgIT0gJ2FsbCcpIHsgLy8gZmlsdGVyIGJ5IGN1aXNpbmVcclxuICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyID0+IHIuY3Vpc2luZV90eXBlID09IGN1aXNpbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmVpZ2hib3Job29kICE9ICdhbGwnKSB7IC8vIGZpbHRlciBieSBuZWlnaGJvcmhvb2RcclxuICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyID0+IHIubmVpZ2hib3Job29kID09IG5laWdoYm9yaG9vZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGFsbCBuZWlnaGJvcmhvb2RzIHdpdGggcHJvcGVyIGVycm9yIGhhbmRsaW5nLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBmZXRjaE5laWdoYm9yaG9vZHMoY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBHZXQgYWxsIG5laWdoYm9yaG9vZHMgZnJvbSBhbGwgcmVzdGF1cmFudHNcclxuICAgICAgICBjb25zdCBuZWlnaGJvcmhvb2RzID0gcmVzdGF1cmFudHMubWFwKCh2LCBpKSA9PiByZXN0YXVyYW50c1tpXS5uZWlnaGJvcmhvb2QpXHJcbiAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbSBuZWlnaGJvcmhvb2RzXHJcbiAgICAgICAgY29uc3QgdW5pcXVlTmVpZ2hib3Job29kcyA9IG5laWdoYm9yaG9vZHMuZmlsdGVyKCh2LCBpKSA9PiBuZWlnaGJvcmhvb2RzLmluZGV4T2YodikgPT0gaSlcclxuICAgICAgICBjYWxsYmFjayhudWxsLCB1bmlxdWVOZWlnaGJvcmhvb2RzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhbGwgY3Vpc2luZXMgd2l0aCBwcm9wZXIgZXJyb3IgaGFuZGxpbmcuXHJcbiAgICovXHJcbiAgc3RhdGljIGZldGNoQ3Vpc2luZXMoY2FsbGJhY2spIHtcclxuICAgIC8vIEZldGNoIGFsbCByZXN0YXVyYW50c1xyXG4gICAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50cygoZXJyb3IsIHJlc3RhdXJhbnRzKSA9PiB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBudWxsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBHZXQgYWxsIGN1aXNpbmVzIGZyb20gYWxsIHJlc3RhdXJhbnRzXHJcbiAgICAgICAgY29uc3QgY3Vpc2luZXMgPSByZXN0YXVyYW50cy5tYXAoKHYsIGkpID0+IHJlc3RhdXJhbnRzW2ldLmN1aXNpbmVfdHlwZSlcclxuICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGN1aXNpbmVzXHJcbiAgICAgICAgY29uc3QgdW5pcXVlQ3Vpc2luZXMgPSBjdWlzaW5lcy5maWx0ZXIoKHYsIGkpID0+IGN1aXNpbmVzLmluZGV4T2YodikgPT0gaSlcclxuICAgICAgICBjYWxsYmFjayhudWxsLCB1bmlxdWVDdWlzaW5lcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdGF1cmFudCBwYWdlIFVSTC5cclxuICAgKi9cclxuICBzdGF0aWMgdXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KSB7XHJcbiAgICByZXR1cm4gKGAuL3Jlc3RhdXJhbnQuaHRtbD9pZD0ke3Jlc3RhdXJhbnQuaWR9YCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN0YXVyYW50IGltYWdlIFVSTC5cclxuICAgKi9cclxuICBzdGF0aWMgaW1hZ2VVcmxGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQsIHNpemUpIHtcclxuICAgIGlmKHJlc3RhdXJhbnQuaWQgPT0gMTApIHJlc3RhdXJhbnQucGhvdG9ncmFwaCA9IDEwOyBcclxuICAgIHJldHVybiAoYGRpc3QvaW1nLyR7cmVzdGF1cmFudC5waG90b2dyYXBofS0ke3NpemV9LndlYnBgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcCBtYXJrZXIgZm9yIGEgcmVzdGF1cmFudC5cclxuICAgKi9cclxuICBzdGF0aWMgbWFwTWFya2VyRm9yUmVzdGF1cmFudChyZXN0YXVyYW50LCBtYXApIHtcclxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogcmVzdGF1cmFudC5sYXRsbmcsXHJcbiAgICAgIHRpdGxlOiByZXN0YXVyYW50Lm5hbWUsXHJcbiAgICAgIHVybDogREJIZWxwZXIudXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50KSxcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1B9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG1hcmtlcjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==