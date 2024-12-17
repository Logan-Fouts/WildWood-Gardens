import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
      const client = await clientPromise;
      const db = client.db("BonsaiSite");
      const postsDoc = await db.collection("blog posts").findOne({});
      return NextResponse.json(postsDoc || { posts: [] });
    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
  }