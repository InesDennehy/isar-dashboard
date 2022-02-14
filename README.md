# Isar Aerospace - Technical Assignment for the position of Full-Stack Web Developer

This is an assignment given by Isar Aerospace for the position of Full-Stack Web Developer. It consists of a dashboard that shows information of a rocket in orbit, collected from a given API (assignment A) and websocket (assignment B).

Given that the assignment is relatively simple and not a big project, I decided to use Express on the backend, which is a really lightweight framework. Performance was obviously a big concern, which is why I chose to use nodejs and Express. On the frontend, I used Tailwind CSS for styling, and the libraries three.js and chart.js for graphs.

## How to run

If you have docker, simply run the command `docker-compose up` on the root folder.

If not, run the assignments individually entering either folder and running `npm start`.

## Assignment C

Besides assignments A and B, the following was asked:

> Please comment on potential improvements of the API structure, deviations from common standards or performance enhancements.

- I believe the API should be more documented, or at least explaining the data that is returned, specially their units. When I first came across with a JSON response, I couldn't figure out if everything was in imperial or metric system. That's why I had to leave data on the dashboard without units. I believe that in a real scenario, someone from a different culture could misread the data.

- Another thing that should be standarized is the capitalization of the response JSON. In the first API (used for assignment A) the labels weren't capitalized, but on the data returned by the websocket they were. Given that the data is the same, both API and websocket request should be possible to use interchangeably.

- As for performance, all of the requests take the same time as a direct request from the browser (for the API I used another library first and it took much longer). The only thing is that the first request after some time takes about 3 times longer than the others. I believe this is because when the server is inactive it saves resources, so I don't think this can be improved. That is why the only performance that could be improved would be on the frontend: finding a way to optimize the graphs, and compressing long files so that the first render takes less time.

Here's also some small possible frontend design improvements that I think would be necessary:

- Responsiveness: The dashboard should show all of the data in a single screen. This is the case in a desktop computer (1920x1080), but not in some smaller screens (1366x768). In these cases scrolling is needed to access the bottom banner.

- On the velocity plot, the vector is sometimes not entirely visible because of the z axis. This could be solved just by adding transparency to all of the the axes. For better reading, they should also be labeled (right now it's only illustrative to see the general direction).

## Design decisions

Lastly, I would like to add a few comments on why I chose to do certain things:

- On assignment B I wasn't sure if to allow the user to change direction when it was already going up. Given that in the real world a professional would be operating such system, I decided to allow them to do it in case they found it necessary.

- As I mentioned before, I couldn't find any documentation of the API where the units of each value where stated. That's why I left the numbers with no units on the dashboard.