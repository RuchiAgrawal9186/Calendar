import React, { Fragment } from 'react'

const Header = ({year, month }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Fragment>
      <div className="border-b w-full h-16 sm:h-20 sticky top-0 z-10 bg-white px-2 sm:px-4 flex flex-col justify-center mx-auto shadow-sm">
        {/* Top Row: Title + Month/Year */}
        <div className="flex justify-between items-center">
          <p className="text-lg sm:text-2xl font-semibold">Calendar</p>
          <div className="text-sm sm:text-xl font-medium">
            {monthNames[month]} {year}
          </div>
        </div>

        {/* Days Row */}
        <div className="flex justify-between border-t pt-1 mt-1 text-xs sm:text-sm font-medium text-gray-600">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header
