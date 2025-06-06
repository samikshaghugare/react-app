import logo from "../Assets/logo.png";
import cuate from "../Assets/cuate.png";
import WhiteBase from "../Assets/WhiteBase.png";

export default function Index() {
  return (
    <div className="flex items-center justify-center pt-[40px] w-[140px] h-[280px] md:w-[210px] md:h-[360px] ">
      <div
        className="
          w-[180px] h-[300px] 
          sm:w-[200px] sm:h-[320px] 
          md:w-[210px] md:h-[360px] 
          bg-white border-4 border-black rounded-[30px] 
          shadow-xl overflow-hidden relative z-10"
      >
        <div className="flex justify-end">
          <img  
            src={WhiteBase}
            alt="white base Logo"
            className="h-[24px] sm:h-[28px] md:h-[30px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex-1 px-4 sm:px-5 md:px-6 pb-3 rounded-br-[100px]">
            <div className="flex justify-center w-full mt-3 mb-4 sm:mb-5 md:mb-6">
              <img
                src={logo}
                alt="BHIVE Logo"
                className="h-[16px] sm:h-[18px] md:h-[20px] w-auto object-contain"
              />
            </div>

            <div className="flex justify-end w-full sm:w-[140px] md:w-[150px] radius-5 mt-2">
              <img
                src={cuate}
                alt="cuate Logo"
                className="h-[80px] sm:h-[90px] md:h-[100px] w-auto object-contain"
              />
            </div>
          </div>

          <div
  className="
    w-[140px] sm:w-[160px] md:w-[220px] 
    bg-gray-800 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4
  "
>
  <div className="flex justify-end w-[70px] sm:w-[85px] md:w-[100px] gap-1 mb-2">
    <div className="w-1 h-1 sm:w-1.25 sm:h-1.25 bg-yellow-400 rounded-full"></div>
    <div className="w-1 h-1 sm:w-1.25 sm:h-1.25 bg-gray-500 rounded-full"></div>
    <div className="w-1 h-1 sm:w-1.25 sm:h-1.25 bg-gray-500 rounded-full"></div>
  </div>

  <div className="text-center">
    <span className="text-white font-normal text-[0.65rem] sm:text-[0.75rem] md:text-[0.85rem] leading-[1.1rem] sm:leading-[1.2rem] md:leading-[1.25rem]">
      Let's get started!
    </span>
    <p className="text-[0.65rem] sm:text-xs text-gray-400">
      Gain access to unlimited freedom, put in
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
