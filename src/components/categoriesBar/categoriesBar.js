import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import './_categoriesBar.scss'

const keywords = [
  "All",
  "React Js",
  "Banaras Films",
  "Hanuman Chalisa",
  "Tailwind CSS",
  "Use of API",
  "Redux",
  "Music",
  "Js Mastery",
  "Bollywood Songs",
  "Node Js",
  "Aditya Movies",
  "Goldmines Telefilms",
  "RKD Studios",
  "Material UI",
  "Karnataka",
  "Rameshwaram Temple",
  "Udit Narayan Hits",
  'Bollywood Movies',
  'BB Ki Vines',
  'Round2Hell',
  'Doordarshan'
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = value => {
    setActiveElement(value);

    if(value === 'All'){
      dispatch(getPopularVideos()) 
    }else{
      dispatch(getVideosByCategory(value))
    }
  }

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span onClick={()=>{handleClick(value)}} className={ activeElement === value ? 'active' : ''} key={i}>{value}</span>
      ))}
    </div>
  );
};

export default CategoriesBar;
