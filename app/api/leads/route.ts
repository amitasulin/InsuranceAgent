import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  age: string
  employmentStatus: string
  hasInsurance: string
  insuranceInterests: string[]
  budgetRange: string
  contactPreference: string
  name?: string
  phone?: string
  email?: string
}

// In a production environment, you would save this to a database
// For now, we'll just log it and return success
// You can integrate with Supabase, PlanetScale, or a CRM like HubSpot here

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Basic validation
    if (!data.age || !data.employmentStatus || !data.hasInsurance) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the lead data (in production, save to database)
    console.log('New lead received:', {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // Here you would typically:
    // 1. Save to database (Supabase, PlanetScale, etc.)
    // 2. Send to CRM (HubSpot, Monday, Zoho, etc.)
    // 3. Send notification email
    // 4. Trigger webhook

    // Example: Save to a file or database
    // await saveLeadToDatabase(data)

    // Example: Send to external API
    // await fetch('https://your-crm-api.com/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead saved successfully',
        leadId: `lead-${Date.now()}` // In production, use actual ID from database
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve leads (with proper authentication)
export async function GET(request: NextRequest) {
  // In production, add authentication here
  // const authHeader = request.headers.get('authorization')
  // if (!isAuthorized(authHeader)) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  // }

  // Return leads from database
  // const leads = await getLeadsFromDatabase()
  
  return NextResponse.json(
    { message: 'Leads endpoint - GET not implemented yet' },
    { status: 501 }
  )
}

