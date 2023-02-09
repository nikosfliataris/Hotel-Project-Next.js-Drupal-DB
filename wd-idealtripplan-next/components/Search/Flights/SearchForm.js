import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import style from "./SearchForm.module.scss";
import Dateformat from "./../../../classes/DateFormat";
function SearchForm({
  show,
  setPassengersShow,
  searchInput,
  setSearchInput,
  handleSubmit,
  setSelectedDestination,
  selectedDestination,
}) {
  const time = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    searchInput.checkIn ? new Date(searchInput.checkIn) : new Date()
  );

  return (
    <div className={style.theme_search_form_area}>
      <div className={style.tab_content}>
        <div
          className={style.tab_panel}
          id="hotels"
          role="tabpanel"
          aria-labelledby="hotels-tab"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className={style.tour_search_form}>
                <form action="#!">
                  <div className="row">
                    <div
                      className={`col-lg-6 col-md-12 col-sm-12 col-12 ${style.form_places}`}
                    >
                      <div className={style.flight_Search_boxed}>
                        <p>Destination</p>
                        <input
                          type="text"
                          placeholder="Where are you going?"
                          value={searchInput.destination}
                          name="destination"
                          onChange={(e) =>
                            setSearchInput((old) => {
                              let destination = e.target.value;
                              return { ...old, destination };
                            })
                          }
                          onClick={() => setSelectedDestination()}
                        />
                      </div>
                    </div>
                    <div
                      className={`col-lg-4 col-md-6 col-sm-12 col-12 ${style.form_places}`}
                    >
                      <div className={style.form_search_date}>
                        <div
                          className={`${style.flight_Search_boxed} ${style.date_flex_area}`}
                        >
                          <div className={style.Journey_date}>
                            <DatePicker
                              startDate={startDate}
                              onChange={(update) => {
                                console.log(update);
                                setStartDate(update);
                                setSearchInput((old) => {
                                  let checkIn = Dateformat(update);
                                  return { ...old, checkIn };
                                });
                              }}
                              selectsStart
                              endDate={endDate}
                              minDate={startDate}
                              wrapperClassName="datepicker"
                              placeholderText="CheckIn"
                            />
                            <input
                              type="data"
                              value={
                                searchInput.checkIn
                                  ? searchInput.checkIn
                                  : Dateformat(startDate)
                              }
                              className={style.datepicker_input}
                              disabled
                            />
                          </div>
                          <div className={style.Journey_date}>
                            <DatePicker
                              endDate={endDate}
                              startDate={startDate}
                              onChange={(update) => {
                                console.log(update);
                                setEndDate(update);
                                setSearchInput((old) => {
                                  let checkOut = Dateformat(update);
                                  return { ...old, checkOut };
                                });
                              }}
                              selectsEnd={endDate}
                              minDate={startDate}
                              wrapperClassName="datepicker"
                              placeholderText="CheckOut"
                            />
                            <input
                              type="data"
                              value={
                                searchInput.checkOut
                                  ? searchInput.checkOut
                                  : Dateformat(endDate)
                              }
                              className={style.datepicker_input}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`col-lg-2  col-md-6 col-sm-12 col-12 ${style.form_places}`}
                    >
                      <div
                        className={`${style.flight_Search_boxed} ${style.dropdown_passenger_area}`}
                      >
                        <p>Passenger</p>
                        <div className="dropdown">
                          <button
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded={show}
                            onClick={() => setPassengersShow(!show)}
                          >
                            {searchInput.adults + searchInput.children !== NaN
                              ? searchInput.adults + searchInput.children
                              : 0}{" "}
                            Passengers
                          </button>
                          <div
                            className={
                              show
                                ? `dropdown-menu ${style.dropdown_passenger_info} show`
                                : `dropdown-menu ${style.dropdown_passenger_info}`
                            }
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <div className={style.traveller_calulate_persons}>
                              <div className={style.passengers}>
                                <div className={style.passengers_types}>
                                  <div className={style.passengers_type}>
                                    <div className={style.text}>
                                      <div className={style.type_label}>
                                        <p>Adult</p>
                                        <span>12+ yrs</span>
                                      </div>
                                    </div>
                                    <div className={style.button_set}>
                                      <button
                                        type="button"
                                        className={style.btn_add}
                                        name="adults"
                                        onClick={() =>
                                          setSearchInput((old) => {
                                            let adult = old.adults + 1;
                                            return { ...old, adults: adult };
                                          })
                                        }
                                      >
                                        <FaPlus />
                                      </button>
                                      <span
                                        className={`${style.count} ${style.pcount}`}
                                      >
                                        {searchInput.adults}
                                      </span>
                                      <button
                                        type="button"
                                        className={style.btn_subtract}
                                        name="adults"
                                        onClick={() =>
                                          setSearchInput((old) => {
                                            let adult = old.adults - 1;
                                            if (adult < 1) {
                                              let adult = 1;
                                              return { ...old, adults: adult };
                                            }
                                            return { ...old, adults: adult };
                                          })
                                        }
                                      >
                                        <FaMinus />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={style.passengers_type}>
                                    <div className={style.text}>
                                      <div className={style.type_label}>
                                        <p>Children</p>
                                        <span>Less than 12 yrs</span>
                                      </div>
                                    </div>
                                    <div className={style.button_set}>
                                      <button
                                        type="button"
                                        className={style.btn_add}
                                        onClick={() =>
                                          setSearchInput((old) => {
                                            let kids = old.children + 1;
                                            return {
                                              ...old,
                                              children: kids,
                                            };
                                          })
                                        }
                                      >
                                        <FaPlus />
                                      </button>
                                      <span
                                        className={`${style.count} ${style.pcount}`}
                                      >
                                        {searchInput.children}
                                      </span>
                                      <button
                                        type="button"
                                        className={style.btn_subtract}
                                        onClick={() =>
                                          setSearchInput((old) => {
                                            let kids = old.children - 1;
                                            if (kids < 0) {
                                              let kids = 0;
                                              return {
                                                ...old,
                                                children: kids,
                                              };
                                            }
                                            return {
                                              ...old,
                                              children: kids,
                                            };
                                          })
                                        }
                                      >
                                        <FaMinus />
                                      </button>
                                    </div>
                                  </div>
                                  <div className={style.passengers_type}>
                                    <div className={style.text}>
                                      <div className={style.type_label}>
                                        <p>Rooms</p>
                                      </div>
                                    </div>
                                    <div className={style.button_set}>
                                      <button
                                        type="button"
                                        className={style.btn_add}
                                        onClick={() =>
                                          setSearchInput((old) => {
                                            let room = old.rooms + 1;
                                            return {
                                              ...old,
                                              rooms: room,
                                            };
                                          })
                                        }
                                      >
                                        <FaPlus />
                                      </button>
                                      <span
                                        className={`${style.count} ${style.pcount}`}
                                      >
                                        {searchInput.rooms}
                                      </span>
                                      <button
                                        type="button"
                                        className={style.btn_subtract}
                                        onClick={() =>
                                          setSearchInput((old) => {
                                            let room = old.rooms - 1;
                                            if (room < 0) {
                                              let room = 0;
                                              return {
                                                ...old,
                                                rooms: room,
                                              };
                                            }
                                            return {
                                              ...old,
                                              rooms: room,
                                            };
                                          })
                                        }
                                      >
                                        <FaMinus />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.top_form_search_button}>
                      <button
                        className={`${style.formSubmit_btn} btn-primary`}
                        type="button"
                        onClick={handleSubmit}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
