export interface GalleryImage {
  src: string;
  alt: string;
  category: "rooms" | "lobby" | "exterior" | "amenities" | "dining";
  title: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDawZPwabmI_cNmausqvynjmuRMDCxH4zD_iw3H7UjbLKYADwvymxhEipcIGsH3YGxyIDIbu37vTQhqFRfV9HZnbN-h-FvM_lME4L7CGoMVG8GveddiLqkxEx17Y9PAZMBK1KPhwvfM8HUMjuZxjVq9UDSEUqpgrhNLLJ3mMLwAk_I0lG2F0FHlgPBFD_ASYluxbx2xczo2WUQC7Y-OkKDqWKERWqrpRKniTCVse3U31SI0RQ-Q-Fb2Og",
    alt: "HSM Grand Inn lobby featuring polished marble floors reflecting the golden glow of a massive crystal chandelier.",
    category: "lobby",
    title: "Grand Lobby Chandelier"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBlsnn5RIo5dqFJoBf1XIFNm_YTJJkGoq37SFJE1lzvOVlqCY5Xae8Mk-nc6WSyUfHPz6zZI-BVbmV70gYkkQejMDVNMfMNinInwrW1ilZknXaBql6_q7Hqd8oLNzRAq9XpnO3WiTJ_sVGDHj-wJuQGksD4aCJtZcVQManA-RPZqwdCvVUyws0xrK9DjBDo1FWfdZOp2XGAhiFaCqKt-4Jl2l07NpifaS6GtIvJSuY8JoZ6T3zy29Oag",
    alt: "Immersive architectural view of HSM Grand Inn's exterior entrance driveway at dusk.",
    category: "exterior",
    title: "Hotel Entrance at Dusk"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeW81nv-_BDmU9xd6Lb22-l2Ct0FyMyisult6uPlDistN-5dxCUpiybr3EMSgvyRjKI2G4wKBPTuqJWmGCc2vrm3AQDPFePVrIY_deKRwWrc5QfmbPgvE1XFM3PQ_C0nXxyrhPFunz1XiuBhKv2Wt81LKjTfVn8H-bUlDCWUy94k3eKM18go_SLLyKqyM424xQJaXBV3zGUcwBj9W3QNd5g9U1jTqOlXzXJ6zeGT8xZ5eeMf42JIpKYw",
    alt: "Executive Suite bedroom view with refined wood paneling and gold accent light arrays.",
    category: "rooms",
    title: "Executive Suite Master Bedroom"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqSgIQsbggOfJEjZii8arjiIJOxoJH_CFssHIhuedzED5S5MEscIwJbqK0hTLZkojJWfIE5LB6ha5Eb1LuKerYm_KDL2UOaycR1rHsjOymGIWOm1dv4Xxbq93QxOwsjE4ujp96RSssC3FI88Rcbsnh1iU_i5iz3w2CncimgLVYiz6p7CglZHjk4PHAwl164sykEdBKup13q5rqQCOTKxg9-eIg96vLG6tWbVcFmtD3PT3RtJmw4LN6JA",
    alt: "Formal banquet dining setting with crystal glassware, dark timber table, and modern editorial lighting.",
    category: "dining",
    title: "Banquet Dining Hall"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhcMj2VgH6FPcvfhAIPpKzfpCUmLGPsYAMc_g2x2McnUAygxBlZisJs-wcx88PjDvsoYzjznnXd26kHxxFsP1uVKEObLjYIKzW6GtT0u4je7onHf1709tb0QE_dxeQEEB0dEM8NwNbLTLIhpYt8j3We0_42x4T_dPEC78_x_Xes1fUt2k6nypW2jE6Z6_8tvHEre8uThqmUK3TFEuRmIrtjddwKh1TJUY-I_Fu-mLnKIThd1ZsITebew",
    alt: "Minimalist wellness infinity pool overlooking clear morning skies with premium lounge chairs.",
    category: "amenities",
    title: "Infinity Pool Deck"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEloAOkUNmQZHYDyWkwbb74DdGwPbJ_OZlvNh5dRqpzIhz6zu0E3Bw_JQrTWmNHf8czA8iNLcGrdCyuwBF1kfjC7MHm8Jay4cyuAi1VR2LgFvb2wH9zwWni96DgC3ovR6KVlHa_lqVpgjkRnj1GFlZkRPSu6GtrGAs5tKEm42f6vTixBKNIghFxqpVBczXj6tK5LxbUObPNX69jczYihTd73bYn9pMc9p3fXVumXIP7aN6D-a8e8VoUQ",
    alt: "Close-up of a backlit onyx wall panel displaying gold and warm amber geological textures.",
    category: "lobby",
    title: "Onyx Feature Wall"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM0FbfmfmzlCcGg_QnE1TUWOIx2-ox01zclH37VB0ogkRcVFZmYqTGeLxfDQA_HmlUCN8lcpLO5-gZGVCS7zZr3bWjoiXWBcqyGwiO5AhsAmq6yVwWtEDRfJTI18GiYnBXVJSU81jyyjAjtpRPqa3p5DkSr4VNjMspcxXdXJLHVP5gWO0YRh8S-oATVqKySEm16uloz1NzxrG9n8xP5x3FF-RKi8_BSJaO2g5jY13EUxKCQHO0_nKN9A",
    alt: "Soaring double-height ceilings in the main lobby showcasing luxury furniture clusters and art.",
    category: "lobby",
    title: "Lobby Reception Lounge"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZLac-iXN6zaIRnXaUU7pDJekxsYrDB6oWu8XqMYr7auDae-c7wxgAfDQUHYMCcJvm21_mskH0DZdR9ZeSzAHrOeDoQ_SLB51x3UNS-kwJwo2ZK73Xsdq6NOVtSPOlz8H31e8OXKdQMjho7_7gGVxq8AW4ClisG3_ZdgRV9VKmDxmxURJ3sZEtVCciNFOVdFDpEHMCoWFE7lx10WGyacz1bjS-FuR6WAKwwP0vbZeAW3EU6o5sEjDVAg",
    alt: "Monochrome stone tiling of the hotel exterior facade showcasing minimalist design alignment.",
    category: "exterior",
    title: "Modern Facade Detailing"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz1BXxhhNlSP83s8JafBaYSt-14I6jsGqnGvBnwtf_wTqQFczdDPMs2XKA32h2jqv8eMUOymPRM-zaHqHxz7Gpvyx2G0-VoQVW_1BMFTw-IAm74afZeDS5y4UA0qVVFbsrxa5-usj3mAYs4B0ntXM_o8LURjTN-9bmX4G-uoApSTaoxNiY3BvJ72QH5Dnj4rT1-GUdWYDbtq--cyCPcfQ_7KIMt62MrgGjumjY7thWlWOXBgpaYRKsyg",
    alt: "Artfully plated gourmet culinary items placed on custom dinnerware in the hotel diner.",
    category: "dining",
    title: "Signature Culinary Plates"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_i7XPTcIwusW3TKjJaezWMpXjxFU6z7v2GPzcSDLW2feF3aNYysQloKjQpS9mSDkZvvD0NGMkyKpjxsZhKqorP0Pvd8_daJXCXGaPrMWdTzVgBr2ElS0-wXjqGS8s4fr4MaQT3ol6AFEZOvC-a0XOkg1OtyVev2c8pFIf7GScgNA2nJ-09GaB_dF7SfOfMfhOoXzhEyMTK1l1m44EUq7IO2IyvD1P4qof5UtQTebtXnhLne2f7bkGLA",
    alt: "A premium suite bed with crisp white linens and a deep navy headboard, softly lit by daylight.",
    category: "rooms",
    title: "Suite Bedding Setup"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCddJBVnimgdFLXMCiaB170a21fsGkq289qBv-RONl186YvfPGz8vLvXPEp8P465-f95KZXezuKy7p1ypp4iFnUl4lpgVo6yzEZDZ7p0sPW8zesmo3AMcMy7V2yBkzLvo6sOoUmQ610TuZX4unI73z0hkCsY8AEgKqKkKm_dEtwQdIMVI94uF8GgM1BqbXVdFsh-nMxmXnn49PeF1RvAoIgoDrD3n5YoPDD8KdXYmgob0177GGbSkf3zw",
    alt: "Panoramic living area view of the Executive Suite highlighting custom desks and seating arrays.",
    category: "rooms",
    title: "Executive Suite Living Area"
  }
];
export const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "rooms", label: "Rooms" },
  { value: "lobby", label: "Lobby" },
  { value: "exterior", label: "Exterior" },
  { value: "amenities", label: "Amenities" },
  { value: "dining", label: "Dining" }
];
export type CategoryType = typeof CATEGORIES[number]["value"];
