Brand Patterns
==================

**Theme Name:** Brand Patterns

**Theme Description:** Theme for Brand Patterns.

**Developers name(s):** May Day

**Bitbucket repository URL:** [https://bitbucket.org/wvudigital/brand-patterns](https://bitbucket.org/wvudigital/brand-patterns)

**Dependencies necessary to work with this theme:** Sass.

**Other notes, comments, or reminders:**

  1. Copy the files you want from the WVU Brand Patterns theme into your new theme.
  1. Paste the following commands in Terminal from within your theme's top-level directory: `sass --watch scss/styles.scss:stylesheets/styles.css` and, in a new terminal window inside your theme, `sass --watch scss/ie8.scss:stylesheets/ie8.css` or use Gulp to compile your Sass.
  1. Test your theme in [Hammer](https://github.com/wvuweb/hammer-vm).
  1. Push and sync your theme in CleanSlate.

Need some help? [Read the CleanSlate documentation](https://cleanslatecms.wvu.edu/how-to/theme-development).

## Gulp & Brand Patterns

Many people prefer using Gulp to compile their Sass.

**Requirements**

  * [NodeJS](https://nodejs.org/en/)

  1. Download and install NodeJS from https://nodejs.org/en if you haven't already.
  1. Install Gulp globally by entering `npm install -g gulp` in your terminal.
  1. Navigate to your project's directory via terminal (something like `cd ~/Sites/cleanslate_themes/MY-SITE`)
  1. Install node modules by typing `npm install --save-dev`
  1. Run Gulp by typing `gulp`.

**Note:** the `gulpfile.js` in its base form will only compile your Sass. Feel free to extend it for your needs.
