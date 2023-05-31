import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm('process.env.NEXT_PUBLIC_FORM');

  if (state.succeeded) {
    return (
      <div id='contact' className='w-full h-96 bg-four flex justify-center items-center'>
            <p className='text-light text-xl'>Thanks for your submission!</p>
      </div>
    )
  }

  return (
    <div id='contact' className='w-full bg-four flex justify-center'>
        <div className="w-full m-4 py-14 md:w-1/2 lg:m-24">
            <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name" className='block my-4 text-xl font-medium text-light'>Name</label>
            <input id="name" type="text" name="name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email" className='block my-4 text-xl font-medium text-light'>Email Address</label>
            <input id="email" type="email" name="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
                <label htmlFor="message" className="block my-4 text-xl font-medium text-light dark:text-white">Your message</label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..." required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" className="flex flex-row gap-12 rounded-full m-4 bg-primary disabled:hover:bg-light enabled:hover:bg-secondary  p-3 text-xl text-white" disabled={state.submitting}>
                Submit
            </button>
            <ValidationError errors={state.errors} />
            </form>
        </div>
    </div>
  );
}