$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for transparency.
      container: '.image-container',
      template: '#your-template'
  });
});