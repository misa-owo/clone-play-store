export const siteConfig = {
  name: "Le Bandit Slots - Android APK Download & Play",

  description: "Download Le Bandit Slots APK for Android. Enjoy thrilling slot reels, bonus features, and real casino vibes. Fast & secure direct APK download.",

  searchPlaceholder: "Search for apps & games",

  headerLinks: [
    { label: "Games", href: "/category/games" },
    { label: "Apps", href: "/category/apps", active: true },
    { label: "Movies & TV", href: "/category/movies" },
    { label: "Books", href: "/category/books" },
    { label: "Kids", href: "/category/kids" }
  ],

  currency: "$",

  itemsPerPage: 12,

  defaultCategory: "featured",

  footerLinks: {
    googlePlay: [
      { label: "Play Pass", href: "#" },
      { label: "Play Points", href: "#" },
      { label: "Gift cards", href: "#" },
      { label: "Redeem", href: "#" },
      { label: "Refund policy", href: "#" },
    ],
    kidsFamily: [
      { label: "Parent Guide", href: "#" },
      { label: "Family sharing", href: "#" },
    ],
    about: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "About Google Play", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Google Store", href: "#" },
    ]
  },

  logo: {
    src: "/placeholder.svg?height=36&width=36",
    alt: "Bonanza Play Logo",
    text: "Bonanza Play",
  },

  buttons: {
    install: "Install",
    share: "Share",
    wishlist: "Add to wishlist",
  },

  aboutSection: {
    title: "About this game",
  },

  appSupport: {
    title: "App support",
  },

  similarApps: {
    title: "Similar games",
  },

  deviceCompatibility: "This app is available for all of your devices",

  updatedLabel: "Updated on",

  dataSafety: {
    description: "Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.",
    points: [
      { icon: "Share2", text: "This app may share these data types with third parties Location and Device or other IDs" },
      { icon: "CloudUpload", text: "This app may collect these data types Location, Personal info and 7 others" },
      { icon: "LockKeyhole", text: "Data is encrypted in transit" },
      { icon: "Trash2", text: "You can request that data be deleted" }
    ]
  },

  ratingDistribution: [
    { rating: 5, percentage: 85 },
    { rating: 4, percentage: 10 },
    { rating: 3, percentage: 3 },
    { rating: 2, percentage: 1 },
    { rating: 1, percentage: 1 }
  ],

  reviews: [
    {
      id: 1,
      name: "Niel Paige",
      date: "April 18, 2024",
      rating: 5,
      comment: "Wonderful app! I played the slots and won good amounts several times. Very pleased with the interface and the variety of games. I recommend it to all gambling enthusiasts!",
      helpfulCount: 457,
      device: "phone"
    },
    {
      id: 2,
      name: "Maria Garcia",
      date: "April 18, 2024",
      rating: 5,
      comment: "I really liked this casino. Luck was on my side, and I won a decent amount. Everything works great, no crashes or issues. Definitely recommend!",
      helpfulCount: 457,
      device: "tablet"
    },
    {
      id: 3,
      name: "Alexei Petrov",
      date: "April 18, 2024",
      rating: 5,
      comment: "Great app! The interface is simple and user-friendly, the slots are diverse. I've already withdrawn money from my winnings several times, everything went smoothly. Very satisfied!",
      helpfulCount: 457,
      device: "phone"
    },
    {
      id: 4,
      name: "Elena Ivanov",
      date: "April 18, 2024",
      rating: 5,
      comment: "Playing in this casino is a pleasure! I often get lucky and win decent amounts. The app works flawlessly, no complaints. Super!",
      helpfulCount: 457,
      device: "chromebook"
    }
  ],

  seo: {
    title: "Bonanza Play - App Store",
    description: "Download and enjoy apps and games from Bonanza Play Store",
  },

  ratings: {
    title: "Ratings and reviews",
    deviceFilters: [
      { label: "Phone", value: "phone", icon: "Smartphone" },
      { label: "Tablet", value: "tablet", icon: "Tablet" },
      { label: "Watch", value: "watch", icon: "Watch" },
      { label: "Chromebook", value: "chromebook", icon: "Laptop" },
      { label: "TV", value: "tv", icon: "Monitor" },
      { label: "Car", value: "car", icon: "Car" },
    ],
    verifiedText: "Ratings and reviews are verified",
    infoIcon: "Info",
    nextIcon: "ChevronRight",
    starIcon: "Star",
    yesLabel: "Yes",
    noLabel: "No",
    helpfulText: "people found this review helpful",
    helpfulQuestion: "Did you find this helpful?",
    moreMenuIcon: "MoreVertical"
  },
};
