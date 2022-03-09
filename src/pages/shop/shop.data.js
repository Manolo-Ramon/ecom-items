const SHOP_DATA = [
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
          {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZL58xvf/brown-brim.png',
            price: 25
          },
          {
            id: 2,
            name: 'Blue Beanie',
            imageUrl: 'https://i.ibb.co/hB9S95n/blue-beanie.png',
            price: 18
          },
          {
            id: 3,
            name: 'Brown Cowboy',
            imageUrl: 'https://i.ibb.co/zGzHwvd/brown-cowboy.png',
            price: 35
          },
          {
            id: 4,
            name: 'Grey Brim',
            imageUrl: 'https://i.ibb.co/vJ8Rjng/grey-brim.png',
            price: 25
          },
          {
            id: 5,
            name: 'Green Beanie',
            imageUrl: 'https://i.ibb.co/N7NfWjH/green-beanie.png',
            price: 18
          },
          {
            id: 6,
            name: 'Palm Tree Cap',
            imageUrl: 'https://i.ibb.co/mRPZRQw/palm-tree-cap.png',
            price: 14
          },
          {
            id: 7,
            name: 'Red Beanie',
            imageUrl: 'https://i.ibb.co/Vmz4HNd/red-beanie.png',
            price: 18
          },
          {
            id: 8,
            name: 'Wolf Cap',
            imageUrl: 'https://i.ibb.co/dPjZgz7/wolf-cap.png',
            price: 14
          },
          {
            id: 9,
            name: 'Blue Snapback',
            imageUrl: 'https://i.ibb.co/3Wc14WJ/blue-snapback.png',
            price: 16
          }
        ]
      },
      {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
          {
            id: 10,
            name: 'Adidas NMD',
            imageUrl: 'https://i.ibb.co/NFWmqxS/adidas-nmd.png',
            price: 220
          },
          {
            id: 11,
            name: 'Adidas Yeezy',
            imageUrl: 'https://i.ibb.co/PFZPPsr/yeezy.png',
            price: 280
          },
          {
            id: 12,
            name: 'Black Converse',
            imageUrl: 'https://i.ibb.co/26Ggwtg/black-converse.png',
            price: 110
          },
          {
            id: 13,
            name: 'Nike White AirForce',
            imageUrl: 'https://i.ibb.co/k1hkfN8/white-nike-high-tops.png',
            price: 160
          },
          {
            id: 14,
            name: 'Nike Red High Tops',
            imageUrl: 'https://i.ibb.co/GPJZVbK/nikes-red.png',
            price: 160
          },
          {
            id: 15,
            name: 'Nike Brown High Tops',
            imageUrl: 'https://i.ibb.co/nbyfFRH/nike-brown.png',
            price: 160
          },
          {
            id: 16,
            name: 'Air Jordan Limited',
            imageUrl: 'https://i.ibb.co/Y7hBXRn/nike-funky.png',
            price: 190
          },
          {
            id: 17,
            name: 'Timberlands',
            imageUrl: 'https://i.ibb.co/fDLKfz0/timberlands.png',
            price: 200
          }
        ]
      },
      {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
          {
            id: 18,
            name: 'Black Jean Shearling',
            imageUrl: 'https://i.ibb.co/6J9hRHf/black-shearling.png',
            price: 125
          },
          {
            id: 19,
            name: 'Blue Jean Jacket',
            imageUrl: 'https://i.ibb.co/yqMXMvj/blue-jean-jacket.png',
            price: 90
          },
          {
            id: 20,
            name: 'Grey Jean Jacket',
            imageUrl: 'https://i.ibb.co/wS0d1YH/grey-jean-jacket.png',
            price: 90
          },
          {
            id: 21,
            name: 'Brown Shearling',
            imageUrl: 'https://i.ibb.co/d0C9gH8/brown-shearling.png',
            price: 165
          },
          {
            id: 22,
            name: 'Tan Trench',
            imageUrl: 'https://i.ibb.co/kqvJmR9/brown-trench.png',
            price: 185
          }
        ]
      },
      {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
          {
            id: 23,
            name: 'Blue Tanktop',
            imageUrl: 'https://i.ibb.co/YWHNNv9/blue-tank.png',
            price: 25
          },
          {
            id: 24,
            name: 'Floral Blouse',
            imageUrl: 'https://i.ibb.co/nDjz2f3/floral-blouse.png',
            price: 20
          },
          {
            id: 25,
            name: 'Floral Dress',
            imageUrl: 'https://i.ibb.co/MG02wmj/floral-skirt.png',
            price: 80
          },
          {
            id: 26,
            name: 'Red Dots Dress',
            imageUrl: 'https://i.ibb.co/vzpdwHj/red-polka-dot-dress.png',
            price: 80
          },
          {
            id: 27,
            name: 'Striped Sweater',
            imageUrl: 'https://i.ibb.co/7JNWP1t/striped-sweater.png',
            price: 45
          },
          {
            id: 28,
            name: 'Yellow Track Suit',
            imageUrl: 'https://i.ibb.co/7Nv5PLj/yellow-track-suit.png',
            price: 135
          },
          {
            id: 29,
            name: 'White Blouse',
            imageUrl: 'https://i.ibb.co/9pR7q45/white-vest.png',
            price: 20
          }
        ]
      },
      {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
          {
            id: 30,
            name: 'Camo Down Vest',
            imageUrl: 'https://i.ibb.co/zQcGWyP/camo-vest.png',
            price: 325
          },
          {
            id: 31,
            name: 'Floral T-shirt',
            imageUrl: 'https://i.ibb.co/wp6kQg5/floral-shirt.png',
            price: 20
          },
          {
            id: 32,
            name: 'Black & White Longsleeve',
            imageUrl: 'https://i.ibb.co/pXtwSSb/long-sleeve.png',
            price: 25
          },
          {
            id: 33,
            name: 'Pink T-shirt',
            imageUrl: 'https://i.ibb.co/G0t96XX/pink-shirt.png',
            price: 25
          },
          {
            id: 34,
            name: 'Jean Long Sleeve',
            imageUrl: 'https://i.ibb.co/GRDT86f/roll-up-jean-shirt.png',
            price: 40
          },
          {
            id: 35,
            name: 'Burgundy T-shirt',
            imageUrl: 'https://i.ibb.co/zS7Q46B/polka-dot-shirt.png',
            price: 25
          }
        ]
      }
]

export default SHOP_DATA;