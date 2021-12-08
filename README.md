# EC327 Project: Team-Whatever
By: Kristie Gong(kristieg@bu.edu), Victoria Kang(vkang@bu.edu), Manting Yu(mantingy@bu.edu), Jane Yoo(jyoo0823@bu.edu)

# Overview
In this project, we will be creating a unique, easily comprehensive speed typing game that will track how many words the player types correctly and display the player's wpm speed. The player will be able to choose a difficulty level and as they play the typing game, based on the sentences the player types correctly, the animal will jump over a rock to simulate that the frog is moving. The goal of the game will be to get the frog "home" by typing the sentences displayed on the screen as quickly as possible while aiming for a high wpm.

# How to "build" Run George Run
The typing game, "Run George Run", was made by using 3 different languages, Javascript, HTML, and CSS. First, the Javascript was used to make complex functions such as detecting whether the input is correct and changing colors accordingly, making the countdown and game timer to work, making the game over pop up page to appear, etc. For these functions to work, codes such as the if statement and setInterval() functions were used. Next, HTML was used to "outline" the entire website and is the file that we use to compile the CSS and Javascript files. Different elements of the website is coded in the HTML file that will show up on the web page. Also these elements were used inside the functions made in the Javascript file as well. Lastly, CSS was used to style the elements created in the HTML file. The code in the CSS file determine how those elements would look on the web page, including its color, margins, border, padding, etc. 

# Test Cases
To test if the game fully works, our test cases include:
1.	Press the start button. Check that the mode buttons show up.
2.	Check that the modes are accurate. (Easy should have 5 sentences, Medium should have 10 sentences, Hard should have 15 sentences.)
3.	Check that the countdown timer displays correctly.
4.	Type in a wrong letter, but have the same number of characters as the sentence displayed. Check if the score counter increases. 
5.	Try copying the sentence and pasting it in the typing box.
6.	Check that the timer displays correctly.
7.	Check that the score increases when you correctly type a sentence in.
8.	Check that the frog jumps and a rock moves to the left when you correctly type a sentence in. 
9.	Check that there is background audio starts after hitting start button.
10.	Check that there is a "ribbit" audio after correctly typing a sentence.
11.	Check that the timer and score stop increasing when the game is finished.
12.	Check that a popup appears when the game is finished. (Popup should include WPM, time it took to complete the game, and reset button).
13.	Check that the WPM is within reason. (We calculated this by using a formula accounts for average length of a word in a sentence.)
14.	Check that reset button reloads the page.
