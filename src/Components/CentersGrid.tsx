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
  const { data: centers, status } = useSelector(
    (state: RootState) => state.centers
  );

  useEffect(() => {
    dispatch(fetchCenters());
  }, [dispatch]);

  const CenterCard: React.FC<{ center: Center }> = ({ center }) => {
    const image =
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/" +
      center.images[0];

    // Compute the highest discount from the object
    const discounts = center.day_pass_discounts_percentage as any;
    const maxDiscount = discounts
      ? Math.max(...Object.values(discounts).map((d: any) => d.value))
      : 0;

    const discountPrice = center.day_pass_price * 0.2 * 10;
    const bulkPrice = center.day_pass_price * 10 - discountPrice;

    return (
      <div className="w-[370px] h-[384px] rounded-[8px] border-[1.08px] border-[#E5E5E5] bg-white overflow-hidden mx-auto flex flex-col px-[10px] shadow-sm">
        <div className="p-4 flex justify-between items-start">
          <div className="pr-2 w-[238px] h-[48px] top-[1106px] left-[132px]">
            <h2 className="font-inter font-semibold text-[20px] leading-[100%] tracking-[0px] text-gray-800 h-[50px] overflow-hidden line-clamp-2">
              {center.name}
            </h2>
          </div>
          <div className="w-[52px] h-[52px] rounded-[6.47px] border-[0.47px] border-[#F0EDED] bg-gray-100 flex flex-col items-center justify-center">
            <div className="w-7 h-7 border-[2px] border-black rounded-full flex items-center justify-center mt-1">
              <FontAwesomeIcon
                icon={faDiamondTurnRight}
                className="text-black text-[18px]"
              />
            </div>
            <p className="text-gray-500 text-sm font-medium">6 Kms</p>
          </div>
        </div>

        <img
          src={image}
          alt={center.name}
          className="w-[346px] h-[202px] top-[1172px] left-[132px] rounded-[6px] object-cover"
        />

        <div className="flex justify-between items-stretch pb-3 space-x-2 mt-auto">
          {/* Day Pass */}
          <div
            className="bg-gray-100 p-3 flex-1 flex flex-col 
             w-[167px] h-[66px] top-[1396px] left-[132px]
             rounded-[6px] border border-gray-300 border-[0.5px]"
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
          <div className="bg-yellow-400 p-3 rounded-xl flex-1 relative flex flex-col justify-between h-[66px]">
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

  if (status === "loading")
    return <p className="text-center py-10">Loading…</p>;
  if (status === "failed")
    return (
      <p className="text-center py-10 text-red-500">Failed to load centers.</p>
    );

  return (
    <div className="pl-[60px] pr-[60px] px-4 py-8">
      <h1 className="mb-8 font-inter font-bold text-[36px] leading-[45px] tracking-[0.3px]">
  Our Space Overview
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {centers.map((center) => (
          <CenterCard key={center.id} center={center} />
        ))}
      </div>
    </div>
  );
};

export default CentersGrid;
