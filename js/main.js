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

// array of average Ratings
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


console.log("Teacher: " + teacherName);
console.log("Department: " + department);
//console.log("Ratings: " + rating1 + "," + rating2 + "," + rating3);
console.log("Average Rating: " + getRatingAverage(ratingArray));

// STUDENT Variables

var studentName = "Oprah Winfrey"
var studentMajor = "Empathy"
var studentEmail = "Oprah@gmail.com"
var studentGPA = 6.0

console.log("Student: " + studentName);
console.log("Major: " + studentMajor);
console.log("Email: " + studentEmail);
console.log("GPA: " + studentGPA);


// Courses Variables
var courseName = "Health"
var courseTeacher = "Tracy Flowers"
var semester = "Fall 2017"

console.log("Course: " + courseName);
console.log("Teacher: " + courseTeacher);
console.log("Semester: " + semester);
