export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7768594fee5d4b82560fcd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-76fp1e7k',
                  apiId: 'cb60f5b6-e57a-4bba-ac3e-df01ab742b4d'
                },
                {
                  buildHookId: '5e77685910f0a933753b6d44',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t6x9sbw5',
                  apiId: '88519d03-8cea-4454-8d33-134a66eda5fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dandersonstack/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t6x9sbw5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
