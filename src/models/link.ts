export type Link = {
    label: string;
    href: string;
    rel?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
};

export type Legal = {
    copyright: string;
    rights: string;
    links: Link[];
}

export type Social = {
    label: string;
    icon: string;
    href: string;
    rel?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
};

export type Company = {
    name: string;
    number: string;
    vat: string;
    location: string[];
    email: string;
}

export type Site = {
    title: string;
    description: string;
    company: Company;
    legal: Legal;
    socials: Social[];
    disclaimer: string;
}