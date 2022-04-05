<h1 align="center"><b>PomoTodo</b></h1>
<div align="center">PomoTodo is a Pomodoro Timer App built with React.</div>


---

## **Live App**
To view the website live in action visit\
[PomoTodo](https://pomotodo-app.netlify.app/).

https://user-images.githubusercontent.com/47236093/161784803-d7c0910f-398f-4f94-8507-dd913c886c78.mp4

---

## **Functionality** 
* Theme
  * The Navbar has a theme toggle icon which toggles the theme, the icon also toggles with the current theme.
  * The default mode that the app starts in is dark mode.
  * There are some color issues with light mode that are currently WIP.
* Landing Page/Home/All Tasks
  * On first visit on the app, user will be asked for his/her name, without enterting name the app will not allow to add any tasks.
  * Once the name is entered, a welcome message is displayed with the number of tasks added.
  * On this page itself, all tasks are shown, user can add more tasks or view/delete an existing task.
  * Filtering
    * User can also filter tasks with tags that have been associated with a task when it it created.
    * The filter is initially set of show All tasks.
* TaskPage
  * Displays the Task details such as Name, description and tags.
  * There is also a countdown timer component here with the Timer set.
* Timer
  * The timer on TaskPage is already pre-configured with the estimated time set by user on adding the task.
  * There are 2 buttons, Start/Pause and Restart.
  * Start/Pause button chahnges itself with timer state and alos starts/pauses the timer.
  * Reset button will reset the timer again to the value of estimated time given by user on adding the task.
  * The timer will constantly show how much time is left on the task and update very second.
* Data Persistance
  * Data from the moment you enter your name is stored on LocalStorage of your browser.
  * All tasks, tags and timer state for each task persists even on refresh.
  * Timer state will only persist if Timer was paused or restarted.
  * You can reset the app by deleting the LocalStorage object and hitting refresh.

---

## **How to run this app**
To run this app locally on your machine, clone the repo to your local machine.\
In the project directory, you can run\
`npm start`\
This will start the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
