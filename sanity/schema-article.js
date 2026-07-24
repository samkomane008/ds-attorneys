// DS Attorneys — Sanity schema for an article.
// Paste this into your Sanity Studio's schema (schemaTypes/article.js) and
// register it. It matches exactly what the website expects to read.

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (the web address)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Publish date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'DS Attorneys',
    },
    {
      name: 'summary',
      title: 'Short summary (shown on the Insights list)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Article body',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  orderings: [
    { title: 'Newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date' },
  },
};
