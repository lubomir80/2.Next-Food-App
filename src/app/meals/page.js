import Link from 'next/link'
import React from 'react'
import MealsGrid from '../components/meal/MealsGrid'
import { getMeals } from '../../../lis/meals.'




async function MealsPage() {
   const meals = await getMeals()


   return (
      <>
         <header className='gap-3 mt-12 mb-20 mx-auto w-[90%] max-w-[75rem] text-text text-3xl text-center font-mono'>
            <h1 className='mb-2 text-5xl'>
               Delicious meals, created <span>by you</span>
            </h1>
            <p className='bg-orange text-transparent bg-clip-text'>
               Choose your favorite recipe and cook it yourself
            </p>
            <Link href="/meals/share"
               className='inline-block mt-4 py-2 px-4 rounded-md bg-orange hover:bg-lightOrange'>
               Share Your Favorite Recipe
            </Link>
         </header>
         <main>
            <MealsGrid meals={meals} />
         </main>
      </>
   )
}

export default MealsPage