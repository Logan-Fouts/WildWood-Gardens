import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("BonsaiSite");
        const eventsDoc = await db.collection("events").findOne({});

        if (!eventsDoc) {
            return NextResponse.json({ events: [] });
        }

        return NextResponse.json(eventsDoc);
    } catch (error) {
        console.error('Error fetching events:', error);
        return NextResponse.json(
            { error: 'Failed to fetch events' },
            { status: 500 }
        );
    }
}


export async function PUT(request) {
    try {
        const body = await request.json();

        // Validate the request body
        if (!body.events || !Array.isArray(body.events)) {
            return NextResponse.json(
                { error: 'Invalid request body. Events array is required.' },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("BonsaiSite");

        // Update the document
        const result = await db.collection("events").updateOne(
            {}, // empty filter to match the single document
            { $set: { events: body.events } },
            { upsert: true } // creates a new document if none exists
        );

        if (result.matchedCount === 0 && !result.upsertedId) {
            return NextResponse.json(
                { error: 'Failed to update events' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: 'Events updated successfully',
            modifiedCount: result.modifiedCount,
            upsertedId: result.upsertedId
        });

    } catch (error) {
        console.error('Error updating events:', error);
        return NextResponse.json(
            { error: 'Failed to update events' },
            { status: 500 }
        );
    }
}