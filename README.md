# techdegree-fewd-project-7

## Mobile-first
1. The HTML file includes the viewport meta tag in the head of each document.
2. A mobile-first approach is utilized using min-width properties for media queries.
3. Appropriate media queries are in place and the content responds to mobile (320px), tablet (768px) and desktop (1024px) screen sizes.
4. Use CSS grid to lay out the main elements (header, sidebar navigation, main content) on the page.

___

## Alert Notifications
1. Includes alert banner that user can close.
2. Includes an alert icon in the header with a marker to notify the user of new alerts and messages.
3. Add a CSS transition to the bell icon when the user hovers over it.

### Exceeds Expectations
1. Displays at least two notifications at the same time when the user clicks the alerts icon (this could be a pop-up window or dropdown menu).

___

## Chart Widgets
1. Successfully implements chartjs.org for the charts:
* Web Traffic (line chart)
* Daily Traffic Bar Chart (bar chart)
* Mobile User Pie Chart (donut chart)
2. General spacing and arrangement of the elements matches the layout of the widgets in the mockup.

### Exceeds Expectations
1. Traffic chart widget:
* Includes navigation allowing user to switch between viewing an Hourly, Daily, and Weekly chart.
2. Traffic chart widget:
* Hourly, Daily, Weekly and Monthly buttons display a different line chart on click.

___

## Social Network Information
1. Includes a widget (or three separate widgets) that display social network stats for three social networks.
2. SVG icons are added as inline SVG's.
3. SVG fill colors have been changed to match the mockups.
4. General spacing and arrangement of the elements match the layout of the widget in the mockup.

___

## New Members and Recent Activity
1. Includes a widget that lists out new members and displays an avatar, member name, email and join date for each member.
2. Includes a Recent Activity widget that displays an avatar, type of activity, and time since activity for each member.
3. General spacing and arrangement of the elements matches the layout of the widgets in the mockup.

___

## Message User Widget
1. Implement a messaging widget that includes the following:
* A field for searching for a user. Real search functionality is not required.
* A message textarea field that lets a user add a message.
* A “Send” button that uses JS to allow a user to submit the form and display a confirmation the message was sent
* Uses JS to display error messages if both or either the user or message field is empty.
2. General spacing and arrangement of the elements matches the layout of the widget in the mockup.

### Exceeds Expectations
1. Displays working autocomplete search input field that lets the user search for members.

___

## Settings Widget
1. The settings widget has been created and displays the following settings options:
* An on/off widget for whether to send email notifications.
* An on/off widget for whether to set profile to public or private.
* A dropdown to select timezone options.
* Save and Cancel buttons (these do not have to do anything functional).

### Exceeds Expectations
1. Local storage is used to save the settings. When page is reloaded the settings are remembered.