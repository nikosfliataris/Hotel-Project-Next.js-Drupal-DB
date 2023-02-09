import EntityRepository from "../../../functions/EntityRepository";
import { hotels } from "./../../../Hotels/HotelsData/4";
import fetcher from "./../../../functions/fetcher";
import { config } from "./../DrupalRequestForHotelDetails";
export default async (req, res) => {
  let responsehotel = hotels;
  // General URL for Drupal//
  let token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNiNmU3ZGUxZDAxMmQ2ZjExMWVhN2Q4Njc3NjgwY2JjNjhhMDgwOGZiYzA0NTU3OGQ5OWU1M2NhNDQ4ZDI3ZjI5ZTFmNjY5NjJiNTg3Nzg3In0.eyJhdWQiOiJVcHBlclVzZXIiLCJqdGkiOiJjYjZlN2RlMWQwMTJkNmYxMTFlYTdkODY3NzY4MGNiYzY4YTA4MDhmYmMwNDU1NzhkOTllNTNjYTQ0OGQyN2YyOWUxZjY2OTYyYjU4Nzc4NyIsImlhdCI6MTY3NDU3MzI1MCwibmJmIjoxNjc0NTczMjUwLCJleHAiOjE2NzcxNjUyNTAuMTA3MzY2LCJzdWIiOiIxIiwic2NvcGUiOlsiYXV0aGVudGljYXRlZCJdfQ.TEuZJ6blrxpbFolvSvsBqdgleguH_MKBzygFjRV7xbNJGX14oWFf9tqmfEIVtztdgKIVP-2wlyu41X-oLO-zF_HamdBWT1EbKTXZjJ2Rget8LYDOczfqLAPP6QfVzVd9qdP4gQ3XqDuj8theuOmrDxUat_t4CRZHvp9VPGPOye-pEtPGGL8GYzj-HjCAXldO0FdTcm68Epjxt9-RQYlBsfU5YRJ5A88Bj1SzQaW4d7w9g-HBf4Q85oru7LZgxMSFuksuv15YodQc1Da4OzrEww0Mj-YckjzXO6lGZoln_Ls68esejwekcK0YuRpSTNNuzXWbK3Ix_OFWcrgMYgjUC4dVdh_drMlOjqO1aza1bNY4vIDmApoP0kuQK0IAp9MTWy3wLqfqPseUPtROpd-_dsvyfYpjs_M4Y3i9CrbehpDAL_jF1Vrpl3X53jfFW6ohrCbwliAhV_7IwRdydjpFVvlwZyi37zroYPEZRncqR46LNZ5GCqsdJt_mWUzZ9r0WyZip8a4tS0kQu80OViw5sUQk3XPbPxXRs3DhW6h7XZlWhaNZYeRmSfTCc0X37vfFBPS186ovHtJ3ga3AhTKoFiak8rgPJ-yJwsaF3zr-tKoQe59SN-8o5efMvwbpynTiFLwSzHdV1g7Oh2_mhzoK-HSrOGmBPt5zdaPub4-dcBA";
  let DrupalUrl = "https://dev-fliataris-app.pantheonsite.io";
  /////////////////////////////
  const DrupalHeaders = {
    method: "POST",
    headers: {
      token,
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
    },
    config,
  };
  // Value for Entity//
  let acc = [];
  ////////////////////

  // Initializing Values for Drupal//
  let loading = false;
  let Accommodations = [];
  let Categories = [];
  let CategoriesGroup = [];
  let Boards = [];
  let Chains = [];
  let Countries = [];
  let Destinations = [];
  let Facilities = [];
  let Issues = [];
  let Rooms = [];
  let Segments = [];
  let Terminals = [];
  let ImagesType = [];
  ////////////////////////////

  // Get request to Drupal for Content Types Properties//
  async function GetDrupalEntities() {
    loading = false;
    // Get Accommodations from Drupal//
    // const AccommodationEntity = new EntityRepository(
    //   "node",
    //   "accomodations",
    //   "",
    //   DrupalUrl
    // );
    // const GetListAllAccommodation = await AccommodationEntity.getListAll(
    //   DrupalUrl,
    //   "",
    //   acc
    // );
    // Accommodations.push(GetListAllAccommodation);
    // console.log(GetListAllAccommodation);
    ///////////////////////////////////////////////////

    // ///////////////////////////////////////////////////

    // Get Boards from Drupal//
    const BoardEntity = new EntityRepository("node", "boards", "", DrupalUrl);
    const GetListAllOfBoards = await BoardEntity.getListAll(DrupalUrl, "", acc);
    Boards.push(GetListAllOfBoards);
    console.log(GetListAllOfBoards);
    // ////////////////////////////////////////////////

    // Get Chains from Drupal//
    const ChainsEntity = new EntityRepository("node", "chains", "", DrupalUrl);
    const GetListAllOfChains = await ChainsEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    Chains.push(GetListAllOfChains);

    // /////////////////////////////////////

    // // Get Countries from Drupal//
    const CountriesEntity = new EntityRepository(
      "node",
      "countries",
      "",
      DrupalUrl
    );
    const GetListAllOfCountries = await CountriesEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    Countries.push(GetListAllOfCountries);

    // /////////////////////////////////////

    // // Get Categories from Drupal//
    const CategoriesEntity = new EntityRepository(
      "node",
      "categories",
      "",
      DrupalUrl
    );
    const GetListAllOfCategories = await CategoriesEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    Categories.push(GetListAllOfCategories);

    // /////////////////////////////////////

    // // Get Categories_Group from Drupal//
    const CategoriesGroupEntity = new EntityRepository(
      "node",
      "categories_group",
      "",
      DrupalUrl
    );
    const GetListAllOfCategoriesGroup = await CategoriesGroupEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    CategoriesGroup.push(GetListAllOfCategoriesGroup);

    // /////////////////////////////////////

    // // Get Issues from Drupal//
    const IssuesEntity = new EntityRepository("node", "issues", "", DrupalUrl);
    const GetListAllOfIssues = await IssuesEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    Issues.push(GetListAllOfIssues);

    // /////////////////////////////////////

    // // Get Segments from Drupal//
    const SegmentsEntity = new EntityRepository(
      "node",
      "segment",
      "",
      DrupalUrl
    );
    const GetListAllOfSegments = await SegmentsEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    Segments.push(GetListAllOfSegments);

    // /////////////////////////////////////

    // // Get Terminals from Drupal//
    const TerminalsEntity = new EntityRepository(
      "node",
      "terminals",
      "",
      DrupalUrl
    );
    const GetListAllOfTerminals = await TerminalsEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    Terminals.push(GetListAllOfTerminals);

    // /////////////////////////////////////

    // // Get Facilities from Drupal//
    const FacilitiesEntity = new EntityRepository(
      "node",
      "facilities",
      "",
      DrupalUrl
    );
    const GetListAllOfFacilities = await FacilitiesEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    Facilities.push(GetListAllOfFacilities);

    // /////////////////////////////////////

    // // Get ImageTypes from Drupal//
    const ImageTypesEntity = new EntityRepository(
      "node",
      "images",
      "",
      DrupalUrl
    );
    const GetListAllOfImageTypes = await ImageTypesEntity.getListAll(
      DrupalUrl,
      "",
      acc
    );
    ImagesType.push(GetListAllOfImageTypes);

    // /////////////////////////////////////

    // // // Get Destinations from Drupal//
    // const DestinationsEntity = new EntityRepository(
    //   "node",
    //   "destinations",
    //   "",
    //   DrupalUrl
    // );
    // const GetListAllOfDestinations = await DestinationsEntity.getListAll(
    //   DrupalUrl,
    //   "",
    //   acc
    // );
    // Destinations.push(GetListAllOfDestinations);

    // // /////////////////////////////////////

    // // // Get Rooms from Drupal//
    // const RoomsEntity = new EntityRepository("node", "rooms", "", DrupalUrl);
    // const GetListAllOfRooms = await RoomsEntity.getListAll(DrupalUrl, "", acc);
    // Rooms.push(GetListAllOfRooms);

    /////////////////////////////////////
    loading = true;
  }
  ////// Post request to Drupal for Hotels///////////
  async function PostRequestToDrupalForHotels() {
    for (let i = 0; i < responsehotel?.length; i++) {
      // /// Hotel Accommodations ///
      const IndexAccomodation = Accommodations?.filter(
        (index) =>
          index.attributes.field_code == responsehotel[i].accommodationTypeCode
      );
      console.log(IndexAccomodation);
      // ////////////////////////

      // // /// Hotel Boards ///
      let BoardsList = [];
      if (responsehotel[i].boardCodes) {
        for (let a = 0; a < responsehotel[i]?.boardCodes.length; a++) {
          const IndexBoards = Boards[0]?.filter(
            (index) =>
              index.attributes.field_code === responsehotel[i].boardCodes[a]
          );
          BoardsList.push(IndexBoards[0]);
        }
      }
      console.log(BoardsList);
      // // //////////////////

      // // /// Hotel Chain ///
      const IndexChain = Chains[0]?.filter(
        (index) => index.attributes.field_code === responsehotel[i].chainCode
      );
      console.log(IndexChain);
      // // //////////////////

      // // /// Country and State of the Hotel ///
      const IndexCountry = Countries[0]?.filter(
        (index) =>
          index.attributes.field_iso_code === responsehotel[i].countryCode
      );
      const IncludedCoutryandStates = await fetch(
        `${DrupalUrl}/jsonapi/node/countries/${IndexCountry[0]?.id}?include=field_states`,
        {
          method: "GET",
          headers: {
            token,
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        }
      );
      const DataIncluded = await IncludedCoutryandStates.json();
      const IndexState = DataIncluded.included?.filter(
        (index) => index.attributes.field_code == responsehotel[i].stateCode
      );
      console.log(IndexCountry, IndexState);
      // // //////////////////////////////////////

      // // /// Hotel Category and Category Group ///
      const IndexCategory = Categories[0]?.filter(
        (index) => index.attributes.field_code === responsehotel[i].categoryCode
      );
      console.log(IndexCategory);
      const IndexCategoryGroup = CategoriesGroup[0]?.filter(
        (index) =>
          index.attributes.field_code === responsehotel[i].categoryGroupCode
      );
      console.log(IndexCategoryGroup);
      // // //////////////////////////////////////////

      // // /// Destination of the Hotel ///
      const IndexDestination = Destinations[0]?.filter(
        (index) =>
          index.attributes.field_code === responsehotel[i].destinationCode
      );
      const IncludedDestinationsandZones = await fetch(
        `${DrupalUrl}/jsonapi/node/destinations/${IndexDestination[0]?.id}?include=field_zones`,
        {
          method: "GET",
          headers: {
            token,
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        }
      );
      const IncludedZones = await IncludedDestinationsandZones.json();
      const IndexZones = IncludedZones.included?.filter(
        (index) =>
          index.attributes.field_simple_code == responsehotel[i].zoneCode
      );
      console.log(IndexDestination, IndexZones);
      // ///////////////////////////////

      // /// Set Facilities of the Hotel ///
      let IndexFacility = [];
      for (let b = 0; b < responsehotel[i].facilities.length; b++) {
        const IndexFacilities = Facilities[0]?.filter(
          (index) =>
            index.attributes.field_simple_code ===
            responsehotel[i].facilities[b].facilityCode
        );
        const IncludedFacilities = await fetch(
          `${DrupalUrl}/jsonapi/node/facilities/${IndexFacilities[0]?.id}?include=field_facilitygroupcode&filter[field_facilitygroupcode]=${responsehotel[i].facilities[b].facilityCode}`,
          {
            method: "GET",
            headers: {
              token,
              Accept: "application/vnd.api+json",
              "Content-Type": "application/vnd.api+json",
            },
          }
        );
        const data = await IncludedFacilities.json();
        delete DrupalHeaders["body"];
        DrupalHeaders["body"] = {
          data: {
            type: "node--hotel_facilities",
            attributes: {
              title: `${responsehotel[i].name.content} Facility ${b}`,
              field_age_from: !responsehotel[i].facilities[b].ageFrom
                ? null
                : responsehotel[i].facilities[b].ageFrom,
              field_age_to: !responsehotel[i].facilities[b].ageTo
                ? null
                : !responsehotel[i].facilities[b].ageTo,
              field_application_type: !responsehotel[i].facilities[b]
                .applicationType
                ? null
                : responsehotel[i].facilities[b].applicationType,
              field_currency_type: {
                value: !responsehotel[i].facilities[b].currency
                  ? null
                  : responsehotel[i].facilities[b].currency,
              },
              field_datefrom: !responsehotel[i].facilities[b].dateFrom
                ? null
                : responsehotel[i].facilities[b].dateFrom,
              field_dateto: !responsehotel[i].facilities[b].dateTo
                ? null
                : responsehotel[i].facilities[b].dateTo,
              field_description: {
                value: !responsehotel[i].facilities[b].description
                  ? null
                  : responsehotel[i].facilities[b].description.content,
              },
              field_distance: !responsehotel[i].facilities[b].distance
                ? null
                : responsehotel[i].facilities[b].distance,
              field_fee_amount: !responsehotel[i].facilities[b].amount
                ? null
                : responsehotel[i].facilities[b].amount,
              field_ind_logic: !responsehotel[i].facilities[b].indLogic
                ? null
                : responsehotel[i].facilities[b].indLogic,
              field_indfee: !responsehotel[i].facilities[b].indFee
                ? null
                : responsehotel[i].facilities[b].indFee,
              field_indyesorno: !responsehotel[i].facilities[b].indYesOrNo
                ? null
                : responsehotel[i].facilities[b].indYesOrNo,
              field_name_formated: {
                value: data.data.attributes.field_description.value,
              },
              field_number: !responsehotel[i].facilities[b].number
                ? null
                : responsehotel[i].facilities[b].number,
              field_ordernumber: !responsehotel[i].facilities[b].order
                ? null
                : responsehotel[i].facilities[b].order,
              field_timefrom: !responsehotel[i].facilities[b].timeFrom
                ? null
                : responsehotel[i].facilities[b].timeFrom,
              field_timeto: !responsehotel[i].facilities[b].timeTo
                ? null
                : responsehotel[i].facilities[b].timeTo,
              field_voucher: !responsehotel[i].facilities[b].voucher
                ? null
                : responsehotel[i].facilities[b].voucher,
            },
            relationship: {
              field_facilities: {
                data: [
                  {
                    type: data.data.type,
                    id: data.data.id,
                  },
                ],
              },
              field_facilitygroupcode: {
                data: [
                  {
                    type: data.included[0].type,
                    id: data.included[0].id,
                  },
                ],
              },
            },
          },
        };
        const PostHotelFacilitiesToDrupal = await fetcher(
          "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/hotel_facilities",
          DrupalHeaders
        );
        IndexFacility.push(PostHotelFacilitiesToDrupal.data);
      }
      console.log(IndexFacility);
      // /////////////////////////////////

      // /// Hotel Segments ///
      let IndexSegments = [];
      if (responsehotel[i].segmentCodes) {
        for (let d = 0; d < responsehotel[i].segmentCodes.length; d++) {
          const IndexSegment = Segments[0]?.filter(
            (index) =>
              index.attributes.field_simple_code ==
              responsehotel[i].segmentCodes[d]
          );
          if (IndexSegment) {
            IndexSegments.push(IndexSegment[0]);
          }
        }
      }
      console.log(IndexSegments);
      // // //////////////////////

      // // /// Hotel Terminals ///
      let IndexTerminals = [];
      if (responsehotel[i]?.terminals) {
        for (let e = 0; e < responsehotel[i].terminals.length; e++) {
          const IndexTerminal = Terminals[0]?.filter(
            (index) =>
              index.attributes.field_code ==
              responsehotel[i].terminals[e].terminalCode
          );
          if (IndexTerminal) {
            IndexTerminals.push(IndexTerminal[0]);
          }
        }
      }
      console.log(IndexTerminals);
      // // ///////////////////////

      // // /// Hotel Issues ///
      let IndexIssues = [];
      if (responsehotel[i]?.issues) {
        for (let f = 0; f < responsehotel[i].issues.length; f++) {
          const IndexIssue = Issues[0]?.filter(
            (index) =>
              index.attributes.field_code ==
              responsehotel[i].issues[f].issueCode
          );
          if (IndexIssue) {
            IndexIssues.push(IndexIssue[0]);
          }
        }
      }
      console.log(IndexIssues);
      // /////////// SET Values To Drupal /////////////
      let HotelPhones = [];
      for (let g = 0; g < responsehotel[i].phones.length; g++) {
        delete DrupalHeaders["body"];
        DrupalHeaders["body"] = {
          data: {
            type: "node--phones_number",
            attributes: {
              title: `${responsehotel[i].name.content}/${responsehotel[i].phones[g]?.phoneType}`,
              field_phonenumber: responsehotel[i].phones[g]?.phoneNumber,
              field_phonetype: responsehotel[i].phones[g]?.phoneType,
            },
          },
        };
        const ResPhones = await fetcher(
          "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/phones_number",
          DrupalHeaders
        );
        HotelPhones.push(ResPhones.data);
      }
      console.log(HotelPhones);
      //////////////////////////////////////////////////

      // // SET Coordinates ///
      let ResCoordinates = [];
      delete DrupalHeaders["body"];
      DrupalHeaders["body"] = {
        data: {
          type: "node--coordinates",
          attributes: {
            title: `${responsehotel[i].name.content}/Coordinates`,
            field_latitude: responsehotel[i].coordinates.latitude,
            field_longitude: responsehotel[i].coordinates.longitude,
          },
        },
      };
      const Res = await fetcher(
        "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/coordinates",
        DrupalHeaders
      );
      ResCoordinates.push(Res);
      console.log(ResCoordinates);
      // //////////////////////////////////////////////

      // // SET Hotel Addres //
      let HotelAddress = [];
      delete DrupalHeaders["body"];
      DrupalHeaders["body"] = {
        data: {
          type: "node--address",
          attributes: {
            title: `${responsehotel[i].name.content} - Address`,
            field_code: responsehotel[i]?.address.number,
            field_content: responsehotel[i]?.address.content,
            field_street: responsehotel[i]?.address.street,
          },
        },
      };
      const ResAddress = await fetcher(
        "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/address",
        DrupalHeaders
      );
      HotelAddress.push(ResAddress);
      console.log(HotelAddress);

      // /// SET Hotel Images to Drupal ///
      let ResImages = [];
      for (let k = 0; k < responsehotel[i].images.length; k++) {
        const IndexImageType = ImagesType[0]?.filter(
          (index) =>
            index.attributes.field_code ==
            responsehotel[i].images[k].imageTypeCode
        );
        delete DrupalHeaders["body"];
        if (IndexImageType && IndexRoomType) {
          DrupalHeaders["body"] = {
            data: {
              type: "node--image",
              attributes: {
                title: `${responsehotel[i].name.content} / image-${[k]}`,
                field_ordernumber: !responsehotel[i].images[k].order
                  ? null
                  : responsehotel[i].images[k].order,
                field_visualorder: !responsehotel[i].images[k].visualOrder
                  ? null
                  : responsehotel[i].images[k].visualOrder,
                field_path: !responsehotel[i].images[k].path
                  ? null
                  : responsehotel[i].images[k].path,
              },
              relationships: {
                data: [
                  {
                    type: IndexImageType[0].type,
                    id: IndexImageType[0].id,
                  },
                ],
              },
            },
          };
        }
        const Res = await fetcher(
          "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/image",
          DrupalHeaders
        );
        ResImages.push(Res.data);
      }
      console.log(ResImages);

      // /// SET InterestPoints to Drupal ///
      let ResInterestPoints = [];
      if (responsehotel[i]?.interestPoints) {
        for (let b = 0; b < responsehotel[i].interestPoints?.length; b++) {
          const IndexFacilities = Facilities[0]?.filter(
            (index) =>
              index.attributes.field_simple_code ===
              responsehotel[i].interestPoints[b].facilityCode
          );
          for (let c = 0; c < IndexFacilities?.length; c++) {
            const IncludedFacilities = await fetch(
              `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/facilities/${IndexFacilities[c]?.id}?include=field_facilitygroupcode`,
              {
                method: "GET",
                headers: {
                  token,
                  Accept: "application/vnd.api+json",
                  "Content-Type": "application/vnd.api+json",
                },
              }
            );
            const IndexIncluded = await IncludedFacilities.json();
            delete DrupalHeaders["body"];
            DrupalHeaders["body"] = {
              data: {
                type: "node--interestpoints",
                attributes: {
                  title: responsehotel[i].interestPoints[b]?.poiName,
                  field_distances:
                    responsehotel[i]?.interestPoints[b]?.distance,
                  field_fee: !responsehotel[i].interestPoints[b]?.fee
                    ? false
                    : true,
                  field_pointname: responsehotel[i].interestPoints[b]?.poiName,
                  field_ordernumber: responsehotel[i].interestPoints[b]?.order,
                },
                relationships: {
                  field_facilities: {
                    data: {
                      type: IndexIncluded.data?.type,
                      id: IndexIncluded.data?.id,
                    },
                  },
                },
              },
            };
          }
          const Res = await fetcher(
            "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/interestpoints",
            DrupalHeaders
          );
          ResInterestPoints.push(Res.data);
        }
      }
      console.log(ResInterestPoints);
      // ///////////////////////////////////////

      // /// SET WildCards to Drupal ///
      let ResWildCards = [];
      if (responsehotel[i].wildcards) {
        for (let l = 0; l < responsehotel[i].wildcards.length; l++) {
          const IndexRooms = Rooms[0]?.filter(
            (index) =>
              index.attributes.field_code ==
              responsehotel[i].wildcards[l].roomType
          );
          console.log(IndexRooms);
          delete DrupalHeaders["body"];
          DrupalHeaders["body"] = {
            data: {
              type: "node--wildcards",
              attributes: {
                title: IndexRooms[0].attributes.field_description.value,
                field_description:
                  IndexRooms[0].attributes.field_description.value,
              },
              relationships: {
                field_roomcharacteristic: {
                  data: {
                    type: IndexRooms[0].type,
                    id: IndexRooms[0].id,
                  },
                },
                field_roomcode: {
                  data: {
                    type: IndexRooms[0].type,
                    id: IndexRooms[0].id,
                  },
                },
                field_room_type: {
                  data: {
                    type: IndexRooms[0].type,
                    id: IndexRooms[0].id,
                  },
                },
              },
            },
          };
          const Res = await fetcher(
            "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/wildcards",
            DrupalHeaders
          );
          ResWildCards.push(Res.data);
        }
      }

      console.log(ResWildCards);
      // /////////////////////////////

      // /// SET RoomStay and RoomFacilities Rooms to Drupal///
      let HotelRooms = [];
      for (let m = 0; m < responsehotel[i]?.rooms.length; m++) {
        let ResFacilities = [];
        let ResRoomStay = [];
        if (responsehotel[i].rooms[m].roomFacilities) {
          for (
            let n = 0;
            n < responsehotel[i].rooms[m].roomFacilities.length;
            n++
          ) {
            const IndexRoomFacilities = Facilities[0]?.filter(
              (index) =>
                index.attributes.field_simple_code ==
                responsehotel[i].rooms[m].roomFacilities[n].facilityCode
            );
            for (let index in IndexRoomFacilities) {
              const IncludedFacilities = await fetcher(
                `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/facilities/${IndexRoomFacilities[index]?.id}?include=field_facilitygroupcode`,
                {
                  method: "GET",
                  headers: {
                    token,
                    Accept: "application/vnd.api+json",
                    "Content-Type": "application/vnd.api+json",
                  },
                }
              );
              if (
                IncludedFacilities.data.attributes.field_simple_code ==
                  responsehotel[i].rooms[m].roomFacilities[n].facilityCode &&
                IncludedFacilities.included[0].attributes.field_facility_code ==
                  responsehotel[i].rooms[m].roomFacilities[n].facilityGroupCode
              ) {
                delete DrupalHeaders["body"];
                DrupalHeaders["body"] = {
                  data: {
                    type: "node--roomfacility",
                    attributes: {
                      title: "facility",
                      field_description: {
                        value:
                          IncludedFacilities.data.attributes.field_description
                            .value,
                      },
                      field_number:
                        responsehotel[i].rooms[m].roomFacilities[n].number,
                      field_indfee: !responsehotel[i].rooms[m].roomFacilities[n]
                        .indFee
                        ? false
                        : true,
                      field_ind_logic: !responsehotel[i].rooms[m]
                        .roomFacilities[n].indLogin
                        ? false
                        : true,
                      field_indyesorno: !responsehotel[i].rooms[m]
                        .roomFacilities[n].indYesOrNo
                        ? false
                        : true,
                      field_ordernumber: !responsehotel[i].rooms[m]
                        .roomFacilities[n].order
                        ? 0
                        : !responsehotel[i].rooms[m].roomFacilities[n].order,
                      field_voucher: !responsehotel[i].rooms[m].roomFacilities[
                        n
                      ].voucher
                        ? false
                        : true,
                    },
                    relationships: {
                      field_facility_codes: {
                        data: {
                          type: IncludedFacilities.data.type,
                          id: IncludedFacilities.data.id,
                        },
                      },
                      field_facility_group_code: {
                        data: {
                          type: IncludedFacilities.included[0].type,
                          id: IncludedFacilities.included[0].id,
                        },
                      },
                    },
                  },
                };
                const Res = await fetcher(
                  "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/roomfacility",
                  DrupalHeaders
                );
                ResFacilities.push(Res.data);
              }
            }
          }
        }

        if (responsehotel[i].rooms[m].roomStays) {
          for (
            let p = 0;
            p < responsehotel[i]?.rooms[m].roomStays.length;
            p++
          ) {
            let ResRoomStayFacilities = [];
            if (responsehotel[i]?.rooms[m].roomStays[p].roomStayFacilities) {
              for (
                let q = 0;
                q <
                responsehotel[i]?.rooms[m].roomStays[p].roomStayFacilities
                  .length;
                q++
              ) {
                const IndexRoomFacilities = Facilities[0]?.filter(
                  (index) =>
                    index.attributes.field_simple_code ==
                    responsehotel[i]?.rooms[m].roomStays[p].roomStayFacilities[
                      q
                    ].facilityCode
                );
                for (let index in IndexRoomFacilities) {
                  const IncludedFacilities = await fetcher(
                    `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/facilities/${IndexRoomFacilities[index]?.id}?include=field_facilitygroupcode`,
                    {
                      method: "GET",
                      headers: {
                        token,
                        Accept: "application/vnd.api+json",
                        "Content-Type": "application/vnd.api+json",
                      },
                    }
                  );
                  if (
                    IncludedFacilities.data.attributes.field_simple_code ==
                      responsehotel[i]?.rooms[m].roomStays[p]
                        .roomStayFacilities[q].facilityCode &&
                    IncludedFacilities.included[0].attributes
                      .field_facility_code ==
                      responsehotel[i]?.rooms[m].roomStays[p]
                        .roomStayFacilities[q].facilityGroupCode
                  ) {
                    delete DrupalHeaders["body"];
                    DrupalHeaders["body"] = {
                      data: {
                        type: "node--room_stay_facility",
                        attributes: {
                          title: "stay facility",
                          field_number:
                            responsehotel[i]?.rooms[m].roomStays[p]
                              .roomStayFacilities[q].number,
                        },
                        relationships: {
                          field_facilitiescode: {
                            data: IncludedFacilities.data,
                          },
                          field_facility_group_code: {
                            data: IncludedFacilities.included,
                          },
                        },
                      },
                    };
                    const Res = await fetcher(
                      "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/room_stay_facility",
                      DrupalHeaders
                    );
                    ResRoomStayFacilities.push(Res.data);
                  }
                }
              }
            }
            console.log(ResRoomStayFacilities);

            delete DrupalHeaders["body"];
            DrupalHeaders["body"] = {
              data: {
                type: "node--roomstay",
                attributes: {
                  field_description: {
                    value: !responsehotel[i]?.rooms[m].roomStays[p].description
                      ? "NULL"
                      : responsehotel[i]?.rooms[m].roomStays[p].description,
                  },
                  field_order: !responsehotel[i]?.rooms[m].roomStays[p].order
                    ? "NULL"
                    : responsehotel[i]?.rooms[m].roomStays[p].order,
                  field_staytype: !responsehotel[i]?.rooms[m].roomStays[p]
                    .stayType
                    ? "NULL"
                    : responsehotel[i]?.rooms[m].roomStays[p].stayType,
                  title: "BedRoom",
                },
                relationships: {
                  field_roomstayfacilities: !responsehotel[i]?.rooms[m]
                    .roomStays[p].roomStayFacilities
                    ? { data: [] }
                    : {
                        data: ResRoomStayFacilities,
                      },
                },
              },
            };
            const ResStay = await fetcher(
              "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/roomstay",
              DrupalHeaders
            );
            ResRoomStay.push(ResStay.data);
          }
        }
        const IndexRoom = Rooms[0]?.filter(
          (index) =>
            index.attributes.field_code == responsehotel[i].rooms[m].roomCode
        );
        // Set Hotel Rooms to Drupal //
        delete DrupalHeaders["body"];
        if (IndexRoom.length != 0) {
          DrupalHeaders["body"] = {
            data: {
              type: "node--hotel_rooms",
              attributes: {
                title: `${responsehotel[i]?.name.content} Room-${[m]}`,
                field_code: responsehotel[i]?.rooms[m].roomCode,
                field_isparentroom: responsehotel[i]?.rooms[m].isParentRoom,
                field_maxadults: responsehotel[i]?.rooms[m].maxAdults,
                field_maxchildren: responsehotel[i]?.rooms[m].maxChildren,
                field_maxpax: responsehotel[i]?.rooms[m].maxPax,
                field_minadults: responsehotel[i]?.rooms[m].minAdults,
                field_minpax: responsehotel[i]?.rooms[m].minPax,
              },
              relationships: {
                field_roomcode: {
                  data: {
                    type: IndexRoom[0].type,
                    id: IndexRoom[0].id,
                  },
                },
                field_roomfacilities: !responsehotel[i]?.rooms[m].roomFacilities
                  ? { data: [] }
                  : { data: ResFacilities },
                field_roomstays: !responsehotel[i]?.rooms[m].roomStays
                  ? { data: [] }
                  : { data: ResRoomStay },
                field_roomtype: responsehotel[i]?.rooms[m].roomType,
              },
            },
          };
          const ResRooms = await fetcher(
            "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/hotel_rooms",
            DrupalHeaders
          );
          HotelRooms.push(ResRooms.data);
        }
      }
      console.log(HotelRooms);
      // Set Hotel to Drupal//
      delete DrupalHeaders["body"];
      DrupalHeaders["body"] = {
        data: {
          type: "node--hotel",
          attributes: {
            title: responsehotel[i]?.name.content,
            field_cityname: responsehotel[i]?.city.content,
            field_postalcode: responsehotel[i]?.postalCode,
            field_description: {
              value: responsehotel[i]?.description.content,
            },
            field_exclusive_deal: !responsehotel[i]?.exclusiveDeal
              ? 0
              : responsehotel[i]?.exclusiveDeal,
            field_health_and_safety: responsehotel[i]?.S4C,
            field_hotelemail: responsehotel[i]?.email,
            field_last_up_date: responsehotel[i]?.lastUpdate,
            field_license: responsehotel[i]?.license,
            field_hotelname: responsehotel[i]?.name.content,
            field_ranking: responsehotel[i]?.ranking,
            field_simple_code: responsehotel[i]?.code,
            field_web: responsehotel[i]?.web,
          },
          relationships: {
            field_accomodation_type: !responsehotel[i].accommodationTypeCode
              ? { data: [] }
              : {
                  data: {
                    type: IndexAccomodation[0].type,
                    id: IndexAccomodation[0].id,
                  },
                },
            field_address: !responsehotel[i].address
              ? { data: [] }
              : {
                  data: {
                    type: HotelAddress[0].data.type,
                    id: HotelAddress[0].data.id,
                  },
                },

            field_board: !responsehotel[i].boardCodes
              ? { data: [] }
              : { data: BoardsList },
            field_category: !responsehotel[i].categoryCode
              ? { data: [] }
              : {
                  data: {
                    type: IndexCategory[0].type,
                    id: IndexCategory[0].id,
                  },
                },
            field_category_group: !responsehotel[i].categoryGroupCode
              ? { data: [] }
              : {
                  data: {
                    type: IndexCategoryGroup[0].type,
                    id: IndexCategoryGroup[0].id,
                  },
                },
            field_chain: !responsehotel[i].chainCode
              ? { data: [] }
              : {
                  data: {
                    type: IndexChain[0].type,
                    id: IndexChain[0].id,
                  },
                },
            field_coordinate: !responsehotel[i].coordinates
              ? { data: [] }
              : {
                  data: {
                    type: ResCoordinates[0].data.type,
                    id: ResCoordinates[0].data.id,
                  },
                },
            field_countries_code: !responsehotel[i].countryCode
              ? { data: [] }
              : {
                  data: {
                    type: IndexCountry[0].type,
                    id: IndexCountry[0].id,
                  },
                },
            field_destination: !responsehotel[i].destinationCode
              ? { data: [] }
              : {
                  data: {
                    type: IndexDestination[0].type,
                    id: IndexDestination[0].id,
                  },
                },
            field_facilities: !responsehotel[i].facilities
              ? { data: [] }
              : { data: IndexFacility },
            field_images: !responsehotel[i].images
              ? { data: [] }
              : { data: ResImages },
            field_interestpoints: !responsehotel[i].interestPoints
              ? { data: [] }
              : { data: ResInterestPoints },
            field_issues: !responsehotel[i].issues
              ? { data: [] }
              : { data: IndexIssues },
            field_phones: !responsehotel[i].phones
              ? { data: [] }
              : { data: HotelPhones },
            field_rooms: !responsehotel[i].rooms
              ? { data: [] }
              : { data: HotelRooms },
            field_segment: !responsehotel[i].segmentCodes
              ? { data: [] }
              : { data: IndexSegments },
            field_statecode: !responsehotel[i].stateCode
              ? { data: [] }
              : { data: { type: IndexState[0].type, id: IndexState[0].id } },
            field_terminals: !responsehotel[i].terminals
              ? { data: [] }
              : { data: IndexTerminals },
            field_wildcards: !responsehotel[i].wildcards
              ? { data: [] }
              : { data: ResWildCards },
            field_zones: !responsehotel[i].zoneCode
              ? { data: [] }
              : { data: { type: IndexZones[0].type, id: IndexZones[0].id } },
          },
        },
      };
      const ResHotel = await fetcher(
        "https://dev-fliataris-app.pantheonsite.io/jsonapi/node/hotel",
        DrupalHeaders
      );
      console.log(ResHotel);
      break;
    }
  }
  // await GetDrupalEntities();
  // if (loading) {
  //   await PostRequestToDrupalForHotels();
  // }
};
