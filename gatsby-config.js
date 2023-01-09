/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Unggul, kreatif dan siap kerja',
        logo: '/images/logo.png',
        siteUrl: 'https://smkbimakutabumi.sch.id/',
        mobLogo: '/images/moblogo.png',
        description:
            'SMK Bima Mandiri Kutabumi Tangerang, Unggul dan Kreatif.',
        currentPlacementYear: 2022,
        navLinks: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About Us',
                link: '/about',
                children: [
                    {
                        name: 'Tentang Kami',
                        link: '/about/tentang-kami'
                    },
                    {
                        name: 'Sambutan Kepsek',
                        link: '/about/sambutan-kepsek'
                    },              
                ]
            },
            {
                name: 'Academics',
                link: '/akademik',
                children: [
                    {
                        name: 'Pendaftaran',
                        link: '/akademik/pendaftaran'
                    },
                    {
                        name: 'Kalender Akademik',
                          link: '/akademik/kalender'
                    },
                ]
            },
            {
                name: 'Programs',
                link: '/programs',
                children: [
                    {
                        name: 'Tata Busana (Garmen)',
                        link: '/programs/tata-busana-garmen'
                    },
                    {
                        name: 'Bisnis Daring dan Pemasaran (Online)',
                        link: '/programs/bisnis-daring-pemasaran'
                    },
                    {
                        name: 'Teknik Komputer Jaringan',
                        link:
                            '/programs/teknik-komputer-jaringan/'
                    }
                ]
            },
            {
                name: 'Facilities',
                link: '/facilities',
                children: [
                    {
                        name: 'Lab Komputer',
                        link: '/facilities/ccf'
                    },
                    {
                        name: 'Lainya',
                        link: '/facilities/other'
                    }
                ]
            },
           
            {
                name: 'Contact',
                link: '/contact'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1080
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-yaml`,
        `gatsby-plugin-less`
    ]
};