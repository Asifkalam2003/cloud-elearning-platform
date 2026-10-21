
const exploreButton = document.getElementById("exploreBtn");

exploreButton.addEventListener("click", function () {
  document.getElementById("courses").scrollIntoView({
    behavior: "smooth"
  });
});

const courses = [
  { id: 1, title: "Web Development", lessons: 20 },
  { id: 2, title: "Python Programming", lessons: 15 },
  { id: 3, title: "Cloud Computing", lessons: 12 }
];

console.log("CloudLearn application loaded!");

courses.forEach(function (course) {
  console.log(`${course.title}: ${course.lessons} lessons`);
});
