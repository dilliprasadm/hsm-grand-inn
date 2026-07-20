export interface Attraction {
  name: string;
  category: string;
  distance: string;
  time: string;
  icon: string;
  image: string;
  alt: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    name: "Kanipakam Temple",
    category: "Spiritual Hub",
    distance: "12 KM",
    time: "20 Mins",
    icon: "directions_car",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxPaTiIK9httfMwkS9_gC5MnE9-dozPkPSgV7eS7O458A_kJ4hwSJdMkNpsphspML-C2iNSNrSB53u3fYC9K16-NHhV1YZA0ZC8tg4cRu4e2eD7Q3HkQ_a59I-Lk1eWvgOA35Ig-ieUscboq7BxKgMS1DyEpxGZmPd0xYCYQAljpbo4YAWGpoC9_MMZq-X3W8GIuQAUeymjxdXghu8iLvd1wt3SGiQmj2S2Ph9v4ilRI4RuyF8U4Qmag",
    alt: "Ancient Dravidian architecture of the Kanipakam Vinayaka Temple in Chittoor, showing detailed stone carvings during the golden hour."
  },
  {
    name: "Railway Station",
    category: "Transit Hub",
    distance: "1.5 KM",
    time: "5 Mins",
    icon: "directions_walk",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP27rdi8GXaAodNzmJ1gIKnyXhlLUoc0CELjPP2FlnQz_KFO-yx1P2FngGGek3CbAuT2fO-grPlUoHAri5rL771dWErXLxoyMO9og1VfmI9XVNcX3E-som3jX6QrJthygmaa3mwySHZaGFL5_On9q1UrpJZY90G5obLt0qTYPix8I4-OQXoRJ4xCx4hdkVZ8iNWz-7vRnJPelJhsOJzw15TuBQn76dfhK74pdCGZ7Ug5NFKfS7tWidaQ",
    alt: "Chittoor railway station platform entrance at sunset, representing convenient travel accessibility."
  },
  {
    name: "Tirupati",
    category: "Global Destination",
    distance: "70 KM",
    time: "1.5 Hours",
    icon: "directions_bus",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsQq51vCdhxLYhnUsHYh9uhB9KOsscdhLRADYMoaO69RxTjab-w2Gw4vwYpTeHrN1SqZqWueNNAqtOsu4cJSxMdq2j7DsXZjDP1Tx42kZeGy2pQmjObVOXg55yDLoeHCDtf7JrAGBoIt9LfWUwMODor4MD4oJdHT6g7wj5DNo4DwpQDDfKmaSkzEbclmD6jOrO-y4V0BkvdkEssNO6Pi-IB1FqkxbHhQHjVeGXjvDh-ze8-HBwgkLxSQ",
    alt: "Scenic overview of the sacred Tirumala hills and temples under a majestic sunset sky in Tirupati."
  },
  {
    name: "Horsley Hills",
    category: "Nature Retreat",
    distance: "120 KM",
    time: "2.5 Hours",
    icon: "directions_car",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGE33fmBuEdaCR4m8lZXKPHASndUVIEU_c6UoGvt777iNyS4aN7NWrJUdI2cP54r_mkK_n0uNEX7IQHdG4sNxyCcgbEH_mTNWpVWI1TI6E0fXhNoAQ28RKudqFF3ecqr7YJ4RqyIyzUPh5H1t1ipfX9fSg_DNu2PF8-2aBPgCR1kvBfron0P-okmuggtzOyyBTrv1olO304RKPT7VoweZ8Ivowg8eurSAnn0X8UaPrjdzYIXW8CX57wg",
    alt: "Scenic view of the green mountain range and fog-covered valleys of Horsley Hills at dawn."
  }
];
