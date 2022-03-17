# # Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Make use of APIs

### Screenshot

![](./resources/screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I learnt the use of APIs 🙂

```js
function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => 
        response.json())
    .then((data) => {
        document.querySelector("#quote").innerHTML = data.slip.advice;
    })
    .catch(function(){
        console.error("You have an error!")
    });
```

### Continued development

I'm going to continue exploring more APIs

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**


## Author

- Website - [Onukwu Francis](https://www.onfranciis.cf)
- Frontend Mentor - [@onfranciis](https://www.frontendmentor.io/profile/onfranciis)
- Twitter - [@onfranciis](https://www.twitter.com/onfranciis)
