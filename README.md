# Next.js Markdown Blog

This is a simple static blog site built with Next.js and Markdown.

## Getting Started

### Without Docker

1. Clone this repository:
   ```
   git clone https://github.com/zaintol/blogs.git
   cd nextjs-markdown-blog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### With Docker

1. Clone this repository:
   ```
   git clone https://github.com/zaintol/blogs.git
   cd nextjs-markdown-blog
   ```

2. Build and run the Docker container:
   ```
   docker-compose up --build
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Adding a New Blog Post

1. Create a new Markdown file in the `posts` directory, e.g., `my-new-post.md`.
2. Add front matter at the top of the file:
   ```markdown
   ---
   title: 'My New Post'
   date: '2024-03-22'
   ---

   Your content here...
   ```
3. Write your blog post content in Markdown format.
4. If you're using Docker, the changes will be reflected automatically due to the volume mapping in docker-compose.yml.

## Building and Exporting the Site

### Without Docker

To build and export the site as static HTML:

1. Run the export command:
   ```
   npm run export
   ```

2. The exported site will be in the `out` directory.

3. To view the exported site locally, you can use a simple HTTP server. For example, with Python:
   ```
   cd out
   python -m http.server 8000
   ```

4. Open [http://localhost:8000](http://localhost:8000) in your browser to view the exported site.

### With Docker

To build and export the site using Docker:

1. Build the Docker image:
   ```
   docker-compose build
   ```

2. Run the export command in a new container:
   ```
   docker-compose run --rm web npm run export
   ```

3. The exported site will be in the `out` directory on your host machine.

4. To view the exported site, you can use a simple HTTP server as described in the non-Docker instructions above.

## Deploying

You can deploy the `out` directory to any static hosting service like Netlify, Vercel, or GitHub Pages.