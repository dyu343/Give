import React from 'react';

function TextField({ fieldName, saveFunction }) {

  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={fieldName}
        className="text-center font-medium text-gray-700"
      >
        {fieldName}
      </label>
      <div className="flex items-center ml-4 space-x-2">
        <input
          type="text"
          id={fieldName}
          name={fieldName}
          placeholder={`Change your ${fieldName}`}
          className="w-4/5 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200"
        />
        <button
          type="button"
          className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick = {saveFunction}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default TextField;