export interface AddLeadType{
    name: string,
    phone: string,
    company: string,
    email: string,
    details: string,
    services: string,
    budget: string,
    callServices: {
        isChecked: boolean,
        service: string,
    }[],
    callBudget: {
        isChecked: boolean,
        budget: string,
    }[],
}
export interface NewLeadType{
    name?: string,
    phone?: string,
    company?: string,
    email?: string,
    details?: string,
    callServices?: {
        isChecked: boolean,
        service: string,
    },
    callBudget?: {
        isChecked: boolean,
        budget: string,
    },
    id?: string
}