# analog-clock-card
Home Assistant Lovelace Analog Clock Card
#### A simple SVG analog clock for Home Assistant
## Introduction
This is my first attempt at a custom card for the Home Assistant Lovelace UI. Apologies in advance if my implementation is imperfect or incomplete! It is a simple analog clock that uses SVG. The clock face uses roman numerals, since these are easier to rotate than standard numbers. The date is currently hard-coded with English abbreviations for the month.

Please feel free to implement any ideas or suggestions and issue a pull request. I can not guarantee that I will respond immediately, but I will consider all suggestions.
## Installation
1. Copy the `analog-clock-card.js` file to your `config/www` folder
2. Add a resource to your Lovelace configuration:

![Screenshot of the Lovelace Resources configuration page](LovelaceResource.jpg "Lovelace Configuration")

3. Add a new card to your Lovelace UI:

    type: 'custom:analog-clock-card'
