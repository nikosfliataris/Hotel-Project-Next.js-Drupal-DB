const hotel = [
  {
    code: 1,
    name: {
      content: "Ohtels Villa Dorada",
    },
    description: {
      content:
        "This hotel is located about 150 metres from the fine sandy beach. The lively centre of Cambrils is approximately 10 km away and can be easily reached by the public bus services. There is a stop for public transport right in front of the hotel. The immediate vicinity offers a diverse range of shopping and entertainment facilities including boutiques, restaurants and bars. This hotel comprises a total of 260 rooms spread over 5 floors. Dining options include a café, a bar and an air-conditioned buffet restaurant with highchairs for infants. The tastefully decorated, cosy rooms come with a balcony and satellite TV.",
    },
    country: {
      code: "ES",
      isoCode: "ES",
      description: {
        content: "Spain",
      },
    },
    state: {
      code: "43",
      name: "TARRAGONA",
    },
    destination: {
      code: "SAL",
      name: {
        content: "Salou Area / Costa Dorada",
      },
      countryCode: "ES",
    },
    zone: {
      zoneCode: 10,
      name: "Salou",
      description: {
        content: "Salou",
      },
    },
    coordinates: {
      longitude: 1.152529,
      latitude: 41.068407,
    },
    exclusiveDeal: 3,
    category: {
      code: "3EST",
      description: {
        content: "3 STARS",
      },
    },
    categoryGroup: {
      code: "GRUPO3",
      description: {
        content: "Includes 3-star hotels and rural hotels.",
      },
    },
    chain: {
      code: "OHTEL",
      description: {
        content: "OHTELS",
      },
    },
    accommodationType: {
      code: "H",
      typeMultiDescription: {
        content: "Hotel",
      },
      typeDescription: "Hotel",
    },
    boards: [
      {
        code: "BB",
        description: {
          content: "BED AND BREAKFAST",
        },
      },
      {
        code: "HB",
        description: {
          content: "HALF BOARD",
        },
      },
      {
        code: "RO",
        description: {
          content: "ROOM ONLY",
        },
      },
      {
        code: "FB",
        description: {
          content: "FULL BOARD",
        },
      },
      {
        code: "AI",
        description: {
          content: "ALL INCLUSIVE",
        },
      },
    ],
    segments: [
      {
        code: 81,
        description: {
          content: "Family hotels ",
        },
      },
      {
        code: 37,
        description: {
          content: "Beach hotels",
        },
      },
    ],
    amenities: [
      {
        code: 83,
        description: {
          content: "Internet",
        },
      },
      {
        code: 85,
        description: {
          content: "Restaurant",
        },
      },
      {
        code: 117,
        description: {
          content: "Safe2Stay",
        },
      },
      {
        code: 88,
        description: {
          content: "TV",
        },
      },
      {
        code: 90,
        description: {
          content: "Air conditioned",
        },
      },
      {
        code: 106,
        description: {
          content: "24-hour reception",
        },
      },
      {
        code: 107,
        description: {
          content: "Bathroom",
        },
      },
      {
        code: 92,
        description: {
          content: "Heating",
        },
      },
      {
        code: 108,
        description: {
          content: "Shower",
        },
      },
    ],
    address: {
      content: "Carrer Del Vendrell, 11",
      street: "Carrer Del Vendrell",
      number: "11",
    },
    postalCode: "43840",
    city: {
      content: "SALOU",
    },
    email: "comercial@ohtels.es",
    license: "HT-000473",
    phones: [
      {
        phoneNumber: "+34977385511",
        phoneType: "PHONEBOOKING",
      },
      {
        phoneNumber: "+34977385511",
        phoneType: "PHONEHOTEL",
      },
      {
        phoneNumber: "977381754",
        phoneType: "PHONEMANAGEMENT",
      },
      {
        phoneNumber: "+34977384612",
        phoneType: "FAXNUMBER",
      },
    ],
    rooms: [
      {
        roomCode: "SGL.ST",
        isParentRoom: false,
        minPax: 1,
        maxPax: 1,
        maxAdults: 1,
        maxChildren: 0,
        minAdults: 1,
        description: "SINGLE STANDARD",
        type: {
          code: "SGL",
          description: {
            content: "SINGLE",
          },
        },
        characteristic: {
          code: "ST",
          description: {
            content: "STANDARD",
          },
        },
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 1,
              },
              {
                facilityCode: 1,
                facilityGroupCode: 62,
                description: {
                  content: "Single bed 80-130 width",
                },
                number: 2,
              },
            ],
          },
        ],
      },
      {
        roomCode: "DBL.ST-11",
        isParentRoom: false,
        minPax: 1,
        maxPax: 5,
        maxAdults: 4,
        maxChildren: 4,
        minAdults: 1,
        description: "DOUBLE STANDARD",
        type: {
          code: "DBL",
          description: {
            content: "DOUBLE",
          },
        },
        characteristic: {
          code: "ST-11",
          description: {
            content: "STANDARD",
          },
        },
      },
      {
        roomCode: "QUA.ST-2",
        isParentRoom: false,
        minPax: 1,
        maxPax: 6,
        maxAdults: 4,
        maxChildren: 3,
        minAdults: 1,
        description: "QUADRUPLE STANDARD",
        type: {
          code: "QUA",
          description: {
            content: "QUADRUPLE",
          },
        },
        characteristic: {
          code: "ST-2",
          description: {
            content: "STANDARD",
          },
        },
        roomFacilities: [
          {
            facilityCode: 220,
            facilityGroupCode: 60,
            description: {
              content: "Living room",
            },
            indLogic: true,
            number: 0,
            voucher: false,
          },
        ],
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 2,
              },
            ],
          },
        ],
      },
      {
        roomCode: "DBT.ST",
        isParentRoom: false,
        minPax: 1,
        maxPax: 2,
        maxAdults: 2,
        maxChildren: 0,
        minAdults: 1,
        description: "Double or Twin STANDARD",
        type: {
          code: "DBT",
          description: {
            content: "Double or Twin",
          },
        },
        characteristic: {
          code: "ST",
          description: {
            content: "STANDARD",
          },
        },
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 1,
              },
              {
                facilityCode: 1,
                facilityGroupCode: 62,
                description: {
                  content: "Single bed 80-130 width",
                },
                number: 2,
              },
            ],
          },
        ],
      },
      {
        roomCode: "SGL.BL",
        isParentRoom: false,
        minPax: 1,
        maxPax: 1,
        maxAdults: 1,
        maxChildren: 0,
        minAdults: 1,
        description: "SINGLE WITH BALCONY",
        type: {
          code: "SGL",
          description: {
            content: "SINGLE",
          },
        },
        characteristic: {
          code: "BL",
          description: {
            content: "WITH BALCONY",
          },
        },
      },
      {
        roomCode: "DBL.BL-1",
        isParentRoom: false,
        minPax: 1,
        maxPax: 5,
        maxAdults: 4,
        maxChildren: 4,
        minAdults: 1,
        description: "DOUBLE WITH BALCONY",
        type: {
          code: "DBL",
          description: {
            content: "DOUBLE",
          },
        },
        characteristic: {
          code: "BL-1",
          description: {
            content: "WITH BALCONY",
          },
        },
      },
      {
        roomCode: "SGL.ST-11",
        isParentRoom: false,
        minPax: 1,
        maxPax: 1,
        maxAdults: 1,
        maxChildren: 0,
        minAdults: 0,
        description: "SINGLE STANDARD",
        type: {
          code: "SGL",
          description: {
            content: "SINGLE",
          },
        },
        characteristic: {
          code: "ST-11",
          description: {
            content: "STANDARD",
          },
        },
      },
      {
        roomCode: "DBL.BL",
        isParentRoom: false,
        minPax: 1,
        maxPax: 5,
        maxAdults: 4,
        maxChildren: 4,
        minAdults: 1,
        description: "DOUBLE WITH BALCONY",
        type: {
          code: "DBL",
          description: {
            content: "DOUBLE",
          },
        },
        characteristic: {
          code: "BL",
          description: {
            content: "WITH BALCONY",
          },
        },
      },
      {
        roomCode: "QUA.ST",
        isParentRoom: false,
        minPax: 1,
        maxPax: 6,
        maxAdults: 4,
        maxChildren: 3,
        minAdults: 1,
        description: "QUADRUPLE STANDARD",
        type: {
          code: "QUA",
          description: {
            content: "QUADRUPLE",
          },
        },
        characteristic: {
          code: "ST",
          description: {
            content: "STANDARD",
          },
        },
        roomFacilities: [
          {
            facilityCode: 220,
            facilityGroupCode: 60,
            description: {
              content: "Living room",
            },
            indLogic: true,
            number: 0,
            voucher: false,
          },
        ],
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 1,
              },
              {
                facilityCode: 1,
                facilityGroupCode: 62,
                description: {
                  content: "Single bed 80-130 width",
                },
                number: 2,
              },
            ],
          },
        ],
      },
      {
        roomCode: "DBT.ST-1",
        isParentRoom: false,
        minPax: 1,
        maxPax: 5,
        maxAdults: 4,
        maxChildren: 4,
        minAdults: 1,
        description: "Double or Twin STANDARD",
        type: {
          code: "DBT",
          description: {
            content: "Double or Twin",
          },
        },
        characteristic: {
          code: "ST-1",
          description: {
            content: "STANDARD",
          },
        },
        roomFacilities: [
          {
            facilityCode: 220,
            facilityGroupCode: 60,
            description: {
              content: "Living room",
            },
            indLogic: true,
            number: 0,
            voucher: false,
          },
        ],
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 1,
              },
              {
                facilityCode: 1,
                facilityGroupCode: 62,
                description: {
                  content: "Single bed 80-130 width",
                },
                number: 2,
              },
            ],
          },
        ],
      },
      {
        roomCode: "DBT.ST-2",
        isParentRoom: false,
        minPax: 1,
        maxPax: 5,
        maxAdults: 4,
        maxChildren: 4,
        minAdults: 1,
        description: "Double or Twin STANDARD",
        type: {
          code: "DBT",
          description: {
            content: "Double or Twin",
          },
        },
        characteristic: {
          code: "ST-2",
          description: {
            content: "STANDARD",
          },
        },
        roomFacilities: [
          {
            facilityCode: 220,
            facilityGroupCode: 60,
            description: {
              content: "Living room",
            },
            indLogic: true,
            number: 0,
            voucher: false,
          },
        ],
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 2,
              },
            ],
          },
        ],
      },
      {
        roomCode: "DBT.C3",
        isParentRoom: false,
        minPax: 1,
        maxPax: 5,
        maxAdults: 4,
        maxChildren: 4,
        minAdults: 1,
        description: "Double or Twin CAPACITY 3",
        type: {
          code: "DBT",
          description: {
            content: "Double or Twin",
          },
        },
        characteristic: {
          code: "C3",
          description: {
            content: "CAPACITY 3",
          },
        },
        roomFacilities: [
          {
            facilityCode: 220,
            facilityGroupCode: 60,
            description: {
              content: "Living room",
            },
            indLogic: true,
            number: 0,
            voucher: false,
          },
        ],
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 1,
                facilityGroupCode: 62,
                description: {
                  content: "Single bed 80-130 width",
                },
                number: 2,
              },
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 1,
              },
            ],
          },
        ],
      },
      {
        roomCode: "QUA.ST-1",
        isParentRoom: false,
        minPax: 1,
        maxPax: 6,
        maxAdults: 4,
        maxChildren: 3,
        minAdults: 1,
        description: "QUADRUPLE STANDARD",
        type: {
          code: "QUA",
          description: {
            content: "QUADRUPLE",
          },
        },
        characteristic: {
          code: "ST-1",
          description: {
            content: "STANDARD",
          },
        },
        roomFacilities: [
          {
            facilityCode: 220,
            facilityGroupCode: 60,
            description: {
              content: "Living room",
            },
            indLogic: true,
            number: 0,
            voucher: false,
          },
        ],
        roomStays: [
          {
            stayType: "BED",
            order: "1",
            description: "Bed room",
            roomStayFacilities: [
              {
                facilityCode: 150,
                facilityGroupCode: 61,
                description: {
                  content: "Double bed 131-150 width",
                },
                number: 1,
              },
              {
                facilityCode: 1,
                facilityGroupCode: 62,
                description: {
                  content: "Single bed 80-130 width",
                },
                number: 2,
              },
            ],
          },
        ],
      },
    ],
    facilities: [
      {
        facilityCode: 70,
        facilityGroupCode: 10,
        description: {
          content: "Total number of rooms",
        },
        order: 1,
        indYesOrNo: false,
        number: 260,
        voucher: false,
      },
      {
        facilityCode: 50,
        facilityGroupCode: 10,
        description: {
          content: "Number of floors (main building)",
        },
        order: 1,
        number: 5,
        voucher: false,
      },
      {
        facilityCode: 90,
        facilityGroupCode: 10,
        description: {
          content: "Double rooms",
        },
        order: 1,
        number: 250,
        voucher: false,
      },
      {
        facilityCode: 95,
        facilityGroupCode: 10,
        description: {
          content: "Junior suites",
        },
        order: 1,
        number: 10,
        voucher: false,
      },
      {
        facilityCode: 10,
        facilityGroupCode: 20,
        description: {
          content: "hotel",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 50,
        facilityGroupCode: 30,
        description: {
          content: "MasterCard",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 60,
        facilityGroupCode: 30,
        description: {
          content: "Visa",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 10,
        facilityGroupCode: 40,
        description: {
          content: "City centre",
        },
        order: 1,
        distance: 300,
        voucher: false,
      },
      {
        facilityCode: 145,
        facilityGroupCode: 40,
        description: {
          content: "Bus/Train station",
        },
        order: 1,
        distance: 1000,
        voucher: false,
      },
      {
        facilityCode: 20,
        facilityGroupCode: 40,
        description: {
          content: "Nearest Bus / Metro Stop",
        },
        order: 1,
        distance: 15000,
        voucher: false,
      },
      {
        facilityCode: 80,
        facilityGroupCode: 40,
        description: {
          content: "Airport",
        },
        order: 2,
        distance: 101000,
        voucher: false,
      },
      {
        facilityCode: 40,
        facilityGroupCode: 40,
        description: {
          content: "Beach",
        },
        order: 1,
        distance: 150,
        voucher: false,
      },
      {
        facilityCode: 130,
        facilityGroupCode: 40,
        description: {
          content: "Golf course",
        },
        order: 1,
        distance: 2000,
        voucher: false,
      },
      {
        facilityCode: 125,
        facilityGroupCode: 40,
        description: {
          content: "Entertainment Area",
        },
        order: 1,
        distance: 1,
        voucher: false,
      },
      {
        facilityCode: 295,
        facilityGroupCode: 60,
        description: {
          content: "Room size (sqm)",
        },
        order: 1,
        indYesOrNo: true,
        number: 12,
        voucher: false,
      },
      {
        facilityCode: 298,
        facilityGroupCode: 60,
        description: {
          content: "Number of bedrooms",
        },
        order: 1,
        indLogic: false,
        number: 1,
        voucher: false,
      },
      {
        facilityCode: 10,
        facilityGroupCode: 60,
        description: {
          content: "Bathroom",
        },
        order: 1,
        indLogic: true,
        voucher: false,
      },
      {
        facilityCode: 260,
        facilityGroupCode: 60,
        description: {
          content: "Disability-friendly bathroom",
        },
        order: 1,
        indLogic: false,
        voucher: false,
      },
      {
        facilityCode: 20,
        facilityGroupCode: 60,
        description: {
          content: "Shower",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 30,
        facilityGroupCode: 60,
        description: {
          content: "Bathtub",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 261,
        facilityGroupCode: 60,
        description: {
          content: "Wi-fi",
        },
        order: 1,
        indFee: false,
        indYesOrNo: true,
        voucher: false,
      },
      {
        facilityCode: 100,
        facilityGroupCode: 60,
        description: {
          content: "Internet access",
        },
        order: 1,
        indLogic: false,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 55,
        facilityGroupCode: 60,
        description: {
          content: "TV",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 170,
        facilityGroupCode: 60,
        description: {
          content: "Centrally regulated air conditioning",
        },
        order: 1,
        indLogic: true,
        voucher: false,
      },
      {
        facilityCode: 190,
        facilityGroupCode: 60,
        description: {
          content: "Central heating",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 200,
        facilityGroupCode: 60,
        description: {
          content: "Safe",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 230,
        facilityGroupCode: 60,
        description: {
          content: "Balcony",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 240,
        facilityGroupCode: 60,
        description: {
          content: "Terrace",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 250,
        facilityGroupCode: 60,
        description: {
          content: "Wheelchair-accessible",
        },
        order: 1,
        indYesOrNo: false,
        voucher: false,
      },
      {
        facilityCode: 287,
        facilityGroupCode: 60,
        description: {
          content: "Smoking rooms",
        },
        order: 1,
        indYesOrNo: false,
        voucher: false,
      },
      {
        facilityCode: 275,
        facilityGroupCode: 60,
        description: {
          content: "Extra beds on demand",
        },
        order: 1,
        indLogic: false,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 264,
        facilityGroupCode: 60,
        description: {
          content: "Cot on demand",
        },
        order: 1,
        indLogic: false,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 295,
        facilityGroupCode: 70,
        description: {
          content: "Wheelchair-accessible",
        },
        order: 1,
        indYesOrNo: false,
        voucher: false,
      },
      {
        facilityCode: 320,
        facilityGroupCode: 70,
        description: {
          content: "Car park",
        },
        order: 1,
        indFee: false,
        indYesOrNo: false,
        voucher: true,
      },
      {
        facilityCode: 30,
        facilityGroupCode: 70,
        description: {
          content: "24-hour reception",
        },
        order: 1,
        indYesOrNo: true,
        voucher: false,
      },
      {
        facilityCode: 260,
        facilityGroupCode: 70,
        description: {
          content: "Check-in hour",
        },
        order: 1,
        timeFrom: "14:00:00",
        timeTo: "00:00:00",
        voucher: true,
      },
      {
        facilityCode: 390,
        facilityGroupCode: 70,
        description: {
          content: "Check-out hour",
        },
        order: 1,
        timeFrom: "10:00:00",
        timeTo: "10:00:00",
        voucher: false,
      },
      {
        facilityCode: 564,
        facilityGroupCode: 70,
        description: {
          content: "Late Check-out",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 240,
        facilityGroupCode: 70,
        description: {
          content: "Mobile phone coverage",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 250,
        facilityGroupCode: 70,
        description: {
          content: "Wired Internet",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 550,
        facilityGroupCode: 70,
        description: {
          content: "Wi-fi",
        },
        order: 1,
        indFee: false,
        indYesOrNo: true,
        voucher: false,
      },
      {
        facilityCode: 290,
        facilityGroupCode: 70,
        description: {
          content: "Medical service",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 505,
        facilityGroupCode: 70,
        description: {
          content: "Multilingual staff",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 40,
        facilityGroupCode: 70,
        description: {
          content: "Hotel safe",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 50,
        facilityGroupCode: 70,
        description: {
          content: "Currency exchange facilities",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 70,
        facilityGroupCode: 70,
        description: {
          content: "Lift access",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 125,
        facilityGroupCode: 70,
        description: {
          content: "Garden",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 135,
        facilityGroupCode: 70,
        description: {
          content: "Terrace",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 559,
        facilityGroupCode: 70,
        description: {
          content: "Luggage room",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 80,
        facilityGroupCode: 71,
        description: {
          content: "Café",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 130,
        facilityGroupCode: 71,
        description: {
          content: "Bar",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 200,
        facilityGroupCode: 71,
        description: {
          content: "Restaurant",
        },
        order: 1,
        indLogic: true,
        voucher: false,
      },
      {
        facilityCode: 220,
        facilityGroupCode: 71,
        description: {
          content: "Non-smoking area",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 230,
        facilityGroupCode: 71,
        description: {
          content: "Highchairs",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 555,
        facilityGroupCode: 71,
        description: {
          content: "Poolside snack bar",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 575,
        facilityGroupCode: 71,
        description: {
          content: "Air conditioning in Restaurant",
        },
        order: 1,
        indLogic: true,
        voucher: false,
      },
      {
        facilityCode: 360,
        facilityGroupCode: 73,
        description: {
          content: "Indoor freshwater pool",
        },
        order: 1,
        number: 1,
        voucher: false,
      },
      {
        facilityCode: 363,
        facilityGroupCode: 73,
        description: {
          content: "Outdoor freshwater pool",
        },
        order: 1,
        number: 1,
        voucher: false,
      },
      {
        facilityCode: 385,
        facilityGroupCode: 73,
        description: {
          content: "Children’s swimming area",
        },
        order: 1,
        number: 1,
        voucher: false,
      },
      {
        facilityCode: 395,
        facilityGroupCode: 73,
        description: {
          content: "Sun loungers",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 400,
        facilityGroupCode: 73,
        description: {
          content: "Parasols",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 350,
        facilityGroupCode: 73,
        description: {
          content: "Children playground",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 340,
        facilityGroupCode: 73,
        description: {
          content: "Kids’ club",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 401,
        facilityGroupCode: 73,
        description: {
          content: "Entertainment programme for adults",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 405,
        facilityGroupCode: 73,
        description: {
          content: "Entertainment programme for children",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 193,
        facilityGroupCode: 73,
        description: {
          content: "TV lounge",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 150,
        facilityGroupCode: 73,
        description: {
          content: "Nightclub",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 420,
        facilityGroupCode: 74,
        description: {
          content: "Sauna",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 30,
        facilityGroupCode: 80,
        description: {
          content: "Breakfast buffet",
        },
        order: 1,
        indLogic: true,
        voucher: false,
      },
      {
        facilityCode: 50,
        facilityGroupCode: 80,
        description: {
          content: "Buffet lunch",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 80,
        facilityGroupCode: 80,
        description: {
          content: "Buffet dinner",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 90,
        facilityGroupCode: 90,
        description: {
          content: "Aqua fit",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 260,
        facilityGroupCode: 90,
        description: {
          content: "Table tennis",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 270,
        facilityGroupCode: 90,
        description: {
          content: "Squash",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 295,
        facilityGroupCode: 90,
        description: {
          content: "Fitness",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 350,
        facilityGroupCode: 90,
        description: {
          content: "Billiards",
        },
        order: 1,
        indLogic: true,
        indFee: false,
        voucher: false,
      },
      {
        facilityCode: 97,
        facilityGroupCode: 91,
        description: {
          content: "Other Protocol",
        },
        order: 1,
        indLogic: true,
        dateTo: "2049-12-31",
        voucher: false,
      },
    ],
    terminals: [
      {
        terminalCode: "REU",
        terminalType: "A",
        distance: 15,
        name: {
          content: "Tarragona, Reus Airport",
        },
        description: {
          content: "Airport",
        },
      },
      {
        terminalCode: "BCN",
        terminalType: "A",
        distance: 110,
        name: {
          content: "Barcelona, El Prat Airport",
        },
        description: {
          content: "Airport",
        },
      },
    ],
    issues: [
      {
        issueCode: "COVID",
        issueType: "COVID",
        description: {
          content:
            "Due to the pandemic, many accommodation and service providers may implement processes and policies to help protect the safety of all of us. This may result in the unavailability or changes in certain services and amenities that are normally available from them. More info here https://cutt.ly/MT8BJcv",
        },
        dateFrom: "2020-05-15",
        dateTo: "2022-12-31",
        order: 1,
        alternative: false,
      },
    ],
    interestPoints: [
      {
        facilityCode: 10,
        facilityGroupCode: 100,
        order: 1,
        poiName: "Cambrils",
        distance: "10000",
      },
      {
        facilityCode: 40,
        facilityGroupCode: 100,
        order: 1,
        poiName: "Barcelona",
        distance: "100000",
      },
      {
        facilityCode: 20,
        facilityGroupCode: 100,
        order: 1,
        poiName: "Salou",
        distance: "300",
      },
      {
        facilityCode: 30,
        facilityGroupCode: 100,
        order: 1,
        poiName: "Port Aventura",
        distance: "3000",
      },
      {
        facilityCode: 50,
        facilityGroupCode: 100,
        order: 1,
        poiName: "reus",
        distance: "15000",
      },
    ],
    images: [
      {
        type: {
          code: "RES",
          description: {
            content: "Restaurant",
          },
        },
        path: "00/000001/000001a_hb_r_001.jpg",
        order: 1,
        visualOrder: 603,
      },
      {
        type: {
          code: "PLA",
          description: {
            content: "Beach",
          },
        },
        path: "00/000001/000001a_hb_s_002.jpg",
        order: 2,
        visualOrder: 1101,
      },
      {
        type: {
          code: "RES",
          description: {
            content: "Restaurant",
          },
        },
        path: "00/000001/000001a_hb_r_002.jpg",
        order: 2,
        visualOrder: 601,
      },
      {
        type: {
          code: "PLA",
          description: {
            content: "Beach",
          },
        },
        path: "00/000001/000001a_hb_s_001.jpg",
        order: 1,
        visualOrder: 1103,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_005.jpg",
        roomCode: "QUA.ST",
        roomType: "QUA",
        characteristicCode: "ST",
        order: 5,
        visualOrder: 408,
      },
      {
        type: {
          code: "DEP",
          description: {
            content: "Sports and Entertainment",
          },
        },
        path: "00/000001/000001a_hb_f_002.jpg",
        order: 2,
        visualOrder: 901,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_007.jpg",
        roomCode: "DBT.C3",
        roomType: "DBT",
        characteristicCode: "C3",
        order: 7,
        visualOrder: 401,
      },
      {
        type: {
          code: "DEP",
          description: {
            content: "Sports and Entertainment",
          },
        },
        path: "00/000001/000001a_hb_f_003.jpg",
        order: 3,
        visualOrder: 902,
      },
      {
        type: {
          code: "DEP",
          description: {
            content: "Sports and Entertainment",
          },
        },
        path: "00/000001/000001a_hb_f_001.jpg",
        order: 1,
        visualOrder: 904,
      },
      {
        type: {
          code: "COM",
          description: {
            content: "Lobby",
          },
        },
        path: "00/000001/000001a_hb_l_001.jpg",
        order: 1,
        visualOrder: 202,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_016.jpg",
        roomCode: "DBT.ST-1",
        roomType: "DBT",
        characteristicCode: "ST-1",
        order: 17,
        visualOrder: 17,
      },
      {
        type: {
          code: "PIS",
          description: {
            content: "Pool",
          },
        },
        path: "00/000001/000001a_hb_p_002.jpg",
        order: 2,
        visualOrder: 501,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_010.jpg",
        roomCode: "QUA.ST-1",
        roomType: "QUA",
        characteristicCode: "ST-1",
        order: 10,
        visualOrder: 404,
      },
      {
        type: {
          code: "PIS",
          description: {
            content: "Pool",
          },
        },
        path: "00/000001/000001a_hb_p_001.jpg",
        order: 1,
        visualOrder: 503,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_001.jpg",
        roomCode: "SGL.ST",
        roomType: "SGL",
        characteristicCode: "ST",
        order: 1,
        visualOrder: 410,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_013.jpg",
        roomCode: "DBT.ST-2",
        roomType: "DBT",
        characteristicCode: "ST-2",
        order: 13,
        visualOrder: 407,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_014.jpg",
        roomCode: "QUA.ST-2",
        roomType: "QUA",
        characteristicCode: "ST-2",
        order: 14,
        visualOrder: 406,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_w_002.jpg",
        order: 2,
        visualOrder: 302,
      },
      {
        type: {
          code: "GEN",
          description: {
            content: "General view",
          },
        },
        path: "00/000001/000001a_hb_a_002.jpg",
        order: 2,
        visualOrder: 102,
      },
      {
        type: {
          code: "GEN",
          description: {
            content: "General view",
          },
        },
        path: "00/000001/000001a_hb_a_001.jpg",
        order: 1,
        visualOrder: 101,
      },
      {
        type: {
          code: "HAB",
          description: {
            content: "Room",
          },
        },
        path: "00/000001/000001a_hb_ro_003.jpg",
        roomCode: "DBT.ST",
        roomType: "DBT",
        characteristicCode: "ST",
        order: 3,
        visualOrder: 405,
      },
      {
        type: {
          code: "GEN",
          description: {
            content: "General view",
          },
        },
        path: "00/000001/000001a_hb_a_004.jpg",
        order: 4,
        visualOrder: 105,
      },
      {
        type: {
          code: "GEN",
          description: {
            content: "General view",
          },
        },
        path: "00/000001/000001a_hb_a_003.jpg",
        order: 3,
        visualOrder: 103,
      },
    ],
    wildcards: [
      {
        roomType: "DBT.ST-2",
        roomCode: "DBT",
        characteristicCode: "ST-2",
        hotelRoomDescription: {
          content: "MONOPARENTAL 1 ADULT 1 CHILD",
        },
      },
      {
        roomType: "QUA.ST-2",
        roomCode: "QUA",
        characteristicCode: "ST-2",
        hotelRoomDescription: {
          content: "4 ADULTS",
        },
      },
      {
        roomType: "QUA.ST-1",
        roomCode: "QUA",
        characteristicCode: "ST-1",
        hotelRoomDescription: {
          content: "3 ADULTS 1 CHILD",
        },
      },
      {
        roomType: "SGL.ST",
        roomCode: "SGL",
        characteristicCode: "ST",
        hotelRoomDescription: {
          content: "STANDARD",
        },
      },
      {
        roomType: "QUA.ST",
        roomCode: "QUA",
        characteristicCode: "ST",
        hotelRoomDescription: {
          content: "2 ADULTS 2 CHILDREN",
        },
      },
    ],
    web: "http://www.ohtels.es/",
    lastUpdate: "2022-03-21",
    S2C: "4*",
    ranking: 64,
  },
];
