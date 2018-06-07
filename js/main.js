console.log("This file is linked!")

// Index Teacher Variables
var teacherName
teacherName = 'Tye Leong';
// var teacherName = ['Tye Leong','Alex Winter','Sally Jones','Tracy Flowers','Phil Cube'];
var department
department = 'Photography';
// var department = ['Photography','Medicine','Art & Design','Nutrition','Physics'];

/* This is now the ratingArray
var rating1 = 3.5;
var rating2 = 4.4;
var rating3 = 2.8;
*/

// initial array of average Ratings
var ratingArray = [3.5,4.4,2.8];

// calculating the average rating and rounding to one decimal point REPLACED BY getRatingAverage FUNCTION
/*
var avgRating = (rating1 + rating2 + rating3) / 3;
var rounded = Math.round( avgRating * 10 ) / 10;
*/

// function to calculate the average rating
function getRatingAverage(input)
{
  var totalRating = 0;
  for (var i = 0; i < input.length; i++)
  {
    totalRating += input[i];
  }
  var avgRating = totalRating / input.length;
  var rounded = Math.round( avgRating * 10 ) / 10;
  return rounded;
}

var newRating = parseFloat(prompt("We would like for you to review " + teacherName + ". Please enter a rating between 0.0 - 5.0." ))
console.log("User Input:" + newRating);

if (newRating < 5)
{
  ratingArray = addTeacherRating(ratingArray, newRating);
  console.log(ratingArray)
  avgRating = getRatingAverage(ratingArray)
  window.alert("Thanks for your review! " + teacherName + "'s average rating is now " + avgRating );
}
else if (newRating > 5)
{
  prompt("We would like for you to review" + " " + teacherName + ". Please enter a rating between 0.0 - 5.0." );
}

function addTeacherRating(Arr, newValue)
{
  Arr.push(newValue);
  return Arr;
}

console.log("Ratings Array: " + ratingArray);
console.log("Teacher: " + teacherName);
console.log("Department: " + department);
//console.log("Ratings: " + rating1 + "," + rating2 + "," + rating3);
console.log("Average Rating: " + getRatingAverage(ratingArray));

// STUDENT Variables

var studentName = "Oprah Winfrey";
var studentMajor = "Empathy";
var studentEmail = "Oprah@gmail.com";
var studentGPA = 6.0;

//console.log("Student: " + studentName);
//console.log("Major: " + studentMajor);
//console.log("Email: " + studentEmail);
//console.log("GPA: " + studentGPA);


// Courses Variables
var courseName = "Health"
var courseTeacher = "Tracy Flowers"
var semester = "Fall 2017"

coursesArr = [
  ['Portraits','Photography'],
  ['Photoshop','Photography'],
  ['Kinesiology','Medicine'],
  ['Anatomy','Medicine'],
  ['Drawing','Art & Design'],
  ['Painting','Art & Design'],
  ['Health','Nutrition'],
  ['Cooking','Nutrition'],
  ['Astronomy','Physics'],
  ['Mathematics','Physics']
];

function courseFilter(Arr, deptValue)
{
  deptCourseArr = [];
  for(var i = 0; i < Arr.length; i++)
  {
    var course = coursesArr[i];
    console.log(course)
    for( var j = 0; j < course.length; j++)
    {
      var course2 = course[1];
      if(course2 == deptValue)
      {
        deptCourseArr.push(course)
        console.log("yeah if")
      }
      console.log(course2)
    }
  }
  console.log(deptCourseArr);
}

courseFilter(coursesArr, department);


//console.log("Course: " + courseName);
//console.log("Teacher: " + courseTeacher);
//console.log("Semester: " + semester);
