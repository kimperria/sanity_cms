# 🏡 Property & Article Management CMS with Sanity

This is a learning project where I explored **[Sanity CMS](https://www.sanity.io/)** by building a content management system for managing properties, property owners, and blog articles.

The aim was to understand how to structure content, apply validations, and leverage references in Sanity for relational data.

---

## ✨ Features

- Manage **properties** with:
  - Name, Slug, Image with alt text, Size in hectares, Description, Location, Price, and linked Owner.
- Manage **property owners** (defined as a separate schema).
- Create and publish **blog articles** with:
  - Title, Slug, Rich text content, Excerpt, Author, and Published Date.

---

## 🗂️ Schema Overview

### 🏠 Property

```ts
name: 'property'
fields:
- name (string, required)
- slug (auto-generated from name, required)
- image (with alt text validation)
- size_in_hectares (number, required)
- description (rich text, required)
- location (string)
- price (number)
- owner (reference to owner document)

name: 'article'
fields:
- title (string, required)
- slug (auto-generated from title, required)
- content (rich text, required)
- excerpt (text)
- date (datetime, auto-set to now)
- author (string)


```

## Getting started

1. Clone this repo.
2. Install dependancies

```bash
npm install
```

3. Run Sanity Studio

```bash
npx sanity dev
```

4. Open [localhost:3333](http://localhost:3333) in your browser to explore the CMS

## 🛠 Tech Stack

- Sanity.io

- TypeScript

- Portable Text (for rich content)

- Sanity Studio

📌 Notes
This project is for learning purposes. Feel free to fork or use the schema structure as a starting point for your own CMS-powered apps.
