
import React, {useState} from "react";
import { ComboboxDemo } from "../forms/selectSearch";
import ButtonRadioGroup from "../forms/weekradiogroup";
import { useSelector } from "react-redux";
import {RootState} from '../../store'



export default function SaveMealAsWeek () {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedWeek, setSelectedWeek] = useState('week1');
    const recipes = useSelector((state : RootState)=> state.recipeList.recipes)
    const weeks = [
        { value: 'week1', label: 'Week 1' },
        { value: 'week2', label: 'Week 2' },
        { value: 'week3', label: 'Week 3' },
        { value: 'week4', label: 'Week 4' },
    ];

      const handleSubmit = (e:any) => {
        e.preventDefault()
        if(!selectedValue) return alert("Meal is required")
        if(!selectedWeek) return alert("Week is required")
        console.log(selectedValue)
        console.log(selectedWeek)
      }
 
    return (
        <form className="style-form" onSubmit={handleSubmit}>
        <div className="mb-7">
            <ButtonRadioGroup options={weeks} value={selectedWeek} setValue={setSelectedWeek} />
        </div>
       
        <div className="flex justify-center">
            <ComboboxDemo
                options={recipes ?? []}
                value={selectedValue}
                setValue={setSelectedValue}
                placeholder="Search Meal"
            />
        </div>
        <button type="submit" className={`min-w-[200px] min-h-[50px] flex items-center justify-center style-button mt-5 mx-auto `}>Save</button>
     
        </form>
      
    );
  };
  