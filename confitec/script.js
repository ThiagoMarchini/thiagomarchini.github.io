function initMap() {
  const address = { lat: -23.7113, lng: -46.8551 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: address,
  });
  const marker = new google.maps.Marker({
    position: address,
    map: map,
  });
}