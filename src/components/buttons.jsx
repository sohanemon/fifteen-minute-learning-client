export function PrimaryBtn({ children }) {
  return (
    <button
      type='button'
      title='Start buying'
      className='w-full py-3 px-6 text-center rounded-full transition bg-indigo-300 dark:bg-indigo-100 hover:bg-indigo-100 active:bg-indigo-400 focus:bg-indigo-300 sm:w-max'
    >
      <span className='block text-indigo-900  font-semibold text-sm'>
        {children}
      </span>
    </button>
  );
}

export function SecondaryBtn({ children }) {
  return (
    <button
      type='button'
      title='Start buying'
      className='w-full py-3 px-6 text-center rounded-full transition border border-gray-200 active:bg-indigo-200 focus:bg-indigo-100 sm:w-max'
    >
      <span className='block text-indigo-800 dark:text-indigo-100 font-semibold text-sm'>
        {children}
      </span>
    </button>
  );
}
