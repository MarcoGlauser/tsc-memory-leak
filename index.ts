import { Thing, WithContext, Product} from "schema-dts";

export type ThingWithoutString = Exclude<Thing, string>;

export const addContextToSchema = <T extends ThingWithoutString>(schema: T): WithContext<T> => {
    return {
        '@context': 'https://schema.org',
        ...schema
    };
};

export const product: Product = {
    "@type": "Product",
    "name": "Some Product",
}

addContextToSchema(product)