import React from "react";

const SearchInputFieldWithBtn = () => {
    
  return (
    <>
      <div class="mb-3">
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="email"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Email"
            aria-describedby="button-addon1"
          />
          <button
            class="relative z-[2] flex items-center rounded-r mobileNavbarSignUpBtnbg  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg "
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchInputFieldWithBtn;
