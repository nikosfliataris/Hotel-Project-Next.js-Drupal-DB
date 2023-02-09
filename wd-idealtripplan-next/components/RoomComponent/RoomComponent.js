import style from "./RoomComponent.module.scss";
import RateComponent from "../RateComponent/RateComponent";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Carousel, Table } from "react-bootstrap";
import RateComponentSmall from "../RateComponentSmall/RateComponentSmall";
function RoomComponent({ data, Images, details }) {
  const [ShowData, setShowData] = useState(false);
  const [Width, setDepth] = useState(window.innerWidth);

  const roomId = details?.included
    .filter((item) => item.type === "node--hotel_rooms")
    .filter((index) => index.attributes.field_code == data.code);

  const WindowDepth = () => {
    setDepth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", WindowDepth);
    return () => window.removeEventListener("resize", WindowDepth);
  }, [Width]);

  return (
    <div className={`${style.roomComponent} container`}>
      <div className={style.roomtype}>
        <span>Room Category: {data.name}</span>
      </div>
      {typeof window !== "undefined" ? (
        Width > 992 ? (
          <div className={style.rooms}>
            <div className={style.roomPhotos}>
              {" "}
              {Images.map((index) => (
                <div>
                  <img
                    src={`http://photos.hotelbeds.com/giata/${index.attributes.field_path}`}
                    alt={`${data.name} Room`}
                    width={320}
                    height={180}
                  />
                </div>
              ))}
            </div>
            <Table responsive className={style.tables}>
              <thead className={style.tablehead}>
                <tr>
                  <th>
                    <span>Type:</span>
                  </th>
                  <th>
                    <span>Rooms:</span>
                  </th>
                  <th>
                    <span>Adults:</span>
                  </th>
                  <th>
                    <span>Children: </span>
                  </th>
                  <th>
                    {" "}
                    <span>
                      <strong>Price:</strong>
                    </span>
                  </th>
                  <th>
                    {" "}
                    <span>
                      <strong>Payment:</strong>
                    </span>
                  </th>
                  <th>
                    <span>
                      <strong>Cancel:</strong>
                    </span>
                  </th>
                </tr>
              </thead>{" "}
              {data.rates?.map((index) => (
                <RateComponent index={index} RoomId={roomId[0].id} />
              ))}
            </Table>
          </div>
        ) : (
          <div className={style.roomssmall}>
            <div className={style.roomPhotossmall}>
              <Carousel>
                {Images.map((index) => (
                  <Carousel.Item>
                    <img
                      className="w-100"
                      src={`http://photos.hotelbeds.com/giata/${index.attributes.field_path}`}
                      alt={`${data.name} Room`}
                      width={320}
                      height={180}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className={style.roomDetailsSmall}>
              {data.rates?.map((index) => (
                <RateComponentSmall index={index} RoomId={roomId[0].id} />
              ))}
            </div>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}
export default RoomComponent;
