import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

interface ClientData {
  clientId: number;
  industry: string;
  trustScore: number;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  
  try {
    const client: ClientData = await req.json();
    let solution;

    if (client.trustScore > 90) {
      solution = {
        title: "High-Value Upsell Opportunity",
        rationale: `Client trust score is exceptionally high. Industry '${client.industry}' shows strong growth in premium services.`,
        action_steps: ["Assign 'Premium Tier' sales playbook.", "Schedule QBR with senior account manager.", "Propose integration with our new 'Genesis AI' module."],
        confidence: 0.95
      };
    } else if (client.trustScore >= 70) {
      solution = {
        title: "Maintain & Grow",
        rationale: "Client is stable and satisfied. Focus on reinforcing value and identifying organic growth.",
        action_steps: ["Send monthly value summary report.", "Check for any unresolved support tickets.", "Introduce case studies relevant to their industry."],
        confidence: 0.88
      };
    } else {
      solution = {
        title: "Churn Risk Detected - Initiate Retention Protocol",
        rationale: "Trust score has fallen below the 70-point threshold, indicating potential dissatisfaction or competitive threat.",
        action_steps: ["Immediately assign 'Retention Specialist' agent.", "Analyze recent support interactions for negative sentiment.", "Authorize a 10% service credit offer upon successful re-engagement."],
        confidence: 0.91
      };
    }
    
    return new Response(
      JSON.stringify(solution),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }},
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
