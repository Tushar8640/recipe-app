import React from "react";
import Banner from "../Components/Banner";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Feedback from "../Components/Feedback";
import Chefs from "./Chefs";
import ChefRecipes from "./ChefRecipes";
import RecipesDetails from "./RecipesDetails";
import Blogs from "./Blogs";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-10">
        Welcome at <br /> BLACK CUMIN BANGLADESH
      </h1>
      <Banner />

      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        All CHEF'S FOR <br /> BLACK CUMIN BANGLADESH
      </h1>

      <div className="grid grid-cols-3 mx-10 justify-items-center">
        {chefs?.map((c) => (
          <Chefs chef={c} />
        ))}
      </div>

      <h1 className="font-bold text-4xl text-center mt-10 mb-10">
        FEEDBACK CORNER
      </h1>
      <Feedback />
    </div>
  );
}
