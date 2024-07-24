import React from 'react';

const AppointmentForm = () => {
  return (
    <div className="py-8">
    <div className="bg-[#FFFFFF] p-6 rounded-lg w-4/5 mx-auto border border-[#725e66]">
      <h1 className="text-center mb-6 font-Raleway text-6xl font-[300]">Book Appointment</h1>
      <form className="flex gap-4 ">
        <div className="w-1/3">
          <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Personal Details</h2>
          <input type="text" placeholder="First name" className="w-full py-2 mt-2 mb-2 border-b border-[#351120]" />
          <input type="text" placeholder="Last name" className="w-full py-2 mb-2 border-b border-[#351120]" />
          <input type="text" placeholder="Enter address" className="w-full py-2 mb-2 border-b border-[#351120]" />
          <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Contact Details</h2>
          <input type="text" placeholder="Mobile/Telephone" className="w-full py-2 mt-2 mb-2 border-b border-[#351120]" />
          <input type="email" placeholder="Email address" className="w-full py-2 mb-2 border-b border-[#351120]" />
          <input type="email" placeholder="Alternate Email address" className="w-full py-2 mb-2 border-b border-[#351120]" />
        </div>
        <div className="border border-[#351120] my-6 w-1 h-auto flex"></div>
        <div className="w-2/3 flex flex-col">
          <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Date & Timings</h2>
          <div className="flex items-center mt-2">
            <input type="date" className="w-1/3 p-2 mb-2 border border-[#351120] rounded-lg" />
            <input type="time" className="w-1/6 p-2 ml-6 mb-2 border border-[#351120] rounded-lg" />
            <div className="flex items-center ml-4">
              <input type="radio" name="time-period" id="am" className="ml-2" />
              <label htmlFor="am" className="px-2 py-1 bg-[#351120] text-white text-medium rounded-lg">AM</label>
              <input type="radio" name="time-period" id="pm" className="ml-4" />
              <label htmlFor="pm" className="px-2 py-1 bg-[#351120] text-white text-medium rounded-lg">PM</label>
            </div>
          </div>
          <h2 className="text-2xl font-Raleway text-[#351120] mt-6">Comment</h2>
          <textarea placeholder="Write any instruction here." className=" p-4 mt-2 mb-2 border border-[#351120] rounded-lg h-24"></textarea>
        </div>
      </form>
      <div className="w-full flex justify-center mt-6">
          <button type="button" className="px-6 py-2 mx-4 rounded-full border-2 border-[#351120] text-[#351120]">Cancel</button>
          <button type="submit" className="px-6 py-2 mx-4 rounded-full bg-[#351120] text-white">Submit</button>
        </div>
    </div>
    </div>
  );
};

export default AppointmentForm;

// const AppointmentForm = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">

//       <div className="appointment-form bg-white p-8 rounded-lg w-full sm:w-96 border-2 border-[#351120]">
//         <h1 className="text-center text-xl font-medium mb-6">Book Appointment</h1>

//         <form className="space-y-4">
//           <div className="left-section w-full sm:w-60">
//             <h2 className="text-lg font-semibold mb-2">Personal Details</h2>
//             <input type="text" placeholder="First name" className="input-field mb-2" />
//             <input type="text" placeholder="Last name" className="input-field mb-2" />
//             <input type="text" placeholder="Enter address" className="input-field mb-2" />
//             <h2 className="text-sm font-semibold mt-4 mb-2">Contact Details</h2>
//             <input type="text" placeholder="Mobile/Telephone" className="input-field mb-2" />
//             <input type="email" placeholder="Email address" className="input-field mb-2" />
//             <input type="email" placeholder="Alternate Email address" className="input-field mb-2" />
//           </div>

//           <div className="middle-section border border-gray-300 mt-4 sm:hidden"></div>

//           <div className="right-section w-full sm:w-96">
//             <h2 className="text-lg font-semibold mb-2">Date & Timings</h2>
//             <div className="datetime-input flex items-center mb-4">
//               <input type="date" className="date-field mr-4" />
//               <input type="time" className="time-field mr-4" />
//               <div className="time-period flex items-center">
//                 <input type="radio" name="time-period" id="am" className="mr-2" />
//                 <label htmlFor="am" className="label-am">AM</label>
//                 <input type="radio" name="time-period" id="pm" className="ml-4 mr-2" />
//                 <label htmlFor="pm" className="label-pm">PM</label>
//               </div>
//             </div>

//             <h2 className="text-sm font-semibold mb-2">Comment</h2>
//             <textarea placeholder="Write any instruction here." className="comment-textarea"></textarea>
//           </div>

//           <div className="form-buttons flex justify-center mt-6">
//             <button type="button" className="cancel-button btn mr-4">Cancel</button>
//             <button type="submit" className="submit-button btn">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentForm;