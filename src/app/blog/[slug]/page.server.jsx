import BlogPost from './page';

export default async function BlogPostPage({ params }) {
    return <BlogPost params={params} />;
}