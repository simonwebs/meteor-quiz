import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const products = [
  {
    id: 1,
    name: 'Bible Quiz',
    rating: 5,
    reviewCount: 38,
    imageSrc: 'https://images.unsplash.com/photo-1600038734220-7e3c079bf982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    imageAlt: 'BIBLE QUIZ',
    href: 'quiz',
  },
  {
    id: 2,
    name: 'Organize Pen Holder',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Organize Sticky Note Holder',
    rating: 5,
    reviewCount: 14,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Organize Phone Holder',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const Home = () => {
  return (
   
      <>
        <main>
        <div className="mt-32 bg-white dark:bg-slate-900">
        <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-sky-600 sm:text-lg sm:tracking-tight md:text-6xl md:tracking-tight">
                <span className="block font-serif">Swed Quiz</span>
                <span className="block text-4xl text-indigo-500 font-serif sm:text-md">Home of knewledge</span>
              </h1>
            </div>
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-1 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
              <div className="rounded-lg overflow-hidden shadow-md shadow-sky-500 bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full rounded-md object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900 dark:text-sky-400">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-white">{product.reviewCount} reviews</p>
                </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </main>
     </>
    
  )
}