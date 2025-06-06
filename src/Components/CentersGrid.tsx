import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";
import { fetchCenters } from "../Redux/CentersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface Center {
  id: string;
  name: string;
  address: string;
  images: string[];
  day_pass_price: number;
  day_pass_discounts_percentage: number;
  bulk_pass_price: number;
  bulk_pass_duration: number;
  distance_kms: number;
}

const CentersGrid: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: centers } = useSelector((state: RootState) => state.centers);

  useEffect(() => {
    dispatch(fetchCenters());
  }, [dispatch]);

  const CenterCard: React.FC<{ center: Center }> = ({ center }) => {
    const image =
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/" +
      center.images[0];

    // Calculation for the highest discount
    const discounts = center.day_pass_discounts_percentage as any;
    const maxDiscount = discounts
      ? Math.max(...Object.values(discounts).map((d: any) => d.value))
      : 0;

    // Calculation for bulk price
    const discountPrice = center.day_pass_price * 0.2 * 10;
    const bulkPrice = center.day_pass_price * 10 - discountPrice;

    return (
      <div
        className="
          w-full max-w-[370px] sm:max-w-[320px] md:max-w-[370px]
          h-auto sm:h-[340px] md:h-[384px]
          rounded-[8px] border-[1.08px] border-[#E5E5E5] bg-white overflow-hidden mx-auto flex flex-col px-[10px] shadow-sm
        "
      >
        <div className="p-4 flex justify-between items-start">
          <div className="pr-2 w-full sm:w-[200px] md:w-[238px] h-[48px]">
            <h2 className="font-inter font-semibold text-[20px] leading-[100%] tracking-[0px] text-gray-800 h-[50px] overflow-hidden line-clamp-2">
              {center.name}
            </h2>
          </div>
          <div className="w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] rounded-[6px] border border-[#F0EDED] bg-gray-100 flex flex-col items-center justify-center">
            <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faDiamondTurnRight}
                className="text-black text-[10px]"
              />
            </div>
            <p className="text-gray-500 text-[9px] sm:text-[10px] font-medium mt-[2px] leading-none">
              6 Kms
            </p>
          </div>
        </div>

       <img
  src={image}
  alt={center.name}
  className="w-full max-w-[320px] sm:max-w-[346px] h-[160px] sm:h-[202px] rounded-[6px] object-cover mx-auto mb-4 sm:mb-5 md:mb-0"
/>

        <div className="flex justify-between items-stretch pb-3 space-x-2 mt-auto">
          {/* Day Pass */}
          <div
            className="
              bg-gray-100 p-3 flex-1 flex flex-col 
              w-full max-w-[150px] sm:max-w-[167px] h-[56px] sm:h-[66px]
              rounded-[6px] border border-gray-300 border-[0.5px]
            "
          >
            <p className="font-inter font-medium text-[14px] leading-[100%] tracking-[0px] text-gray-500">
              Day Pass
            </p>

            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-md font-bold text-gray-600">
                  ₹ {center.day_pass_price}
                  <span className="text-xs text-gray-500">/ Day</span>
                </p>
              </div>
              <div className="flex items-center space-x-0">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-400"
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-500"
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Bulk Pass */}
          <div
            className="
              bg-yellow-400 p-3 rounded-xl flex-1 relative flex flex-col justify-between
              h-[56px] sm:h-[66px] max-w-[150px] sm:max-w-none
            "
          >
            {maxDiscount > 0 && (
              <span className="absolute -top-2 left-10 bg-gray-900 text-white text-xs px-2 py-0.5 rounded shadow">
                {maxDiscount}% Discount
              </span>
            )}
            <p className="text-sm font-semibold text-gray-500">Bulk Pass</p>
            <div className="col-span-12 flex items-baseline justify-between">
              <div className="md:col-span-11">
                <p className="text-md font-bold text-gray-600">
                  ₹ {bulkPrice}
                  <span className="text-xs text-gray-500">/ 10 Days</span>
                </p>
              </div>
              <div className="md:col-span-1 flex items-center space-x-0">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-400"
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-500"
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-8">
      {/* Title + Arrow */}
      <div className="flex items-center justify-between px-[10px] sm:px-[20px] md:px-[60px]">
        <h1 className="font-inter font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[45px] tracking-[0.3px]">
          Our Spaces
        </h1>
        <span className="text-yellow-500 text-[44px] sm:text-[28px] md:text-[32px] font-bold mr-2 sm:mr-4 md:mr-6 lg:hidden">
          →
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-6 px-[10px] sm:px-[20px] md:px-[60px]">
        {centers.map((center) => (
          <CenterCard key={center.id} center={center} />
        ))}
      </div>
    </div>
  );
};

export default CentersGrid;
