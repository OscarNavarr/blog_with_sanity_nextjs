export default {
    name: 'publication',
    title: 'Publication',
    type: 'document',
    option: {
        hotspot: true,
    },
    fields: [
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
        },
        {
            name: 'autor',
            type: 'string',
            title: 'Autor',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
    ]
}