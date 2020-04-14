# analog-clock-card
Home Assistant Lovelace Analog Clock Card
#### A simple SVG analog clock for Home Assistant
![Screenshot of the clock with Default theme](clock1.png "Default Theme")
## Introduction
This is my first attempt at a custom card for the Home Assistant Lovelace UI. Apologies in advance if my implementation is imperfect or incomplete! It is a simple analog clock that uses SVG. The clock face uses roman numerals, since these are easier to rotate than standard numbers. The date is currently hard-coded with English abbreviations for the month.

Please feel free to implement any ideas or suggestions and issue a pull request. I can not guarantee that I will respond immediately, but I will consider all suggestions.
## Installation
1. Copy the `analog-clock-card.js` file to your `config/www` folder
2. Add a resource to your Lovelace configuration: `/local/analog-clock-card.js` (optionally increment a 'version' number to force the card to reload after an update)

![Screenshot of the Lovelace Resources configuration page](LovelaceResource.png "Lovelace Configuration")

3. Add a new card to your Lovelace UI: `type: 'custom:analog-clock-card'`
4. That's it! There currently isn't anything to configure or any options.
## Screenshots
Currently the clock uses colors from your theme:
#### Slate Theme
![Screenshot of the clock with Slate theme](clock2.png "Slate Theme")
#### iOS Light Theme
![Screenshot of the clock with iOS Light theme](clock3.png "iOS Light Theme")
#### iOS Dark theme plus background image
![Screenshot of the clock with iOS Dark theme and background image](clock4.png "iOS Dark Theme plus background image")
