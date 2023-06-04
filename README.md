# Web Library Hugo Theme

**An example of a site using this theme:** <https://github.com/JessebotX/public-domain-web-library>

A hugo theme for a collection of books.

## Features
* Generate a static website for a collection of books,
  whether it is an archive of free/public domain novels or
  you're looking to publish some web serials
* Mobile-first design: site fits on both desktop, mobile and
  other devices
* Link to RSS Feed for each web serial
* Chapter pagination with keyboard shortcuts
  * Flip through chapters using your arrow keys
* Color scheme toggle button at the top of each page
  * Persistent saving done with localStorage API
* A clean sans-serif Roboto font used across the website

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
