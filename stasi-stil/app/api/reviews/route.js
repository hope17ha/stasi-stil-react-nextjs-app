

export async function GET(){

    try {
        const response = await fetch(`https://places.googleapis.com/v1/places/${process.env.PLACE_ID}?fields=reviews&key=${process.env.GOOGLE_API_KEY}`);
    
        const data = response.json();
        
    
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