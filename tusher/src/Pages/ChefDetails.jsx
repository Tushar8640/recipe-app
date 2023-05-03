import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefRecipes from "./ChefRecipes";
import RecipesDetails from "./RecipesDetails";

function ChefDetails() {
  const singleChef = useLoaderData();
  console.log(singleChef);
  const { id, name, picture, likes, numRecipes, yearExperience, recipes } =
    singleChef;
  return (
    <div className="my-20 flex flex-col items-center justify-center mt-10">
      <div className="max-w-xs rounded-md shadow-md bg-emerald-300 dark:text-gray-100  mb-10">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:text-gray-100">
              Experience: {yearExperience} Years
            </p>
            <p className="dark:text-gray-100">
              Numbers of recipes:{numRecipes}{" "}
            </p>
            <p className="dark:text-gray-100">Likes:{likes}</p>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-4xl text-center mt-10 mb-10">RECIPES</h1>

      <div className="grid gap-4">
        {recipes?.map((r) => (
          <RecipesDetails recipe={r} />
        ))}
      </div>
    </div>
  );
}

export default ChefDetails;
