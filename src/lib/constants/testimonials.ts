export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anand Krishnan",
    role: "Business Traveler",
    text: "Exceeded all expectations. The rooms were spotless, the staff was incredibly attentive, and the food was simply divine. Best place to stay in Chittoor for families.",
    rating: 5,
    avatar: "AK"
  },
  {
    name: "Rajesh Kumar",
    role: "Verified Guest",
    text: "From the moment we arrived, the service was impeccable. The rooms are incredibly clean, modern, and provide a level of comfort that's hard to find. It truly is the best hotel in Chittoor.",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Sarah J.",
    role: "Corporate Executive",
    text: "Very professional service. Perfect for my corporate meetings and remote work setups.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Rahul M.",
    role: "Family Vacationer",
    text: "The bed was like sleeping on a cloud. Extremely comfortable rooms and friendly service!",
    rating: 4,
    avatar: "RM"
  },
  {
    name: "Priya D.",
    role: "Leisure Traveler",
    text: "Best breakfast buffet in the city. Incredible variety of local and continental options.",
    rating: 5,
    avatar: "PD"
  },
  {
    name: "Mike T.",
    role: "International Guest",
    text: "Immaculate rooms and very helpful front desk staff. Felt very safe and well looked after.",
    rating: 5,
    avatar: "MT"
  }
];
