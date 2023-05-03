import React from "react";
import { Link } from "react-router-dom";

export default function ({ chef }) {
  const { id, name, picture, likes, numRecipes, yearExperience } = chef || {};
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-emerald-300 dark:text-gray-100 mb-10">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="dark:text-gray-100">{yearExperience}</p>
            <p className="dark:text-gray-100">
              Numbers of recipes:{numRecipes}{" "}
            </p>
            <p className="dark:text-gray-100">{likes}: 10k</p>
          </div>
          <Link
            to={`chef/${id}`}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 btn btn-primary uppercase"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
