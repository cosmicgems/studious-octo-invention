interface Feature {
    name: string,
    inclusion: boolean,
}

interface Features {
    name: string
}

interface Service {
    name: string,
    type: string,
    features : Feature [],

}

export const features: Features[] = [
    {
        name: 'Bureau Disputes/Challenges',
    },
    {
        name: 'Creditor Interventions',
    },
    {
        name: 'Inquiry Assist',
    },
    {
        name: 'Debt Handler',
    },
    {
        name: 'Report Watch Alerts',
    },
    {
        name: 'TransUnion FICO Score',
    },
]


