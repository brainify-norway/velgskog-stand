const API_URL = 'https://velgstand.prod.agreed.works/graphql';

async function fetchAPI(query, { variables }: any = {}) {
    const headers = { 'Content-Type': 'application/json' };

    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();

    return json.data;
}

export async function getAmbassadorer() {
    const data = await fetchAPI(`
    {
        ambassadors(where: {orderby: {field: DATE, order: ASC}}) {
            edges {
                node {
                    id
                    slug
                    title
                    ambassadorAcf {
                        speciality
                        featuredVideo {
                            mediaItemUrl
                        }
                        questions {
                            text
                            video {
                                mediaItemUrl
                            }
                        }
                    }
                }
            }
        }
    }
    `);

    return data?.ambassadors.edges;
}

export async function getFooterAcf() {
    const data = await fetchAPI(`
    {
        acfOptionsFooter {
            footerAcf {
                description
                menuLinks {
                    menuLink
                    menuName
                }
                partnersLinks {
                    partnerLink
                    partnerName
                    }
                socialMediaLinks {
                    socialMediaLink
                    socialMediaName
                }
            }
        }
    }
    `);

    return data?.acfOptionsFooter;
}
