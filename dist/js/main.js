"use strict";var map,restaurants=void 0,neighborhoods=void 0,cuisines=void 0,markers=[];document.addEventListener("DOMContentLoaded",function(e){fetchNeighborhoods(),fetchCuisines()}),fetchNeighborhoods=function(){DBHelper.fetchNeighborhoods(function(e,n){e?console.error(e):(self.neighborhoods=n,fillNeighborhoodsHTML())})},fillNeighborhoodsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.neighborhoods,t=document.getElementById("neighborhoods-select");e.forEach(function(e){var n=document.createElement("option");n.innerHTML=e,n.value=e,t.append(n)})},fetchCuisines=function(){DBHelper.fetchCuisines(function(e,n){e?console.error(e):(self.cuisines=n,fillCuisinesHTML())})},fillCuisinesHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.cuisines,t=document.getElementById("cuisines-select");e.forEach(function(e){var n=document.createElement("option");n.innerHTML=e,n.value=e,t.append(n)})},window.initMap=function(){self.map=new google.maps.Map(document.getElementById("map"),{zoom:12,center:{lat:40.722216,lng:-73.987501},scrollwheel:!1}),updateRestaurants()},updateRestaurants=function(){var e=document.getElementById("cuisines-select"),n=document.getElementById("neighborhoods-select"),t=e.selectedIndex,a=n.selectedIndex,r=e[t].value,o=n[a].value;DBHelper.fetchRestaurantByCuisineAndNeighborhood(r,o,function(e,n){e?console.error(e):(resetRestaurants(n),fillRestaurantsHTML())})},resetRestaurants=function(e){self.restaurants=[],document.getElementById("restaurants-list").innerHTML="",self.markers.forEach(function(e){return e.setMap(null)}),self.markers=[],self.restaurants=e},fillRestaurantsHTML=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants,n=document.getElementById("restaurants-list");e.forEach(function(e){n.append(createRestaurantHTML(e))}),addMarkersToMap()},createRestaurantHTML=function(e){var n=document.createElement("li"),t="small",a=t;window.matchMedia("screen and (min-width: 1000px)")?a="medium":window.matchMedia("screen and (min-width: 600px)")&&(a=t);var r=document.createElement("img");r.className="restaurant-img lazyload",r.setAttribute("data-src",DBHelper.imageUrlForRestaurant(e,a)),r.alt=e.name+" resturant picture",n.append(r);var o=document.createElement("h2");o.innerHTML=e.name,o.tabIndex=0,n.append(o);var s=document.createElement("p");s.innerHTML=e.neighborhood,s.tabIndex=0,n.append(s);var i=document.createElement("p");i.innerHTML=e.address,i.tabIndex=0,n.append(i);var l=document.createElement("a");return l.innerHTML="View Details",l.href=DBHelper.urlForRestaurant(e),n.append(l),n},addMarkersToMap=function(){(0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants).forEach(function(e){var n=DBHelper.mapMarkerForRestaurant(e,self.map);google.maps.event.addListener(n,"click",function(){window.location.href=n.url}),self.markers.push(n)})};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibmVpZ2hib3Job29kcyIsInJlc3RhdXJhbnRzIiwiY3Vpc2luZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZldGNoTmVpZ2hib3Job29kcyIsIkRCSGVscGVyIiwiZXJyb3IiLCJzZWxmIiwiY29uc29sZSIsImZpbGxOZWlnaGJvcmhvb2RzSFRNTCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNlbGVjdCIsImdldEVsZW1lbnRCeUlkIiwiZm9yRWFjaCIsIm5laWdoYm9yaG9vZCIsImNyZWF0ZUVsZW1lbnQiLCJvcHRpb24iLCJ2YWx1ZSIsImZldGNoQ3Vpc2luZXMiLCJmaWxsQ3Vpc2luZXNIVE1MIiwiY3Vpc2luZSIsImlubmVySFRNTCIsIm1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJ6b29tIiwiY2VudGVyIiwiYXBwZW5kIiwibGF0IiwibG5nIiwid2luZG93Iiwic2Nyb2xsd2hlZWwiLCJjU2VsZWN0IiwidXBkYXRlUmVzdGF1cmFudHMiLCJjSW5kZXgiLCJzZWxlY3RlZEluZGV4IiwibkluZGV4IiwiblNlbGVjdCIsInJlc2V0UmVzdGF1cmFudHMiLCJtYXJrZXJzIiwibSIsInNldE1hcCIsImZpbGxSZXN0YXVyYW50c0hUTUwiLCJyZXN0YXVyYW50IiwidWwiLCJjcmVhdGVSZXN0YXVyYW50SFRNTCIsInNtYWxsIiwibWF0Y2hNZWRpYSIsImFkZE1hcmtlcnNUb01hcCIsInNpemUiLCJpbWFnZSIsImltYWdlVXJsRm9yUmVzdGF1cmFudCIsIm1lZGl1bSIsIm5hbWUiLCJsaSIsInRhYkluZGV4IiwiYWRkcmVzcyIsIm1vcmUiLCJocmVmIiwidXJsRm9yUmVzdGF1cmFudCIsImFkZExpc3RlbmVyIiwibWFya2VyIiwibG9jYXRpb24iLCJ1cmwiLCJwdXNoIl0sIm1hcHBpbmdzIjoiYUFBQSxJQUNFQSxJQURFQyxpQkFBQUEsRUFDRkQsbUJBQUFBLEVBREZF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aEJELEVBQUczQixPQUFPMEIsR0FFVixJQUFNeEMsRUFBZWYsU0FBU2dCLGNBQWMsS0FDNUNELEVBQWFPLFVBQVl1QixFQUFXOUIsYUFYcENBLEVBQUEwQyxTQUFBLEVBYUFELEVBQUczQixPQUFPZCxHQVZWeUMsSUFBRzNCLEVBQUg3QixTQUFBZ0IsY0FBQSxLQWFBMEMsRUFBUXBDLFVBQVl1QixFQUFXYSxRQVgvQkEsRUFBTUgsU0FBT3ZELEVBQ2J1RCxFQUFBQSxPQUFLakMsR0FFTGtDLElBQUczQixFQUFPMEIsU0FBVnZDLGNBQUEsS0FLQXdDLE9BUUFHLEVBQUtyQyxVQUFZLGVBWGpCcUMsRUFBTTVDLEtBQUFBLFNBQWVmLGlCQUFTZ0IsR0FDOUJELEVBQUFBLE9BQUFBLEdBRUdjLEdBa0JMcUIsZ0JBQWtCLFlBQW9DLEVBQUF6QyxVQUFBQyxhQUFBQyxJQUFBRixVQUFBLEdBQUFBLFVBQUEsR0FBckJILEtBQUtSLGFBWHZCRSxRQUFTZ0IsU0FBQUEsR0FFdEIyQyxJQUFLQyxFQUFPeEQsU0FBU3lELHVCQUFyQmhCLEVBQUF2QyxLQUFBaUIsS0FDQWlDLE9BQUEvQixLQUFBdkIsTUFBQTRELFlBQUFDLEVBQUEsUUFBQSxXQWFJL0IsT0FBT2dDLFNBQVNKLEtBQU9HLEVBQU9FLE1BbEVwQzNELEtBQUFtQyxRQUFBeUIsS0FBQUgiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCByZXN0YXVyYW50cyxcclxuICBuZWlnaGJvcmhvb2RzLFxyXG4gIGN1aXNpbmVzO1xyXG52YXIgbWFwO1xyXG52YXIgbWFya2VycyA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEZldGNoIG5laWdoYm9yaG9vZHMgYW5kIGN1aXNpbmVzIGFzIHNvb24gYXMgdGhlIHBhZ2UgaXMgbG9hZGVkLlxyXG4gKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xyXG4gIGZldGNoTmVpZ2hib3Job29kcygpO1xyXG4gIGZldGNoQ3Vpc2luZXMoKTtcclxufSk7XHJcblxyXG4vKipcclxuICogRmV0Y2ggYWxsIG5laWdoYm9yaG9vZHMgYW5kIHNldCB0aGVpciBIVE1MLlxyXG4gKi9cclxuZmV0Y2hOZWlnaGJvcmhvb2RzID0gKCkgPT4ge1xyXG4gIERCSGVscGVyLmZldGNoTmVpZ2hib3Job29kcygoZXJyb3IsIG5laWdoYm9yaG9vZHMpID0+IHtcclxuICAgIGlmIChlcnJvcikgeyAvLyBHb3QgYW4gZXJyb3JcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxmLm5laWdoYm9yaG9vZHMgPSBuZWlnaGJvcmhvb2RzO1xyXG4gICAgICBmaWxsTmVpZ2hib3Job29kc0hUTUwoKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZXQgbmVpZ2hib3Job29kcyBIVE1MLlxyXG4gKi9cclxuZmlsbE5laWdoYm9yaG9vZHNIVE1MID0gKG5laWdoYm9yaG9vZHMgPSBzZWxmLm5laWdoYm9yaG9vZHMpID0+IHtcclxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmVpZ2hib3Job29kcy1zZWxlY3QnKTtcclxuICBuZWlnaGJvcmhvb2RzLmZvckVhY2gobmVpZ2hib3Job29kID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLmlubmVySFRNTCA9IG5laWdoYm9yaG9vZDtcclxuICAgIG9wdGlvbi52YWx1ZSA9IG5laWdoYm9yaG9vZDtcclxuICAgIHNlbGVjdC5hcHBlbmQob3B0aW9uKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGZXRjaCBhbGwgY3Vpc2luZXMgYW5kIHNldCB0aGVpciBIVE1MLlxyXG4gKi9cclxuZmV0Y2hDdWlzaW5lcyA9ICgpID0+IHtcclxuICBEQkhlbHBlci5mZXRjaEN1aXNpbmVzKChlcnJvciwgY3Vpc2luZXMpID0+IHtcclxuICAgIGlmIChlcnJvcikgeyAvLyBHb3QgYW4gZXJyb3IhXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZi5jdWlzaW5lcyA9IGN1aXNpbmVzO1xyXG4gICAgICBmaWxsQ3Vpc2luZXNIVE1MKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2V0IGN1aXNpbmVzIEhUTUwuXHJcbiAqL1xyXG5maWxsQ3Vpc2luZXNIVE1MID0gKGN1aXNpbmVzID0gc2VsZi5jdWlzaW5lcykgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdWlzaW5lcy1zZWxlY3QnKTtcclxuXHJcbiAgY3Vpc2luZXMuZm9yRWFjaChjdWlzaW5lID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgb3B0aW9uLmlubmVySFRNTCA9IGN1aXNpbmU7XHJcbiAgICBvcHRpb24udmFsdWUgPSBjdWlzaW5lO1xyXG4gICAgc2VsZWN0LmFwcGVuZChvcHRpb24pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgR29vZ2xlIG1hcCwgY2FsbGVkIGZyb20gSFRNTC5cclxuICovXHJcbndpbmRvdy5pbml0TWFwID0gKCkgPT4ge1xyXG4gIGxldCBsb2MgPSB7XHJcbiAgICBsYXQ6IDQwLjcyMjIxNixcclxuICAgIGxuZzogLTczLjk4NzUwMVxyXG4gIH07XHJcbiAgc2VsZi5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgem9vbTogMTIsXHJcbiAgICBjZW50ZXI6IGxvYyxcclxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZVxyXG4gIH0pO1xyXG4gIHVwZGF0ZVJlc3RhdXJhbnRzKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogVXBkYXRlIHBhZ2UgYW5kIG1hcCBmb3IgY3VycmVudCByZXN0YXVyYW50cy5cclxuICovXHJcbnVwZGF0ZVJlc3RhdXJhbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vpc2luZXMtc2VsZWN0Jyk7XHJcbiAgY29uc3QgblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZWlnaGJvcmhvb2RzLXNlbGVjdCcpO1xyXG5cclxuICBjb25zdCBjSW5kZXggPSBjU2VsZWN0LnNlbGVjdGVkSW5kZXg7XHJcbiAgY29uc3QgbkluZGV4ID0gblNlbGVjdC5zZWxlY3RlZEluZGV4O1xyXG5cclxuICBjb25zdCBjdWlzaW5lID0gY1NlbGVjdFtjSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IG5laWdoYm9yaG9vZCA9IG5TZWxlY3RbbkluZGV4XS52YWx1ZTtcclxuXHJcbiAgREJIZWxwZXIuZmV0Y2hSZXN0YXVyYW50QnlDdWlzaW5lQW5kTmVpZ2hib3Job29kKGN1aXNpbmUsIG5laWdoYm9yaG9vZCwgKGVycm9yLCByZXN0YXVyYW50cykgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7IC8vIEdvdCBhbiBlcnJvciFcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXNldFJlc3RhdXJhbnRzKHJlc3RhdXJhbnRzKTtcclxuICAgICAgZmlsbFJlc3RhdXJhbnRzSFRNTCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsZWFyIGN1cnJlbnQgcmVzdGF1cmFudHMsIHRoZWlyIEhUTUwgYW5kIHJlbW92ZSB0aGVpciBtYXAgbWFya2Vycy5cclxuICovXHJcbnJlc2V0UmVzdGF1cmFudHMgPSAocmVzdGF1cmFudHMpID0+IHtcclxuICAvLyBSZW1vdmUgYWxsIHJlc3RhdXJhbnRzXHJcbiAgc2VsZi5yZXN0YXVyYW50cyA9IFtdO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnRzLWxpc3QnKTtcclxuICB1bC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gUmVtb3ZlIGFsbCBtYXAgbWFya2Vyc1xyXG4gIHNlbGYubWFya2Vycy5mb3JFYWNoKG0gPT4gbS5zZXRNYXAobnVsbCkpO1xyXG4gIHNlbGYubWFya2VycyA9IFtdO1xyXG4gIHNlbGYucmVzdGF1cmFudHMgPSByZXN0YXVyYW50cztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYWxsIHJlc3RhdXJhbnRzIEhUTUwgYW5kIGFkZCB0aGVtIHRvIHRoZSB3ZWJwYWdlLlxyXG4gKi9cclxuZmlsbFJlc3RhdXJhbnRzSFRNTCA9IChyZXN0YXVyYW50cyA9IHNlbGYucmVzdGF1cmFudHMpID0+IHtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50cy1saXN0Jyk7XHJcbiAgcmVzdGF1cmFudHMuZm9yRWFjaChyZXN0YXVyYW50ID0+IHtcclxuICAgIHVsLmFwcGVuZChjcmVhdGVSZXN0YXVyYW50SFRNTChyZXN0YXVyYW50KSk7XHJcbiAgfSk7XHJcbiAgYWRkTWFya2Vyc1RvTWFwKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHJlc3RhdXJhbnQgSFRNTC5cclxuICovXHJcbmNyZWF0ZVJlc3RhdXJhbnRIVE1MID0gKHJlc3RhdXJhbnQpID0+IHtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3Qgc21hbGwgPSAnc21hbGwnLCBtZWRpdW0gPSAnbWVkaXVtJywgYmlnID0gJ2JpZyc7XHJcbiAgbGV0IHNpemUgPSBzbWFsbDtcclxuICAvL2NvbnN0IHdzbWFsbCA9ICczNTB3Jywgd21lZGl1bSA9ICc1NTB3JywgYmlnID0gJzgwMHcnO1xyXG5cclxuICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpJykpXHJcbiAgICBzaXplID0gbWVkaXVtO1xyXG4gIGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KScpKVxyXG4gICAgc2l6ZSA9IHNtYWxsO1xyXG5cclxuICAvL2NvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWFnZS5jbGFzc05hbWUgPSAncmVzdGF1cmFudC1pbWcgbGF6eWxvYWQnO1xyXG4gIC8vaW1hZ2Uuc3JjID0gJyc7XHJcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLXNyYycsIERCSGVscGVyLmltYWdlVXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50LCBzaXplKSk7XHJcbiAgaW1hZ2UuYWx0ID0gcmVzdGF1cmFudC5uYW1lICsgJyByZXN0dXJhbnQgcGljdHVyZSc7XHJcbiAgLyppZihyZXN0YXVyYW50LmlkID09IDEwKXtcclxuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnb25sb2FkJywgJ2xhenlMb2FkKCknKTtcclxuICB9Ki9cclxuICAvKmltYWdlLnNyY3NldCA9IGAke0RCSGVscGVyLmltYWdlVXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50LCBzbWFsbCl9ICR7d3NtYWxsfSxcclxuICAgICAgICAgICAgICAgICAgICAke0RCSGVscGVyLmltYWdlVXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50LCBtZWRpdW0pfSAke3dtZWRpdW19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke0RCSGVscGVyLmltYWdlVXJsRm9yUmVzdGF1cmFudChyZXN0YXVyYW50LCBiaWcpfSAke3diaWd9YDsqL1xyXG4gIC8qY29uc3Qgc291cmNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xyXG4gIHNvdXJjZTEubWVkaWEgPSBcInNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXCI7XHJcbiAgc291cmNlMS5zcmNzZXQgPSBEQkhlbHBlci5pbWFnZVVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCwgbWVkaXVtKTtcclxuICBjb25zdCBzb3VyY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XHJcbiAgc291cmNlMi5tZWRpYSA9IFwic2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpXCI7XHJcbiAgc291cmNlMi5zcmNzZXQgPSBEQkhlbHBlci5pbWFnZVVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCwgYmlnKTsqL1xyXG4gIFxyXG4gIC8qcGljdHVyZS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgcGljdHVyZS5hcHBlbmRDaGlsZChzb3VyY2UxKTtcclxuICBwaWN0dXJlLmFwcGVuZENoaWxkKHNvdXJjZTIpOyovICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIGxpLmFwcGVuZChpbWFnZSk7XHJcblxyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG5hbWUuaW5uZXJIVE1MID0gcmVzdGF1cmFudC5uYW1lO1xyXG4gIG5hbWUudGFiSW5kZXggPSAwO1xyXG4gIGxpLmFwcGVuZChuYW1lKTtcclxuXHJcbiAgY29uc3QgbmVpZ2hib3Job29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG5laWdoYm9yaG9vZC5pbm5lckhUTUwgPSByZXN0YXVyYW50Lm5laWdoYm9yaG9vZDtcclxuICBuZWlnaGJvcmhvb2QudGFiSW5kZXggPSAwO1xyXG4gIGxpLmFwcGVuZChuZWlnaGJvcmhvb2QpO1xyXG5cclxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGFkZHJlc3MuaW5uZXJIVE1MID0gcmVzdGF1cmFudC5hZGRyZXNzO1xyXG4gIGFkZHJlc3MudGFiSW5kZXggPSAwO1xyXG4gIGxpLmFwcGVuZChhZGRyZXNzKTtcclxuXHJcbiAgY29uc3QgbW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBtb3JlLmlubmVySFRNTCA9ICdWaWV3IERldGFpbHMnO1xyXG4gIG1vcmUuaHJlZiA9IERCSGVscGVyLnVybEZvclJlc3RhdXJhbnQocmVzdGF1cmFudCk7XHJcbiAgbGkuYXBwZW5kKG1vcmUpO1xyXG5cclxuICByZXR1cm4gbGk7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIG1hcmtlcnMgZm9yIGN1cnJlbnQgcmVzdGF1cmFudHMgdG8gdGhlIG1hcC5cclxuICovXHJcbmFkZE1hcmtlcnNUb01hcCA9IChyZXN0YXVyYW50cyA9IHNlbGYucmVzdGF1cmFudHMpID0+IHtcclxuICByZXN0YXVyYW50cy5mb3JFYWNoKHJlc3RhdXJhbnQgPT4ge1xyXG4gICAgLy8gQWRkIG1hcmtlciB0byB0aGUgbWFwXHJcbiAgICBjb25zdCBtYXJrZXIgPSBEQkhlbHBlci5tYXBNYXJrZXJGb3JSZXN0YXVyYW50KHJlc3RhdXJhbnQsIHNlbGYubWFwKTtcclxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG1hcmtlci51cmw7XHJcbiAgICB9KTtcclxuICAgIHNlbGYubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==
