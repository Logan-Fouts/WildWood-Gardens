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