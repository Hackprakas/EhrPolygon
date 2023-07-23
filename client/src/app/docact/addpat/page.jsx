import React from 'react'

export default function page() {
  return (
    <div class="container mx-auto h-screen p-4">
  <div class="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded">
    <h2 class="text-gray-900 text-lg title-font font-medium mb-4">Add patient record</h2>
    <form >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bookName">medical report</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bookName" type="text"  placeholder="Enter medical report" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">prescription</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter prescription" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="authorName">DoctorName</label>
        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="authorName" type="text"  placeholder="Enter your name" />
      </div>
      
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
    </form>
  </div>
</div>

  )
}
