import { ComponentProps, ReactHTML } from 'react';
interface Variants {
    [k: string]: {
        [k: string]: string | string[];
    };
}
declare type VariantsToValues<T extends Variants> = {
    [K in keyof T]: keyof T[K];
};
declare type ComponentPropsWithVariants<V extends Variants, E extends keyof ReactHTML> = {
    variants?: Partial<VariantsToValues<V>>;
} & ComponentProps<E>;
interface CVA<V extends Variants> {
    base?: string | string[];
    variants?: V;
    defaultVariants?: Partial<VariantsToValues<V>>;
}
export declare const CVAComponent: <E extends "object" | "big" | "link" | "small" | "sub" | "sup" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "source" | "span" | "strong" | "style" | "summary" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview", V extends Variants>(element: E, cvaObject: CVA<V>, displayName?: string | undefined) => {
    ({ children, className, variants, ...props }: ComponentPropsWithVariants<NonNullable<V>, E>): import("react").DetailedReactHTMLElement<{
        className: string;
    } & Pick<ComponentPropsWithVariants<NonNullable<V>, E>, Exclude<keyof ComponentProps<E>, "variants" | "children" | "className">>, HTMLWebViewElement>;
    displayName: string | undefined;
};
export declare const selector: (selector: string, classes: string) => string;
export declare const hover: (classes: string) => string;
export declare const focus: (classes: string) => string;
export declare const focusWithin: (classes: string) => string;
export declare const focusVisible: (classes: string) => string;
export declare const active: (classes: string) => string;
export declare const first: (classes: string) => string;
export declare const last: (classes: string) => string;
export declare const only: (classes: string) => string;
export declare const odd: (classes: string) => string;
export declare const even: (classes: string) => string;
export declare const disabled: (classes: string) => string;
export declare const enabled: (classes: string) => string;
export declare const required: (classes: string) => string;
export declare const valid: (classes: string) => string;
export declare const invalid: (classes: string) => string;
export declare const autofill: (classes: string) => string;
export declare const before: (classes: string) => string;
export declare const after: (classes: string) => string;
export declare const placeholder: (classes: string) => string;
export declare const dark: (classes: string) => string;
export {};
