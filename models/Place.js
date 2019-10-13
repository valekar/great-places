export class Place {
  constructor(id, title, address, imageUrl) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.imageUrl = imageUrl;
  }

  set imageUrl(imageUrl) {
    this.imageUrl = imageUrl;
  }

  set placeID(id) {
    this.id = id.toString();
  }
}

export default Place;
