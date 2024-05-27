import React from 'react'
import ImagePicker from '@/app/components/share/ImagePicker'
import InputShareForm from '@/app/components/share/InputShareForm'
import { shareMeal } from '../../../../lis/actions'

function ShareMealPage() {
   return (
      <>
         <header className='gap-12 mt-12 mx-auto mb-20 w-[90%] colot-text text-2xl'>
            <h1 className='text-5xl font-bold uppercase font-mono'>
               Share your <span>favorite meal</span>
            </h1>
            <p className='bg-orange text-transparent text-2xl font-bold bg-clip-text' >
               Or any other meal you feel needs sharing!
            </p>
         </header>
         <main className='w-[90%] max-w-[75rem] my-12 mx-auto color-white'>
            <form className='max-w-[50rem]' action={shareMeal}>
               <div className='flex gap-3'>
                  <InputShareForm className="w-full" type="text" name="name">Your name</InputShareForm>
                  <InputShareForm className="w-full" type="email" name="email">Your email</InputShareForm>
               </div>
               <InputShareForm type="text" name="title">Title</InputShareForm>
               <InputShareForm type="text" name="summary">Short summary</InputShareForm>
               <InputShareForm area={true} rows="10" name="instructions">Instructions</InputShareForm>
               <ImagePicker lable="Your image" name="image" />
               <p className='text-right'>
                  <button
                     type='submit'
                     className='py-3 border-0 px-8 bg-orange text-white rounded-md cursor-pointer text-xl shadow-sm shadow-stone-800
                     hover:bg-lightOrange focus:bg-lightOrange disabled:bg-disable disabled:text-600 disabled:cursor-not-allowed
                  ' >
                     Share Meal
                  </button>
               </p>
            </form>
         </main>
      </>
   )
}

export default ShareMealPage