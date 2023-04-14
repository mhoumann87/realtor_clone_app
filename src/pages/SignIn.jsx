export default function SignIn() {
  return (
    <main className='max-w-6xl mx-auto'>
      <h1 className='text-4xl text-center mt-5 font-bold'>Sign In</h1>
      <section className='flex justify-center flex-wrap items-center px-6 py-12 '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 '>
          <img
            src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
            alt='hand holding a key chain with keys'
            className='w-full rounded-2xl'
          />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%]'>
          <form className='lg:ml-20'>
            <input className='w-full' type='text' />
          </form>
        </div>
      </section>
    </main>
  );
}
