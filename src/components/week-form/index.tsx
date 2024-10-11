
import React, {useState} from "react";
import { ComboboxDemo } from "../forms/selectSearch";
import ButtonRadioGroup from "../forms/weekradiogroup";
import { useDispatch, useSelector } from "react-redux";
import {RootState} from '../../store'
import { Meal } from "@/store/reducers/meals";
import { Recipe } from "@/store/reducers/recipes";
import { setMeals } from "@/store/reducers/meals";
import { UseDispatch } from "react-redux";


interface myProps{
    setIsModalOpen : (value : boolean) => void
}


const SaveMealAsWeek : React.FC<myProps> = ({setIsModalOpen}) => {
    const dispatch = useDispatch();
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

        const mealData: Meal[] = localStorage.getItem('mealsInfo')
        ? JSON.parse(localStorage.getItem('mealsInfo') as string) as Meal[]
        : [];

        if (mealData.length !== 0) {
        const mealExistOnGivenWeek = mealData.find(weekMeal => 
        weekMeal.id === selectedValue && weekMeal?.selectedWeek === selectedWeek
        );

        if (mealExistOnGivenWeek) {
            return alert("Meal already exists in this week");
        }
        }

        const mealInfo: Recipe | undefined = recipes.find(recipe => recipe.id === selectedValue);
        if (mealInfo) {
            const selectedMeal = {...mealInfo, selectedWeek : selectedWeek}
            mealData.push(selectedMeal);
            localStorage.setItem('mealsInfo', JSON.stringify(mealData));
            setIsModalOpen(false)
            dispatch(setMeals(mealData))
            alert("Meal has been saved to " + selectedWeek);
        } else {
            alert("Meal not found");
        }
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
  
  export default SaveMealAsWeek;