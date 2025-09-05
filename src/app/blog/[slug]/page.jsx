// import BlogSingleMain from '@/components/Blogs/BlogSingleMain'
// import RelatedBlog from '@/components/Blogs/RelatedBlog'
// import ContactForm from '@/components/ContactForm'
// import ContactSection from '@/components/ContactSection'
// import React from 'react'

// const blogsingle = ({ params }) => {
//     const slug = params.slug
//     return (
//         <>
//             <BlogSingleMain slug={slug} />
//             <RelatedBlog slug={slug} />
//             <ContactSection />
//             <ContactForm />
//         </>
//     )
// }

// export default blogsingle
import BlogSingleMain from "@/components/Blogs/BlogSingleMain";
import RelatedBlog from "@/components/Blogs/RelatedBlog";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";

export default async function BlogPage({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://backend.trupeakhealth.in/wp-json/custom-api/v1/blog/${slug}`,
    { next: { revalidate: 60 } } // ISR: revalidate every 60s
  );

  if (!res.ok) {
    return <p className="text-center py-12 text-red-500">Blog not found</p>;
  }

  const blog = await res.json();

  return (
    <>
      <BlogSingleMain blog={blog} />
      <RelatedBlog slug={slug} />
      <ContactSection />
      <ContactForm />
    </>
  );
}

