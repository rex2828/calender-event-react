
// /*
// Problem 1 (Javascript) : 
// JSON is a very popular storage format for web apps. It is extensively used to create configuration files to store settings. 

// A very common idea is ability to store the structure of the forms (not the data).

// Here we will try to convert a structure of a HTML form to JSON and then generate that form
// back from the JSON.

// Tips:
// Like any programming problem there are many ways to solve this. There are some really smart ways
// where less code can do lot of things. Try to see how much you can do with too little code.
// Brute force approach is not suggested.

// Write two Javascript functions, formToJson() and jsonToForm() which are described below

// */

// function formToJson(formId) {

//     return formJSON;

//     // formId is id of a <form> element in HTML

//     /*

//     formToJson reads input elements of the form one by one and then stores them in a JSON format

//     e.g.

//     <form id="testForm">

//         <input type="text" id="name" name="name" placeholder="What is your name?">

//         <input type="number" id="age" name="age" class="agefield">

//     </form>

//     Suppose there is a form like above in the HTML of any page.

//     When formToJson("testForm") is called it should return something like this

//     {
//     "formId": "testForm",
//     "elements": [{
//             "elementType": "input",
//             "type": "text",
//             "id": "name",
//             "name": "name",
//             "placeholder": "What is your name"
//         },
//         {
//             "elementType": "input",
//             "type": "number",
//             "id": "age",
//             "name": "age",
//             "class": "agefield"

//         }
//     ]
// }

//     Note : This is just a suggestive JSON. You can define your own structure.
//     The idea is to be able to store a structure of the form in JSON format.

//     */
// }




// function jsonToForm(formJSON, targetDivId) {
//     // formJSON : This is the type of JSON which would be returned in formToJson function
//     // targetDivId : This is the target div where we will create the form from the JSON

//     /*

//     This function will parse the JSON which we generated in the previous function and generate 
//     a form HTML and populate the form HTML in the div given with targetDivId


//     */

// }


// // If you have any questions, ask them without any hesistation like you would ask when you will be
// // doing your internship. This is how you will learn and grow.



// const dt = new Date();
// const year = dt.getFullYear();
// const month = dt.getMonth();
// const date = dt.getDate();
// // const firstDayOfMonth = new Date(year, month, 1);
// // console.log(firstDayOfMonth.getDate())
// console.log(dt.toDateString())
// dt.setDate(dt.getDate() + 1)
// console.log(dt.toDateString())





// function getMonth(month = new Date().getMonth()) {
//     const year = new Date().getFullYear();
//     const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
//     let currentMonthCount = 0 - firstDayOfMonth;
//     const daysMatrix = new Array(5).fill([]).map(() => {
//         return new Array(7).fill(null).map(() => {
//             currentMonthCount++;
//             return dayjs(new Date(year, month, currentMonthCount))
//         })
//     })
//     return daysMatrix;
// }

// function getWeek(day = new Date()) {
//     const weekArray = new Array()
//     for (let i = 0; i < 7; i++) {
//         weekArray.push(new Date(day.getTime() + i * 1000 * 60 * 60 * 24));
//     }
//     weekArray.forEach((it) => {
//         console.log(it)
//     })
// }
// const yesterday = new Date(new Date().getTime() - 1000 * 60 * 60 * 24);
// getWeek(yesterday);

