import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
require("react-datepicker/dist/react-datepicker.css");
import "react-datepicker/dist/react-datepicker.css";
import SearchInput from "../SearchInput/SearchInput";
import style from "./Search.module.scss";
import Dateformat from "../../classes/DateFormat";
import SearchForm from "./Flights/SearchForm";
import { FaMinus, FaPlus } from "react-icons/fa";

const url = require("url");
function Search() {
  //-> set values
  const [dateRange, setDateRange] = useState([null, null]);
  const [searchInput, setSearchInput] = useState({
    destination: "",
    adults: 1,
    children: 0,
    checkIn: Dateformat(new Date()),
    checkOut: Dateformat(new Date()),
    rooms: 1,
  });
  const [Destination, setDestination] = useState();
  const [selectedDestination, setSelectedDestination] = useState();
  const [handleloading, setHandleLoading] = useState(false);
  const [passengersShow, setPassengersShow] = useState(false);
  console.log(selectedDestination);
  // <- //
  //-> Route setUp for url query request
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  // <-//
  const handleSubmit = async (e) => {
    e.preventDefault();
    setHandleLoading(false);
    router.push({
      pathname: "/result",
      query: {
        checkIn: searchInput.checkIn,
        checkOut: searchInput.checkOut,
        rooms: searchInput.rooms ? searchInput.rooms : 1,
        adults: searchInput.adults ? searchInput.adults : 1,
        children: searchInput.children ? searchInput.children : 0,
        destination: selectedDestination.attributes.field_code,
        page: 0,
      },
    });
    setHandleLoading(true);
  };

  useEffect(() => {
    if (
      searchInput.destination?.length &&
      searchInput.destination?.length > 2
    ) {
      if (!selectedDestination) {
        const DelayRequestToDrupalForDestinations = () => {
          clearTimeout(searchInput.destination);
          setTimeout(async () => {
            await fetch(
              `${process.env.NEXT_PUBLIC_LOCALHOST}/api/searchdestination/searchdestinations`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({ input: searchInput.destination }),
              }
            )
              .then((res) => res.json())
              .then((data) => setDestination(data.data));
          }, 100);
        };
        DelayRequestToDrupalForDestinations();
      }
    }
  }, [searchInput.destination]);

  return (
    <section className={style.theme_search_form}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchForm
              show={passengersShow}
              setPassengersShow={setPassengersShow}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              handleSubmit={handleSubmit}
              setSelectedDestination={setSelectedDestination}
              selectedDestination={selectedDestination}
            />
            {Destination && (
              <div className={style.result_search}>
                {Destination?.map((dest) => (
                  <div
                    className={style.result_item}
                    key={dest.id}
                    onClick={() => {
                      setSearchInput((prev) => {
                        return {
                          ...prev,
                          destination: dest.attributes.field_name,
                        };
                      });
                      setSelectedDestination(dest);
                      setDestination("");
                    }}
                  >
                    {dest.attributes.field_name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
