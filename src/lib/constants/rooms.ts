export interface Room {
  slug: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  size: string;
  occupancy: string;
  bedType: string;
  floor: string;
  images: string[];
  mainImage: string;
  amenities: string[];
  highlights: string[];
  reviewsCount: number;
  rating: number;
}

export const ROOMS: Room[] = [
  {
    slug: "executive-suite",
    name: "Executive Suite",
    price: 12500,
    description: "Panoramic city views, king-size bed, and a dedicated workspace for the modern professional.",
    longDescription: "The Executive Suite at HSM Grand Inn is a masterclass in contemporary heritage design. Spanning 850 square feet, the suite features distinct living and sleeping quarters, meticulously furnished with rich textures and a sophisticated palette of deep navy and gold. Floor-to-ceiling windows flood the room with natural light while offering unrivaled views of the city's architectural evolution.",
    size: "850 Sq Ft",
    occupancy: "3 Adults",
    bedType: "King Size",
    floor: "5th Floor",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeW81nv-_BDmU9xd6Lb22-l2Ct0FyMyisult6uPlDistN-5dxCUpiybr3EMSgvyRjKI2G4wKBPTuqJWmGCc2vrm3AQDPFePVrIY_deKRwWrc5QfmbPgvE1XFM3PQ_C0nXxyrhPFunz1XiuBhKv2Wt81LKjTfVn8H-bUlDCWUy94k3eKM18go_SLLyKqyM424xQJaXBV3zGUcwBj9W3QNd5g9U1jTqOlXzXJ6zeGT8xZ5eeMf42JIpKYw",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeW81nv-_BDmU9xd6Lb22-l2Ct0FyMyisult6uPlDistN-5dxCUpiybr3EMSgvyRjKI2G4wKBPTuqJWmGCc2vrm3AQDPFePVrIY_deKRwWrc5QfmbPgvE1XFM3PQ_C0nXxyrhPFunz1XiuBhKv2Wt81LKjTfVn8H-bUlDCWUy94k3eKM18go_SLLyKqyM424xQJaXBV3zGUcwBj9W3QNd5g9U1jTqOlXzXJ6zeGT8xZ5eeMf42JIpKYw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwgUmTGgv6stKLPhp0CfuYH1YIiszNwDCfZ0nCGd4MANfB-xaZPHzPzcsjSiJUT32SB615kw_lJlo7o5PImxx6wztlwKqoXvloHA9fg5xYo2XqNcxT-iEULkvrfyNlFqhmPSiJO1uXCM3jq4XqRN5lDrRc6V4CGXBR4AWNTAOSigF9evHOMVgw5Gy-QazbHu6Aa5mXReMwZ8CzG4_PgM-RzVGNHKBI9nApdr7rGJLJvmiur-nLxB0CSw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJsWc_VhiN3wtgxe-YSk-RMtiM7i7RRymFWF-SpOsGcPlS7LwxGsu26N5dcd75ZnBWenuBgODxUkhcCJtcfhbzfDh80Err-oTKUXc3e-7YnIiVE9qdd0KMPqbvZnPBIZ28dsMimvcPfU3aQKKBnOJN47CP8MoivinyMjA258HK-NfY4uwJ0m3zeYiCfFD1WQLLmGPGFlRrAGkRSHkd1BHN1_c8hSFgpY_85xRzsFhtxJiRYhdK7r1SMA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcN_ugEBWDnl3o6GVCbRac1t_tNdR9L3DFepgPcfNS9OkEV37EyolupzuW1w19E4w0cfkQw7gVBPM_rc2mIPNbXU5zZEkYwgGcM3id1vHqeaFDQuhBy627jk_OzCna8RERU692GfOSC8YsuSYmuugxgZ1gTGFFRK-fCNNQQsaFf9iaTic-bnoalRgS7lQogidq-Tx1QMLyf4A7QiKHsifvmmW7DNeyRJVvVBrxvRXt70qyuPYLj2NBMw"
    ],
    amenities: ["Free WiFi", "Full AC", "Smart TV", "Tea/Coffee", "Mini Fridge", "Room Service", "Hot Water", "Power Backup"],
    highlights: ["Spacious separate living area", "High thread count Egyptian cotton linens", "Sound-proof glass windows for peaceful ambience"],
    reviewsCount: 48,
    rating: 4.8
  },
  {
    slug: "deluxe-family-room",
    name: "Deluxe Family Room",
    price: 8900,
    description: "Thoughtfully designed for families, combining space and functionality without compromising on style.",
    longDescription: "Our Deluxe Family Room features two large queen beds and a cozy seating layout, making it the perfect room option for family stays or group travel. The room is decorated in soft creams, golds, and deep blues to produce an upscale, comforting environment. High-end lighting fixtures and functional workspaces round out the luxurious setup.",
    size: "680 Sq Ft",
    occupancy: "4 Adults",
    bedType: "Two Queen Beds",
    floor: "3rd & 4th Floors",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrBcHDgEiImCFL71LDtTaLbRYXv_aQhXGV-8D40DVuXQXbDreNhVpFqihyhL48T0IF9akgFxO2lxG5wB6r1oqR-FM6g-kaihLPkozx4c75-wfIS03wL6luFT_k-az6vpko5UOPuwv3Urkp8xmKBmQ8x_zG4el6CgtWfnskRpbkdEDCBacmCvPfPflaSRUTFPo18iM69N427qlsREMmjnZ_Oxde1l3CXmOntYwtDyNkFFjznwipcwgNGA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrBcHDgEiImCFL71LDtTaLbRYXv_aQhXGV-8D40DVuXQXbDreNhVpFqihyhL48T0IF9akgFxO2lxG5wB6r1oqR-FM6g-kaihLPkozx4c75-wfIS03wL6luFT_k-az6vpko5UOPuwv3Urkp8xmKBmQ8x_zG4el6CgtWfnskRpbkdEDCBacmCvPfPflaSRUTFPo18iM69N427qlsREMmjnZ_Oxde1l3CXmOntYwtDyNkFFjznwipcwgNGA"
    ],
    amenities: ["Free WiFi", "Full AC", "Smart TV", "Tea/Coffee", "Mini Fridge", "Room Service", "Hot Water", "Power Backup"],
    highlights: ["Two Queen Size Beds", "Dedicated seating area", "Interconnecting options available"],
    reviewsCount: 32,
    rating: 4.7
  },
  {
    slug: "premium-business-room",
    name: "Premium Business Room",
    price: 6500,
    description: "Designed for the modern professional, balancing peak productivity with restorative relaxation.",
    longDescription: "Specifically engineered for traveling executives and business professionals, the Premium Business Room balances functionality with comfort. It features an ergonomic workspace with a dedicated full-size desk and designer task chair, integrated high-speed secure network access, and smart-home ambient controls.",
    size: "450 Sq Ft",
    occupancy: "2 Adults",
    bedType: "Queen Size",
    floor: "2nd & 3rd Floors",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4UxXzOlZW0SF-780teU2WHOWEPhYRucVZTihli7raLChSCYCFCvxGwgDSCiUZogsjt9WtpWzkn8TrIupMR9QRzQ5KG1W29mZqB9RF7KFKTNYh2KqofpLmYiWVYmINsAKIvAX1EfUSbZGWM0uxIcvTPKJXXR6Wvrnj5F-i5DPY6JH_tJVoG_TlAYS1112Byny86y21f_a6ypiHFVA6kqkK_FOl5azPORqZt3oXz3ZWuDcIkV2IdBjnBQ",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4UxXzOlZW0SF-780teU2WHOWEPhYRucVZTihli7raLChSCYCFCvxGwgDSCiUZogsjt9WtpWzkn8TrIupMR9QRzQ5KG1W29mZqB9RF7KFKTNYh2KqofpLmYiWVYmINsAKIvAX1EfUSbZGWM0uxIcvTPKJXXR6Wvrnj5F-i5DPY6JH_tJVoG_TlAYS1112Byny86y21f_a6ypiHFVA6kqkK_FOl5azPORqZt3oXz3ZWuDcIkV2IdBjnBQ"
    ],
    amenities: ["Free WiFi", "Full AC", "Smart TV", "Tea/Coffee", "Mini Fridge", "Room Service", "Hot Water", "Power Backup"],
    highlights: ["Ergonomic workspace with high-end chair", "Dedicated 1Gbps private WiFi access", "Minimalist, quiet setting optimized for focus"],
    reviewsCount: 29,
    rating: 4.6
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    price: 18000,
    description: "The pinnacle of luxury. Private lounge, butler service, and the finest silk linens for an elite stay.",
    longDescription: "Our signature Presidential Suite offers the peak of luxurious accommodations in Andhra Pradesh. Spanning 1,200 square feet of hand-crafted elegance, it boasts an expansive private lounge area, dining table, 24/7 dedicated butler service, double-sink vanity, marble bathroom, and an exquisite view of the Horsley hills.",
    size: "1200 Sq Ft",
    occupancy: "3 Adults",
    bedType: "King Size",
    floor: "6th Floor (Penthouse)",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ryirrrBu0WAmeT6Nxznwx5I0JvbzkgOWhqV5dTNXjg3x4fZzXlaHg_qB4wkdoIo7R3PANNvFZaubyHGXN-mBn0-4gqNhD_Ed1_guhmbqKfRDrtHWCMMZKZaAKVpOSUb8BIdiyvlZ0W4j6MsmU9FUSvjxIvHDIZL4bezGMShdbG2ErBmBlJYps17BJEpXWyA1nOZpaXgRd7FhrCBO2_Kx0J8vXKMFMv4BVvprbcI71MWz32zHZspFaQ",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ryirrrBu0WAmeT6Nxznwx5I0JvbzkgOWhqV5dTNXjg3x4fZzXlaHg_qB4wkdoIo7R3PANNvFZaubyHGXN-mBn0-4gqNhD_Ed1_guhmbqKfRDrtHWCMMZKZaAKVpOSUb8BIdiyvlZ0W4j6MsmU9FUSvjxIvHDIZL4bezGMShdbG2ErBmBlJYps17BJEpXWyA1nOZpaXgRd7FhrCBO2_Kx0J8vXKMFMv4BVvprbcI71MWz32zHZspFaQ"
    ],
    amenities: ["Free WiFi", "Full AC", "Smart TV", "Tea/Coffee", "Mini Fridge", "Room Service", "Hot Water", "Power Backup", "Butler Service"],
    highlights: ["24/7 Personal Butler & Private Concierge", "Expansive separate living & dining space", "Orthopedic premium mattress with silk linen"],
    reviewsCount: 15,
    rating: 4.9
  }
];
