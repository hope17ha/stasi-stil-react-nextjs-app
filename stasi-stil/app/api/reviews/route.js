

export async function GET(){

    const fetchURI = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=name,formatted_address,rating,user_ratings_total,reviews&key=${process.env.GOOGLE_API_KEY}`;
    


    try {
        const response = await fetch(fetchURI);
        console.log(fetchURI);
    
        const data = await response.json();
        
    
        return new Response(JSON.stringify(data.result), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
        });
        
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
    }


}