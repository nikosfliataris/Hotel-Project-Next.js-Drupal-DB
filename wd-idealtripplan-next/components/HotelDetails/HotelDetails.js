import { useState, useEffect } from "react";

import style from "./HotelDetails.module.scss";
import Loader from "./../Loader/Loader";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import RateComponent from "../RateComponent/RateComponent";
import { useRouter } from "next/router";
const url = require("url");
function HotelDetails({ details, ResponseHotel }) {
  if (!details) {
    return (
      <section>
        <Loader />
      </section>
    );
  }

  const {
    field_city,
    field_hoteldescription,
    field_hotelemail,
    field_hotelname,
    field_web,
    field_code,
  } = details.data[0].attributes;
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  const [ImageNumber, setImageNumber] = useState(0);
  function handleClick(direction) {
    if (direction === "Previous") {
      if (ImageNumber === 0) {
        setImageNumber(Images.length - 1);
      } else {
        setImageNumber((prev) => prev - 1);
      }
    }
    if (direction === "Next") {
      if (ImageNumber === Images.length - 1) {
        setImageNumber(0);
      } else {
        setImageNumber((prev) => prev + 1);
      }
    }
  }

  const CategoryType = details.included?.find(
    (index) => index.type === "node--categories"
  );
  const Images = details.included?.filter(
    (index) => index.type === "node--image"
  );
  const Boards = details.included?.filter(
    (index) => index.type === "node--boards"
  );
  const Address = details.included?.filter(
    (index) => index.type === "node--address"
  );
  const Phones = details.included?.filter(
    (index) => index.type === "node--phones_number"
  );
  const Coordinates = details.included?.filter(
    (index) => index.type === "node--coordinates"
  );
  const Accommodation = details.included?.filter(
    (index) => index.type === "node--accomodations"
  );
  const PointsOfInterest = details.included?.filter(
    (index) => index.type === "node--interestpoints"
  );
  function handleBooking(e, rate, adults, children, paymentType) {
    console.log(e, rate);
    e.preventDefault();
    router.push({
      pathname: `/booking`,
      query: {
        adults: adults,
        children: children,
        RoomId: 1,
        ratekey: rate,
        payment: paymentType,
      },
    });
  }
  return (
    <section className={style.tour_details_main} key={field_code}>
      <div className={`${style.tour_details} col-12`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={style.tour_details_leftside_wrapper}>
                <div className={style.tour_details_heading_wrapper}>
                  <div className={style.tour_details_top_heading}>
                    <h2>{field_hotelname} </h2>{" "}
                    <p>
                      <BiMap /> {field_city}
                    </p>
                    <h5>
                      {CategoryType.attributes.field_description}{" "}
                      {Accommodation[0].attributes.field_description}
                    </h5>
                  </div>
                  <div className={style.tour_package_bar_price}>
                    <h2>
                      {ResponseHotel[0]?.currency} {ResponseHotel[0]?.maxRate}
                      <sub>/Per person</sub>{" "}
                    </h2>
                  </div>
                </div>
                <div className={style.tour_details_img_wrapper}>
                  <div className={style.slider}>
                    <div className={style.carousel}>
                      <div className={style.slick_list}>
                        <img
                          src={`http://photos.hotelbeds.com/giata/bigger/${Images[ImageNumber]?.attributes.field_path}`}
                          alt="Hotel Image"
                        />
                      </div>
                      <div className={style.carousel_buttons}>
                        <a
                          className={style.slick_arrow_left}
                          type="button"
                          onClick={() => handleClick("Previous")}
                        >
                          <BsArrowLeft className={style.arrowLeft} />
                        </a>
                        <a
                          className={style.slick_arrow_right}
                          type="button"
                          onClick={() => handleClick("Next")}
                        >
                          <BsArrowRight className={style.arrowRight} />
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.tour_details_boxed}>
                  <h3 className={style.heading_theme}>Overview</h3>
                  <div className={style.tour_details_boxed_inner}>
                    <p>{field_hoteldescription}</p>
                  </div>
                </div>
              </div>
              <div className={style.tour_details_boxed}>
                <h3 className={style.heading_theme}>Select your room</h3>
                <div className={style.room_select_area}>
                  <div className={style.tab_content}>
                    <div className={style.tab_pane}>
                      <div className={style.room_book_item}>
                        <ul className={style.room_booking_right_side}>
                          {ResponseHotel[0]?.rooms.map((room, i) => {
                            let tempImages = details.included.filter(
                              (index) =>
                                index.attributes.field_roomcodeimage ==
                                room.code
                            );
                            return (
                              <li
                                className={style.room_booking_heading}
                                key={i}
                              >
                                <div className={style.room_book_header}>
                                  <h3>{room.name}</h3>
                                </div>

                                <RateComponent
                                  rates={room.rates}
                                  Images={tempImages}
                                  roomId={room.code}
                                  booking={handleBooking}
                                  key={i}
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.tour_details_boxed}>
                <h3 className={style.heading_theme}>Hotel location</h3>
                <div className={style.map_area}>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1248.2992851973943!2d${Coordinates[0].attributes.field_longitude}!3d${Coordinates[0].attributes.field_latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc3f634c09985693%3A0x89f8fc3b4439d70!2sApartamentos%20las%20G%C3%B3ndolas!5e0!3m2!1sel!2sgr!4v1675937194412!5m2!1sel!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
                  ></iframe>{" "}
                </div>
              </div>
              <div className={style.tour_details_boxed}>
                <h3 className={style.heading_theme}>Points of Interest</h3>
                <div className={style.points_area}>
                  <ul>
                    {PointsOfInterest.map((point) => (
                      <li>
                        <div>
                          <p>Name: {point.attributes.field_pointname}</p>
                          <p></p>
                        </div>
                        <div>
                          Distance from Hotel:
                          {point.attributes.field_distances} m
                        </div>
                        <br />
                        <hr />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.tour_details_right_sidebar_wrapper}>
                <div className={style.tour_detail_right_sidebar}>
                  <div className={style.tour_details_right_boxed}>
                    <div className={style.tour_details_right_box_hotel_info}>
                      <h3>Hotel Info</h3>
                    </div>

                    <div className={style.tour_package_details_info_list}>
                      <h3>Address</h3>
                      <p>{Address[0].attributes.field_content[0]}</p>
                      <br />
                      <h3>Telephones</h3>
                      <ul>
                        {Phones.map((phone, i) => (
                          <li key={i}>
                            {phone.attributes.field_phonenumber} /{" "}
                            {phone.attributes.field_phonetype}
                          </li>
                        ))}
                      </ul>
                      <h3>Hotel WebSite</h3>
                      <p>Email: {field_hotelemail}</p>
                      <p>Web-Site: {field_web}</p>
                    </div>
                  </div>
                  <div className={style.tour_details_right_boxed}>
                    <div className={style.tour_details_right_box_heading}>
                      <h3>Why choose us</h3>
                    </div>

                    <div className={style.tour_package_details_bar_list}>
                      <ul>
                        {Boards.map((index, i) => (
                          <li key={i}>{index.attributes.field_description}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelDetails;
