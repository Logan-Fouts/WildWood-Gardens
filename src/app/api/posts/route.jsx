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

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, image, preview, author, content } = body;

    // Basic validation
    if (!title || !image || !preview || !author || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("BonsaiSite");

    // Get the existing posts document
    const postsDoc = await db.collection("blog posts").findOne({});
    const existingPosts = postsDoc?.posts || [];

    // Create new post object
    const newPost = {
      id: existingPosts.length + 1,
      title,
      image,
      preview,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
      author,
      content
    };

    // Update the document with the new post
    const result = await db.collection("blog posts").updateOne(
      {}, // empty filter to match the single document
      {
        $push: { posts: newPost }
      },
      { upsert: true } // create document if it doesn't exist
    );

    if (result.modifiedCount === 0 && result.upsertedCount === 0) {
      return NextResponse.json(
        { error: 'Failed to create post' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });

  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
