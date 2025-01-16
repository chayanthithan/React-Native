export const SelectTravalesList = [
    {
        id:1,
        title:'Single',
        desc:'Sample Description',
        icon:'✈️',
        people:''
    },
    {
        id:2,
        title:'Couple',
        desc:'Sample Description',
        icon:'👫',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'Sample Description',
        icon:'👨‍👩‍👧‍👧',
        people:''
    },
    {
        id:4,
        title:'Friends',
        desc:'Sample Description',
        icon:'👯‍♀️',
        people:'No-limited'
    }
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💸',
        people:''
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average',
        icon:'💵',
        people:'2'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Don\'t worry about cost',
        icon:'💰',
        people:''
    },
    
]
// we have to change the prompt
// export const AI_PROMPT = "Plan a trip to {location} for {totaldays} days and {totalnights} nights within a budget of {budget}. Include recommendations for accommodations, activities, and must-visit places that fit the {budget}. with json format";
export const AI_PROMPT = "Create a detailed travel itinerary for a trip to {location} lasting {totaldays} days and {totalnights} nights, staying within a budget of {budget}. Provide recommendations in JSON format, including accommodations, activities, must-visit places, and dining_options that align with the {budget}. Ensure the recommendations include {place} located near {city}. For each recommendation, include a relevant photo URL or image reference. with json format";