
'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyleModal from '@/components/modal';
import SaveMealAsWeek from '@/components/week-form';
import {RootState} from '../store'
import { setRecipes } from '@/store/reducers/recipes';
import apiHandler from '@/api/handler';



const Main = () =>{
    const dispatch = useDispatch();
    const recipes = useSelector((state : RootState)=> state.recipeList.recipes)
    const [isModalOpen, setIsModalOpen] = useState(false)
    // Define the state with useState
    const [meals, setMeals] = useState([
        { label: "All meals", slug : 'all-meal', isTrue: true },
        { label: "Week 1", slug : 'week-1', isTrue: false },
        { label: "Week 2", slug : 'week-2', isTrue: false },
        { label: "Week 3", slug : 'week-3', isTrue: false },
        { label: "Week 4", slug : 'week-4', isTrue: false }
    ]);

    useEffect(()=>{

    },[dispatch])

    const handleButtonClick = (index:number) => {
        setMeals((prevMeals) =>
          prevMeals.map((meal, i) =>
            i === index ? { ...meal, isTrue: !meal.isTrue } : {...meal, isTrue : false}
          )
        );
    };
    const showMealForm = () =>{
        setIsModalOpen(true)
        if(recipes?.length === 0){
            apiHandler('/recipes')
            .then(res => dispatch(setRecipes(res.recipes ?? [])))
            .catch(err => alert("Something went wrong"))
        }
    }

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
                <h2 className="sub-heading mb-5">Week Orders</h2>
            </div>

            {/* card header */}
            <div className="header-bar  bg-[#fff]">
                <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                <div className="w-full md:w-2/3">
                    <ul className="flex items-center w-full justify-between min-h-[80px] action-list">
                    {meals.map((meal, index) => (
                        <li key={index}>
                        <button
                            className={`min-w-[150px] min-h-[40px] flex items-center justify-center ${meal.isTrue ? 'active' : ''}`}
                            type="button"
                            onClick={() => handleButtonClick(index)}
                            aria-pressed={meal.isTrue} // Update aria-pressed based on state
                        >
                            {meal.label}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-end">
                    <button
                        className={`min-w-[200px] min-h-[50px] flex items-center justify-center style-button ` + (meals[0].isTrue ? 'disabled-btn' :  '')}
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
                    <div className="flex flex-wrap items-center">
                        <div className="w-full sm:w-1/2 md:w-1/3"> 
                            <div className='style-card'>
                                <div className='meal-banner mb-5 h-[250px] relative overlay  md:h-[400px] relative bg-cover bg-no-repeat' style={{backgroundImage:'url(https://cdn.dummyjson.com/recipe-images/2.webp)'}}>
                                <span className='strip'>Dinner</span>
                                </div>
                                <h3 className='mb-3'>Vegetarian Stir-Fry</h3>
                                <p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, ullam. Consequatur facere, laboriosam sapiente tempora excepturi animi quidem. Expedita sit iusto optio veniam natus dolorum voluptatem labore sunt vel enim!</p>
                                <div className='style-card-footer '>
                                    <ul className='w-full flex items-center justify-between'>
                                        <li><span className='font-[700]'>Cuisine:</span><span className='font-[500] ml-2'>italian</span></li>
                                        <li><span className='font-[700]'>Rating:</span><span>
                                            <span className='mr-[5px] ml-2'>4.6</span> <i className="fa-solid fa-star mr-[2px]"></i><i className="fa-solid fa-star "></i>
                                            <i className="fa-solid fa-star "></i>
                                            <i className="fa-solid fa-star "></i>
                                        </span></li>
                                    </ul>
                                </div>
                              
                            </div>
                        </div>
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
                {recipes?.length === 0 ? 'Getting Meal List' : <SaveMealAsWeek />}
            </div>
            </div>
        </StyleModal>
        
        </>
    
    )


}

export default Main;