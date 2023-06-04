# Web Library Hugo Theme

A hugo theme for a collection of books.

TODO: Add example site.

## Features
* Perfect for a collection of books, whether it's an archive
  of free/public domain books or web serials
* Responsive and mobile-friendly
* Use arrow keys to flip through chapters
* (WIP) Color scheme toggle for dark/light mode

## Getting Started
1. Go into your existing hugo site OR generate a new one
   using
   
   ```bash
   hugo new site <WEBSITE>
   cd <WEBSITE>
   ```

2. Initialize git in your hugo site directory if you haven't
   already made it a git repository
3. Install the theme using git submodules

   ```bash
   git submodule add https://github.com/JessebotX/web-library-hugo-theme themes/web-library-hugo-theme
   ```

4. Open your site's `config.toml` and append the following
   line to the file:

   ```toml
   # config.toml
   theme = 'web-library-hugo-theme'
   ```

5. Hugo theme is now successfully installed. Build your site
   using hugo:

   ```sh
   hugo
   ```
