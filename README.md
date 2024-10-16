# React Starter

## Notes

⌘ in this guide refers to the command key on macos. If you are using a PC, use the control key instead.

I am also not the neatest coder, especially in my CSS modules. So keep that in mind when using this tutorial.

This file will continue to be updated with information I think will be useful as I go along.

## Tips

**SAVE CONSTANTLY**
Check and test your code every time you make a major change, this will save you tons of time.

## Running

To run your react project, go to Terminal > New Terminal

Then, type:
```
npm run dev
```

## Debugging
If your react app does not open, check the terminal for error logs.

If the webpage opens but nothing appears, right click on the webpage, click on inspect element, and check the console for any errors.

**CHATGPT IS YOUR FRIEND** 
My best advice for debugging is to copy the issue and the page youre currently working on

## Styling

**index.css**
use index.css when you want to set things that should apply across the whole app. For example, you might want all your text to be a certain font or color, or remove the default margins that browsers add around the page.

**App.css**
use app.css when you want to focus on how the App component and its parts look. But with CSS Modules (which you're using), styles will only apply to the specific component they belong to, which prevents them from affecting the rest of the app.

**Modules**
Use CSS modules to style specific pages/components, this keeps your css cleaner and ensures that your css wont accidentally affect other components.


## Tips

**Unsure About Where a file is located?**

Hold down ⌘ + click on the file path

```
import styles from '../styles/Navbar.module.css' 
// '../styles/Navbar.module.css' is the file path
```