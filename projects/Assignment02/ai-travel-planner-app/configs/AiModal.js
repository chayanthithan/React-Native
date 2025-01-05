const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Srilanka for 3 days and 2 nights within a budget of Luxury. Include recommendations for accommodations, activities, and must-visit places that fit the {budget}. with json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip_details\": {\n    \"destination\": \"Sri Lanka\",\n    \"duration\": \"3 days, 2 nights\",\n    \"budget_type\": \"Luxury\"\n  },\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Cultural Immersion & Scenic Beauty\",\n      \"activities\": [\n        {\n          \"time\": \"Morning\",\n          \"description\": \"Private transfer from Bandaranaike International Airport (CMB) to a luxurious boutique hotel in the Cultural Triangle (e.g., Sigiriya or Dambulla). Choose a property with stunning views and personalized service.\",\n            \"accommodation_recommendation\": \"Heritance Kandalama, Ulagalla Resort, or Water Garden Sigiriya\"\n        },\n        {\n          \"time\": \"Afternoon\",\n          \"description\": \"Explore the ancient rock fortress of Sigiriya (Lion Rock) with a private guide. Enjoy the historical significance and breathtaking views. Consider a leisurely climb or a helicopter ride for a unique perspective.\",\n          \"optional_extras\": [\"Private guide\", \"Helicopter ride over Sigiriya (additional cost)\"]\n        },\n           {\n          \"time\": \"Evening\",\n          \"description\": \"Indulge in a fine-dining experience with authentic Sri Lankan cuisine at your hotel, accompanied by traditional music or dance performance, Enjoy a private bonfire or relax at the hotel spa.\",\n          \"food_recommendation\": \"Traditional Sri Lankan curry with hoppers, seafood platter, tasting menus with local ingredients.\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Elephant Encounters & Spiritual Retreat\",\n      \"activities\": [\n        {\n          \"time\": \"Morning\",\n          \"description\": \"Visit a responsible elephant sanctuary (e.g., Elephant Transit Home) for a private and ethical encounter. Observe elephants in their natural habitat with expert guidance and learn about their conservation.\",\n            \"note\": \"Avoid elephant riding or exploitation. Focus on ethical interactions.\"\n        },\n         {\n          \"time\": \"Afternoon\",\n          \"description\": \"Travel to Kandy, Check into a luxury hotel that offer views of the Kandy lake and surrounding hills.\",\n             \"accommodation_recommendation\": \"The Kandy House or Earl's Regency Hotel\"\n        },\n         {\n          \"time\": \"Evening\",\n          \"description\": \"Attend a traditional Kandyan dance performance showcasing local culture and craftsmanship, followed by a private spiritual visit to the Temple of the Tooth Relic. Enjoy a personal blessing from a Buddhist monk.\",\n              \"optional_extras\": [\"Private spiritual guide\"]\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Scenic Tea Plantations & Departure\",\n      \"activities\": [\n        {\n          \"time\": \"Morning\",\n          \"description\": \"Enjoy a scenic helicopter flight over tea plantations to Nuwara Eliya, also known as 'Little England'. Check in to a luxurious colonial-style hotel or a private tea estate bungalow.\",\n          \"accommodation_recommendation\": \"Heritance Tea Factory, Ceylon Tea Trails, or Jetwing Warwick Gardens\",\n          \"optional_extras\":[\"Private helicopter transport\", \"Private tea estate tour and tasting\"]\n        },\n          {\n            \"time\":\"Afternoon\",\n              \"description\": \"Explore the tea plantations with a private tour, learn the tea-making process, and enjoy a high-tea experience with stunning views.\",\n             \"food_recommendation\": \"Traditional English High Tea with locally sourced teas and pastries.\"\n          },\n         {\n          \"time\": \"Evening\",\n            \"description\": \"Enjoy a leisurely dinner at the hotel. Private transfer to Bandaranaike International Airport (CMB) for departure. Consider an evening spa treatment before transfer for relaxation.\",\n            \"optional_extras\": [\"Spa treatment before departure\", \"Private airport transfer\"]\n        }\n      ]\n    }\n  },\n  \"budget_considerations\": {\n        \"type\": \"Luxury\",\n    \"notes\": \"This itinerary focuses on high-end accommodations, private transportation, personalized services, and unique experiences. Be prepared to spend significantly more than a mid-range budget. Costs may vary depending on choice of accommodation, dining experiences and added options.\",\n      \"budget_allocation\":{\n          \"accommodation\": \"Allocate a significant portion for luxury hotels and exclusive stays.\",\n            \"transportation\": \"Prioritize private transfers, including helicopter rides for scenic routes.\",\n            \"experiences\": \"Invest in private guides, exclusive tours, and unique activities.\",\n            \"food\":\"Enjoy gourmet dining experiences and fine-dining options\"\n\n      }\n  },\n  \"must_visit_places\": [\n    \"Sigiriya (Lion Rock)\",\n     \"Dambulla Cave Temple (if time permits)\",\n    \"Temple of the Tooth Relic (Kandy)\",\n    \"Elephant Transit Home or a responsible sanctuary\",\n    \"Tea plantations of Nuwara Eliya\",\n       \"Kandy lake\"\n  ],\n  \"important_notes\": [\n    \"Pre-book accommodations, tours, and transportation to ensure availability.\",\n    \"Customize the itinerary based on your preferences and interests.\",\n    \"Pack light and comfortable clothing suitable for warm and humid weather.\",\n      \"Ensure your travel documents, visas (if necessary) are in place\",\n    \"Consider travel insurance for unexpected events.\",\n    \"Respect local customs and traditions.\"\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  