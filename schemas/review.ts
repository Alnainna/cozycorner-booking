import { defineField } from 'sanity';

const review = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hotelRoom',
      title: 'Hotel Room',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Review Text',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'userRating',
      title: 'User Rating',
      type: 'number',
      validation: Rule =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'questionsAndAnswers',
      title: 'Questions and Answers',
      type: 'array',
      of: [{ 
        type: 'object',
        fields: [
          {
            name: 'question',
            title: 'Question',
            type: 'string',
          },
          {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [{type: 'string'}]
          }
        ]
      }],
    }),
  ],
};

export default review;
