import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import style from "./Result.module.scss";
import Select from "./../AdditionalFilters/Select/Select";
import "react-datepicker/dist/react-datepicker.css";
import fetcher from "./../../functions/fetcher";
import Paginations from "../Pagination/Paginations";
import DateISOFormat from "../Datepicker/DateISOFormat";
import ResultFormSearch from "../ResultFormSearch/ResultFormSearch";
import HotelComponent from "../HotelComponent/HotelComponent";
import { IoIosArrowUp } from "react-icons/io";
import Loader from "../Loader/Loader";
const url = require("url");

function Result({ Drupal_Return }) {
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  //-> set values//
  // typeof window!="undefined"? window.localStorage.getItem("HotelsArray"):
  const [loading, setLoading] = useState(true);
  const [Hotels, setHotels] = useState();
  const [HotelDetails, setHotelDetails] = useState([]);

  const [LoadingHotelDetails, setHotelDetaillsLoading] = useState(true);
  const [checkIn, setCheckIn] = useState(
    query.checkIn ? new Date(query.checkIn) : new Date()
  );
  const [checkOut, setCheckOut] = useState(
    query.checkOut ? new Date(query.checkOut) : new Date()
  );
  const [newAdults, setNewAdults] = useState(query?.adults);
  const [newChildren, setNewChildren] = useState(query?.children);
  const [newRoom, setNewRoom] = useState(query?.rooms);
  const [accommodations, setAccomodations] = useState(Drupal_Return[0].data);
  const [boards, setBoards] = useState(Drupal_Return[1].data);
  const [Accommodations_State, setAccommodations_State] = useState(false);
  const [Boards_State, setBoards_State] = useState(false);
  const [SelectedAccommodations, setSelectedAccommodations] = useState(
    query?.accommodations ? query.accommodations : []
  );
  const [SelectedBoards, setSelectedBoards] = useState(
    query?.boards ? query.boards : []
  );
  const [Payment, setPayment] = useState(
    query.paymentType ? query.paymentType : "BOTH"
  );
  const payment = ["BOTH", "AT_HOTEL", "AT_WEB"];
  const [Height, setHeight] = useState(
    typeof document !== "undefined" ? document.documentElement.scrollTop : ""
  );
  const Drupaltoken = {
    Authentication:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmZTZiMWEwYzFlODcwMDMxNGNlYTU3MDAyZWM2ZjQzODgyMGI0MTg1YjM2NjYxN2I2OTYwMzg1ZmUyYzY5YWJhNmNiYmE2ZTM0MDg3ZDEzIn0.eyJhdWQiOiI5YjEwN2Q1YS02NDAzLTQ1ODktYmMyMy0yOWM5YjBkZGMxYWUiLCJqdGkiOiIyZmU2YjFhMGMxZTg3MDAzMTRjZWE1NzAwMmVjNmY0Mzg4MjBiNDE4NWIzNjY2MTdiNjk2MDM4NWZlMmM2OWFiYTZjYmJhNmUzNDA4N2QxMyIsImlhdCI6MTY2MTQzNDI0OCwibmJmIjoxNjYxNDM0MjQ4LCJleHAiOjE2NjI2NDM4NDgsInN1YiI6IjMiLCJzY29wZXMiOlsiYXV0aGVudGljYXRlZCIsIm5leHQiXX0.BXuPF4s30fgxorisju0ge7SFewHSb_emjS9hO--SbBBAeiKwmpES2vdI39Z1UGMIhJ9kkGyMG_IDOkSjE1l83rlJsU-pQGUiIpL9BKZnCyFQ-IoqUsIuEgPeaTbM-k5QII_YShyaEv8WdYJvKtH5tPFMsCsAbw-0a2eLEs7ltXfUMkLFAFpr4H0jrch1pPK83dXWXYF2IdQuN0VcXdSzY85ulMGLmNkTxdm3jI3CbT2AaGnOr9fAO8YeuqzHNy_PGNsO2b7iPpoyKQGUxhjk1UEfFeSH7x_6Vvcr664N1ffu0PYUl6kNuzyhbWZizZbjO3EGgiWo4fPtYCVGT0CsBlIKHphdL3cQF8VrICDzTWzMPIQ1xe6tbsuykqubdVNAxaaobABHzD5FKuZs-94ey8SNoIk1rOKwxkflngAp0Ake8eg0AL0f6ZGMX1Yu3YiG2XifM0xKYF8m7YlFHijaMpb5SbQttNyWO5M0bp15FGPfiFG4FFhXidJfI5iCuUUqCZQWg8Z_LUgUN5yGqLdMEJWVceYbgOLFxDIV-i6msN72dj9EDUZzTDdFoqbVA-GEoJtqaDh_4Q-eCRPjSqjawvo8-itp0TOP9nEh4ax8OFuK8R47a5p5v3NcWteiVGKw0ymr6fIhQ062CJmUSYcPoqXd45H-VcSOq5xC1m5BkOk",
  };

  let mybody = [
    {
      stay: {
        checkIn: DateISOFormat(checkIn),
        checkOut: DateISOFormat(checkOut),
      },
      occupancies: [
        {
          rooms: newRoom,
          adults: newAdults,
          children: newChildren,
        },
      ],
      destination: {
        code: query.destination,
      },
    },
  ];

  if (query.children > 0) {
    let Pax = [];
    for (let i = 0; i < query.children; i++) {
      if (Pax.length === 0) {
        Pax.push({
          paxes: [
            {
              type: "CH",
              age: 5,
            },
          ],
        });
      } else {
        Pax[0].paxes.push({
          type: "CH",
          age: 5,
        });
      }
    }

    mybody[0].occupancies[0] = {
      ...mybody[0].occupancies[0],
      paxes: Pax[0].paxes,
    };
  }

  /// set selected filter values to query parameters for new request///
  if (SelectedAccommodations?.length > 0) {
    let accom = [];
    for (let i = 0; i < SelectedAccommodations.length; i++) {
      if (accom.length === 0) {
        accom.push({
          accommodations: [SelectedAccommodations[0]],
        });
      } else {
        accom[0].accommodations.push(SelectedAccommodations[i]);
      }
    }
    mybody[0].accommodations = accom[0].accommodations;
  }

  if (SelectedBoards.length > 0) {
    let Board = [];
    for (let i = 0; i < SelectedBoards.length; i++) {
      if (Board.length === 0) {
        Board.push({ board: [SelectedBoards[0]] });
      } else {
        Board[0].board.push(SelectedBoards[i]);
      }
    }
    mybody[0].boards = {
      included: true,
      board: Board[0].board,
    };
  }

  if (Payment.length > 0) {
    mybody[0].filter = { paymentType: Payment };
  }
  const FetchAvailabilityDataFromHotelApiPostRequest = async () => {
    setLoading(true);
    await fetcher(`${process.env.NEXT_PUBLIC_LOCALHOST}/api/search`, {
      method: "POST",
      headers: "",
      body: mybody[0],
    }).then((data) => {
      window.localStorage.setItem("HotelsArray", JSON.stringify(data.hotels));
    });
    setLoading(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      FetchAvailabilityDataFromHotelApiPostRequest();
    }
  }, [SelectedAccommodations, SelectedBoards, Payment]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push({
      pathname: "/result",
      query: {
        checkIn: mybody[0].stay.checkIn,
        checkOut: mybody[0].stay.checkOut,
        rooms: mybody[0].occupancies[0].rooms,
        adults: mybody[0].occupancies[0].adults,
        children: mybody[0].occupancies[0].children,
        destination: mybody[0].destination.code,
        accommodations: mybody[0].accommodations
          ? mybody[0].accommodations
          : "",
        boards: mybody[0].boards ? mybody[0].boards.board : "",
        paymentType: mybody[0].filter.paymentType
          ? mybody[0].filter.paymentType
          : "",
        page: 0,
      },
    });
  };

  // Pagination //
  let lastPage =
    Hotels?.total % 8 === 0
      ? Hotels?.total / 8
      : Math.floor(Hotels?.total / 8) + 1;
  let currentPage = parseInt(query.page);
  let offset = parseInt(query.page) * 8;
  const [offsets, setOffsets] = useState(offset + 8);
  const [paginated, setPaginated] = useState(Hotels?.hotels.slice(0, 8));
  const [loadingPagination, setLoadingPagination] = useState(true);
  const PaginatedData = () => {
    setLoadingPagination(true);
    setPaginated(Hotels?.hotels?.slice(offset, offsets));
    setOffsets((offset += 8));
    setLoadingPagination(false);
  };
  console.log(paginated);
  const GetHotelInfoFromDrupalAfterAvailability = async () => {
    setHotelDetaillsLoading(true);
    for (let i = 0; i < paginated?.length; i++) {
      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_LOCALHOST}/api/DrupalForHotels/requestToDrupalForImages`,
        {
          method: "GET",
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            url: `https://dev-fliataris-app.pantheonsite.io/jsonapi/node/hotel/?filter[field_code]=${paginated[i].code}&include=field_images.field_imagetype&jsonapi_include=field_images`,
          },
        }
      );
      setHotelDetails((prev) => [...prev, res]);
    }
    setHotelDetaillsLoading(false);
  };

  const getParamsLink = (pageNumber) => {
    query.page = pageNumber;
    let queryString = "";
    let first = true;
    for (const [key, value] of Object.entries(url_parts.query)) {
      if (first) {
        queryString += `?${key}=${value}`;
        first = false;
      } else {
        queryString += `&${key}=${value}`;
      }
    }
    return queryString;
  };

  // Loops for filter Checkbox after request- Checkbox checked from query params /; //
  let AccommodationFilter = [];
  let BoardsFilter = [];
  for (let i = 0; i < accommodations?.length; i++) {
    let indexFilter = SelectedAccommodations?.filter(
      (int) => accommodations[i].attributes.field_code === int
    );

    if (indexFilter) {
      AccommodationFilter.push(indexFilter[0]);
    } else {
      AccommodationFilter.push("");
    }
  }
  for (let i = 0; i < boards?.length; i++) {
    let indexFilter = SelectedBoards?.filter(
      (int) => boards[i].attributes.field_code === int
    );

    if (indexFilter) {
      BoardsFilter.push(indexFilter[0]);
    } else {
      BoardsFilter.push("");
    }
  }

  useEffect(() => {
    PaginatedData();
  }, [Hotels]);
  useEffect(() => {
    GetHotelInfoFromDrupalAfterAvailability();
  }, [paginated]);
  const WindowDepth = (e) => {
    setHeight(e.target.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", WindowDepth);
    return () => window.removeEventListener("scroll", WindowDepth);
  }, [Height]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHotels(JSON.parse(localStorage.getItem("HotelsArray")));
    }
  }, []);
  if (loading === true && LoadingHotelDetails === true)
    return (
      <main>
        <Loader />
      </main>
    );
  return (
    <main className={style.Results} id="results-hotels">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className={style.section_heading_center}>
              <h2>38 hotel found</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-8 col-sm-12 col-xs-12">
            <div className={style.left_side_search_area}>
              <div className={style.left_side_search_heading}>
                <h5>Filters By</h5>
              </div>
              <form
                onSubmit={handleSubmit}
                className={style.left_side_search_boxed}
              >
                <div className={style.filterBy}>
                  <ResultFormSearch
                    filter_Header={
                      accommodations[0].type
                        .split("node--")
                        .join("")
                        .charAt(0)
                        .toUpperCase() +
                      accommodations[0].type
                        .split("node--")
                        .join("")
                        .slice(1)
                        .toLowerCase()
                    }
                    stateTypes={accommodations}
                    Filter={AccommodationFilter}
                    setStateTypes={setAccommodations_State}
                    SelectedType={SelectedAccommodations}
                    setSelectedType={setSelectedAccommodations}
                  />
                  <ResultFormSearch
                    filter_Header={
                      boards[0].type
                        .split("node--")
                        .join("")
                        .charAt(0)
                        .toUpperCase() +
                      boards[0].type
                        .split("node--")
                        .join("")
                        .slice(1)
                        .toLowerCase()
                    }
                    stateTypes={boards}
                    Filter={BoardsFilter}
                    setStateTypes={setBoards_State}
                    SelectedType={SelectedBoards}
                    setSelectedType={setSelectedBoards}
                  />
                  <Select
                    value={Payment}
                    label="Payment Type"
                    handleSelect={(e) => {
                      setPayment(e.target.value);
                    }}
                    values={payment}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={style.right_side_area}>
              <div className={style.hotels_Array}>
                {paginated?.map((hotel, i) => (
                  <HotelComponent
                    {...hotel}
                    key={hotel.code}
                    details={HotelDetails[i]?.data[0]?.field_images[0]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Paginations
          lastPage={lastPage}
          currentPage={currentPage}
          pathname={pathname}
          getParamsLink={getParamsLink}
          PaginatedData={PaginatedData}
        />
        <div className="row">
          <div className="col-12">
            <button
              className={Height > 498 ? style.go_top_active : style.go_top}
            >
              <a href="#results-hotels">
                <IoIosArrowUp />
              </a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Result;
