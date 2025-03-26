import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import config from "../../common/config";
import PropertyCardCompo from "./propertyCardCompo";
import Slider from "react-slick";

const SmallPropertyComponent = ({ Status }) => {
  const [properties, setProperties] = useState([]);
  const [propertyStatuses, setPropertyStatuses] = useState({});
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef(null);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // This will center the active slide
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/property`);
        const propertiesData = response.data.data;
        setProperties(propertiesData);

        // Extract unique property_status IDs
        const uniqueStatusIds = [
          ...new Set(propertiesData.map((prop) => prop.property_status)),
        ];

        if (uniqueStatusIds.length > 0) {
          fetchPropertyStatuses(uniqueStatusIds);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const fetchPropertyStatuses = async (statusIds) => {
    console.log("statusIds :", statusIds);
    try {
      const responses = await Promise.all(
        statusIds.map((id) =>
          axios.get(`${config.API_URL}/api/property-status/${id}`)
        )
      );

      console.log(responses);

      // Create a mapping { statusId: statusTitle }
      const statusMap = responses.reduce((acc, res) => {
        acc[res.data.data._id] = res.data.data.title; // Assuming title is the field for status name
        return acc;
      }, {});

      setPropertyStatuses(statusMap);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching property statuses:", error);
    }
  };

  const filteredProperties = properties.filter(
    (property) => propertyStatuses[property.property_status] === Status
  );

  return (
    <div className="mt-10 mx-10 relative SliderMargin">
      <Slider ref={sliderRef} {...settings}>
        {filteredProperties.map((pro, index) => (
          <div key={index} className="slick-slide">
            <PropertyCardCompo pro={pro} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SmallPropertyComponent;
