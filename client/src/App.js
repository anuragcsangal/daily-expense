import Total from "./Components/Total";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [breakfast, setBreakfast] = useState(0);
  const [lunch, setLunch] = useState(0);
  const [dinner, setDinner] = useState(0);
  const [misc, setMisc] = useState(0);

  const addExpense = () => {
    Axios.post("http://localhost:3001/create", {
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner,
      misc: misc,
    }).then((response) => {});
  };

  return (
    <div className="">
      <div className="font-mono text-4xl text-center my-20 ">
        <h1> Daily Expense Tracker </h1>
      </div>
      <div className="flex justify-center">
        {/* <Form /> */}
        <div class="w-full max-w-xs">
          <form class="bg-white border-black shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-lg font-bold mb-2">
                Breakfast
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                required
                onChange={(e) => {
                  setBreakfast(e.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-lg font-bold mb-2">
                Lunch
              </label>
              <input
                onChange={(e) => {
                  setLunch(e.target.value);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-lg font-bold mb-2">
                Dinner
              </label>
              <input
                onChange={(e) => {
                  setDinner(e.target.value);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-lg font-bold mb-2">
                Misc
              </label>
              <input
                onChange={(e) => {
                  setMisc(e.target.value);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                min="0"
                required
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                className=""
                type="submit"
                id="add"
                onClick={addExpense}
              >
                Add
              </button>
            </div>
          </form>
        </div>
        <Total />
      </div>
    </div>
  );
}

export default App;
