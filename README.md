1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById():-
(a) Returns a single element with a specific id.
(b) Returns Single element (object) and null if not found.
(c) ID should be unique.
getElementsByClassName():-
(a) Gets all elements with the same class.
(b) Returns HTMLCollection, like array but not pure array.
(c) Live collection (auto updates when DOM changes).
querySelector:-
(a) Gets the first matching element with a CSS selector.
(b) Returns the first matched element and null if not found.
(c) All types of CSS selectors can be used.
querySelectorAll:-
(a) It fetches all matching elements using CSS selector.
(b) Return nodelist.
(c) forEach() works in modern browsers

2.How do you create and insert a new element into the DOM?
Ans: Create new element, set Content / class / attribute, insert into DOM and Append (to add at the end)

3.What is Event Bubbling? And how does it work?
Ans: Event Bubbling is a process where when an event occurs on an element (such as a click), it propagates upwards from just that element to its parent → grandparent → document.
in 3 way it works.
(a) From top to bottom (capturing phase),
(b) Works on the element where the event occurred (target phase),
(c) Then it starts rising from that element upwards to parent → grandparent → body → html → document (bubbling phase).

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique where we place an event listener on their common parent element, rather than setting up separate event listeners for many child elements.
It us useful for
(a) Performance is good.
(b) Works for dynamic elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault():-
This disables the browser's default behavior. This means that the element stops its normal operation.
stopPropagation():-
This stops event bubbling or propagation. This means the event will no longer go to the parent element.
