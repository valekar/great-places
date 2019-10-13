import Address from "../models/Address";
import Place from "../models/Place";

const address = new Address("line 1", "line 2", "City");

const place = new Place("1", "Title", address, "imageUrl");

const places = [place];

export default places;
