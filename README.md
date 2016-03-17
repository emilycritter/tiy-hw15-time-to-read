# JavaScript Fundamentals
## Javascript - Time To Read
###### Due Thursday, March 17, 2016  
We'll build a simple component for estimating how long a web page should take to read.

## You Should Know
* HTML
* Javascript Fundamentals
* DOM Manipulation


## Your Mission
[Medium](http://www.medium.com/), a popular blogging platform, incorporates a cool little feature that tells you approximately how long it will take you read a post.

For this assignment, we're going to compartmentalize that feature into a modular unit we can apply to any web page we create.

### Explore Mode
**Challenge #1.1**: Inside a Javascript file called `time-to-read.js`, implement a function called `timeToRead` that calculates an estimated time in minutes required to read a web page. For the purpose of this challenge, assume the average words per minute (WPM) for your readers is 230. Count all the words on the page and return how long it would take to read that with your fixed average WPM. **Goal #1.1**: A Javascript function called `timeToRead()`

**Challenge #1.2**: Using DOM manipulation, display the estimated time to read on any web page we include `time-to-read.js` in. It should be visible at any point on the page, even after scrolling. It should be inserted from your Javascript file and attached to the `body` element inside an element with a class of `time-to-read-view`. **Goal #1.2**: Refined Javascript that attaches a new element to our HTML.

**Challenge #1.3**: It's always good practice to use source control with your projects! Create a git repository, add your project files to it, and upload it to Github. **Goal #1.3**: Submit your Github URL below.

### Adventure Mode
**Challenge #2.1**: In addition to Explore Mode's requirements, configure your 'timeToRead' function so that it's configurable. Your function should accept an argument to set the words per minute dynamically. Be sure to provide our previous seting (230 WPM) as a default value, and update your Github repository for submission. **Goal #2.1**: Refined Javascript with configurable WPM and a default setting.

### Epic Mode
**Challenge #3.1**: Let's up our word-counting game. Instead of just counting the words on the page, account for:

* punctuation
* non-content (eg: navigation, menu items, footers)
* non-text (eg: `script` or `style` element content)


**Goal #3.1**: Refined Javascript with advanced word-counting capabilities.

## Requirements for Completion
* A Github repository containing:
  * `time-to-read.js`


## You May Need
* [Sample Repo Code](https://github.com/tiy-hou-q1-2016-rails/js-examples/tree/master/time-to-read)
