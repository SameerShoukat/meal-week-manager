
'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyleModal from '@/components/modal';
import SaveMealAsWeek from '@/components/week-form';
import {RootState} from '../store'
import { setRecipes } from '@/store/reducers/recipes';
import { setMeals, removeMeals } from '@/store/reducers/meals';
import apiHandler from '@/api/handler';
import { Meal } from '@/store/reducers/meals';
import RandomStars from '@/components/rating';


export function getMealsFromLocal(){
    const mealData: Meal[] = localStorage.getItem('mealsInfo')
    ? JSON.parse(localStorage.getItem('mealsInfo') as string) as Meal[]
    : [];

    return mealData;
   
}

const Main = () =>{
    const dispatch = useDispatch();
    const recipes = useSelector((state : RootState)=> state.recipeList.recipes)
    const meals = useSelector((state : RootState)=> state.mealList.meals)
    const [isModalOpen, setIsModalOpen] = useState(false)
    // Define the state with useState
    const [mealTab, setMealTab] = useState([
        { label: "All meals", slug : 'all-meal', isTrue: true },
        { label: "Week 1", slug : 'week1', isTrue: false },
        { label: "Week 2", slug : 'week2', isTrue: false },
        { label: "Week 3", slug : 'week3', isTrue: false },
        { label: "Week 4", slug : 'week4', isTrue: false }
    ]);

    useEffect(()=>{
       let mealDetails =  getMealsFromLocal()
       dispatch(setMeals(mealDetails))
    },[dispatch])

    const handleButtonClick = (index:number, slug:string) => {   

        setMealTab((prevMeals) =>
          prevMeals.map((meal, i) =>
            i === index ? { ...meal, isTrue: !meal.isTrue } : {...meal, isTrue : false}
          )
        );

        if(slug !== 'all-meal'){
            const updateMealList =  meals.filter(meal => meal?.selectedWeek === slug)
            dispatch(setMeals(updateMealList))
        }
        else{
            let mealDetails =  getMealsFromLocal()
            dispatch(setMeals(mealDetails))
        }

    };

    const showMealForm = () =>{
        setIsModalOpen(true)
        if(recipes?.length === 0){
            apiHandler('/recipes')
            .then(res => dispatch(setRecipes(res.recipes ?? [])))
            .catch(err => alert("Something went wrong"))
        }
    }

    const deleteMeal = (index: number) => {
        const mealData: Meal[] = localStorage.getItem('mealsInfo')
          ? JSON.parse(localStorage.getItem('mealsInfo') as string) as Meal[]
          : [];      
        mealData.splice(index, 1);
        localStorage.setItem('mealsInfo', JSON.stringify(mealData));
        dispatch(setMeals(mealData));
      };

    return(
        <>
        <section className="h-[400px] w-full relative bg-cover bg-position-center bg-no-repeat main-banner overlay flex items-center justify-center" style={{ backgroundImage: 'url(/banner.jpg)' }}>
            <div className="text-center relative"> 
                <h1 className="heading">Optimize Your Meal</h1>
                <p>Select meal to add in week. you will be able to edit. modify and change the meal week</p>
            </div>
        </section>

        {/* main section */}
        <section className="section meal-section">
            <div className="container mx-auto">
                <h2 className="sub-heading mb-5 md:text-left text-center">Week Orders</h2>
            </div>

            {/* card header */}
            <div className="header-bar  bg-[#fff]">
                <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                <div className="w-full md:w-2/3">
                    <ul className="flex items-center w-full justify-between min-h-[80px] action-list">
                    {mealTab.map((meal, index) => (
                        <li key={index}>
                        <button
                            className={`min-w-[150px] min-h-[40px] flex items-center justify-center ${meal.isTrue ? 'active' : ''}`}
                            type="button"
                            onClick={() => handleButtonClick(index, meal.slug)}
                            aria-pressed={meal.isTrue}
                        >
                            {meal.label}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-end">
                    <button
                        className={`min-w-[200px] min-h-[50px] flex items-center justify-center style-button ` + (mealTab[0].isTrue ? 'disabled-btn' :  '')}
                        type="button"
                        onClick={showMealForm}
                    >
                        Add Week
                    </button>
                </div>
                </div>
                </div>
            </div>

            {/* body header */}
            <div className="style-meal-list">
                <div className='container mx-auto'>
                <div className="flex flex-wrap items-start">
                    {meals.map((meal, key) => (
                        <div key={key} className="xl:w-[calc(33.333%-30px)] md:w-[calc(50%-25px)] w-[100%] mb-4 xl:mx-[15px] md:mx-[10px] mx-2 ">
                        <div className="style-card h-full flex flex-col relative">
                       
                            <div
                            className="meal-banner mb-5 flex-shrink-0 relative bg-cover bg-no-repeat"
                            style={{ backgroundImage: `url(${meal.image})`, height: '250px' }}
                            >
                                     <button type='button' onClick={()=>deleteMeal(key)} className='absolute w-[35px] h-[35px] top-[15px] left-[15px] flex items-center justify-center rounded-[7px] delete-btn'><i className="fa-solid fa-trash"></i></button>
                            <span className="strip">{meal.mealType[0]}</span>
                            </div>
                            <h3 className="mb-3">{meal.name}</h3>
                            <p className="mb-6 flex-grow">{meal.instructions.map((val) => val)}</p>
                            <div className="style-card-footer">
                            <ul className="w-full flex md:flex-row flex-col md:items-center md:justify-between justify-start items:start">
                                <li className='mb-2 md:mb-0'>
                                <span className="font-[700]">Cuisine:</span>
                                <span className="font-[500] ml-2">{meal.cuisine}</span>
                                </li>
                                <li>
                                <span className="font-[700]">Rating:</span>
                                <span>
                                    <span className="mr-[5px] mx-2">{meal.rating}</span>
                                    {+meal.rating > 0 && <RandomStars starCount={meal.rating} />}
                                </span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>

                </div>
         
            </div>

        </section>

        {/* style modal */}
        <StyleModal isModalOpen={isModalOpen}>
        <div className="bg-white p-7 rounded-lg shadow-lg max-w-[600px] w-full relative">
          

            <div className='meal-add-to-week p-3'>
                <button type='button' className='absolute close-icon right-[15px] top-[15px] w-[40px] h-[40px] rounded-[50px] text-[25px]' onClick={()=>setIsModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
                <h2 className='sub-heading text-center mb-5'>Select Week</h2>
                {recipes?.length === 0 ? <h5>Getting Meal List...</h5> : <SaveMealAsWeek setIsModalOpen={setIsModalOpen} />}
            </div>
            </div>
        </StyleModal>
        
        </>
    
    )


}

export default Main;