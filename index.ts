import {
    Thing,
    WithContext,
    Product
} from "schema-dts";

export type Schema = Exclude<Thing, string>;

export const addContextToSchema = <T extends Schema>(schema: T): WithContext<T> => {
    return {
        '@context': 'https://schema.org',
        ...schema
    };
};

export const schema: Product = {
    "@type": "Product",
    "name": "Lemosho Route",
    "image": [],
    "description": "The Lemosho is one of our favourite routes up Kilimanjaro as it has varied and beautiful scenery. It also has a high summit success rate!",
    "mpn": "909833240",
    "sku": "909833240",
    "brand": {
        "@type": "Organization",
        "name": "Follow Alice",
        "url": "https://followalice.com"
    },
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": 2995,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2023-07-19T11:55:05.803Z",
        "url": "https://followalice.com/adventure-trips/climb-kilimanjaro/lemosho-route"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 5,
        "reviewCount": 42
    }
}

addContextToSchema(schema)