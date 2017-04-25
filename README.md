#WALKATHON

Your project should have one HTML file that has:

1. A form for user information submission
1. The ability to select whether the donation will be a single amount or per lap
1. A table to display each donor's submission information
1. A button labeled Donate to process the submission
1. A button labeled Cancel to clear the submission form

The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. {name: "John Donut", pledge: 70}

All donor information objects should be stored in a private array in an IIFE.

Make sure the donor array cannot be accessed by the other modules except through an accessor (getter) method.

The IIFE should expose, in its public interface, a method named addDonor that accepts a single argument. That argument's value should be the user information object.

You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.


