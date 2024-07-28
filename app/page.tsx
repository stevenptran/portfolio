import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Steven Tran
      </h1>
      <p className="mb-4">
        {`I'm a data scientist who is particularly interested in machine learning models, specifically clustering models. I also enjoy Natural Language Processing 
        (NLP). I am currently working on expanding my skillset to better myself in the frontend. I graduated from Worcester Polytechnic Institute in Massachusetts in December 2023 with my M.S. in Data Science.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
