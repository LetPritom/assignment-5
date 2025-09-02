
# emergency-service


This project of mine includes the emergency numbers of Bangladesh.


## Documentation


getElementById is an id selector which is select element by its id such as

#1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("idName")
Finds only one element with the given

getElementsByClassName is an selector which is select element by elements class name 
example

getElementsByClassName("className")
Finds all elements with the given class and return live html collection

querySelector is a selector it is the most common selectorof javaScript

querySelector("cssSelector")
Finds the first element that matches a CSS selector (id, attribute, etc.)

querySelectorAll finds all elements that match a css selector
uerySelectorAll("cssSelector")

#2 How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM
example:
document.createElement("div")
And ways to insert
document.body.appendChild("which div am i created")

#3 What is Event Bubbling and how does it work?


Event bubbling is a type of event that occurs gradually when a child element is clicked and
reaches the parent element

#4 What is Event Delegation in JavaScript? Why is it useful?

The technique known as  event delegation involves setting a single event listener on the parent element rather than a separate event listener on each child element. The parent can determine which child the incident happened on thanks to event bubbling.

and this property helps us many wayas such as 
Keeps working dynamically that's very important

#5 What is the difference between preventDefault() and stopPropagation() methods?

There are few difference between preventDefault() and stopPropagation() methods like

we are used preventDefault() when you prefer to manage the event on your own rather than relying on the browser to do it

and we are used when stopPropagation() used to prevent parent elements from receiving the event.
that's a major difference between preventDefault() and stopPropagation methoods.
