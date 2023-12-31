'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { BaseSyntheticEvent, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const addUser = async (event: BaseSyntheticEvent) => {
    try {
      event.preventDefault();

      setIsSubmitting(true);

      let formData = new FormData(event.target);
      let userEmail = formData.get('userEmail');
      let userPassword = formData.get('userPassword');

      let res = await fetch('./api/auth', {
        method: 'POST',
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const contentType = res.headers.get('Content-Type');
      const isJson = contentType?.includes('application/json');
      const data = isJson ? await res.json() : await res.text();

      if (data.token) {
        Cookies.set('token', data.token);
      }

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);

      router.push('/dashboard');
    } catch (err) {
      console.log('err: ', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center h-[12rem]">
        <h1 className="text-5xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9000f0] to-[#0da5d7]">
          Uniboard
        </h1>
        <div className="flex items-center justify-between mt-1 overflow-hidden h-7">
          <div>
            <h2 className="h-full text-sm font-light lg:text-xl text-slate-500">
              One clipboard - Multiple
            </h2>
          </div>
          <div className="flex flex-col justify-around h-[10rem] px-1 text-slate-500 font-light animate-roll-text">
            <p className="text-base sm:text-lg lg:text-xl">devices</p>
            <p className="text-base sm:text-lg lg:text-xl">languages</p>
            <p className="w-20 text-base sm:text-lg lg:text-xl">user lists</p>
          </div>
        </div>
      </div>
      <form
        className="flex flex-col items-center justify-around h-[20rem] w-[min(90%,20rem)] bg-blue-500 rounded-md md:rounded-xl"
        onSubmit={addUser}
        method="POST"
      >
        <div className="flex flex-col items-center justify-around h-[85%] w-[95%]">
          <div className="flex flex-col items-center justify-around w-[70%]">
            <label htmlFor="userEmail" className="mb-1 text-white">
              Email:
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="name"
              className="w-full h-8 p-1 transition duration-150 rounded-md outline-none bg-slate-200 focus:bg-slate-50"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col items-center justify-around w-[70%]">
            <label htmlFor="userPassword" className="mb-1 text-white">
              Password:
            </label>
            <input
              type="password"
              name="userPassword"
              placeholder="password"
              className="w-full p-1 transition duration-150 rounded-md outline-none bg-slate-200 focus:bg-slate-50"
              required
            />
          </div>

          <button
            className={`${
              isSubmitting && 'opacity-40 cursor-not-allowed'
            } self-center w-[40%] h-8 text-white bg-emerald-400 hover:bg-emerald-500 transition duration-150 rounded-lg`}
            type="submit"
            disabled={isSubmitting}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
