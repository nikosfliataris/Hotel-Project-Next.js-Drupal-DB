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
    <div className={style.Result_Hotel_Component}>
      <div className={style.theme_common_box_two}>
        <div className={style.theme_two_box_img}>
          {details ? (
            <a href={`/hotels/${code}`}>
              <img
                src={`http://photos.hotelbeds.com/giata/bigger/${details?.field_path}`}
                alt="Hotel Image"
              />
            </a>
          ) : (
            <div className={style.Loader}>
              <Loader />
            </div>
          )}

          <p>
            <SlLocationPin />
            {zoneName}/{destinationName}
          </p>
        </div>
        <div className={style.theme_two_box_content}>
          <h4>
            <a href={`/hotels/${code}`}>{name}</a>
          </h4>
          <p>
            <span className={style.review_rating}>{categoryName}</span>
            <span className={style.review_count}>{name}</span>
          </p>
          <h3>
            <span className={style.price_start}>Price starts from: </span>
            <span className={style.price}>
              {minRate}
              {currency}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
