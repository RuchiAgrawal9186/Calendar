import React, { Fragment, useEffect, useState } from 'react'
import Data from "../data.json"
import moment from "moment"
import { getMonthcol } from '../utils/getMonth';

const CalenderHome = ({ year, month }) => {

  const [allData, setAllData] = useState([])
  const [monthDays, setMonthDays] = useState([]);


 useEffect(() => {
   setMonthDays(getMonthcol(year, month));
 }, [year, month]);
  return (
    <Fragment>
      <div className="p-2 sm:p-4">
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {monthDays?.map((day, idx) => {
            const today = new Date();
            const isToday =
              day.dateObj.getDate() === today.getDate() &&
              day.dateObj.getMonth() === today.getMonth() &&
              day.dateObj.getFullYear() === today.getFullYear();

            return (
              <div
                key={idx}
                className={`flex items-center justify-center border rounded-md text-xs sm:text-sm 
              ${
                isToday
                  ? "bg-blue-500 text-white"
                  : day.inCurrentMonth
                  ? "bg-white text-black"
                  : "bg-gray-100 text-gray-400"
              }
              h-12 sm:h-20
            `}
              >
                {day.dateObj.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default CalenderHome
