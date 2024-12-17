export default async function BlogPostPage({ params }) {
    return <BlogPost params={{ slug: params.slug }} />;
}