import { useState } from "react";
import Axios from "axios";

export default function Total() {
  const [expenses, takeExpenses] = useState([]);

  const allExpenses = () => {
    Axios.get("http://localhost:3001/Expenses").then((response) => {
      takeExpenses(response.data);
    });
  };
  return (
    <div className="flex justify-center mx-5">
      <div class="w-[300px] max-w-xs">
        <div class="bg-white border-black shadow-2xl rounded px-8 pt-6 pb-8 mb-4 h-[450px] flex flex-col ">
          <h1 className="text-5xl py-5">Total</h1>
          <div>
            <button id="total" onClick={allExpenses}>
              Show
            </button>
            {expenses.map((val, key) => {
              return (
                <div className="text-4xl my-2">
                  {" "}
                  {val.breakfast + val.lunch + val.dinner + val.misc}{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
