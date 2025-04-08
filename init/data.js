const sampleListings = [
  {
    title: "Seaside Lane House",
    description: "Charming house in Texas City with spacious rooms.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "seaside-lane-house"
    },
    price: 224900,
    location: "Texas City, TX",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-94.896237, 29.404263]
    }
  },
  {
    title: "Emerald Avenue Home",
    description: "Renovated raised ranch in West Pullman with 4 bedrooms.",
    image: {
      url: "https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/7e0df5688c78d211914ffa3186c78262-full.jpg",
      filename: "emerald-avenue-home"
    },
    price: 184500,
    location: "Chicago, IL",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-87.640778, 41.669556]
    }
  },
  {
    title: "Lake Shore Drive Condo",
    description: "Luxurious penthouse available for the first time in 50 years.",
    image: {
      url: "https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/79a3336143fd07ee19d04b82fdd605a5-full.jpg",
      filename: "lake-shore-drive-condo"
    },
    price: 17000000,
    location: "Chicago, IL",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-87.626717, 41.909821]
    }
  },
  {
    title: "Modern Apartment in Downtown",
    description: "Spacious apartment with city views and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "modern-apartment-downtown"
    },
    price: 350000,
    location: "Los Angeles, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-118.243683, 34.052235]
    }
  },
  {
    title: "Suburban Family Home",
    description: "Cozy 3-bedroom home with a large backyard.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "suburban-family-home"
    },
    price: 275000,
    location: "Austin, TX",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-97.743057, 30.267153]
    }
  },
  {
    title: "Beachfront Villa",
    description: "Luxury villa with private beach access.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "beachfront-villa"
    },
    price: 1200000,
    location: "Miami, FL",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-80.191790, 25.761680]
    }
  },
  {
    title: "Mountain Cabin Retreat",
    description: "Secluded cabin with stunning mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "mountain-cabin-retreat"
    },
    price: 450000,
    location: "Denver, CO",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-104.990251, 39.739236]
    }
  },
  {
    title: "Urban Loft",
    description: "Stylish loft in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "urban-loft"
    },
    price: 600000,
    location: "New York, NY",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128]
    }
  },
  {
    title: "Countryside Cottage",
    description: "Charming cottage surrounded by nature.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "countryside-cottage"
    },
    price: 330000,
    location: "Asheville, NC",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-82.5515, 35.5951]
    }
  },
  {
    title: "Parisian Flat",
    description: "Elegant flat in the heart of Paris.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "parisian-flat"
    },
    price: 800000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Mountain Escape Cabin",
    description: "Cozy cabin nestled in the Rocky Mountains, perfect for a peaceful getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "mountain-escape-cabin"
    },
    price: 180000,
    location: "Estes Park, CO",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-105.5217, 40.3772]
    }
  },
  {
    title: "Beachfront Villa",
    description: "Luxury villa steps away from the white sandy beaches of Bali.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "beachfront-villa"
    },
    price: 450000,
    location: "Canggu, Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1328, -8.6478]
    }
  },
  {
    title: "Countryside Cottage",
    description: "Quaint cottage surrounded by rolling hills and lush greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      filename: "countryside-cottage"
    },
    price: 125000,
    location: "Cotswolds, England",
    country: "UK",
    geometry: {
      type: "Point",
      coordinates: [-1.8433, 51.8330]
    }
  },
  {
    title: "Icelandic Retreat",
    description: "Modern cabin with panoramic views of Iceland’s stunning landscape.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      filename: "icelandic-retreat"
    },
    price: 275000,
    location: "Selfoss, Iceland",
    country: "Iceland",
    geometry: {
      type: "Point",
      coordinates: [-20.9960, 63.9331]
    }
  },
  {
    title: "Santorini Cliff House",
    description: "Elegant house carved into the cliffs overlooking the Aegean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "santorini-cliff-house"
    },
    price: 390000,
    location: "Oia, Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.3750, 36.4618]
    }
  },
  {
    title: "Tokyo City Apartment",
    description: "Compact and stylish apartment in the heart of Tokyo.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "tokyo-city-apartment"
    },
    price: 320000,
    location: "Shibuya, Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.7013, 35.6580]
    }
  },
  {
    title: "Swiss Alps Chalet",
    description: "Traditional wooden chalet with breathtaking mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "swiss-alps-chalet"
    },
    price: 490000,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    }
  },
  {
    title: "Moroccan Riad",
    description: "Authentic riad in the heart of Marrakech's old medina.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "moroccan-riad"
    },
    price: 210000,
    location: "Marrakech, Morocco",
    country: "Morocco",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295]
    }
  },
  {
    title: "Sydney Harbor Loft",
    description: "Stylish loft with panoramic views of Sydney Harbor.",
    image: {
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "sydney-harbor-loft"
    },
    price: 530000,
    location: "Sydney, NSW",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688]
    }
  },
  {
    title: "Patagonian Eco Dome",
    description: "Sustainable dome stay amid dramatic Patagonian landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "patagonian-eco-dome"
    },
    price: 160000,
    location: "Torres del Paine, Chile",
    country: "Chile",
    geometry: {
      type: "Point",
      coordinates: [-73.0036, -50.9423]
    }
  }
  // Add 20 more following this structure...
];


module.exports = { data: sampleListings };//we are sending sampleListing with name data at the time of export.