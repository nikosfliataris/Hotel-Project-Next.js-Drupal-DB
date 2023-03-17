import style from "./RateComponent.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const url = require("url");
function RateComponent({ Images, rates, roomId, booking }) {
  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  const [ImageNumber, setImageNumber] = useState(0);
  const [RatesKey, setRatesKeys] = useState([]);
  const [SelectedKey, setSelectedKey] = useState([]);
  console.log(SelectedKey);
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

  return (
    <>
      <div className={style.room_book_item} key={roomId}>
        <div className={style.room_book_img}>
          <a
            className={style.slick_arrow_left}
            type="button"
            onClick={() => handleClick("Previous")}
          >
            <BsArrowLeft />
          </a>

          <img
            src={`http://photos.hotelbeds.com/giata/bigger/${Images[ImageNumber].attributes.field_path}`}
            alt="Room Images"
          />
          <a
            className={style.slick_arrow_right}
            type="button"
            onClick={() => handleClick("Next")}
          >
            <BsArrowRight />
          </a>
        </div>
        <div className={style.room_booking_right_side}>
          <div className={style.room_person_select}>
            {rates.map((rate, i) => (
              <div className={style.room_booking_table}>
                <div className={style.room_booking_table_info}>
                  <span>
                    <p className={style.info_item}>Type</p>
                    <p className={style.info_type}>{rate.boardName}</p>
                  </span>
                  <span>
                    <p className={style.info_item}>Price</p>
                    <p className={style.info_type}>{rate.net} €</p>
                  </span>
                  <span>
                    <p className={style.info_item}>Availability</p>
                    <p className={style.info_type}>{rate.rateType}</p>
                  </span>
                  <span className={style.select_room}>
                    <p className={style.info_item}>Select Room</p>
                    <input
                      type="checkbox"
                      checked={SelectedKey.includes(rate.rateKey)}
                      onClick={() => {
                        let filter = SelectedKey.filter(
                          (key) => key === rate.rateKey
                        );
                        if (filter.length === 0) {
                          setSelectedKey((old) => [...old, rate.rateKey]);
                        } else {
                          setSelectedKey((old) =>
                            old.filter((key) => key != rate.rateKey)
                          );
                        }
                      }}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={(e) =>
            booking(
              e,
              SelectedKey,
              rate[0].adults,
              rates[0].children,
              rates[0].paymentType
            )
          }
          className={`${style.booking_button} btn btn-secondary`}
        >
          Book Now
        </button>
      </div>
    </>
  );
}

export default RateComponent;
