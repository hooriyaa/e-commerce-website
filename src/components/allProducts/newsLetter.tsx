import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Or Subscribe To The Newsletter
        </h2>
        <form className="max-w-md mx-auto flex gap-14">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-1 px-4 py-2 focus:outline-none "
          />
          <button
            type="submit"
            className="px-6 py-2  text-black rounded-md hover:bg-gray-800 transition-colors"
          >
            SUBMIT
          </button>
        </form>
        <div className="flex w-full flex-col border-opacity-50 px-9 ">
          <div className="border"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
