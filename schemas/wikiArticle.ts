export default {
  name: 'wiki_articles',
  type: 'document',
  title: 'Wiki Articles',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Culture', 'Work', 'Career', 'Teams', 'Company'],
        layout: 'dropdown',
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'locale',
              title: 'Language',
              type: 'string',
              options: {
                list: [
                  {title: 'English', value: 'en'},
                  {title: 'Deutsch', value: 'de'},
                ],
              },
            },
            {
              name: 'content',
              title: 'Localized content',
              type: 'array',
              of: [{type: 'block'}, {type: 'image'}],
            },
          ],
        },
      ],
    },
  ],
}
