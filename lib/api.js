import { useState } from "react";

const API_URL = "https://blirorlegger.no/stand/graphql";

async function fetchAPI(query, { variables } = {}) {
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    });

    const json = await res.json();

    return json.data;
}

export async function getAmbassadorer() {
    const data = await fetchAPI(`
    {
        ambassadorer {
            edges {
                node {
                    id
                    slug
                    title
                    acf {
                        age
                        arbeidsgiver
                        speciality
                        featuredVideo {
                            mediaItemUrl
                        }
                    }
                    videos {
                        questions {
                            question
                            videoUrl
                        }
                    }
                }
            }
        }
    }
    `);

    return data?.ambassadorer.edges;
}

export async function getFrontPageAcf() {
    const data = await fetchAPI(`
    {
        acfOptionsFrontpage {
            frontpageAcf {
                title
                content
                eventTitle
                events {
                    event
                }
            }
        }
    }
    `);

    return data?.acfOptionsFrontpage;
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
