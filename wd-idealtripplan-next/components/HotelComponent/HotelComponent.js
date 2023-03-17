import React from "react";
import style from "./Hotel.module.scss";
import { SlLocationPin } from "react-icons/sl";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Loader from "../Loader/Loader";
function Hotel({
  categoryName,
  currency,
  destinationName,
  minRate,
  name,
  rooms,
  zoneName,
  code,
  details,
}) {
  return (
    <div className={style.cruise_search_item}>
      <div className="row">
        <div className="col-lg-4">
          <div className={style.cruise_item_img}>
            {details ? (
              <img
                src={`http://photos.hotelbeds.com/giata/bigger/${details?.field_path}`}
                alt="Hotel Image"
              />
            ) : (
              <div className={style.Loader}>
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-8">
          <div className={style.cruise_item_inner_content}>
            <div className={style.cruise_content_top_wrapper}>
              <div className={style.cruise_content_top_left}>
                <h4>{name}</h4>
                <p>
                  <SlLocationPin />
                  {zoneName}/{destinationName}
                </p>
                <small>
                  <a
                    onClick={() => {
                      window?.open("https://localhost:3000/iframe", "_blank");
                    }}
                  >
                    see in map
                  </a>
                </small>
              </div>
            </div>
            <div className={style.cruise_content_middel_wrapper}>
              <div className={style.cruise_content_middel_left}>
                <h5>Free cancellation</h5>
                <p>Cancel your booking at any time</p>
              </div>
              <div className={style.cruise_content_middel_right}>
                <h5>Price starts from: </h5>
                <p className={style.price}>
                  {minRate}
                  {currency}
                </p>
              </div>
            </div>
            <div className={style.cruise_content_bottom_wrapper}>
              <button className={style.cruise_content_bottom_right}>
                <a
                  href={`/hotels/${code}`}
                  className={`btn ${style.btn_theme} ${style.btn_md}`}
                >
                  Check availability
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
